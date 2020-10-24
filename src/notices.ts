import SubscriptionManager from './subscription-manager'
import { ConsumerTopic } from './topic'
import { InitialResponse, promiseTimeout } from './utils'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ReadNoticesResponse {}
export interface Notice {
  id: string
  public_id: string
  createdAt: string
  createdBy: string
  event: string
  itinerary: string
  message: {
    text: string
  }
  page: string
  status: string
  updatedAt: string
}

export interface GetNoticesResponse {
  payload: Notice[]
}

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

  /**
   * Sort messages based on date descending
   * @param a
   * @param b
   */
  private static sortByDate (a: Notice, b: Notice) {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  }

  private listenForNotices (request: NoticeGetRequest): void {
    this.subscriptionManager.addSubscription(ConsumerTopic.NoticeReceive, (resp: Notice) => {
      this.notices = [...this.notices, resp]
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
          this.notices = resp.payload.sort(Notices.sortByDate)
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

  readNotice (id: string): Promise<void> {
    const notice = this.notices.find(({ public_id: noticeId }) => id === noticeId)
    if (!notice) {
      throw new Error(`Could not find notice with id ${id}`)
    }
    this.notices = this.notices.filter(({ public_id: noticeId }) => id !== noticeId)
    let callback: (resp: InitialResponse | ReadNoticesResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: InitialResponse | ReadNoticesResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          resolve()
        }
      }
      this.socket.on(ConsumerTopic.NoticeRead, callback)
      this.socket.emit(ConsumerTopic.NoticeRead, {
        message: id
      })
    })).finally(() => {
      this.socket.removeListener(ConsumerTopic.NoticeRead, callback)
    })
  }

  public destroy (): void {
    if (!this.subscriptionManager) {
      throw new Error('No socket connection found. You do not need to destroy a socket that has never been connected.')
    }
    this.subscriptionManager.removeAllSubscriptions()
  }
}
