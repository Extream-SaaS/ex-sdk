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

*Defined in [itinerary.ts:44](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/itinerary.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *[Itinerary](itinerary.md)*

## Properties

###  chats

• **chats**: *[Chat](chat.md)[]* = []

*Defined in [itinerary.ts:43](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/itinerary.ts#L43)*

___

###  payload

• **payload**: *[ItineraryPayload](../interfaces/itinerarypayload.md) | null* = null

*Defined in [itinerary.ts:42](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/itinerary.ts#L42)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [itinerary.ts:41](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/itinerary.ts#L41)*

___

###  videos

• **videos**: *[Video](video.md)[]* = []

*Defined in [itinerary.ts:44](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/itinerary.ts#L44)*

## Methods

### `Private` createChatItem

▸ **createChatItem**(`item`: [ItineraryItem](../interfaces/itineraryitem.md)): *[Chat](chat.md)*

*Defined in [itinerary.ts:55](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/itinerary.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ItineraryItem](../interfaces/itineraryitem.md) |

**Returns:** *[Chat](chat.md)*

___

###  createItineraryItem

▸ **createItineraryItem**(`payload`: [ItineraryPayload](../interfaces/itinerarypayload.md)): *Promise‹void›*

*Defined in [itinerary.ts:60](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/itinerary.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [ItineraryPayload](../interfaces/itinerarypayload.md) |

**Returns:** *Promise‹void›*

___

### `Private` createWebRtcItem

▸ **createWebRtcItem**(`item`: [ItineraryItem](../interfaces/itineraryitem.md)): *[Video](video.md)*

*Defined in [itinerary.ts:50](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/itinerary.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ItineraryItem](../interfaces/itineraryitem.md) |

**Returns:** *[Video](video.md)*

___

###  getItinerary

▸ **getItinerary**(`id`: string): *Promise‹void›*

*Defined in [itinerary.ts:72](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/itinerary.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹void›*
