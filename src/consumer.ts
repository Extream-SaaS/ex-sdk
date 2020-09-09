/* eslint-disable */
// TODO timeout all promises

import { ConsumerTopic } from '../types/topic'
import { ExtreamUser } from '../types/user';

export interface Data {
  message: string;
  sent: Date;
  from: ExtreamUser;
  uuid: string;
}

export interface SendChatMessagePayload {
  id: string;
  data: Data;
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

export interface ChatMessage {
  from: ExtreamUser;
  uuid: string;
  message: string;
  sent: Date;
}

export interface ChatMessages {
  [key: string]: ChatMessage
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

export class Consumer {
  private socket: SocketIOClient.Socket;
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
        this.socket.on('consumer_chat_get', (resp: InitialResponse | GetChatResponse ) => {
          if ('error' in resp) {
            reject(resp.error)
          } else if (!('error' in resp) && resp.payload.id) {
            resolve(resp.payload.messages)
          }
        })
        this.socket.emit(ConsumerTopic.ChatGet, {
          id: roomId,
        })

        // TODO recieving messages
      //   this.socket.on('consumer_chat_receive', (resp) => {
      //     if (resp.id === roomId) {
      //       if (resp.parent) {
      //         if (!this.messages[resp.parent].children) {
      //           this.messages[resp.parent].children = {}
      //         }
      //         const children = this.messages[resp.parent].children
      //         children[resp.uuid] = resp
      //         Vue.set(this.messages, resp.parent, {
      //           ...this.messages[resp.parent],
      //           children,
      //           lastMessage: new Date(),
      //         })
      //       } else {
      //         Vue.set(this.messages, resp.uuid, resp)
      //         const container = this.$refs.chatWindow
      //         this.$nextTick(() => {
      //           if (container) {
      //             container.scrollTop = container.scrollHeight
      //           }
      //         })
      //       }
      //     }
      //   })

      // TODO removing messages
      //   this.socket.on('consumer_chat_remove', (resp) => {
      //     if (resp.id === roomId) {
      //       if (resp.parent) {
      //         Vue.set(
      //           this.messages[resp.parent].children[resp.uuid],
      //           'removed',
      //           true
      //         )
      //         Vue.set(
      //           this.messages[resp.parent].children[resp.uuid],
      //           'message',
      //           'Message removed'
      //         )
      //       } else {
      //         Vue.set(this.messages[resp.uuid], 'removed', true)
      //         Vue.set(this.messages[resp.uuid], 'message', 'Message removed')
      //       }
      //     }
      //   })
    })
  }
}
