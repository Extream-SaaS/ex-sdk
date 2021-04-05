[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [Itinerary](itinerary.md)

# Class: Itinerary

Creates a view of a specific itinerary with all of the itinerary items associated with it.
This means you can easily subscribe to chats, videos and polls items that belong to this itinerary.

## Hierarchy

* **Itinerary**

## Implements

* [IEntity](../interfaces/ientity.md)
* [IDestroyable](../interfaces/idestroyable.md)

## Index

### Constructors

* [constructor](itinerary.md#constructor)

### Properties

* [id](itinerary.md#id)
* [items](itinerary.md#items)
* [payload](itinerary.md#payload)
* [socket](itinerary.md#private-socket)
* [subItems](itinerary.md#subitems)
* [subscriptionManager](itinerary.md#private-subscriptionmanager)
* [type](itinerary.md#type)

### Accessors

* [chatItems](itinerary.md#chatitems)
* [children](itinerary.md#children)
* [itineraryItems](itinerary.md#itineraryitems)
* [pollItems](itinerary.md#pollitems)
* [rtmpItems](itinerary.md#rtmpitems)

### Methods

* [createItineraryItem](itinerary.md#createitineraryitem)
* [destroy](itinerary.md#destroy)
* [get](itinerary.md#get)
* [setupUpdateListeners](itinerary.md#private-setupupdatelisteners)

## Constructors

###  constructor

\+ **new Itinerary**(`socket`: Socket, `id`: string): *[Itinerary](itinerary.md)*

*Defined in [consumer/itinerary.ts:32](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/consumer/itinerary.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`id` | string |

**Returns:** *[Itinerary](itinerary.md)*

## Properties

###  id

• **id**: *string | null* = null

*Defined in [consumer/itinerary.ts:25](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/consumer/itinerary.ts#L25)*

The id of the current itinerary item

___

###  items

• **items**: *[ItinerarySubItem](../globals.md#itinerarysubitem)[]* = []

*Defined in [consumer/itinerary.ts:31](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/consumer/itinerary.ts#L31)*

___

###  payload

• **payload**: *[ItineraryPayload](../interfaces/itinerarypayload.md) | null* = null

*Defined in [consumer/itinerary.ts:29](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/consumer/itinerary.ts#L29)*

All the information relating to the itinerary. This is populated after calling `getItinerary`.

___

### `Private` socket

• **socket**: *Socket*

*Defined in [consumer/itinerary.ts:19](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/consumer/itinerary.ts#L19)*

___

###  subItems

• **subItems**: *[Itinerary](itinerary.md)[]* = []

*Defined in [consumer/itinerary.ts:32](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/consumer/itinerary.ts#L32)*

___

### `Private` subscriptionManager

• **subscriptionManager**: *[SubscriptionManager](subscriptionmanager.md)*

*Defined in [consumer/itinerary.ts:20](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/consumer/itinerary.ts#L20)*

___

###  type

• **type**: *[ItineraryType](../enums/itinerarytype.md)* = ItineraryType.Itinerary

*Defined in [consumer/itinerary.ts:30](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/consumer/itinerary.ts#L30)*

## Accessors

###  chatItems

• **get chatItems**(): *[Chat](chat.md)[]*

*Defined in [consumer/itinerary.ts:49](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/consumer/itinerary.ts#L49)*

**Returns:** *[Chat](chat.md)[]*

___

###  children

• **get children**(): *[ItinerarySubItem](../globals.md#itinerarysubitem)[]*

*Defined in [consumer/itinerary.ts:41](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/consumer/itinerary.ts#L41)*

**Returns:** *[ItinerarySubItem](../globals.md#itinerarysubitem)[]*

___

###  itineraryItems

• **get itineraryItems**(): *[Itinerary](itinerary.md)[]*

*Defined in [consumer/itinerary.ts:57](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/consumer/itinerary.ts#L57)*

**Returns:** *[Itinerary](itinerary.md)[]*

___

###  pollItems

• **get pollItems**(): *[Poll](poll.md)[]*

*Defined in [consumer/itinerary.ts:53](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/consumer/itinerary.ts#L53)*

**Returns:** *[Poll](poll.md)[]*

___

###  rtmpItems

• **get rtmpItems**(): *[Rtmp](rtmp.md)[]*

*Defined in [consumer/itinerary.ts:45](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/consumer/itinerary.ts#L45)*

**Returns:** *[Rtmp](rtmp.md)[]*

## Methods

###  createItineraryItem

▸ **createItineraryItem**(`payload`: [ItineraryPayload](../interfaces/itinerarypayload.md)): *Promise‹void›*

*Defined in [consumer/itinerary.ts:65](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/consumer/itinerary.ts#L65)*

Create an instances of all the itinerary items from the payload

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`payload` | [ItineraryPayload](../interfaces/itinerarypayload.md) | From getting the information for all itineraries  |

**Returns:** *Promise‹void›*

___

###  destroy

▸ **destroy**(): *void*

*Implementation of [IDestroyable](../interfaces/idestroyable.md)*

*Defined in [consumer/itinerary.ts:96](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/consumer/itinerary.ts#L96)*

Cleans up all listeners for this class. Call this when you no longer need access to this events information to ensure memory leaks are not caused.

**Returns:** *void*

___

###  get

▸ **get**(): *void*

*Defined in [consumer/itinerary.ts:87](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/consumer/itinerary.ts#L87)*

**Returns:** *void*

___

### `Private` setupUpdateListeners

▸ **setupUpdateListeners**(): *Promise‹void›*

*Defined in [consumer/itinerary.ts:74](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/consumer/itinerary.ts#L74)*

**Returns:** *Promise‹void›*
