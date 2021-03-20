import { Chat, Rtmp, Poll, WebRtc } from './itinerary-item'
import { GetItineraryResponse, ItineraryItem, ItineraryPayload } from './event'
import { ConsumerTopic } from './topic'
import { InitialResponse, promiseTimeout } from './utils'

export interface RtcConfiguration {
  operators: string[];
  mode: string;
}

export enum ItineraryType {
  Rtmp = 'rtmp',
  WebRtc = 'webrtc',
  Chat = 'chats',
  Poll = 'poll',
}

/**
 * Creates a view of a specific itinerary with all of the itinerary items associated with it.
 * This means you can easily subscribe to chats, videos and polls items that belong to this itinerary.
 */
export class Itinerary {
  private socket: SocketIOClient.Socket

  public id: string | null = null
  /**
   * All the information relating to the itinerary. This is populated after calling `getItinerary`.
   */
  public payload: ItineraryPayload | null = null
  /**
   * All the chat items related to the itinerary
   */
  public chats: Chat[] = []
  /**
   * All the RTMP items related to the itinerary
   */
  public rtmpFeeds: Rtmp[] = []
  /**
   * All the poll items related to the itinerary
   */
  public polls: Poll[] = []
  /**
   * All the web rtc items related to the itinerary
   */
  public webRtcItems: WebRtc[] = []

  constructor (socket: SocketIOClient.Socket, id: string /* options: ExtreamOptions */) {
    this.socket = socket
    this.id = id
    // this.options = options
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

  // private createWebRtcItem (item: ItineraryItem): WebRtc {
  //   const poll = new WebRtc(this.socket, item.id, this.options)
  //   return poll
  // }

  /**
   * Create an instances of all the itinerary items from the payload
   * @param {ItineraryPayload} payload From getting the information for all itineraries
   */
  public async createItineraryItem (payload: ItineraryPayload): Promise<void> {
    const items: ItineraryItem[] = payload.items ? JSON.parse(payload.items as string) : []
    this.payload = {
      ...payload,
      items
    }
    const rtmpItems = items.filter(i => i.type && i.type === ItineraryType.Rtmp)
    const chatItems = items.filter(i => i.type && i.type === ItineraryType.Chat)
    const pollItems = items.filter(i => i.type && i.type === ItineraryType.Poll)
    const webRtcItem = items.filter(i => i.type && i.type === ItineraryType.WebRtc)
    this.rtmpFeeds = rtmpItems.map(this.createRtmpItem.bind(this))
    this.chats = chatItems.map(this.createChatItem.bind(this))
    this.polls = pollItems.map(this.createPollItem.bind(this))
    // this.webRtcItems = webRtcItem.map(this.createWebRtcItem.bind(this))
  }

  /**
   * Get all the information for a specific itinerary.
   * @param {string} id Get all the information for a specific itinerary. This then creates all the itinerary items.
   */
  public getItinerary (): Promise<void> {
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
        id: this.id
      })
    })).finally(() => {
      this.socket.removeListener(ConsumerTopic.ItineraryGet, callback)
    })
  }
}
