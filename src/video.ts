import { ReadWebRtcResponse, ReadWebRtcResponsePayload } from './itinerary'
import { ConsumerTopic } from './topic'
import { promiseTimeout } from './utils'

export class Video {
  private socket: SocketIOClient.Socket
  public id: string
  public data: ReadWebRtcResponsePayload | null = null

  constructor (socket: SocketIOClient.Socket, id: string) {
    this.socket = socket
    this.id = id
  }

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
      this.socket.on(ConsumerTopic.WebrtcRead, callback)
      this.socket.emit(ConsumerTopic.WebrtcRead, {
        id: this.id
      })
    })).finally(() => {
      this.socket.removeEventListener(ConsumerTopic.WebrtcRead, callback)
    })
  }
}
