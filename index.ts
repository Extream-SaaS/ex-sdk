/* eslint-disable */
import io from 'socket.io-client'
import { ExtreamAuthUser } from './types/user'
import { Admin as AdminActions, Admin } from './src/admin'
import { Consumer as ConsumerActions, Consumer } from './src/consumer'
import { Client as ClientActions, Client } from './src/client'
import 'isomorphic-fetch'

// Authentication types
export interface AuthenticationParams {
  username: string;
  password: string;
  'grant_type': string;
}

export interface AuthenticationResponse {
  accessToken: string;
  accessTokenExpiresAt: string;
  id: string;
  refreshToken: string;
  refreshTokenExpiresAt: string;
}

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
  private adminActions: AdminActions | null = null;
  private consumerActions: ConsumerActions | null = null;
  private clientActions: ClientActions | null = null;
  private options: ExtreamOptions;
  private headers: Headers;

  constructor (options: ExtreamOptions) {
    this.options = options
    this.headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${this.options.apiKey}`
    })
  }

  get client (): ClientActions {
    if (!this.clientActions) {
      throw new Error('Please connect and authenticate before trying to perform any actions')
    }
    // else if (!this.socket?.connected) {
    //   throw new Error('Socket has not connected yet. Please wait for socket to connect successfully before connecting')
    // }
    return this.clientActions
  }

  get consumer (): ConsumerActions {
    if (!this.consumerActions) {
      throw new Error('Please connect and authenticate before trying to perform any actions')
    }
    // else if (!this.socket?.connected) {
    //   throw new Error('Socket has not connected yet. Please wait for socket to connect successfully before connecting')
    // }
    return this.consumerActions
  }

  get admin (): AdminActions {
    if (!this.adminActions) {
      throw new Error('Please connect and authenticate before trying to perform any actions')
    }
    // else if (!this.socket?.connected) {
    //   throw new Error('Socket has not connected yet. Please wait for socket to connect successfully before connecting')
    // }
    return this.adminActions
  }

  private async performFetch<T> (
    url: string,
    options: RequestInit | undefined
  ): Promise<T> {
    const resp = await fetch(url, options)
    if (!resp.ok) {
      throw new Error(`Response returned a non OK status code ${resp.status}`)
    }
    return resp.json()
  }

  /**
   * Create an instance of the websocket and connect to it using the access token provided
   *
   * @param { string } accessToken
   * @returns { void }
   *
   */
  connect (accessToken: string): Promise<void> {
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
      this.socket.on('connect', () => {
        resolve()
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

  /**
   * Given a username and password, will authenticate the user against the ExtreamClient
   *
   * @param { string } username
   * @param { string } password
   * @returns { Promise<AuthenticationResponse> }
   *
   */
  public async authenticate (
    username: string,
    password: string
  ): Promise<AuthenticationResponse> {
    const params = {
      username,
      password,
      grant_type: 'password'
    }

    const resp = await this.performFetch<AuthenticationResponse>(
      `${this.options.auth}/auth/login`,
      {
        method: 'POST',
        headers: this.headers,
        body: `username=${params.username}&password=${params.password}&grant_type=${params.grant_type}`
      }
    )

    return resp
  }

  /**
   * Given a username and password, will fetch the user
   *
   * @param { string } username
   * @returns { Promise<ExtreamAuthUser> }
   *
   */
  public fetchUser (username: string): Promise<ExtreamAuthUser> {
    return this.performFetch<ExtreamAuthUser>(
      `${this.options.auth}/auth/login?username=${username}`,
      {
        method: 'GET',
        headers: this.headers
      }
    )
  }
}
