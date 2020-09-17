/* eslint-disable */
import io from 'socket.io-client'
import { ExtreamAuthUser } from './src/user'
import { Admin as AdminActions, Admin } from './src/admin'
import { Consumer as ConsumerActions, Consumer } from './src/consumer'
import { Client as ClientActions, Client } from './src/client'
import 'isomorphic-fetch'
import User from './src/user'

// Events by organization
export interface ExtreamOptions {
  auth: string;
  gateway: string;
  apiKey: string;
}

/**
 * The Extream websocket and http communication client.
 *
 * Only one of these should ever be created per application instance and shared across the app to avoid memory leaks.
 */
export class ExtreamClient {
  public socket: SocketIOClient.Socket | null = null;
  public adminActions: AdminActions | null = null;
  public consumerActions: ConsumerActions | null = null;
  public clientActions: ClientActions | null = null;
  public user: User;
  private options: ExtreamOptions;
  private headers: Headers;

  constructor (options: ExtreamOptions) {
    this.options = options
    this.headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${this.options.apiKey}`
    })
    this.user = new User(this.options)
  }

  // get user (): User {
  //   if (!this.userActions) {
  //     throw new Error('Please connect and authenticate before trying to perform any actions')
  //   }
  //   return this.userActions
  // }


  get client (): ClientActions {
    if (!this.clientActions) {
      throw new Error('Please connect and authenticate before trying to perform any actions')
    }
    return this.clientActions
  }

  get consumer (): ConsumerActions {
    if (!this.consumerActions) {
      throw new Error('Please connect and authenticate before trying to perform any actions')
    }
    return this.consumerActions
  }

  get admin (): AdminActions {
    if (!this.adminActions) {
      throw new Error('Please connect and authenticate before trying to perform any actions')
    }
    return this.adminActions
  }

  /**
   * Create an instance of the websocket and connect to it using the access token provided
   *
   * @param { string } accessToken
   * @returns { void }
   *
   */
  connect (accessToken: string): Promise<ExtreamAuthUser> {
    const unsubscribe = () => {
      this.socket?.removeEventListener('connect')
      this.socket?.removeEventListener('connect_error')
    }
    return new Promise((resolve, reject) => {
      this.socket = io(`${this.options.gateway}?x-auth=${accessToken}`, {
        transports: [ 'websocket' ]
      })
      this.adminActions = new Admin(this.socket)
      this.clientActions = new Client(this.socket)
      this.consumerActions = new Consumer(this.socket)
      this.socket.on('connect', (user: ExtreamAuthUser) => {
        resolve(user)
        unsubscribe()
      })
      this.socket.on('connect_error', (error: Error) => {
        reject(error)
        unsubscribe()
      })
    })
  }

  /**
   * Returns the emit method from the websocket instance
   *
   * You probably don't want this unless you are doing some weird stuff. Try the specific action methods instead!
   *
   * @param { string } event
   * @param { any } payload
   * @returns { any }
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
   * @returns { any }
   *
   */
  public on (topic: string, cb: (response: any) => void): void {
    if (!this.socket) {
      throw new Error('No socket connection found. Try connecting first. See method ExtreamClient.connect()')
    }
    this.socket.on(topic, cb)
  }
}
