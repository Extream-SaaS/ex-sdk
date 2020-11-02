import { Event } from './event'
import { Chat } from './itinerary-item'
import { NoticeGetRequest, Notices } from './notices'

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
  async join (roomId: string, instanceId?: string): Promise<Chat> {
    this.room = new Chat(this.socket, roomId, instanceId)
    await this.room.join()
    return this.room
  }

  /**
   * Start a new DM in a specific room
   *
   * @param { string } roomId the room id associated with the new dm
   */
  async startChat (roomId: string): Promise<Chat> {
    this.room = new Chat(this.socket, roomId)
    await this.room.start()
    return this.room
  }

  /**
   *
   * @param request The event, itineraray, page or read filters to get notices
   */
  async notices (request: NoticeGetRequest): Promise<Notices> {
    const notices = new Notices(this.socket)
    await notices.get(request)
    return notices
  }

  async event (id: string): Promise<Event> {
    const event = new Event(this.socket, id)
    await event.getItineraryItems()
    return event
  }
}
