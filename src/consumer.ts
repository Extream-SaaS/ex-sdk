import { Event } from './event'
import { Chat } from './itinerary-item'
import { NoticeGetRequest, Notices } from './notices'
import { OnlineUsers } from './online-users'
import { ExtreamOptions } from './utils'

/**
 * Represents all the actions an event visitor can take. For example joining rooms, starting chats, getting notices ect.
 *
 *
 */
export class Consumer {
  private socket: SocketIOClient.Socket;
  private options: ExtreamOptions;
  public room: Chat | null = null
  public dms: Chat[] = []

  /**
   * Create an instance of the admin sdk
   */
  constructor (socket: SocketIOClient.Socket, options: ExtreamOptions) {
    this.socket = socket
    this.options = options
  }

  /**
   * Get a list of online users
   *
   * @param { OnlineUsers } roomId
   */
  async onlineUsers (request: any): Promise<OnlineUsers> {
    const onlineUsers = new OnlineUsers(this.socket)
    await onlineUsers.get(request)
    return onlineUsers
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
   * Start a new direct message chat in a specific room. Can be used for "help" chats.
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

  /**
   * Get a specific event. This class that represents everything that is happening at an event, allowing you get get itineraries, send messages ect.
   * @param id The id of the event to get
   */
  async event (id: string): Promise<Event> {
    const event = new Event(this.socket, id, this.options)
    await event.getItineraryItems()
    return event
  }
}
