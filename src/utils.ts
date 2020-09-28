export interface InitialResponse {
  /**
   * Error message. Present if sending failed
   */
  error: string;
  /**
   * The id of the message
   */
  messageId: string;
  status: number;
  topic: string;
}

// Events by organization
export interface ExtreamOptions {
  auth: string;
  gateway: string;
  apiKey: string;
}

export interface TimeStamp {
  _seconds: number;
  _nanoseconds: number;
}

export const promiseTimeout = <T>(promise: Promise<T>): Promise<T> => new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Response not received within timeout'))
  }, 10000)
  return promise
    .then((resp: T) => resolve(resp))
    .catch((e) => reject(e))
})
