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
export interface EventsPayload {
  id: number;
  public_id: string;
  name: string;
  website: string;
  start_date: Date;
  end_date: Date;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  parent?: any;
  landing_page?: any;
  organisation: string;
}

export interface EventsByOrganizationResponse {
  domain: string;
  action: string;
  command: string;
  payload: EventsPayload[];
  user: ExtreamUser;
  socketId: string;
}

export interface ExtreamOptions {
  auth: string
  gateway: string
  apiKey: string
}

export class ExtreamClient {
  options: ExtreamOptions;
  io: SocketIOClientStatic;
  private headers: Headers;

  constructor (options: ExtreamOptions) {
    this.options = options
    this.io = io
    this.headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${this.options.apiKey}`
    })
  }

  private async performFetch (url: string, options: RequestInit | undefined): Promise<any> {
    const auth = await fetch(
      url,
      options
    )
    if (!auth.ok) {
      throw new Error(`Response had non ok status code ${auth.status}`)
    }
    return auth.json()
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
