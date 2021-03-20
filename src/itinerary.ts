import { Chat, Rtmp, Poll, WebRtc } from './itinerary-item'
import { GetItineraryResponse, ItineraryItem, ItineraryPayload } from './event'
import { ConsumerTopic } from './topic'
import { InitialResponse, promiseTimeout } from './utils'
import { ItineraryItemFactory } from './itinerary-item/item-factory'
import { ItineraryType } from './itinerary-item/utils'

export interface RtcConfiguration {
  operators: string[];
  mode: string;
}

/**
 * Creates a view of a specific itinerary with all of the itinerary items associated with it.
 * This means you can easily subscribe to chats, videos and polls items that belong to this itinerary.
 */
export class Itinerary {
  private socket: SocketIOClient.Socket

  /**
   * The id of the current itinerary item
   */
  public id: string | null = null
  /**
   * All the information relating to the itinerary. This is populated after calling `getItinerary`.
   */
  public payload: ItineraryPayload | null = null

  public items: (Chat | Poll | Rtmp | WebRtc)[] = []

  constructor (socket: SocketIOClient.Socket, id: string /* options: ExtreamOptions */) {
    this.socket = socket
    this.id = id
    // this.options = options
  }

  get rtmpItems (): Rtmp[] {
    return this.items.filter(i => i.type === ItineraryType.Rtmp) as Rtmp[]
  }

  get chatItems (): Chat[] {
    return this.items.filter(i => i.type === ItineraryType.Chat) as Chat[]
  }

  get pollItems (): Poll[] {
    return this.items.filter(i => i.type === ItineraryType.Poll) as Poll[]
  }

  /**
   * Create an instances of all the itinerary items from the payload
   * @param {ItineraryPayload} payload From getting the information for all itineraries
   */
  public async createItineraryItem (payload: ItineraryPayload): Promise<void> {
    const items: ItineraryItem[] = payload.items ? JSON.parse(payload.items as string) : []
    this.payload = {
      ...payload,
      items
    }
    this.items = items.map((i: ItineraryItem) => ItineraryItemFactory.getItem(this.socket, i))
  }

  /**
   * Get all the information for a specific itinerary.
   * @param {string} id Get all the information for a specific itinerary. This then creates all the itinerary items.
   */
  public getItinerary (): Promise<void> {
    let callback: (resp: InitialResponse | GetItineraryResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: InitialResponse | GetItineraryResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          this.createItineraryItem(resp.payload)
          resolve()
        }
      }
      this.socket.on(ConsumerTopic.ItineraryGet, callback)
      this.socket.emit(ConsumerTopic.ItineraryGet, {
        id: this.id
      })
    })).finally(() => {
      this.socket.removeListener(ConsumerTopic.ItineraryGet, callback)
    })
  }
}
