enum PersistanceType {
  None = 'NONE',
  Cookie = 'COOKIE',
  // LocalStorage = 'LOCAL_STORAGE'
}

interface IPersistance {
  setTokens (): void
  getTokens (): void
}

class CookiePersistance implements IPersistance {
  setTokens (): void {
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
