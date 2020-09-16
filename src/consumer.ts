/* eslint-disable */

import { ConsumerTopic, ClientTopic } from '../types/topic'
import { ExtreamUser } from '../types/user';
import { Chat } from './chat';

export class Consumer {
  private socket: SocketIOClient.Socket;
  public room: Chat | null = null
  public dms: Chat[] = []

  /**
   * Create an instance of the admin sdk
   */
  constructor (socket: SocketIOClient.Socket) {
    this.socket = socket
  }

  /**
   * Create a chat room.
   *
   * @param { Chat } roomId
   */
  join (roomId: string, instanceId?: string): Chat {
    this.room = new Chat(this.socket, roomId, instanceId)
    return this.room
  }

  startChat (roomId: string) {
    this.room = new Chat(this.socket, roomId)
    this.room.start()
    return this.room
  }

  /**
   * Create an instance of a chat room and join that chat room.
   *
   * @param { Promise<Chat>  } roomId
   */
  async create (roomId: string): Promise<Chat> {
    const chatRoom = new Chat(this.socket, roomId)
    await chatRoom.join()
    return chatRoom
  }
}
