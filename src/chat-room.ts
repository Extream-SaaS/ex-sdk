/* eslint-disable */
// TODO timeout all promises

import { ConsumerTopic, ClientTopic } from '../types/topic'
import { ExtreamUser } from '../types/user';

/**
 * Chat message response for a message being streamed in
 */
export interface ChatMessageResponse {
  id?: string
  from: ExtreamUser;
  uuid: string;
  parent: string;
  message: string;
  sent: Date;
  removed: boolean;
}

export interface SendChatMessagePayload {
  id: string;
  data: ChatMessageResponse;
}

export interface SendChatMessageResponse {
  domain: string;
  action: string;
  command: string;
  payload: SendChatMessagePayload;
  user: ExtreamUser;
  socketId: string;
}

export interface InitialResponse {
  /**
   * Error message. Present if sending failed
   */
  error: string;
  /**
   * The id of the message
   */
  messageId: string;
  status: number;
  topic: string;
}

export interface MessageData {
  /**
   * The message to send to the chat
   */
  message: string;
  private?: boolean;
  parent?: string;
}

export interface SendChatRequest {
  /**
   * The id of the room that to send the chat message to
   */
  id: string;
  instance?: string;
  /**
   * The message data
   */
  data: MessageData;
}

export interface UpdatedAt {
  _seconds: number;
  _nanoseconds: number;
}

export interface AddedAt {
  _seconds: number;
  _nanoseconds: number;
}

export interface Configuration {
  moderators: string[];
  moderation: string;
  private: boolean;
  threads: boolean;
}

export interface ChatMessages {
  [key: string]: ChatMessageResponse
}

export interface GetChatPayload {
  id: string;
  itinerary: string;
  addedBy: string;
  title: string;
  addedAt: AddedAt;
  start_date: string;
  type: string;
  updatedBy: string;
  messages: ChatMessages;
  configuration: Configuration;
  updatedAt: UpdatedAt;
  end_date: string;
}

export interface GetChatResponse {
  domain: string;
  action: string;
  command: string;
  payload: GetChatPayload;
  user: ExtreamUser;
  socketId: string;
}

export interface BanMessageData {
  /**
   * The uuid of the message to be banned
   */
  uuid: string;
  parent?: string;
}

export interface BanMessageRequest {
  /**
   * The id of the room that the message is contained within
   */
  id: string;
  data: BanMessageData;
}

export interface Message extends ChatMessageResponse {
  children: ChatMessageResponse[]
}

export interface Messages {
  [key: string]: Message
}

export class ChatRoom {
  private socket: SocketIOClient.Socket;
  public roomId: string;
  /**
   * Dynamically updated list of messages for this room
   */
  public messages: Message[] = [];
  /**
   * Create an instance of the admin sdk
   */
  constructor (socket: SocketIOClient.Socket, roomId: string) {
    this.socket = socket
    this.roomId = roomId
  }

  /**
   * Sort messages based on date descending
   * @param a
   * @param b
   */
  private static sortByDate (a: Message | ChatMessageResponse, b: Message | ChatMessageResponse) {
    return -(new Date(a.sent).getTime() - new Date(b.sent).getTime())
  }

  /**
   * Remove a specific message for all user in the chat room.
   *
   * This function can only be executed by admins
   *
   * @param { BanMessageRequest } message The messah
   */
  removeMessage (message: BanMessageRequest): void {
    this.socket.emit(ClientTopic.ChatBan, message)
  }

  /**
   * Send a message to the chat currently connected
   *
   * @param { SendChatRequest } message
   */
  sendMessage (message: SendChatRequest): Promise<void> {
    return new Promise((resolve, reject) => {
      this.socket.on(ConsumerTopic.ChatSend, (resp: SendChatMessageResponse| InitialResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          // We get 2 messages
          // First response is confirmation there were no errors sending message
          // second response is confirmation that message was sent properly
          // wait for second message before resolving
          resolve()
          this.socket.removeListener(ConsumerTopic.ChatSend)
        }
      })
      this.socket.emit(ConsumerTopic.ChatSend, message)
    })
  }

  /**
   * Join a chat room. Once joined all the messages property will be dynamically updated as messages
   * are sent/blocked.
   *
   */
  joinChat (): Promise<void> {
    return new Promise((resolve, reject) => {
        this.socket.on(ConsumerTopic.ChatGet, (resp: InitialResponse | GetChatResponse ) => {
          if ('error' in resp) {
            reject(resp.error)
          } else if (!('status' in resp) && resp.payload.id) {
            const messages = resp.payload.messages
            const childrenMap = {}
            // Process all messages with parents first and push them as children into their parents
            const children: { [key: string]: ChatMessageResponse[] } = Object.keys(messages)
            .filter(id => messages[id].parent)
            .reduce((acc: { [key: string]: ChatMessageResponse[] }, id) => {
              const message = messages[id]
              if (!messages[message.parent]) {
                console.warn(`Could not find parent for message ${id}`)
                // throw new Error(`Could not find parent for message ${id}`)
                delete messages[id]
              } else {
                acc[message.parent] = acc[message.parent]
                  ? [...acc[message.parent] , message].sort(ChatRoom.sortByDate)
                  : [message]
                delete messages[id]
              }
              return acc
            }, childrenMap)

            // Process all messages without parents
            const messageArray = Object
              .keys(messages)
              .filter(id => !messages[id].parent)
              .reduce((acc: Message[], id: string) => {
                const message = messages[id] as Message
                message.children = children[message.uuid] ? children[message.uuid] : []
                acc.push(message)
                return acc
              }, [])
              .sort(ChatRoom.sortByDate)

            this.messages = messageArray
            resolve()
          }
        })

        this.socket.on(ConsumerTopic.ChatReceive, (resp: ChatMessageResponse) => {
          if (resp.id === this.roomId) {
            if (resp.parent) {
              const message = this.messages.find(({ uuid }) => resp.parent === uuid)
              if (!message) {
                throw new Error(`Could not find message with id ${resp.uuid} to add child`)
              }
              message.children = [
                ...message.children,
                resp
              ]
            } else {
              const pushMessage = {
                ...resp,
                children: []
               } as Message
              this.messages = [pushMessage, ...this.messages]
            }
          }
        })

        this.socket.on(ConsumerTopic.ChatRemove, (resp: ChatMessageResponse) => {
          if (resp.id === this.roomId) {
            if (resp.parent) {
              const message = this.messages.find(({ uuid }) => uuid === resp.parent)
              if (!message) {
                throw new Error(`Could not find message with id ${resp.parent} to remove child`)
              }
              const childMessage = message.children.find(c => c.uuid === resp.uuid)
              if (!childMessage) {
                throw new Error(`Could not find child message with id ${resp.uuid}`)
              }
              childMessage.removed = true
            } else {
              const message = this.messages.find(({ uuid }) => resp.uuid === uuid)
              if (!message) {
                throw new Error(`Could not find message with id ${resp.uuid}`)
              }
              message.removed = true
            }
          }
        })

        this.socket.emit(ConsumerTopic.ChatGet, {
          id: this.roomId,
        })
    })
  }

  /**
   * Call once the a user leaves the chat to remove all event listener.
   *
   * If this is not called each instance of this class with leak event listeners.
   */
  destroy () {
    // TODO remove the specific listeners here
    this.socket.removeEventListener(ConsumerTopic.ChatSend)
    this.socket.removeEventListener(ConsumerTopic.ChatGet)
    this.socket.removeEventListener(ConsumerTopic.ChatRemove)
    this.socket.removeEventListener(ConsumerTopic.ChatReceive)
  }
}
