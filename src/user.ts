/* eslint-disable */
import { ExtreamOptions } from '..'
import { ExtreamAuthUser, UserFields } from '../types/user'

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

export interface RegisterUserRequest {
  username?: string;
  email?: string;
  password: string;
  user_type: string;
  user: UserFields;
}

export default class User {
  public headers: Headers
  options: ExtreamOptions

  constructor (options: ExtreamOptions) {
    this.options = options
    this.headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${this.options.apiKey}`
    })
  }

  private objectToUrlFormData (params: {[ key: string ]: any }): string {
    return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')
  }

  private async performFetch<T> (
    url: string,
    options: RequestInit | undefined
  ): Promise<T> {
    const resp = await fetch(url, options)
    if (!resp.ok) {
      throw resp
    }
    return resp.json()
  }

  public async registerUser (params: RegisterUserRequest) {
    const user = await this.performFetch(
      `${this.options.auth}/auth/register`,
        {
          method: 'POST',
          headers: this.headers,
          body: this.objectToUrlFormData({
            ...params,
            user: JSON.stringify(params.user)
          })
        }
    )
    return user
  }

  /**
   * Try and fetch a user and see weather they exist or not
   * @param {string} username the username to check if it exists or not
   */
  public async fetchUser (username: string): Promise<ExtreamAuthUser | null> {
    try {
      const user = await this.performFetch<ExtreamAuthUser>(
        `${this.options.auth}/auth/login?username=${username}`,
        {
          method: 'GET',
          headers: this.headers
        }
      )
      return user
    } catch (e) {
      if (e.status === 404) return null
      throw e
    }
  }

  /**
   * Given a username and password, will authenticate the user against the ExtreamClient
   *
   * @param { string } username
   * @param { string } password
   * @returns { Promise<AuthenticationResponse> }
   *
   */
  public async login (
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
        body: this.objectToUrlFormData(params)
      }
    )

    return resp
  }
}
