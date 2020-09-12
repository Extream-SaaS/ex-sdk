/* eslint-disable */

import { ConsumerTopic, ClientTopic } from '../types/topic'
import { ExtreamUser } from '../types/user';
import { ChatRoom } from './chat-room';

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
  createChatRoom (roomId: string): ChatRoom {
    return new ChatRoom(this.socket, roomId)
  }

  /**
   * Create an instance of a chat room and join that chat room.
   *
   * @param { Promise<ChatRoom>  } roomId
   */
  async joinChatRoom (roomId: string): Promise<ChatRoom> {
    const chatRoom = new ChatRoom(this.socket, roomId)
    await chatRoom.joinChat()
    return chatRoom
  }
}
