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

* [id](itinerary.md#id)
* [items](itinerary.md#items)
* [payload](itinerary.md#payload)
* [socket](itinerary.md#private-socket)

### Accessors

* [chatItems](itinerary.md#chatitems)
* [pollItems](itinerary.md#pollitems)
* [rtmpItems](itinerary.md#rtmpitems)

### Methods

* [createItineraryItem](itinerary.md#createitineraryitem)
* [getItinerary](itinerary.md#getitinerary)

## Constructors

###  constructor

\+ **new Itinerary**(`socket`: Socket, `id`: string): *[Itinerary](itinerary.md)*

*Defined in [itinerary.ts:29](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`id` | string |

**Returns:** *[Itinerary](itinerary.md)*

## Properties

###  id

• **id**: *string | null* = null

*Defined in [itinerary.ts:23](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary.ts#L23)*

The id of the current itinerary item

___

###  items

• **items**: *([Chat](chat.md) | [Poll](poll.md) | [Rtmp](rtmp.md) | [WebRtc](webrtc.md))[]* = []

*Defined in [itinerary.ts:29](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary.ts#L29)*

___

###  payload

• **payload**: *[ItineraryPayload](../interfaces/itinerarypayload.md) | null* = null

*Defined in [itinerary.ts:27](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary.ts#L27)*

All the information relating to the itinerary. This is populated after calling `getItinerary`.

___

### `Private` socket

• **socket**: *Socket*

*Defined in [itinerary.ts:18](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary.ts#L18)*

## Accessors

###  chatItems

• **get chatItems**(): *[Chat](chat.md)[]*

*Defined in [itinerary.ts:41](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary.ts#L41)*

**Returns:** *[Chat](chat.md)[]*

___

###  pollItems

• **get pollItems**(): *[Poll](poll.md)[]*

*Defined in [itinerary.ts:45](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary.ts#L45)*

**Returns:** *[Poll](poll.md)[]*

___

###  rtmpItems

• **get rtmpItems**(): *[Rtmp](rtmp.md)[]*

*Defined in [itinerary.ts:37](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary.ts#L37)*

**Returns:** *[Rtmp](rtmp.md)[]*

## Methods

###  createItineraryItem

▸ **createItineraryItem**(`payload`: [ItineraryPayload](../interfaces/itinerarypayload.md)): *Promise‹void›*

*Defined in [itinerary.ts:53](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary.ts#L53)*

Create an instances of all the itinerary items from the payload

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`payload` | [ItineraryPayload](../interfaces/itinerarypayload.md) | From getting the information for all itineraries  |

**Returns:** *Promise‹void›*

___

###  getItinerary

▸ **getItinerary**(): *Promise‹void›*

*Defined in [itinerary.ts:66](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary.ts#L66)*

Get all the information for a specific itinerary.

**Returns:** *Promise‹void›*
