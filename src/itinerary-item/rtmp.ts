import { ConsumerTopic } from '../topic'
import { promiseTimeout, SocketResponse, TimeStamp } from '../utils'

export interface RtmpConfiguration {
  mode: string;
  actor: string;
  broadcast: boolean;
}

export interface ReadRtmpResponsePayload {
  id: string;
  itinerary: string;
  streamkey: string;
  title: string;
  streamUrl: string;
  updatedAt: TimeStamp;
  status: string;
  type: string;
  start_date: TimeStamp;
  end_date: TimeStamp;
  updatedBy: string;
  addedBy: string;
  url: string;
  watcherUrl: string;
  configuration: RtmpConfiguration;
  addedAt: TimeStamp;
  broadcast: boolean;
}

export type ReadRtmpResponse = SocketResponse<ReadRtmpResponsePayload>

/**
 * An Rtmp video item.
 */
export class Rtmp {
  private socket: SocketIOClient.Socket
  /**
   * The id of the itinerary item
   */
  public id: string
  /**
   * All of the data relating to this item. Populated after calling the .get message.
   */
  public data: ReadRtmpResponsePayload | null = null

  constructor (socket: SocketIOClient.Socket, id: string) {
    this.socket = socket
    this.id = id
  }

  /**
   * Call this method to populate the data property.
   */
  get (): Promise<void> {
    let callback: (itemData: ReadRtmpResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (itemData: ReadRtmpResponse) => {
        if (itemData.error) {
          reject(new Error(itemData.error))
        } else if (itemData.payload && itemData.payload.id === this.id) {
          this.data = itemData.payload
          resolve()
        }
      }
      this.socket.on(ConsumerTopic.RtmpGet, callback)
      this.socket.emit(ConsumerTopic.RtmpGet, {
        id: this.id
      })
    })).finally(() => {
      this.socket.removeEventListener(ConsumerTopic.RtmpGet, callback)
    })
  }
}
