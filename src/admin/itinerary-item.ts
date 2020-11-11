
export interface ItineraryItemPayload {
  id: string;
  type: string;
}

export default class ItineraryItem {
  private socket: SocketIOClient.Socket
  public data: ItineraryItemPayload | null = null
  public id: string

  constructor (socket: SocketIOClient.Socket, id: string) {
    this.socket = socket
    this.id = id
  }

  createItem (payload: ItineraryItemPayload): void {
    this.data = {
      ...payload
    }
  }
}
