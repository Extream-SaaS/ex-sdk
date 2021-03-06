import { AuthorizationTopic, ConsumerTopic, ClientTopic } from '../../topic'
import { ExtreamUser } from '../../user/user'
import { SubscriptionManager } from '../../utils/subscription-manager'
import { IDestroyable, IEntity, InitialResponse, promiseTimeout, SocketResponse, TimeStamp } from '../../utils/utils'
import { ItineraryType } from './utils'

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

export type SendChatMessageResponse = SocketResponse<SendChatMessagePayload>

export interface ReplyMessageData {
  /**
   * The message to send to the chat
   */
  message: string;
  private: boolean;
  parent: string;
  requester?: ExtreamUser;
  moderators?: string[];
}

export interface SendMessageData {
  /**
   * The message to send to the chat
   */
  message: string;
  moderators?: string[];
}

export type MessageData = ReplyMessageData | SendMessageData

export interface SendChatRequest<T> {
  /**
   * The id of the room that to send the chat message to
   */
  id: string;
  instance?: string;
  /**
   * The message data
   */
  data: T;
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
  addedAt: TimeStamp;
  start_date: string;
  type: string;
  updatedBy: string;
  messages: ChatMessages;
  configuration: Configuration;
  updatedAt: TimeStamp;
  end_date: string;
}

export interface ChatConfig {
  moderation: string
  moderators: Array<string>
  private: boolean
  threads: boolean
}

export type GetChatResponse = SocketResponse<GetChatPayload>

export interface BanMessageData {
  /**
   * The uuid of the message to be banned
   */
  uuid: string;
  instance?: string;
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

export interface StartChatResponsePayloadData {
  sent: Date;
  from: ExtreamUser;
  instance: string;
  operators: string[];
}

export interface StartChatResponsePayload {
  id: string;
  data: StartChatResponsePayloadData;
}

export type StartChatResponse = SocketResponse<StartChatResponsePayload>

/**
 * Represents a single chat and handles all subscription and updating logic for that chat
 *
 * After creating an instance either call `join` if you know which room you want to join (and instance if applicable)
 * or call `start` in order to create a chat instance.
 */
export class Chat implements IEntity, IDestroyable {
  private socket: SocketIOClient.Socket;
  private subscriptionManager: SubscriptionManager
  /**
   * Dynamically updated list of messages for this room
   */
  public messages: Message[] = [];
  /**
   * The id of the chat this instance is associated with
   */
  public roomId: string;
  /**
   * The instance id of the chat this instance is associated with
   */
  public instance: string | undefined;

  /**
   * The array of moderator IDs
   */
  public moderators: string[] = [];

  /**
   * All of this chats' specific configuration properties
   */
  public configuration: ChatConfig | null = null

  public type = ItineraryType.Chat

  /**
   * Create an instance of a chat
   */
  constructor (socket: SocketIOClient.Socket, roomId: string, instance?: string) {
    this.socket = socket
    this.roomId = roomId
    this.instance = instance
    this.subscriptionManager = new SubscriptionManager(this.socket)
  }

  /**
   * Sort messages based on date descending
   * @param { Message | ChatMessageResponse } a
   * @param { Message | ChatMessageResponse } b
   */
  private static sortByDate (a: Message | ChatMessageResponse, b: Message | ChatMessageResponse) {
    return new Date(a.sent).getTime() - new Date(b.sent).getTime()
  }

  /**
   * Remove a specific message for all user in the chat room.
   *
   * This function can only be executed by admins
   *
   * @param { BanMessageRequest } message The messah
   */
  public removeMessage (message: BanMessageData): void {
    this.socket.emit(ClientTopic.ChatBan, {
      id: this.roomId,
      data: message
    })
  }

  /**
   * The message data to be sent
   * @param { MessageData } message Message data to be sent
   */
  private emitMessage (message: MessageData): Promise<void> {
    let callback: (resp: SendChatMessageResponse | InitialResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: SendChatMessageResponse | InitialResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          // We get 2 messages
          // First response is confirmation there were no errors sending message
          // second response is confirmation that message was sent properly
          // wait for second message before resolving
          resolve()
        }
      }
      // This one removes itself so does not need to go through subscription manager
      this.socket.on(ConsumerTopic.ChatSend, callback)
      this.socket.emit(ConsumerTopic.ChatSend, {
        id: this.roomId,
        data: {
          ...message,
          instance: this.instance
        }
      })
    })).finally(() => {
      this.socket.removeListener(ConsumerTopic.ChatSend, callback)
    })
  }

  /**
   * Send a message to the chat
   *
   * @param { SendMessageData } message
   */
  public sendMessage (message: SendMessageData): Promise<void> {
    return this.emitMessage(message)
  }

  /**
   * Reply to a specific message in the chat
   *
   * @param { ReplyMessageData } message
   */
  public replyToMessage (message: ReplyMessageData): Promise<void> {
    return this.emitMessage(message)
  }

  private findMessage (id: string): Message {
    const message = this.messages.find(({ uuid }) => id === uuid)
    if (!message) {
      throw new Error(`Could not find message with id ${id} to add child`)
    }
    return message
  }

  private setupChatListeners (): void {
    this.subscriptionManager.addSubscription(ConsumerTopic.ChatReceive, (resp: ChatMessageResponse) => {
      if (resp.id === this.roomId) {
        if (resp.parent) {
          const message = this.findMessage(resp.parent)
          message.children = [
            ...message.children,
            {
              ...resp,
              removed: false
            }
          ]
          this.messages = [...this.messages]
        } else {
          this.messages = [...this.messages, {
            ...resp,
            children: [],
            removed: false
          }]
        }
      }
    })

    this.subscriptionManager.addSubscription(ConsumerTopic.ChatRemove, (resp: ChatMessageResponse) => {
      if (resp.id === this.roomId) {
        if (resp.parent) {
          const message = this.findMessage(resp.parent)
          const childMessage = message.children.find(c => c.uuid === resp.uuid)
          if (!childMessage) {
            throw new Error(`Could not find child message with id ${resp.uuid}`)
          }
          childMessage.removed = true
        } else {
          const message = this.findMessage(resp.uuid)
          message.removed = true
        }
      }
    })
  }

  /**
   * Join a chat room. Once joined all the messages property will be dynamically updated as messages
   * are sent/blocked.
   *
   */
  public get (time: number): Promise<void> {
    let callback: (resp: InitialResponse | GetChatResponse) => void
    let correlationId = `${time}-${ConsumerTopic.ChatGet}-${this.roomId}`
    let isReconnecting = false
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      this.setupChatListeners()
      callback = (resp: InitialResponse | GetChatResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp) && resp.payload.id === this.roomId) {
          const messages = resp.payload.messages || {}
          const childrenMap = {}
          // Process all messages with parents first and push them as children into their parents
          const children: { [key: string]: ChatMessageResponse[] } = Object.keys(messages)
            .filter(id => messages[id].parent)
            .reduce((acc: { [key: string]: ChatMessageResponse[] }, id) => {
              const message = messages[id]
              if (!messages[message.parent]) {
                console.warn(`Could not find parent for message ${id}`)
              } else {
                acc[message.parent] = acc[message.parent]
                  ? [...acc[message.parent], message].sort(Chat.sortByDate)
                  : [message]
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
              message.removed = message.removed || false
              acc.push(message)
              return acc
            }, [])
            .sort(Chat.sortByDate)

          this.messages = messageArray
          // Get the moderators and add
          this.configuration = resp.payload.configuration
          if (isReconnecting) {
            this.socket.removeListener(correlationId, callback)
          }
          resolve()
        }
      }
      this.socket.on(correlationId, callback)
      this.subscriptionManager.addSubscription(AuthorizationTopic.Reconnect, () => {
        isReconnecting = true
        correlationId = `${Date.now()}-${ConsumerTopic.ChatGet}-${this.roomId}`
        this.socket.emit(ConsumerTopic.ChatGet, {
          id: this.roomId,
          correlationId,
          data: {
            instance: this.instance
          }
        })
      })
      this.socket.emit(ConsumerTopic.ChatGet, {
        id: this.roomId,
        correlationId,
        data: {
          instance: this.instance
        }
      })
    })).finally(() => {
      this.socket.removeListener(correlationId, callback)
    })
  }

  public join (time: number = Date.now()): Promise<void> {
    return this.get(time)
  }

  /**
   * Start a new dm in the chat room. Once started all the messages property will be dynamically updated as messages
   * are sent/blocked.
   */
  public start (): Promise<void> {
    this.setupChatListeners()
    let callback: (resp: StartChatResponse | InitialResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: StartChatResponse | InitialResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp) && resp.payload.id) {
          if (this.roomId === resp.payload.id) {
            this.instance = resp.payload.data.instance
            resolve()
          }
        }
      }
      this.socket.on(ConsumerTopic.ChatStart, callback)
      this.socket.emit(ConsumerTopic.ChatStart, {
        id: this.roomId
      })
    })).finally(() => {
      this.socket.removeListener(ConsumerTopic.ChatStart, callback)
    })
  }

  /**
   * Cleans up all listeners for this class. Call this when you no longer need access to this events information to ensure memory leaks are not caused.
   *
   * @returns { void }
   */
  public destroy (): void {
    this.subscriptionManager.removeAllSubscriptions()
  }
}
