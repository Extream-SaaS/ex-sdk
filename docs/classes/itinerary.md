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
* [socket](itinerary.md#private-socket)
* [videos](itinerary.md#videos)

### Methods

* [createChatItem](itinerary.md#private-createchatitem)
* [createItineraryItem](itinerary.md#createitineraryitem)
* [createWebRtcItem](itinerary.md#private-createwebrtcitem)
* [getItinerary](itinerary.md#getitinerary)

## Constructors

###  constructor

\+ **new Itinerary**(`socket`: Socket): *[Itinerary](itinerary.md)*

*Defined in [itinerary.ts:36](https://github.com/Extream-SaaS/ex-sdk/blob/84845a8/src/itinerary.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *[Itinerary](itinerary.md)*

## Properties

###  chats

• **chats**: *[Chat](chat.md)[]* = []

*Defined in [itinerary.ts:34](https://github.com/Extream-SaaS/ex-sdk/blob/84845a8/src/itinerary.ts#L34)*

___

###  payload

• **payload**: *[ItineraryPayload](../interfaces/itinerarypayload.md) | null* = null

*Defined in [itinerary.ts:33](https://github.com/Extream-SaaS/ex-sdk/blob/84845a8/src/itinerary.ts#L33)*

___

###  polls

• **polls**: *[Poll](poll.md)[]* = []

*Defined in [itinerary.ts:36](https://github.com/Extream-SaaS/ex-sdk/blob/84845a8/src/itinerary.ts#L36)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [itinerary.ts:32](https://github.com/Extream-SaaS/ex-sdk/blob/84845a8/src/itinerary.ts#L32)*

___

###  videos

• **videos**: *[Video](video.md)[]* = []

*Defined in [itinerary.ts:35](https://github.com/Extream-SaaS/ex-sdk/blob/84845a8/src/itinerary.ts#L35)*

## Methods

### `Private` createChatItem

▸ **createChatItem**(`item`: [ItineraryItem](../interfaces/itineraryitem.md)): *[Chat](chat.md)*

*Defined in [itinerary.ts:47](https://github.com/Extream-SaaS/ex-sdk/blob/84845a8/src/itinerary.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ItineraryItem](../interfaces/itineraryitem.md) |

**Returns:** *[Chat](chat.md)*

___

###  createItineraryItem

▸ **createItineraryItem**(`payload`: [ItineraryPayload](../interfaces/itinerarypayload.md)): *Promise‹void›*

*Defined in [itinerary.ts:52](https://github.com/Extream-SaaS/ex-sdk/blob/84845a8/src/itinerary.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [ItineraryPayload](../interfaces/itinerarypayload.md) |

**Returns:** *Promise‹void›*

___

### `Private` createWebRtcItem

▸ **createWebRtcItem**(`item`: [ItineraryItem](../interfaces/itineraryitem.md)): *[Video](video.md)*

*Defined in [itinerary.ts:42](https://github.com/Extream-SaaS/ex-sdk/blob/84845a8/src/itinerary.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ItineraryItem](../interfaces/itineraryitem.md) |

**Returns:** *[Video](video.md)*

___

###  getItinerary

▸ **getItinerary**(`id`: string): *Promise‹void›*

*Defined in [itinerary.ts:64](https://github.com/Extream-SaaS/ex-sdk/blob/84845a8/src/itinerary.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹void›*
