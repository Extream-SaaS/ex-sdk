import { Itinerary } from './itinerary'
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
  type: string;
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
  landing_page?: string;
  event?: string;
}

export type GetEventItineraryResponse = SocketResponse<ItineraryPayload[]>

export type GetItineraryResponse = SocketResponse<ItineraryPayload>

export class Event {
  private socket: SocketIOClient.Socket
  public itinerary: Itinerary[] = []
  public id: string

  constructor (socket: SocketIOClient.Socket, id: string) {
    this.socket = socket
    this.id = id
  }

  private async getItineraryInformation (payload: ItineraryPayload[]): Promise<void> {
    const itineraryItems = await Promise.all(payload.map(async (item) => {
      const itinerary = new Itinerary(this.socket)
      await itinerary.createItineraryItem(item)
      return itinerary
    }))
    this.itinerary = itineraryItems
  }

  public getItineraryItems (): Promise<void> {
    let callback: (resp: InitialResponse | GetEventItineraryResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: InitialResponse | GetEventItineraryResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          this.getItineraryInformation(resp.payload)
            .then(() => {
              resolve()
            }).catch((e) => {
              reject(e)
            })
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
}
