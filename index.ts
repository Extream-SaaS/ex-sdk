import io from 'socket.io-client'

// User types
export interface UserFields {
  firstName: string;
  lastName: string;
  company: string;
  region: string;
  job: string;
}

export interface ExtreamUser {
  id: string;
  username: string;
  email: string;
  fields: UserFields;
  user_type: string;
}

// Authentication types
export type AuthenticationParams = {
  username: string
  password: string
  'grant_type': string
}

export type AuthenticationResponse = {
  accessToken: string;
  accessTokenExpiresAt: string;
  id: string;
  refreshToken: string;
  refreshTokenExpiresAt: string;
}

export class ExtreamClient {
  options: Options;
  io: SocketIOClientStatic;
  private headers: Headers;

  constructor (options: Options) {
    this.options = options
    this.io = io
    this.headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${this.options.apiKey}`
    })
  }

  /**
   * Given a username and password, will authenticate the user against the ExtreamClient
   *
   * @param { string } username
   * @param { string } password
   * @returns { Promise<AuthenticationResponse> }
   *
   */
  public async authenticate (username: string, password: string): Promise<AuthenticationResponse> {
    const params = {
      username,
      password,
      grant_type: 'password'
    }

    try {
      const auth = await fetch(
        `${this.options.auth}/auth/login`,
        {
          method: 'POST',
          headers: this.headers,
          body: `username=${params.username}&password=${params.password}&grant_type=${params.grant_type}`
        }
      )
      const resp = await auth.json()
      return resp
    } catch (error) {
      return error
    }
  }

  /**
   * Given a username and password, will fetch the user
   *
   * @param { string } username
   * @returns { Promise<ExtreamUser> }
   *
   */
  public async fetchUser (username: string): Promise<ExtreamUser> {
    try {
      const auth = await fetch(
        `${this.options.auth}/auth/login?username=${username}`,
        {
          method: 'GET',
          headers: this.headers
        }
      )
      const resp = await auth.json()
      return resp
    } catch (error) {
      return error
    }
  }
}
