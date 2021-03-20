import { ItineraryItem } from '../event'
import { Chat } from './chat'
import { Poll } from './poll'
import { Rtmp } from './rtmp'
import { ItineraryType } from './utils'
import { WebRtc } from './webrtc'

const registry = {
  [ItineraryType.Chat]: Chat,
  [ItineraryType.Poll]: Poll,
  [ItineraryType.Rtmp]: Rtmp,
  [ItineraryType.WebRtc]: WebRtc
}

export class ItineraryItemFactory {
  static getItem (socket: SocketIOClient.Socket, itineraryItem: ItineraryItem, data?: any): (Chat | Poll | Rtmp | WebRtc) {
    const ItemConstructor = registry[itineraryItem.type]
    return new ItemConstructor(socket, itineraryItem.id, data)
  }
}
