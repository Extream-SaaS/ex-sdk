import { Itinerary } from './itinerary'
import { ItineraryType } from './itinerary-item/utils'
import { Notices } from './notices'
import { ConsumerTopic } from './topic'
import { InitialResponse, promiseTimeout, SocketResponse } from './utils'

export interface EventsPayload {
  id: number;
  public_id: string;
  name: string;
  website: string;
  start_date: Date;
  end_date: Date;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  parent?: string;
  landing_page?: string;
  organisation: string;
}

export type EventsByOrganizationResponse = SocketResponse<EventsPayload[]>

export interface ItineraryItem {
  type: ItineraryType;
  id: string;
}

export interface ItineraryPayload {
  id: string;
  public_id: string;
  name: string;
  website: string;
  start_date: Date;
  end_date: Date;
  items: string | ItineraryItem[];
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  parent: string | null;
  landing_page?: string;
  event?: string;
}

export type GetEventItineraryResponse = SocketResponse<ItineraryPayload[]>

export type GetItineraryResponse = SocketResponse<ItineraryPayload>

export class Event {
  private socket: SocketIOClient.Socket
  // private options: ExtreamOptions

  public itinerary: Itinerary[] = []
  public id: string
  public notices: Notices

  constructor (socket: SocketIOClient.Socket, id: string /* options: ExtreamOptions */) {
    this.socket = socket
    this.id = id
    this.notices = new Notices(this.socket)
    // this.options = options
  }

  get itineraryTree () : any {
    return Event.getChildren(this.itinerary, null)
  }

  private static getChildren (items: Itinerary[], parentId: string | null): Itinerary[] {
    const childItems = items.filter(i => i.payload?.parent === parentId)
    childItems.forEach(item => {
      item.subItems = Event.getChildren(items, item.id)
    })
    return childItems
  }

  /**
   * Get all of the unread notices for this event
   */
  public getNotices (): Promise<void> {
    return this.notices.get({
      event: this.id
    })
  }

  /**
   * Creates an instance of the itinerary class based off of the payload information passed in.
   * @param { ItineraryPayload[] } payload All the itinerary information for a specific event
   */
  private async getItineraryInformation (payload: ItineraryPayload[]): Promise<void> {
    const itineraryItems = await Promise.all(payload.map(async (item) => {
      const itinerary = new Itinerary(this.socket, item.public_id)
      await itinerary.createItineraryItem(item)
      return itinerary
    }))
    this.itinerary = itineraryItems
  }

  /**
   * Get all of the itinerary items for a specific event. After awaiting this method all the itinerary items are in the itineraries property of this class
   * @param { Promise<void> } payload All the itinerary information for a specific event
   */
  public getItineraryItems (): Promise<void> {
    let callback: (resp: InitialResponse | GetEventItineraryResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: InitialResponse | GetEventItineraryResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          resolve(this.getItineraryInformation(resp.payload))
        }
      }
      this.socket.on(ConsumerTopic.ItineraryGet, callback)
      this.socket.emit(ConsumerTopic.ItineraryGet, {
        event: this.id
      })
    })).finally(() => {
      this.socket.removeListener(ConsumerTopic.ItineraryGet, callback)
    })
  }

  /**
   * Cleans up all listeners for this class. Call this when you no longer need access to this events information to ensure memory leaks are not caused.
   *
   * @returns { void }
   */
  public destroy (): void {
    if (this.notices.destroy) {
      this.notices.destroy()
    }
  }
}
