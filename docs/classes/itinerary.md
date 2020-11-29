[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [Itinerary](itinerary.md)

# Class: Itinerary

Creates a view of a specific itinerary with all of the itinerary items associated with it.
This means you can easily subscribe to chats, videos and polls items that belong to this itinerary.

## Hierarchy

* **Itinerary**

## Index

### Constructors

* [constructor](itinerary.md#constructor)

### Properties

* [chats](itinerary.md#chats)
* [options](itinerary.md#private-options)
* [payload](itinerary.md#payload)
* [polls](itinerary.md#polls)
* [rtmpFeeds](itinerary.md#rtmpfeeds)
* [socket](itinerary.md#private-socket)
* [webRtcItems](itinerary.md#webrtcitems)

### Methods

* [createChatItem](itinerary.md#private-createchatitem)
* [createItineraryItem](itinerary.md#createitineraryitem)
* [createPollItem](itinerary.md#private-createpollitem)
* [createRtmpItem](itinerary.md#private-creatertmpitem)
* [createWebRtcItem](itinerary.md#private-createwebrtcitem)
* [getItinerary](itinerary.md#getitinerary)

## Constructors

###  constructor

\+ **new Itinerary**(`socket`: Socket, `options`: [ExtreamOptions](../interfaces/extreamoptions.md)): *[Itinerary](itinerary.md)*

*Defined in [itinerary.ts:46](https://github.com/Extream-SaaS/ex-sdk/blob/775f75c/src/itinerary.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`options` | [ExtreamOptions](../interfaces/extreamoptions.md) |

**Returns:** *[Itinerary](itinerary.md)*

## Properties

###  chats

• **chats**: *[Chat](chat.md)[]* = []

*Defined in [itinerary.ts:34](https://github.com/Extream-SaaS/ex-sdk/blob/775f75c/src/itinerary.ts#L34)*

All the chat items related to the itinerary

___

### `Private` options

• **options**: *[ExtreamOptions](../interfaces/extreamoptions.md)*

*Defined in [itinerary.ts:25](https://github.com/Extream-SaaS/ex-sdk/blob/775f75c/src/itinerary.ts#L25)*

___

###  payload

• **payload**: *[ItineraryPayload](../interfaces/itinerarypayload.md) | null* = null

*Defined in [itinerary.ts:30](https://github.com/Extream-SaaS/ex-sdk/blob/775f75c/src/itinerary.ts#L30)*

All the information relating to the itinerary. This is populated after calling `getItinerary`.

___

###  polls

• **polls**: *[Poll](poll.md)[]* = []

*Defined in [itinerary.ts:42](https://github.com/Extream-SaaS/ex-sdk/blob/775f75c/src/itinerary.ts#L42)*

All the poll items related to the itinerary

___

###  rtmpFeeds

• **rtmpFeeds**: *[Rtmp](rtmp.md)[]* = []

*Defined in [itinerary.ts:38](https://github.com/Extream-SaaS/ex-sdk/blob/775f75c/src/itinerary.ts#L38)*

All the RTMP items related to the itinerary

___

### `Private` socket

• **socket**: *Socket*

*Defined in [itinerary.ts:24](https://github.com/Extream-SaaS/ex-sdk/blob/775f75c/src/itinerary.ts#L24)*

___

###  webRtcItems

• **webRtcItems**: *[WebRtc](webrtc.md)[]* = []

*Defined in [itinerary.ts:46](https://github.com/Extream-SaaS/ex-sdk/blob/775f75c/src/itinerary.ts#L46)*

All the web rtc items related to the itinerary

## Methods

### `Private` createChatItem

▸ **createChatItem**(`item`: [ItineraryItem](itineraryitem.md)): *[Chat](chat.md)*

*Defined in [itinerary.ts:58](https://github.com/Extream-SaaS/ex-sdk/blob/775f75c/src/itinerary.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ItineraryItem](itineraryitem.md) |

**Returns:** *[Chat](chat.md)*

___

###  createItineraryItem

▸ **createItineraryItem**(`payload`: [ItineraryPayload](../interfaces/itinerarypayload.md)): *Promise‹void›*

*Defined in [itinerary.ts:77](https://github.com/Extream-SaaS/ex-sdk/blob/775f75c/src/itinerary.ts#L77)*

Create an instances of all the itinerary items from the payload

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`payload` | [ItineraryPayload](../interfaces/itinerarypayload.md) | From getting the information for all itineraries  |

**Returns:** *Promise‹void›*

___

### `Private` createPollItem

▸ **createPollItem**(`item`: [ItineraryItem](itineraryitem.md)): *[Poll](poll.md)*

*Defined in [itinerary.ts:63](https://github.com/Extream-SaaS/ex-sdk/blob/775f75c/src/itinerary.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ItineraryItem](itineraryitem.md) |

**Returns:** *[Poll](poll.md)*

___

### `Private` createRtmpItem

▸ **createRtmpItem**(`item`: [ItineraryItem](itineraryitem.md)): *[Rtmp](rtmp.md)*

*Defined in [itinerary.ts:53](https://github.com/Extream-SaaS/ex-sdk/blob/775f75c/src/itinerary.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ItineraryItem](itineraryitem.md) |

**Returns:** *[Rtmp](rtmp.md)*

___

### `Private` createWebRtcItem

▸ **createWebRtcItem**(`item`: [ItineraryItem](itineraryitem.md)): *[WebRtc](webrtc.md)*

*Defined in [itinerary.ts:68](https://github.com/Extream-SaaS/ex-sdk/blob/775f75c/src/itinerary.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ItineraryItem](itineraryitem.md) |

**Returns:** *[WebRtc](webrtc.md)*

___

###  getItinerary

▸ **getItinerary**(`id`: string): *Promise‹void›*

*Defined in [itinerary.ts:97](https://github.com/Extream-SaaS/ex-sdk/blob/775f75c/src/itinerary.ts#L97)*

Get all the information for a specific itinerary.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Get all the information for a specific itinerary. This then creates all the itinerary items.  |

**Returns:** *Promise‹void›*
