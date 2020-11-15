import { ItineraryPayload } from '../event'
import { AdminTopic, ConsumerTopic } from '../topic'
import { InitialResponse, promiseTimeout, SocketResponse } from '../utils'
import { AdminItinerary } from './admin-itinerary'

export type CreateItineraryResponse = SocketResponse<any>
export type GetEventItinerariesResponse = SocketResponse<ItineraryPayload[]>

/**
 * Manages all of the itineraries for a specific event. Allows you to perform CRUD actions on itineraries for a specific event.
 */
export default class AdminItineraries {
  private socket: SocketIOClient.Socket
  /**
   * All the itineraries associated to the event this class has been instaitated with.
   */
  public itineraries: AdminItinerary[] = []
  /**
   * The event all these itineraries are related to.
   */
  public event: string

  constructor (socket: SocketIOClient.Socket, event: string) {
    this.socket = socket
    this.event = event
  }

  /**
   * Get all the itineraries for an event. Once this method has been called all the itineraries are added to the itinerary property on the array.
   */
  getAll (): Promise<void> {
    let callback: (resp: InitialResponse | GetEventItinerariesResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: InitialResponse | GetEventItinerariesResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          this.itineraries = resp.payload.map(i => {
            const itinerary = new AdminItinerary(this.socket, i.id)
            itinerary.create(i)
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

  /**
   * Create an itinerary for the event this class is associated to
   * @param {Partial<ItineraryPayload>} itinerary The information about the itinerary
   */
  createItinerary (itinerary: Partial<ItineraryPayload>): Promise<string> {
    let callback: (resp: InitialResponse | CreateItineraryResponse) => void
    return promiseTimeout(new Promise<string>((resolve, reject) => {
      callback = (resp: InitialResponse | CreateItineraryResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          const itinerary = new AdminItinerary(this.socket, resp.payload.id)
          itinerary.create(resp.payload)
          this.itineraries = [...this.itineraries, itinerary]
          resolve(resp.payload.public_id)
        }
      }
      this.socket.on(AdminTopic.ItineraryCreate, callback)
      this.socket.emit(AdminTopic.ItineraryCreate, {
        ...itinerary
      })
    })).finally(() => {
      this.socket.removeListener(AdminTopic.ItineraryCreate, callback)
    })
  }

  /**
   * Remove an existing itinerary & all its' associated items from this event.
   * @param id
   */
  delete (id: string): Promise<void> {
    let callback: (resp: InitialResponse | CreateItineraryResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: InitialResponse | CreateItineraryResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          this.itineraries = this.itineraries.filter(i => i.data?.public_id !== id)
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
