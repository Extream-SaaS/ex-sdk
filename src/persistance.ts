import { AuthenticationResponse } from './user'

export const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY'
export const REFRESH_TOKEN_KEY = 'REFRESH_TOKEN_KEY'

export enum PersistanceType {
  None = 'NONE',
  Cookie = 'COOKIE',
  // LocalStorage = 'LOCAL_STORAGE'
}

export interface IPersistance {
  setTokens (loginResponse: AuthenticationResponse): void
  getTokens (): void
}

export class CookiePersistance implements IPersistance {
  private setCookie (name: string, value: string, expiry: string) {
    const expires = 'expires=' + new Date(expiry).toUTCString()
    document.cookie = `${name}=${value};${expires};secure=true;samesite=strict`
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
}

// class LocalStoragePersistance implements IPersistance {
//   setTokens (): void {
//     throw new Error('Method not implemented.')
//   }

//   getTokens (): void {
//     throw new Error('Method not implemented.')
//   }
// }

export default class PersistanceFactory {
  private registry: { [key in PersistanceType]: IPersistance | null } = {
    [PersistanceType.None]: null,
    [PersistanceType.Cookie]: new CookiePersistance()
  }

  get (type: PersistanceType): IPersistance | null {
    return this.registry[type]
  }
}
