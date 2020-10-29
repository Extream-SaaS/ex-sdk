import AdminItineraries from './admin/admin-itineraries';
import { AdminItinerary } from './admin/admin-itinerary'
import { ClientTopic } from './topic'
import { InitialResponse, promiseTimeout } from './utils'

// export interface PrimaryContact {
//   id: string;
// }

// export interface CreateOrganizationParams {
//   name: string;
//   website: string;
//   primary_contact: PrimaryContact;
// }

// export interface UpdateOrganizationParams extends CreateOrganizationParams {
//   id: string;
// }

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SendNoticeResponse {}
export interface SendNoticeRequest {
  'event': string,
  'itinerary'?: string,
  'page'?: string,
  'message': {
    'text': string
  }
}

export class Admin {
  private socket: SocketIOClient.Socket;
  /**
   * Create an instance of the admin sdk
   */
  constructor (socket: SocketIOClient.Socket) {
    this.socket = socket
  }

  async getItineraries (event: string): Promise<AdminItineraries> {
    const itinerary = new AdminItineraries(this.socket, event)
    await itinerary.getAll()
    return itinerary
  }

  async getItinerary (id: string): Promise<AdminItinerary> {
    const itinerary = new AdminItinerary(this.socket, id)
    await itinerary.get()
    return itinerary
  }

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
