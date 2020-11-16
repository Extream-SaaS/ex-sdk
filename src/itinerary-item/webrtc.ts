import { ConsumerTopic } from '../topic'
import { promiseTimeout, SocketResponse } from '../utils'

export interface WebRtcConfiguration {
  mode: string;
  actor: string;
  broadcast: boolean;
}

export interface ReadWebRtcResponsePayload {
  // TODO loads of properties missing from this
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
   * The instance of the call item
   */
  public instance: string | null = null
  /**
   * All of the data relating to this item. Populated after calling the .get message.
   */
  public data: ReadWebRtcResponsePayload | null = null
  /**
   * Weather the current call is connected or not
   */
  public connected = false

  constructor (socket: SocketIOClient.Socket, id: string) {
    this.socket = socket
    this.id = id
  }

  /**
   * Start a call with a set of people
   * @param {string[]} participants The people to invite to this call
   */
  startCall (participants: string[]): Promise<void> {
    let callback: (resp: any) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      this.socket.on(ConsumerTopic.WebrtcStart, (resp: any) => {
        if (!resp.error) {
          reject(new Error(resp.error))
        } else if (resp.payload.id === this.id) {
          this.connected = true
          this.instance = resp.payload.data.instance
          resolve()
        }
      })
      this.socket.emit(ConsumerTopic.WebrtcStart, {
        id: this.id,
        data: {
          participants
        }
      })
    })).finally(() => {
      this.socket.removeEventListener(ConsumerTopic.WebrtcStart, callback)
    })
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
