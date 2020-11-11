import { AdminTopic } from '../topic'
import { InitialResponse, promiseTimeout, SocketResponse, TimeStamp } from '../utils'

export interface ItineraryItemPayload {
  id: string;
  type: string;
}

export interface EntityResponse {
  addedAt: TimeStamp;
  addedBy: string;
  id: string;
  start_date: string;
  updatedBy: string;
  updatedAt: TimeStamp;
  end_date: string;
}

export interface RtmpItineraryItemConfiguration {
  // TODO needs more types
  mode: string;
  actor: string;
  crew?: string;
  broadcast?: boolean;
}

export interface RmtpItineraryItemPayload extends EntityResponse {
  broadcast: boolean;
  itinerary: string;
  status: string;
  stream: string;
  title: string;
  type: string;
  configuration: RtmpItineraryItemConfiguration
}

export type GetRmtpItineraryItemResponse = SocketResponse<RmtpItineraryItemPayload>

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ChatUpdateRequest {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RmtpUpdateRequest {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WebRtcUpdateRequest {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PollUpdateRequest {}

export type UpdateItemRequest = PollUpdateRequest | WebRtcUpdateRequest | RmtpUpdateRequest | ChatUpdateRequest

export default class ItineraryItem {
  private socket: SocketIOClient.Socket
  public data: RmtpItineraryItemPayload | null = null
  public id: string
  public type: string

  constructor (socket: SocketIOClient.Socket, id: string, type: string) {
    this.socket = socket
    this.id = id
    this.type = type
  }

  get (): Promise<void> {
    let callback: (resp: InitialResponse | GetRmtpItineraryItemResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: InitialResponse | GetRmtpItineraryItemResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          this.data = { ...resp.payload }
          resolve()
        }
      }
      this.socket.on(AdminTopic.ItemRead, callback)
      this.socket.emit(AdminTopic.ItemRead, {
        id: this.id,
        type: this.type
      })
    })).finally(() => {
      this.socket.removeListener(AdminTopic.ItemRead, callback)
    })
  }

  update (update: Partial<UpdateItemRequest>): Promise<void> {
    let callback: (resp: InitialResponse | GetRmtpItineraryItemResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: InitialResponse | GetRmtpItineraryItemResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          this.data = { ...resp.payload }
          resolve()
        }
      }
      this.socket.on(AdminTopic.ItemUpdate, callback)
      this.socket.emit(AdminTopic.ItemUpdate, update)
    })).finally(() => {
      this.socket.removeListener(AdminTopic.ItemUpdate, callback)
    })
  }
}
