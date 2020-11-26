import { AuthenticationResponse } from './user'

export const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY'
export const REFRESH_TOKEN_KEY = 'REFRESH_TOKEN_KEY'

export enum PersistanceType {
  None = 'NONE',
  Cookie = 'COOKIE',
}

export interface IPersistance {
  setTokens (loginResponse: AuthenticationResponse): void
  getTokens (): [string | undefined, string | undefined]
  clear (): void
}

export class CookiePersistance implements IPersistance {
  private setCookie (name: string, value: string, expiry: string) {
    const expires = 'expires=' + new Date(expiry).toUTCString()
    document.cookie = `${name}=${value}; ${expires};`
  }

  private getCookie (name: string): undefined | string {
    const keyValuePair = decodeURIComponent(document.cookie)
      .split(';')
      .map(
        v => v.split('=')
          .map(
            (s) => s.trim()
          )
      )
      .find(([key]) => key === name)
    if (keyValuePair) {
      return keyValuePair[1]
    }
  }

  setTokens (loginResponse: AuthenticationResponse): void {
    this.setCookie(ACCESS_TOKEN_KEY, loginResponse.accessToken, loginResponse.accessTokenExpiresAt)
    this.setCookie(REFRESH_TOKEN_KEY, loginResponse.refreshToken, loginResponse.refreshTokenExpiresAt)
  }

  getTokens (): [string | undefined, string | undefined] {
    const accessToken = this.getCookie(ACCESS_TOKEN_KEY)
    const refreshToken = this.getCookie(REFRESH_TOKEN_KEY)
    return [accessToken, refreshToken]
  }

  clear (): void {
    const allCookies = document.cookie.split(';')
    for (const cookie of allCookies) {
      document.cookie = `${cookie}=;expires=${new Date(0).toUTCString()}"`
    }
  }
}

export class PersistanceFactory {
  private registry: { [key in PersistanceType]: IPersistance | null } = {
    [PersistanceType.None]: null,
    [PersistanceType.Cookie]: new CookiePersistance()
  }

  get (type: PersistanceType): IPersistance | null {
    return this.registry[type]
  }
}
