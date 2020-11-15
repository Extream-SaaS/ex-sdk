import { Chat, Rtmp, Poll } from './itinerary-item'
import { GetItineraryResponse, ItineraryItem, ItineraryPayload } from './event'
import { ConsumerTopic } from './topic'
import { InitialResponse, promiseTimeout } from './utils'

export interface RtcConfiguration {
  operators: string[];
  mode: string;
}

export enum ItineraryType {
  Rtmp = 'rtmp',
  Chat = 'chats',
  Poll = 'poll',
}

/**
 * Creates a view of a specific itinerary with all of the itinerary items associated with it.
 * This means you can easily subscribe to chats, videos and polls items that belong to this itinerary.
 */
export class Itinerary {
  private socket: SocketIOClient.Socket
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

  /**
   * Create an instances of all the itinerary items from the payload
   * @param {ItineraryPayload} payload From getting the information for all itineraries
   */
  public async createItineraryItem (payload: ItineraryPayload): Promise<void> {
    const items: ItineraryItem[] = JSON.parse(payload.items as string)
    this.payload = {
      ...payload,
      items
    }
    const rtmpItems = items.filter(i => i.type && i.type === ItineraryType.Rtmp)
    const chatItems = items.filter(i => i.type && i.type === ItineraryType.Chat)
    const pollItems = items.filter(i => i.type && i.type === ItineraryType.Poll)
    this.rtmpFeeds = rtmpItems.map(this.createRtmpItem.bind(this))
    this.chats = chatItems.map(this.createChatItem.bind(this))
    this.polls = pollItems.map(this.createPollItem.bind(this))
  }

  /**
   * Get all the information for a specific itinerary.
   * @param {string} id Get all the information for a specific itinerary. This then creates all the itinerary items.
   */
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
      // TODO The id should be passed into the constructor.
      this.socket.emit(ConsumerTopic.ItineraryGet, {
        id
      })
    })).finally(() => {
      this.socket.removeListener(ConsumerTopic.ItineraryGet, callback)
    })
  }
}
