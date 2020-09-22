/* eslint-disable */
import { Chat } from './chat';
import { GetEventItineraryResponse } from './events';
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

  async startChat (roomId: string) {
    this.room = new Chat(this.socket, roomId)
    await this.room.start()
    return this.room
  }

  public itineraryByEvent (id: string): Promise<GetEventItineraryResponse> {
    return new Promise((resolve, reject) => {
      const callback = (resp: InitialResponse | GetEventItineraryResponse) => {
        if ('error' in resp) {
          reject(resp.error)
        } else if (!('status' in resp)) {
          resolve(resp)
        }
        this.socket.removeListener(ConsumerTopic.ChatStart, callback)
      }
      this.subscriptionManager.addSubscription(ConsumerTopic.ItineraryGet, callback)
      this.socket.emit(ConsumerTopic.ItineraryGet, {
        event: id
      })
    })
  }
}
