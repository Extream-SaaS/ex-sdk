[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [Itinerary](itinerary.md)

# Class: Itinerary

## Hierarchy

* **Itinerary**

## Index

### Constructors

* [constructor](itinerary.md#constructor)

### Properties

* [chats](itinerary.md#chats)
* [payload](itinerary.md#payload)
* [polls](itinerary.md#polls)
* [rtmpFeeds](itinerary.md#rtmpfeeds)
* [socket](itinerary.md#private-socket)

### Methods

* [createChatItem](itinerary.md#private-createchatitem)
* [createItineraryItem](itinerary.md#createitineraryitem)
* [createPollItem](itinerary.md#private-createpollitem)
* [createRtmpItem](itinerary.md#private-creatertmpitem)
* [getItinerary](itinerary.md#getitinerary)

## Constructors

###  constructor

\+ **new Itinerary**(`socket`: Socket): *[Itinerary](itinerary.md)*

*Defined in [itinerary.ts:22](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/itinerary.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *[Itinerary](itinerary.md)*

## Properties

###  chats

• **chats**: *[Chat](chat.md)[]* = []

*Defined in [itinerary.ts:20](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/itinerary.ts#L20)*

___

###  payload

• **payload**: *[ItineraryPayload](../interfaces/itinerarypayload.md) | null* = null

*Defined in [itinerary.ts:19](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/itinerary.ts#L19)*

___

###  polls

• **polls**: *[Poll](poll.md)[]* = []

*Defined in [itinerary.ts:22](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/itinerary.ts#L22)*

___

###  rtmpFeeds

• **rtmpFeeds**: *[Rtmp](rtmp.md)[]* = []

*Defined in [itinerary.ts:21](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/itinerary.ts#L21)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [itinerary.ts:18](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/itinerary.ts#L18)*

## Methods

### `Private` createChatItem

▸ **createChatItem**(`item`: [ItineraryItem](../interfaces/itineraryitem.md)): *[Chat](chat.md)*

*Defined in [itinerary.ts:33](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/itinerary.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ItineraryItem](../interfaces/itineraryitem.md) |

**Returns:** *[Chat](chat.md)*

___

###  createItineraryItem

▸ **createItineraryItem**(`payload`: [ItineraryPayload](../interfaces/itinerarypayload.md)): *Promise‹void›*

*Defined in [itinerary.ts:43](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/itinerary.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [ItineraryPayload](../interfaces/itinerarypayload.md) |

**Returns:** *Promise‹void›*

___

### `Private` createPollItem

▸ **createPollItem**(`item`: [ItineraryItem](../interfaces/itineraryitem.md)): *[Poll](poll.md)*

*Defined in [itinerary.ts:38](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/itinerary.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ItineraryItem](../interfaces/itineraryitem.md) |

**Returns:** *[Poll](poll.md)*

___

### `Private` createRtmpItem

▸ **createRtmpItem**(`item`: [ItineraryItem](../interfaces/itineraryitem.md)): *[Rtmp](rtmp.md)*

*Defined in [itinerary.ts:28](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/itinerary.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ItineraryItem](../interfaces/itineraryitem.md) |

**Returns:** *[Rtmp](rtmp.md)*

___

###  getItinerary

▸ **getItinerary**(`id`: string): *Promise‹void›*

*Defined in [itinerary.ts:57](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/itinerary.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹void›*
