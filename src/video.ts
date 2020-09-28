import { ReadWebRtcResponse, ReadWebRtcResponsePayload } from './itinerary'
import { ConsumerTopic } from './topic'

export class Video {
  private socket: SocketIOClient.Socket
  public id: string
  public data: ReadWebRtcResponsePayload | null = null

  constructor (socket: SocketIOClient.Socket, id: string) {
    this.socket = socket
    this.id = id
  }

  get (): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const callback = (itemData: ReadWebRtcResponse) => {
        if (itemData.error) {
          reject(new Error(itemData.error))
          this.socket.removeEventListener(ConsumerTopic.WebrtcRead, callback)
        } else if (itemData.payload && itemData.payload.id === this.id) {
          this.data = itemData.payload
          resolve()
          this.socket.removeEventListener(ConsumerTopic.WebrtcRead, callback)
        }
      }
      this.socket.on(ConsumerTopic.WebrtcRead, callback)
      this.socket.emit(ConsumerTopic.WebrtcRead, {
        id: this.id
      })
    })
  }
}
