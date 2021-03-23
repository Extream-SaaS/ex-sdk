import { Chat, Rtmp, Poll, WebRtc } from './itinerary-item'
import { ItineraryItem, ItineraryPayload } from './event'
import { ConsumerTopic } from './topic'
import { ItineraryItemFactory } from './itinerary-item/item-factory'
import { ItineraryType } from './itinerary-item/utils'
import SubscriptionManager from './subscription-manager'

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
  private subscriptionManager: SubscriptionManager

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
    this.subscriptionManager = new SubscriptionManager(this.socket)
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
    this.setupUpdateListeners()
    const items: ItineraryItem[] = payload.items ? JSON.parse(payload.items as string) : []
    this.payload = {
      ...payload,
      items
    }
    this.items = items.map((i: ItineraryItem) => ItineraryItemFactory.getItem(this.socket, i))
  }

  private async setupUpdateListeners () {
    this.subscriptionManager.addSubscription(ConsumerTopic.ItineraryUpdate, (payload: any) => {
      if (this.id === payload.public_id) {
        const items: ItineraryItem[] = payload.items ? JSON.parse(payload.items as string) : []
        this.payload = {
          ...payload,
          items
        }
        this.items = items.map((i: ItineraryItem) => ItineraryItemFactory.getItem(this.socket, i))
      }
    })
  }

  /**
   * Cleans up all listeners for this class. Call this when you no longer need access to this events information to ensure memory leaks are not caused.
   *
   * @returns { void }
   */
  destroy (): void {
    this.subscriptionManager.removeAllSubscriptions()
  }
}
