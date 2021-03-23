import { Chat, Rtmp, Poll } from './itinerary-item'
import { ItineraryItem, ItineraryPayload } from './event'
import { ConsumerTopic } from './topic'
import { ItineraryItemFactory, ItinerarySubItem } from './itinerary-item/item-factory'
import { ItineraryType } from './itinerary-item/utils'
import SubscriptionManager from './subscription-manager'
import { IDestroyable, IEntity } from './utils'

export interface RtcConfiguration {
  operators: string[];
  mode: string;
}

/**
 * Creates a view of a specific itinerary with all of the itinerary items associated with it.
 * This means you can easily subscribe to chats, videos and polls items that belong to this itinerary.
 */
export class Itinerary implements IEntity, IDestroyable {
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
  public type = ItineraryType.Itinerary
  public items: ItinerarySubItem[] = []
  public subItems: Itinerary[] = []

  constructor (socket: SocketIOClient.Socket, id: string /* options: ExtreamOptions */) {
    this.socket = socket
    this.id = id
    this.subscriptionManager = new SubscriptionManager(this.socket)
    // this.options = options
  }

  get children (): ItinerarySubItem[] {
    return [...this.items, ...this.subItems]
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

  get itineraryItems (): Itinerary[] {
    return this.items.filter(i => i.type === ItineraryType.Itinerary) as Itinerary[]
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

  public get (): void {
    this.setupUpdateListeners()
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
