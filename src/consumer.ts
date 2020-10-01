import { Chat } from './itinerary-item'

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
    this.room.join()
    return this.room
  }

  /**
   * Start a new DM in a specific room
   *
   * @param { string } roomId the room id associated with the new dm
   */
  async startChat (roomId: string) {
    this.room = new Chat(this.socket, roomId)
    await this.room.start()
    return this.room
  }
}
