import { GetItineraryResponse, ItineraryPayload } from '../event'
import { AdminTopic, ConsumerTopic } from '../topic'
import { InitialResponse, promiseTimeout } from '../utils'

export class Itinerary {
  private socket: SocketIOClient.Socket
  public data: ItineraryPayload | null = null
  public id: string

  constructor (socket: SocketIOClient.Socket, id: string) {
    this.socket = socket
    this.id = id
  }

  update (update: Partial<ItineraryPayload>): Promise<void> {
    let callback: (resp: InitialResponse | GetItineraryResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: InitialResponse | GetItineraryResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          this.data = {
            ...resp.payload,
            items: JSON.parse(resp.payload.items as string)
          }
          resolve()
        }
      }
      this.socket.on(AdminTopic.ItineraryUpdate, callback)
      this.socket.emit(AdminTopic.ItineraryUpdate, {
        ...update
      })
    })).finally(() => {
      this.socket.removeListener(AdminTopic.ItineraryUpdate, callback)
    })
  }

  get (): Promise<void> {
    let callback: (resp: InitialResponse | GetItineraryResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: InitialResponse | GetItineraryResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          this.data = {
            ...resp.payload,
            items: JSON.parse(resp.payload.items as string)
          }
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
