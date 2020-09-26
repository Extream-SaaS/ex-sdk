/* eslint-disable */
import 'isomorphic-fetch'

import io from 'socket.io-client'

import { Admin } from './admin'
import { Client } from './client'
import { Consumer } from './consumer'
import SubscriptionManager from './subscription-manager'
import { AuthorizationTopic } from './topic'
import User, { ExtreamUser } from './user'
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
  public clientActions: Client | null = null;
  public user: User;
  private options: ExtreamOptions;
  private subscriptionManager: SubscriptionManager | null = null;

  constructor (options: ExtreamOptions) {
    this.options = options
    this.user = new User(this.options)
  }

  get admin (): Admin {
    if (!this.adminActions) {
      throw new Error('Please connect and authenticate before trying to perform any actions')
    }
    return this.adminActions
  }

  get client (): Client {
    if (!this.clientActions) {
      throw new Error('Please connect and authenticate before trying to perform any actions')
    }
    return this.clientActions
  }

  get consumer (): Consumer {
    if (!this.consumerActions) {
      throw new Error('Please connect and authenticate before trying to perform any actions')
    }
    return this.consumerActions
  }

  /**
   * Create an instance of the websocket and connect to it using the access token provided
   *
   * @param { string } accessToken
   * @returns { Promise<ExtreamUser> }
   *
   */
  connect (accessToken: string): Promise<ExtreamUser> {
    const unsubscribe = () => {
      this.socket?.removeEventListener(AuthorizationTopic.Authorized)
      this.socket?.removeEventListener(AuthorizationTopic.Unauthorized)
    }
    return promiseTimeout(new Promise((resolve, reject) => {
      this.socket = io(`${this.options.gateway}?x-auth=${accessToken}`, {
        transports: [ 'websocket' ]
      })
      this.subscriptionManager = new SubscriptionManager(this.socket)
      this.adminActions = new Admin(this.socket)
      this.clientActions = new Client(this.socket)
      this.consumerActions = new Consumer(this.socket)
      this.socket.emit(AuthorizationTopic.Authorize, { method: 'oauth2', token: accessToken })
      this.socket.on(AuthorizationTopic.Authorized, (user: ExtreamUser) => {
        resolve(user)
        unsubscribe()
      })
      this.socket.on(AuthorizationTopic.Unauthorized, (error: Error) => {
        reject(error)
        unsubscribe()
      })
    }))
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

  public destroy () {
    if (!this.subscriptionManager) {
      throw new Error('No socket connection found. You do not need to destroy a socket that has never been connected.')
    }
    this.subscriptionManager.removeAllSubscriptions()
  }
}
