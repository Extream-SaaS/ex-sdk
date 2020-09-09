// import { ExtreamUser } from '../types/user'

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
      this.socket.on('consumer_chat_send', (resp: SendChatMessageResponse) => {
        if (resp.error) {
          reject(new Error(resp.error))
        } else if (!resp.status) {
          resolve()
          this.socket.removeListener('consumer_chat_send')
        }
      })
      this.socket.emit('consumer_chat_send', message)
    })
  }
}
