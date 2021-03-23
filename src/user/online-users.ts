import { SubscriptionManager } from '../utils'
import { ConsumerTopic } from '../topic'
import { ExtreamUser } from './user'
import { promiseTimeout } from '../utils/utils'

export class OnlineUsers {
  private subscriptionManager: SubscriptionManager;
  private socket: SocketIOClient.Socket;
  public users: ExtreamUser[] = []

  constructor (socket: SocketIOClient.Socket) {
    this.socket = socket
    this.subscriptionManager = new SubscriptionManager(this.socket)
  }

  destroy (): void {
    this.subscriptionManager.removeAllSubscriptions()
  }

  get (request: any = {}): Promise<void> {
    this.subscriptionManager.addSubscription(ConsumerTopic.OnlineJoin, (resp: any) => {
      const user =
        typeof resp.user.fields === 'string'
          ? {
            ...resp.user,
            fields: JSON.parse(resp.user.fields)
          }
          : resp.user
      this.users = [...this.users.filter(c => c.id !== resp.id), user]
    })
    this.subscriptionManager.addSubscription(ConsumerTopic.OnlineLeave, (resp: any) => {
      this.users = this.users.filter(c => c.id !== resp.id)
    })
    let callback: (resp: any) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      this.socket.on(ConsumerTopic.OnlineUsers, (resp: any) => {
        if (resp.error) {
          reject(new Error(resp.error))
        } else if (
          resp.payload &&
        resp.payload.users
        ) {
          const onlineUsers = Object.entries(resp.payload.users)
            .map(([, value]: [string, any]) => {
              const user =
              typeof value.fields === 'string'
                ? {
                  ...value,
                  fields: JSON.parse(value.fields)
                }
                : value
              return user
            })
          this.users = onlineUsers
          resolve()
        }
      })
      this.socket.emit(ConsumerTopic.OnlineUsers, request)
    })).finally(() => {
      this.socket.removeListener(ConsumerTopic.OnlineUsers, callback)
    })
  }
}
