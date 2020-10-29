import { GetItineraryResponse, ItineraryPayload } from '../event'
import { AdminTopic, ConsumerTopic } from '../topic'
import { InitialResponse, promiseTimeout } from '../utils'

export class AdminItinerary {
  private socket: SocketIOClient.Socket
  public data: ItineraryPayload | null = null
  public id: string

  constructor (socket: SocketIOClient.Socket, id: string) {
    this.socket = socket
    this.id = id
  }

  createItem (payload: ItineraryPayload): void {
    this.data = {
      ...payload,
      items: JSON.parse(payload.items as string)
    }
  }

  update (update: Partial<ItineraryPayload>): Promise<void> {
    let callback: (resp: InitialResponse | GetItineraryResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: InitialResponse | GetItineraryResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          this.createItem(resp.payload)
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
          this.createItem(resp.payload)
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
