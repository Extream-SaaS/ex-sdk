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

export const promiseTimeout = <T>(promise: Promise<T>): Promise<T> => new Promise((resolve, reject) => {
  setTimeout(reject, 10000)
  resolve(promise)
})
