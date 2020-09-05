// @ts-ignore
import io from 'socket.io-client'

export type options = {
  auth: string
  gateway: string
  apiKey: string
}
export type headers = {
  'Content-Type': string
  Authorization: string
}

export class ExtreamClient {
  options: options;
  io: any
  private headers: headers

  constructor (options: options) {
    this.options = options
    this.io = io
    this.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${this.options.apiKey}`
    }
  }

  /**
   * Given a username and password, will authenticate the user against the ExtreamClient
   *
   * @param { string } username
   * @param { string } password
   * @returns { Promise<any> }
   *
   */
  public async auth (username: string, password: string): Promise<any> {
    try {
      const auth = await fetch(`${this.options.auth}/auth/login?username=${username}`,
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
