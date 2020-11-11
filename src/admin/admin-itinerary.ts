import { GetItineraryResponse, ItineraryPayload } from '../event'
import { AdminTopic, ConsumerTopic } from '../topic'
import { InitialResponse, promiseTimeout, SocketResponse } from '../utils'
import ItineraryItem, { ItineraryItemPayload } from './itinerary-item'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DeleteItineraryItemResponse {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ChatCreateRequest {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RmtpCreateRequest {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WebRtcCreateRequest {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PollCreateRequest {}

export type CreateItemRequest = PollCreateRequest | WebRtcCreateRequest | RmtpCreateRequest | ChatCreateRequest

export type CreateItemResponse = SocketResponse<{
  id: string;
  type: string;
}>

export class AdminItinerary {
  private socket: SocketIOClient.Socket
  public data: ItineraryPayload | null = null
  public id: string
  public items: ItineraryItem[] = []

  constructor (socket: SocketIOClient.Socket, id: string) {
    this.socket = socket
    this.id = id
  }

  create (payload: ItineraryPayload): void {
    const items = payload.items
      ? JSON.parse(payload.items as string)
      : []
    this.items = items.map((i: ItineraryItemPayload) => new ItineraryItem(this.socket, i.id, i.type))
    this.data = {
      ...payload
    }
  }

  update (update: Partial<ItineraryPayload>): Promise<void> {
    let callback: (resp: InitialResponse | GetItineraryResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: InitialResponse | GetItineraryResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          this.create(resp.payload)
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
          this.create(resp.payload)
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

  deleteItem (id: string): Promise<void> {
    let callback: (resp: InitialResponse | DeleteItineraryItemResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: InitialResponse | DeleteItineraryItemResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          this.items = this.items.filter(i => i.id === id)
          resolve()
        }
      }
      this.socket.on(AdminTopic.ItemDelete, callback)
      this.socket.emit(AdminTopic.ItemDelete, {
        itinerary: this.id,
        id
      })
    })).finally(() => {
      this.socket.removeListener(AdminTopic.ItemDelete, callback)
    })
  }

  createItineraryItem (item: InitialResponse | CreateItemRequest): Promise<void> {
    let callback: (resp: InitialResponse | CreateItemResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: InitialResponse | CreateItemResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          this.items = [...this.items, new ItineraryItem(this.socket, resp.payload.id, resp.payload.type)]
          resolve()
        }
      }
      this.socket.on(AdminTopic.ItemCreate, callback)
      this.socket.emit(AdminTopic.ItemCreate, item)
    })).finally(() => {
      this.socket.removeListener(AdminTopic.ItemCreate, callback)
    })
  }
}
