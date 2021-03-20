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
* [subscriptionManager](itinerary.md#private-subscriptionmanager)

### Accessors

* [chatItems](itinerary.md#chatitems)
* [pollItems](itinerary.md#pollitems)
* [rtmpItems](itinerary.md#rtmpitems)

### Methods

* [createItineraryItem](itinerary.md#createitineraryitem)
* [destroy](itinerary.md#destroy)
* [setupUpdateListeners](itinerary.md#private-setupupdatelisteners)

## Constructors

###  constructor

\+ **new Itinerary**(`socket`: Socket, `id`: string): *[Itinerary](itinerary.md)*

*Defined in [itinerary.ts:31](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/itinerary.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`id` | string |

**Returns:** *[Itinerary](itinerary.md)*

## Properties

###  id

• **id**: *string | null* = null

*Defined in [itinerary.ts:25](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/itinerary.ts#L25)*

The id of the current itinerary item

___

###  items

• **items**: *([Chat](chat.md) | [Poll](poll.md) | [Rtmp](rtmp.md) | [WebRtc](webrtc.md))[]* = []

*Defined in [itinerary.ts:31](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/itinerary.ts#L31)*

___

###  payload

• **payload**: *[ItineraryPayload](../interfaces/itinerarypayload.md) | null* = null

*Defined in [itinerary.ts:29](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/itinerary.ts#L29)*

All the information relating to the itinerary. This is populated after calling `getItinerary`.

___

### `Private` socket

• **socket**: *Socket*

*Defined in [itinerary.ts:19](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/itinerary.ts#L19)*

___

### `Private` subscriptionManager

• **subscriptionManager**: *[SubscriptionManager](subscriptionmanager.md)*

*Defined in [itinerary.ts:20](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/itinerary.ts#L20)*

## Accessors

###  chatItems

• **get chatItems**(): *[Chat](chat.md)[]*

*Defined in [itinerary.ts:44](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/itinerary.ts#L44)*

**Returns:** *[Chat](chat.md)[]*

___

###  pollItems

• **get pollItems**(): *[Poll](poll.md)[]*

*Defined in [itinerary.ts:48](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/itinerary.ts#L48)*

**Returns:** *[Poll](poll.md)[]*

___

###  rtmpItems

• **get rtmpItems**(): *[Rtmp](rtmp.md)[]*

*Defined in [itinerary.ts:40](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/itinerary.ts#L40)*

**Returns:** *[Rtmp](rtmp.md)[]*

## Methods

###  createItineraryItem

▸ **createItineraryItem**(`payload`: [ItineraryPayload](../interfaces/itinerarypayload.md)): *Promise‹void›*

*Defined in [itinerary.ts:56](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/itinerary.ts#L56)*

Create an instances of all the itinerary items from the payload

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`payload` | [ItineraryPayload](../interfaces/itinerarypayload.md) | From getting the information for all itineraries  |

**Returns:** *Promise‹void›*

___

###  destroy

▸ **destroy**(): *void*

*Defined in [itinerary.ts:84](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/itinerary.ts#L84)*

Cleans up all listeners for this class. Call this when you no longer need access to this events information to ensure memory leaks are not caused.

**Returns:** *void*

___

### `Private` setupUpdateListeners

▸ **setupUpdateListeners**(): *Promise‹void›*

*Defined in [itinerary.ts:66](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/itinerary.ts#L66)*

**Returns:** *Promise‹void›*
