import { ItineraryItem } from '../event'
import { Itinerary } from '../itinerary'
import { Chat } from './chat'
import { Poll } from './poll'
import { Rtmp } from './rtmp'
import { ItineraryType } from './utils'
import { WebRtc } from './webrtc'

const registry = {
  [ItineraryType.Chat]: Chat,
  [ItineraryType.Poll]: Poll,
  [ItineraryType.Rtmp]: Rtmp,
  [ItineraryType.WebRtc]: WebRtc,
  [ItineraryType.Itinerary]: Itinerary
}

export type ItinerarySubItem = Chat | Poll | Rtmp | WebRtc | Itinerary

export class ItineraryItemFactory {
  static getItem (socket: SocketIOClient.Socket, itineraryItem: ItineraryItem, data?: any): ItinerarySubItem {
    const ItemConstructor = registry[itineraryItem.type]
    return new ItemConstructor(socket, itineraryItem.id, data)
  }
}
