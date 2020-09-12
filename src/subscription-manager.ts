/* eslint-disable */
export default class SubscriptionManager {
  private socket: SocketIOClient.Socket
  private listeners: { key: string, listener: (...args: any[]) => void }[] = []

  constructor (socket: SocketIOClient.Socket) {
    this.socket = socket
  }

  addSubscription (event: string, callback: (...args: any[]) => void): void {
    this.listeners.push({
      key: event,
      listener: callback
    })
    this.socket.on(event, callback)
  }

  removeAllSubscriptions (): void {
    this.listeners.forEach(({ key, listener }) => {
      this.socket.removeEventListener(key, listener)
    })
  }
}
