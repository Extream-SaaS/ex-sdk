/* eslint-disable */
// TODO timeout all promises

import { ConsumerTopic } from '../types/topic'
import { ExtreamUser } from '../types/user';

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

export interface Message {
  /**
   * The message to send to the chat
   */
  message: string;
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
  data: Message;
}

export interface JoinChatRequest {
  id: string;
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

export interface Message extends ChatMessageResponse {
  children?: { [key: string]: ChatMessageResponse }
}

export interface Messages {
  [key: string]: Message
}

export class Consumer {
  private socket: SocketIOClient.Socket;
  public messages: Message[] = [];
  /**
   * Create an instance of the admin sdk
   */
  constructor (socket: SocketIOClient.Socket) {
    this.socket = socket
  }

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

  joinChat (roomId: string): Promise<ChatMessages> {
    return new Promise((resolve, reject) => {
        this.socket.on(ConsumerTopic.ChatGet, (resp: InitialResponse | GetChatResponse ) => {
          if ('error' in resp) {
            reject(resp.error)
          } else if (!('status' in resp) && resp.payload.id) {
            let messages: Messages = resp.payload.messages
            // Process all messages with parents first and push them as children into their parents
            Object.keys(messages).filter(id => messages[id].parent).forEach((id) => {
              const message = messages[id]
              if (!messages[message.parent]) {
                console.warn(`Could not find parent for message ${id}`)
                // throw new Error(`Could not find parent for message ${id}`)
                delete messages[id]
              } else {
                messages[message.parent].children = {
                  ...(messages[message.parent].children || {}),
                  [id]: message
                }
                delete messages[id]
              }
            })

            // Process all messages without parents
            const messageArray = Object
              .keys(messages)
              .filter(id => !messages[id].parent)
              .reduce((acc: Message[], id: string) => {
                const message = messages[id]
                if (message.removed) {
                  message.message = 'Message removed'
                }
                acc.push(message)
                return acc
              }, [])
              .sort((a: Message, b: Message) => {
                return -(new Date(a.sent).getTime() - new Date(b.sent).getTime())
              })

            this.messages = messageArray
            resolve(resp.payload.messages)
          }
        })
        this.socket.emit(ConsumerTopic.ChatGet, {
          id: roomId,
        })

        this.socket.on(ConsumerTopic.ChatReceive, (resp: ChatMessageResponse) => {
          if (resp.id === roomId) {
            if (resp.parent) {
              throw new Error('SDK does not support adding parents yet!')
            } else {
              console.log()
              this.messages = [resp, ...this.messages]
            }
          }
        })

        this.socket.on(ConsumerTopic.ChatRemove, (resp: ChatMessageResponse) => {
          if (resp.id === roomId) {
            if (resp.parent) {
              throw new Error('SDK does not support removing messages with parents yet!')
            } else {
              const message = this.messages.find(({ uuid }) => resp.uuid === uuid)
              if (!message) {
                throw new Error(`Could not find message with id ${resp.id}`)
              }
              message.message = 'Message removed'
            }
          }
        })
    })
  }
}
