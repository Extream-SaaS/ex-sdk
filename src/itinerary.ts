import { GetItineraryResponse, ItineraryPayload } from './events'
import SubscriptionManager from './subscription-manager'
import { ConsumerTopic } from './topic'
import { ExtreamUser } from './user'
import { InitialResponse, promiseTimeout, TimeStamp } from './utils'

export interface RtcConfiguration {
  operators: string[];
  mode: string;
}

export interface ReadWebRtcResponsePayload {
  id: string;
  addedBy: string;
  itinerary: string;
  title: string;
  addedAt: TimeStamp;
  start_date: TimeStamp;
  configuration: RtcConfiguration;
  type: string;
  end_date: TimeStamp;
}

export interface ReadWebRtcResponse {
  error?: string;
  domain: string;
  action: string;
  command: string;
  payload: ReadWebRtcResponsePayload;
  user: ExtreamUser;
  socketId: string;
}

export class Itinerary {
  private socket: SocketIOClient.Socket
  private subscriptionManager: SubscriptionManager
  public payload: ItineraryPayload | null = null
  public itineraryItems: ReadWebRtcResponsePayload[] = []

  constructor (socket: SocketIOClient.Socket) {
    this.socket = socket
    this.subscriptionManager = new SubscriptionManager(this.socket)
  }

  private readWebRtc (id: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const callback = (itemData: ReadWebRtcResponse) => {
        if (itemData.error) {
          reject(new Error(itemData.error))
          this.socket.removeEventListener(ConsumerTopic.WebrtcRead, callback)
        } else if (itemData.payload && itemData.payload.id === id) {
          this.itineraryItems.push(itemData.payload)
          resolve()
          this.socket.removeEventListener(ConsumerTopic.WebrtcRead, callback)
        }
      }
      this.socket.on(ConsumerTopic.WebrtcRead, callback)
      this.socket.emit(ConsumerTopic.WebrtcRead, {
        id
      })
    })
  }

  private async getWebRtcUrls (itineraryItems: string[]): Promise<void> {
    await Promise.all(itineraryItems.map(this.readWebRtc.bind(this)))
  }

  public getItinerary (id: string): Promise<void> {
    return promiseTimeout(new Promise((resolve, reject) => {
      const callback = (resp: InitialResponse | GetItineraryResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
          // TODO fix this. Wrong removal. Leaving it to see if the tests pick it up
          this.socket.removeListener(ConsumerTopic.ChatStart, callback)
        } else if (!('status' in resp)) {
          const items: string[] = JSON.parse(resp.payload.items as string)
          this.payload = {
            ...resp.payload,
            items
          }
          this.getWebRtcUrls(items)
            .then(() => {
              resolve()
            }).catch((e) => {
              reject(e)
            })
          this.socket.removeListener(ConsumerTopic.ChatStart, callback)
        }
      }
      this.socket.on(ConsumerTopic.ItineraryGet, callback)
      this.socket.emit(ConsumerTopic.ItineraryGet, {
        id
      })
    }))
  }

  destroy (): void {
    this.subscriptionManager.removeAllSubscriptions()
  }
}
