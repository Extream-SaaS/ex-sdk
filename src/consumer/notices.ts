import { SubscriptionManager } from '../utils'
import { ConsumerTopic } from '../topic'
import { IDestroyable, IEntity, InitialResponse, promiseTimeout } from '../utils/utils'

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

/**
 * Notices (also known as voice of god) are a method of sending
 *
 *
 */
export class Notices implements IEntity, IDestroyable {
  private subscriptionManager: SubscriptionManager;
  private socket: SocketIOClient.Socket;
  /**
   * All of the unread notices for the logged in user
   */
  public payload: Notice[] = []

  constructor (socket: SocketIOClient.Socket) {
    this.socket = socket
    this.subscriptionManager = new SubscriptionManager(this.socket)
  }

  get notices (): Notice[] {
    return this.payload
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
      this.payload = [...this.payload, resp]
    })
    this.socket.emit(ConsumerTopic.NoticeReceive, request)
  }

  /**
   * Get all of the notices that the user hasn't read and setup all the required listeners for new notices streamed in.
   * @param request
   */
  get (request: NoticeGetRequest) : Promise<void> {
    let callback: (resp: InitialResponse | GetNoticesResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: InitialResponse | GetNoticesResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          this.payload = [...resp.payload].sort(Notices.sortByDate)
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

  /**
   * Mark a specific notice as read
   * @param {string} id THe id of the notice to mark as read for the logged in user
   */
  readNotice (id: string): Promise<void> {
    const notice = this.payload.find(({ public_id: noticeId }) => id === noticeId)
    if (!notice) {
      throw new Error(`Could not find notice with id ${id}`)
    }
    this.payload = this.payload.filter(({ public_id: noticeId }) => id !== noticeId)
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

  /**
   * Cleans up all listeners for this class. Call this when you no longer need access to this events information to ensure memory leaks are not caused.
   *
   * @returns { void }
   */
  public destroy (): void {
    if (!this.subscriptionManager) {
      throw new Error('No socket connection found. You do not need to destroy a socket that has never been connected.')
    }
    this.subscriptionManager.removeAllSubscriptions()
  }
}
