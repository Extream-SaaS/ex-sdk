/* eslint-disable */
export class Client {
  private socket: SocketIOClient.Socket | null = null;
  /**
   * Create an instance of the admin sdk
   */
  constructor (socket: SocketIOClient.Socket) {
    this.socket = socket
  }
}
