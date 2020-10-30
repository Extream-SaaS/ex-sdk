import { ItineraryPayload } from '../event'
import { AdminTopic, ConsumerTopic } from '../topic'
import { InitialResponse, promiseTimeout, SocketResponse } from '../utils'
import { AdminItinerary } from './admin-itinerary'

export type CreateItineraryResponse = SocketResponse<any>
export type GetEventItinerariesResponse = SocketResponse<ItineraryPayload[]>

export default class AdminItineraries {
  private socket: SocketIOClient.Socket
  public itineraries: AdminItinerary[] = []
  public event: string

  constructor (socket: SocketIOClient.Socket, event: string) {
    this.socket = socket
    this.event = event
  }

  getAll (): Promise<void> {
    let callback: (resp: InitialResponse | GetEventItinerariesResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: InitialResponse | GetEventItinerariesResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          this.itineraries = resp.payload.map(i => {
            const itinerary = new AdminItinerary(this.socket, i.id)
            itinerary.createItem(i)
            return itinerary
          })
          resolve()
        }
      }
      this.socket.on(ConsumerTopic.ItineraryGet, callback)
      this.socket.emit(ConsumerTopic.ItineraryGet, {
        event: this.event
      })
    })).finally(() => {
      this.socket.removeListener(ConsumerTopic.ItineraryGet, callback)
    })
  }

  delete (id: string): Promise<void> {
    let callback: (resp: InitialResponse | CreateItineraryResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: InitialResponse | CreateItineraryResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          this.getAll()
          resolve()
        }
      }
      this.socket.on(AdminTopic.ItineraryRemove, callback)
      this.socket.emit(AdminTopic.ItineraryRemove, {
        id
      })
    })).finally(() => {
      this.socket.removeListener(AdminTopic.ItineraryRemove, callback)
    })
  }
}
