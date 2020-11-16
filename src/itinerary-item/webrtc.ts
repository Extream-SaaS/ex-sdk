import { ConsumerTopic } from '../topic'
import { promiseTimeout, SocketResponse, TimeStamp } from '../utils'

export interface WebRtcConfiguration {
  mode: string;
  actor: string;
  broadcast: boolean;
}

export interface ReadWebRtcResponsePayload {
  id: string;
  itinerary: string;
  configuration: WebRtcConfiguration;
}

export type ReadWebRtcResponse = SocketResponse<ReadWebRtcResponsePayload>

/**
 * An Rtmp video item.
 */
export class WebRtc {
  private socket: SocketIOClient.Socket
  /**
   * The id of the itinerary item
   */
  public id: string
  /**
   * All of the data relating to this item. Populated after calling the .get message.
   */
  public data: ReadWebRtcResponsePayload | null = null

  constructor (socket: SocketIOClient.Socket, id: string) {
    this.socket = socket
    this.id = id
  }

  /**
   * Call this method to populate the data property.
   */
  get (): Promise<void> {
    let callback: (itemData: ReadWebRtcResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (itemData: ReadWebRtcResponse) => {
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
