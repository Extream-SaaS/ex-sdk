/* eslint-disable */
import { Chat } from './chat';
import { GetEventItineraryResponse, GetItineraryResponse } from './events';
import SubscriptionManager from './subscription-manager';
import { ConsumerTopic } from './topic';
import { InitialResponse } from './utils';

export class Consumer {
  private socket: SocketIOClient.Socket;
  private subscriptionManager: SubscriptionManager;
  public room: Chat | null = null
  public dms: Chat[] = []

  /**
   * Create an instance of the admin sdk
   */
  constructor (socket: SocketIOClient.Socket) {
    this.socket = socket
    this.subscriptionManager = new SubscriptionManager(this.socket)
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

  private getItinerary <T>(request: { id?: string, event?: string}): Promise<T> {
    return new Promise((resolve, reject) => {
      const callback = (resp: InitialResponse | T) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
          this.socket.removeListener(ConsumerTopic.ChatStart, callback)
        } else if (!('status' in resp)) {
          resolve(resp)
          this.socket.removeListener(ConsumerTopic.ChatStart, callback)
        }
      }
      this.subscriptionManager.addSubscription(ConsumerTopic.ItineraryGet, callback)
      this.socket.emit(ConsumerTopic.ItineraryGet, request)
    })
  }

  /**
   * Get a single itinerary item
   * @param { string } id the id of the itinerary item to get
   */
  public itinerary (id: string): Promise<GetItineraryResponse> {
    return this.getItinerary<GetItineraryResponse>({ id })
  }

  /**
   * Get all itinerary items for a specific event
   * @param { string } event the id of the event to the itinerary items for
   */
  public itineraryByEvent (event: string): Promise<GetEventItineraryResponse> {
    return this.getItinerary<GetEventItineraryResponse>({ event })
  }
}
