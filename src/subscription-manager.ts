/**
 * Manages a list of subscriptions, holding references to the listeners attached to allow classes to clean
 * up all the listeners they setup on creation easily.
 *
 * Consumers of this class should create their own subscription managers in constructors and expose a destory method
 */
export default class SubscriptionManager {
  private socket: SocketIOClient.Socket
  private listeners: { key: string, listener: (...args: any[]) => void }[] = []

  constructor (socket: SocketIOClient.Socket) {
    this.socket = socket
  }

  /**
   * List to for an event on the websocket
   * @param {string} event event name
   * @param {(...args: any[]) => void)} callback function to be called on event fire
   */
  addSubscription (event: string, callback: (...args: any[]) => void): void {
    this.listeners.push({
      key: event,
      listener: callback
    })
    this.socket.on(event, callback)
  }

  /**
   * Clean up all subscription the manager has setup
   */
  removeAllSubscriptions (): void {
    this.listeners.forEach(({ key, listener }) => {
      this.socket.removeEventListener(key, listener)
    })
    this.listeners = []
  }
}
