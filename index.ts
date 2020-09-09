import io from 'socket.io-client'
import { ExtreamAuthUser } from './types/user'
import type { EmitTopic, SubscribeTopic } from './types/topic'

// Authentication types
export interface AuthenticationParams {
  username: string
  password: string
  'grant_type': string
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
  auth: string
  gateway: string
  apiKey: string
}

/**
 * The Extream websocket and http communication client.
 *
 * Only one of these should ever be created per application instance and shared across the app to avoid memory leaks.
 */
export class ExtreamClient {
  public socket: SocketIOClient.Socket | null = null;
  private options: ExtreamOptions;
  private headers: Headers;

  constructor (options: ExtreamOptions) {
    this.options = options
    this.headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${this.options.apiKey}`
    })
  }

  private async performFetch (
    url: string,
    options: RequestInit | undefined
  ): Promise<any> {
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
  connect (accessToken: string): void {
    this.socket = io(`${this.options.gateway}?x-auth=${accessToken}`)
  }

  /**
   * Returns the emit method from the websocket instance
   *
   * @param { EmitTopic } event
   * @param { any } payload
   * @returns { any }
   *
   */
  public emit (topic: EmitTopic, payload: any): any {
    if (!this.socket) {
      throw new Error('No socket connection found. Try connecting first. See method ExtreamClient.connect()')
    }
    return this.socket?.emit(topic, payload)
  }

  /**
   * Returns the on method from the websocket instance
   *
   * @param { SubscribeTopic } event
   * @param { any } cb
   * @returns { any }
   *
   */
  public on (topic: SubscribeTopic, cb: any): any {
    if (!this.socket) {
      throw new Error('No socket connection found. Try connecting first. See method ExtreamClient.connect()')
    }
    return this.socket?.on(topic, cb)
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

    const resp: AuthenticationResponse = await this.performFetch(
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
    return this.performFetch(
      `${this.options.auth}/auth/login?username=${username}`,
      {
        method: 'GET',
        headers: this.headers
      }
    )
  }
}
