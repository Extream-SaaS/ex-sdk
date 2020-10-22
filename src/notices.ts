import SubscriptionManager from './subscription-manager'
import { ConsumerTopic } from './topic'
import { InitialResponse, promiseTimeout } from './utils'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetNoticesResponse {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Notice {}

export interface NoticeGetRequest {
  event: string,
  itinerary?: string,
  page?: string,
  read?: boolean,
}

export class Notices {
  private subscriptionManager: SubscriptionManager;
  private socket: SocketIOClient.Socket;
  public notices: Notice[] = []
  constructor (socket: SocketIOClient.Socket) {
    this.socket = socket
    this.subscriptionManager = new SubscriptionManager(this.socket)
  }

  private listenForNotices (request: NoticeGetRequest): void {
    this.subscriptionManager.addSubscription(ConsumerTopic.NoticeReceive, (resp: GetNoticesResponse) => {
      // TODO push the notice into the notices array
      // this.notices = [...this.notices, resp.payload]?
    })
    this.socket.emit(ConsumerTopic.NoticeReceive, request)
  }

  get (request: NoticeGetRequest) : Promise<void> {
    let callback: (resp: InitialResponse | GetNoticesResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: InitialResponse | GetNoticesResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          // TODO set the notices
          // this.notices = Object.values(resp.payload.notifications)?
          this.listenForNotices(request)
          resolve()
        }
      }
      this.socket.on(ConsumerTopic.NoticeGet, callback)
      this.socket.emit(ConsumerTopic.NoticeGet, request)
    })).finally(() => {
      this.socket.removeListener(ConsumerTopic.NoticeGet, callback)
    })
  }

  public destroy (): void {
    if (!this.subscriptionManager) {
      throw new Error('No socket connection found. You do not need to destroy a socket that has never been connected.')
    }
    this.subscriptionManager.removeAllSubscriptions()
  }
}
