import AdminItineraries from './admin/admin-itineraries'
import { AdminItinerary } from './admin/admin-itinerary'
import { ClientTopic } from './topic'
import { InitialResponse, promiseTimeout } from './utils'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SendNoticeResponse {}
export interface SendNoticeRequest {
  /**
   * The event id to send the message to
   */
  event: string,
  /**
   * Filter this message to specific itinerary in a specific event
   */
  itinerary?: string,
  /**
   * Filter this message to specific page in a specific event
   */
  page?: string,
  /**
   * Message information
   */
  message: {
   /**
   * The text off the message to display to users (supports markdown)
   */
    text: string
  }
}

/**
 * The admin class can be used to manage the itineraries, polls and notices for a specific event.
 */
export class Admin {
  private socket: SocketIOClient.Socket;
  /**
   * Create an instance of the admin sdk
   */
  constructor (socket: SocketIOClient.Socket) {
    this.socket = socket
  }

  /**
   * The Id of the event to get all the itineraries for
   *
   * @param { string } event
   * @returns { AdminItineraries }
   */
  async getItineraries (event: string): Promise<AdminItineraries> {
    const itinerary = new AdminItineraries(this.socket, event)
    await itinerary.getAll()
    return itinerary
  }

  /**
   * The Id of the itinerary to get
   *
   * @param { string } id
   * @returns { AdminItineraries }
   */
  async getItinerary (id: string): Promise<AdminItinerary> {
    const itinerary = new AdminItinerary(this.socket, id)
    await itinerary.get()
    return itinerary
  }

  /**
   * Send a notice (or voice of god message) to everyone at the event
   *
   * @param { SendNoticeRequest } request Message and filters to apply to the message to be sent
   * @returns { Promise<void> }
   */
  sendNotice (request: SendNoticeRequest): Promise<void> {
    let callback: (resp: InitialResponse | SendNoticeResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: InitialResponse | SendNoticeResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          resolve()
        }
      }
      this.socket.on(ClientTopic.NoticeSend, callback)
      this.socket.emit(ClientTopic.NoticeSend, request)
    })).finally(() => {
      this.socket.removeListener(ClientTopic.NoticeSend, callback)
    })
  }
}
