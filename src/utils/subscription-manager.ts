/**
 * Manages a list of subscriptions, holding references to the listeners attached to allow classes to clean
 * up all the listeners they setup easily.
 *
 * Consumers of this class should create their own subscription managers in constructors and expose a destroy method
 */
export class SubscriptionManager {
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
   * Remove an event subscription
   * @param {string} event event name
   */
  removeSubscription (event: string): void {
    const ind: number = this.listeners.findIndex(({ key }) => {
      return key === event
    });
    if (ind !== -1) {
      this.socket.removeEventListener(
        this.listeners[ind].key,
        this.listeners[ind].listener
      );
      this.listeners.splice(ind, 1);
    }
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
