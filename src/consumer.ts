/* eslint-disable */
// import { ExtreamUser } from '../types/user'

import { ConsumerTopic } from '../types/topic'

// export interface Data {
//   message: string;
//   sent: Date;
//   from: ExtreamUser;
//   uuid: string;
// }

// export interface Payload {
//   id: string;
//   data: Data;
// }

// export interface SendChatMessageResponse {
//   domain: string;
//   action: string;
//   command: string;
//   payload: Payload;
//   user: ExtreamUser;
//   socketId: string;
// }

export interface SendChatMessageResponse {
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
      this.socket.on(ConsumerTopic.chatSend, (resp: SendChatMessageResponse) => {
        if (resp.error) {
          reject(new Error(resp.error))
        } else if (!resp.status) {
          // We get 2 messages
          // First response is confirmation there were no errors sending message
          // second response is confirmation that message was sent properly
          // wait for second message before resolving
          resolve()
          this.socket.removeListener(ConsumerTopic.chatSend)
        }
      })
      this.socket.emit(ConsumerTopic.chatSend, message)
    })
  }
}
