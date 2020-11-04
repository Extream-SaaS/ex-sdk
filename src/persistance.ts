import { AuthenticationResponse } from './user'

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
  private setCookie (cname: string, cvalue: string, expiry: Date) {
    const expires = 'expires=' + expiry.toUTCString()
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
  }

  setTokens (loginResponse: AuthenticationResponse): void {
    throw new Error('Method not implemented.')
  }

  getTokens (): void {
    throw new Error('Method not implemented.')
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
