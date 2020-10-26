import { Chat, Rtmp, Poll } from './itinerary-item'
import { GetItineraryResponse, ItineraryItem, ItineraryPayload } from './event'
import { ConsumerTopic } from './topic'
import { InitialResponse, promiseTimeout, SocketResponse, TimeStamp } from './utils'

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

export type ReadWebRtcResponse = SocketResponse<ReadWebRtcResponsePayload>

export enum ItineraryType {
  Rtmp = 'rtmp',
  Chat = 'chats',
  Poll = 'poll',
}

export class Itinerary {
  private socket: SocketIOClient.Socket
  public payload: ItineraryPayload | null = null
  public chats: Chat[] = []
  public videos: Rtmp[] = []
  public polls: Poll[] = []

  constructor (socket: SocketIOClient.Socket) {
    this.socket = socket
  }

  private createRtmpItem (item: ItineraryItem): Rtmp {
    const rtc = new Rtmp(this.socket, item.id)
    return rtc
  }

  private createChatItem (item: ItineraryItem): Chat {
    const chat = new Chat(this.socket, item.id)
    return chat
  }

  private createPollItem (item: ItineraryItem): Poll {
    const poll = new Poll(this.socket, item.id)
    return poll
  }

  public async createItineraryItem (payload: ItineraryPayload): Promise<void> {
    const items: ItineraryItem[] = JSON.parse(payload.items as string)
    this.payload = {
      ...payload,
      items
    }
    const rtcItems = items.filter(i => i.type && i.type === ItineraryType.Rtmp)
    const chatItems = items.filter(i => i.type && i.type === ItineraryType.Chat)
    const pollItems = items.filter(i => i.type && i.type === ItineraryType.Poll)
    this.videos = rtcItems.map(this.createRtmpItem.bind(this))
    this.chats = chatItems.map(this.createChatItem.bind(this))
    this.polls = pollItems.map(this.createPollItem.bind(this))
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
