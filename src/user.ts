import { ExtreamOptions, promiseTimeout } from './utils'

export interface UserFields {
  firstName?: string;
  lastName?: string;
  company?: string;
  region?: string;
  job?: string;
}

export interface ExtreamAuthUser {
  username: string;
  password: string;
  user_type: string;
}

export interface ExtreamUser {
  id: string;
  email: string;
  fields: UserFields;
  username: string;
  user_type: string;
}

// Authentication types
export interface AuthenticationParams {
  username: string;
  password: string;
  eventId?: string;
  'grant_type': string;
}

export interface AuthenticationResponse {
  accessToken: string;
  accessTokenExpiresAt: string;
  id: string;
  refreshToken: string;
  refreshTokenExpiresAt: string;
}

export enum UserType {
  Actor = 'actor',
  Admin = 'admin',
  Audience = 'audience',
  Crew = 'crew',
  Chief = 'chief',
}

export interface RegisterUserRequest {
  username?: string;
  email?: string;
  password: string;
  user_type: UserType;
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

  /**
   * Utility to turn object into url encoded form data
   * @param params
   */
  private objectToUrlFormData (params: {[ key: string ]: any }): string {
    return Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')
  }

  /**
   * Utility to perform a generic fetch request
   * @param url Url to fetch to
   * @param options Fetch options
   */
  private async performFetch<T> (
    url: string,
    options: RequestInit | undefined
  ): Promise<T> {
    return promiseTimeout<T>(
      fetch(url, options)
        .then((resp: Response) => {
          if (!resp.ok) {
            throw resp
          }
          return resp.json()
        })
    )
  }

  /**
   * Register a new user
   * @param { RegisterUserRequest } params Use information
   */
  public async registerUser (params: RegisterUserRequest): Promise<ExtreamUser> {
    const user = await this.performFetch<ExtreamUser>(
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
    password: string,
    eventId?: string
  ): Promise<AuthenticationResponse> {
    const params = {
      username,
      password,
      eventId,
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
