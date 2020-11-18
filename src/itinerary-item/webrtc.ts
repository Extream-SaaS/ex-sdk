import SubscriptionManager from '../subscription-manager'
import { ConsumerTopic } from '../topic'
import { ExtreamUser } from '../user'
import { ExtreamOptions, InitialResponse, promiseTimeout, SocketResponse } from '../utils'

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
  private options: ExtreamOptions
  private subscriptionManager: SubscriptionManager
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
  /**
   * The web rtc token
   */
  public token: string | null = null

  constructor (socket: SocketIOClient.Socket, id: string, options: ExtreamOptions) {
    this.socket = socket
    this.id = id
    this.options = options
    this.subscriptionManager = new SubscriptionManager(this.socket)
  }

  private async verifyUser (userToken: string): Promise<ExtreamUser> {
    const resp = await fetch(`${this.options.collab}/auth/verify`, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })
    return await resp.json()
  }

  async getToken (userToken: string): Promise<string[]> {
    const resp = await fetch(
      `${this.options.collab}/sessions/token`,
      {
        method: 'POST',
        body: JSON.stringify({
          sessionName: this.id
        }),
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json; charset=UTF-8'
        }
      }
    )
    return resp.json()
  }

  public listenForIncomingCalls (userToken: string): void {
    this.subscriptionManager.addSubscription(ConsumerTopic.WebrtcIncoming, async (resp: any) => {
      // incoming video call
      if (!resp.data.topic) {
        this.instance = resp.data.instance
        const tokens = await this.getToken(userToken)
        const token = tokens[0]
        this.token = token
        this.connected = true
      }
    })
  }

  /**
   * Start a call with a set of people
   * @param {string[]} participants The people to invite to this call
   */
  async startCall (participants: string[], userToken: string): Promise<string> {
    let callback: (resp: any) => void
    await this.verifyUser(userToken)
    const tokens = await this.getToken(userToken)
    const token = tokens[0]
    this.token = token
    return promiseTimeout(new Promise<string>((resolve, reject) => {
      this.socket.on(ConsumerTopic.WebrtcStart, (resp: any) => {
        if (resp.error) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          if (resp.payload.id === this.id) {
            this.connected = true
            this.instance = resp.payload.data.instance
            resolve(token)
          }
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
    let callback: (itemData: InitialResponse | ReadWebRtcResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (itemData: InitialResponse | ReadWebRtcResponse) => {
        if (itemData.error) {
          reject(new Error(itemData.error))
        } else if (!('status' in itemData)) {
          if (itemData.payload && itemData.payload.id === this.id) {
            this.data = itemData.payload
            resolve()
          }
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

  destroy (): void {
    this.subscriptionManager.removeAllSubscriptions()
  }
}
