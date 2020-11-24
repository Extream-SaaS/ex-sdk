import 'isomorphic-fetch'

import io from 'socket.io-client'

import { Admin } from './admin'
import { Consumer } from './consumer'
import { IPersistance, PersistanceFactory } from './persistance'
import SubscriptionManager from './subscription-manager'
import { AuthorizationTopic } from './topic'
import User, { AuthenticationResponse, ExtreamUser } from './user'
import { ExtreamOptions, promiseTimeout } from './utils'

/**
 * The Extream websocket and http communication client.
 *
 * Only one of these should ever be created per application instance and shared across the app to avoid memory leaks.
 */
export class ExtreamClient {
  public socket: SocketIOClient.Socket | null = null;
  public adminActions: Admin | null = null;
  public consumerActions: Consumer | null = null;
  public user: User;
  public persistance: IPersistance | null
  public currentUser: ExtreamUser | null = null
  private options: ExtreamOptions;
  private subscriptionManager: SubscriptionManager | null = null;

  constructor (options: ExtreamOptions) {
    const factory = new PersistanceFactory()
    this.persistance = factory.get(options.persistance)
    this.options = options
    this.user = new User(this.options)
  }

  /**
   * Access admin functionality such as creating itineraries ect.
   */
  get admin (): Admin {
    if (!this.adminActions) {
      throw new Error('Please connect and authenticate before trying to perform any actions')
    }
    return this.adminActions
  }

  /**
   * Access user functionality such as join chat rooms, joining polls ect.
   */
  get consumer (): Consumer {
    if (!this.consumerActions) {
      throw new Error('Please connect and authenticate before trying to perform any actions')
    }
    return this.consumerActions
  }

  /**
   * Log the user in and open a authenticated websocket connection
   * @param username
   * @param password
   * @param visibility
   * @param eventId
   */
  public async authenticate (username: string, password: string, visibility: boolean, eventId?: string): Promise<void> {
    const { accessToken } = await this.user.login(username, password, eventId)
    await this.connect(accessToken, visibility)
  }

  /**
   * Create an instance of the websocket and connect to it using the access token provided
   *
   * @param { string } accessToken
   * @param { boolean } visibility
   * @returns { Promise<ExtreamUser> }
   *
   */
  private connect (accessToken: string, visibility: boolean): Promise<ExtreamUser> {
    return promiseTimeout(new Promise<ExtreamUser>((resolve, reject) => {
      this.socket = io(`${this.options.gateway}?x-auth=${accessToken}`, {
        transports: ['websocket']
      })
      this.subscriptionManager = new SubscriptionManager(this.socket)
      this.adminActions = new Admin(this.socket)
      this.consumerActions = new Consumer(this.socket, this.options)
      this.socket.emit(AuthorizationTopic.Authorize, { method: 'oauth2', token: accessToken, visibility })
      this.socket.on(AuthorizationTopic.Authorized, (user: ExtreamUser) => {
        this.user.currentUser = user
        resolve(user)
      })
      this.socket.on(AuthorizationTopic.Unauthorized, (error: Error) => {
        reject(error)
      })
    })).finally(() => {
      this.socket?.removeEventListener(AuthorizationTopic.Authorized)
      this.socket?.removeEventListener(AuthorizationTopic.Unauthorized)
    })
  }

  /**
   * Returns the emit method from the websocket instance
   *
   * You probably don't want this unless you are doing some weird stuff. Try the specific action methods instead!
   *
   * @param { string } event
   * @param { any } payload
   * @returns { void }
   *
   */
  public emit (topic: string, payload: any): void {
    if (!this.socket) {
      throw new Error('No socket connection found. Try connecting first. See method ExtreamClient.connect()')
    }
    this.socket.emit(topic, payload)
  }

  /**
   * Returns the on method from the websocket instance
   *
   * You probably don't want this unless you are doing some weird stuff. Try the specific action methods instead!
   *
   * @param { string } event
   * @param { any } cb
   * @returns { void }
   *
   */
  public on (topic: string, cb: (response: any) => void): void {
    if (!this.socket || !this.subscriptionManager) {
      throw new Error('No socket connection found. Try connecting first. See method ExtreamClient.connect()')
    }
    this.subscriptionManager.addSubscription(topic, cb)
  }

  /**
   * Cleans up all listeners for this class. Call this when your application instance is being left or destroyed.
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
