import { Itinerary } from './itinerary'
import { ConsumerTopic } from './topic'
import { ExtreamUser } from './user'
import { InitialResponse, promiseTimeout } from './utils'

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

export interface EventsByOrganizationResponse {
  domain: string;
  action: string;
  command: string;
  payload: EventsPayload[];
  user: ExtreamUser;
  socketId: string;
}

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

export interface GetEventItineraryResponse {
  domain: string;
  action: string;
  command: string;
  payload: ItineraryPayload[];
  user: ExtreamUser;
  socketId: string;
}

export interface GetItineraryResponse {
  domain: string;
  action: string;
  command: string;
  payload: ItineraryPayload;
  user: ExtreamUser;
  socketId: string;
}

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
    return promiseTimeout(new Promise((resolve, reject) => {
      const callback = (resp: InitialResponse | GetEventItineraryResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
          this.socket.removeListener(ConsumerTopic.ItineraryGet, callback)
        } else if (!('status' in resp)) {
          this.getItineraryInformation(resp.payload)
            .then(() => {
              resolve()
            }).catch((e) => {
              reject(e)
            })
          this.socket.removeListener(ConsumerTopic.ItineraryGet, callback)
        }
      }
      this.socket.on(ConsumerTopic.ItineraryGet, callback)
      this.socket.emit(ConsumerTopic.ItineraryGet, {
        event: this.id
      })
    }))
  }
}
