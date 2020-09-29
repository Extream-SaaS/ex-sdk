import { Chat } from './chat'
import { GetItineraryResponse, ItineraryItem, ItineraryPayload } from './event'
import { ConsumerTopic } from './topic'
import { ExtreamUser } from './user'
import { InitialResponse, promiseTimeout, TimeStamp } from './utils'
import { Video } from './video'

export interface RtcConfiguration {
  operators: string[];
  mode: string;
}

export interface ReadWebRtcResponsePayload {
  id: string;
  addedBy: string;
  itinerary: string;
  title: string;
  addedAt: TimeStamp;
  start_date: TimeStamp;
  configuration: RtcConfiguration;
  type: string;
  end_date: TimeStamp;
}

export interface ReadWebRtcResponse {
  error?: string;
  domain: string;
  action: string;
  command: string;
  payload: ReadWebRtcResponsePayload;
  user: ExtreamUser;
  socketId: string;
}

export enum ItineraryType {
  Rtmp = 'rtmp',
  Chat = 'chats',
}

export class Itinerary {
  private socket: SocketIOClient.Socket
  public payload: ItineraryPayload | null = null
  public chats: Chat[] = []
  public videos: Video[] = []

  constructor (socket: SocketIOClient.Socket) {
    this.socket = socket
  }

  private createWebRtcItem (item: ItineraryItem): Video {
    const rtc = new Video(this.socket, item.id)
    return rtc
  }

  private createChatItem (item: ItineraryItem): Chat {
    const chat = new Chat(this.socket, item.id)
    return chat
  }

  public async createItineraryItem (payload: ItineraryPayload): Promise<void> {
    const items: ItineraryItem[] = JSON.parse(payload.items as string)
    this.payload = {
      ...payload,
      items
    }
    const rtcItems = items.filter(i => i.type && i.type === ItineraryType.Rtmp)
    const chatItems = items.filter(i => i.type && i.type === ItineraryType.Chat)
    this.videos = rtcItems.map(this.createWebRtcItem.bind(this))
    this.chats = chatItems.map(this.createChatItem.bind(this))
  }

  public getItinerary (id: string): Promise<void> {
    let callback: (resp: InitialResponse | GetItineraryResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: InitialResponse | GetItineraryResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          this.createItineraryItem(resp.payload)
          resolve()
        }
      }
      this.socket.on(ConsumerTopic.ItineraryGet, callback)
      this.socket.emit(ConsumerTopic.ItineraryGet, {
        id
      })
    })).finally(() => {
      this.socket.removeListener(ConsumerTopic.ItineraryGet, callback)
    })
  }
}
