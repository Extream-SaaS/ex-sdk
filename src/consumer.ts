/* eslint-disable */

import { ConsumerTopic, ClientTopic } from '../types/topic'
import { ExtreamUser } from '../types/user';
import { Chat } from './chat';

export class Consumer {
  private socket: SocketIOClient.Socket;
  /**
   * Create an instance of the admin sdk
   */
  constructor (socket: SocketIOClient.Socket) {
    this.socket = socket
  }

  /**
   * Create a chat room.
   *
   * @param { ChatRoom } roomId
   */
  createChatRoomInstance (roomId: string): Chat {
    return new Chat(this.socket, roomId)
  }

  /**
   * Create an instance of a chat room and join that chat room.
   *
   * @param { Promise<ChatRoom>  } roomId
   */
  async joinChatRoom (roomId: string): Promise<Chat> {
    const chatRoom = new Chat(this.socket, roomId)
    await chatRoom.joinChat()
    return chatRoom
  }
}
