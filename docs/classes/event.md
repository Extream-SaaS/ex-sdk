[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [Event](event.md)

# Class: Event

## Hierarchy

* **Event**

## Index

### Constructors

* [constructor](event.md#constructor)

### Properties

* [id](event.md#id)
* [itinerary](event.md#itinerary)
* [notices](event.md#notices)
* [options](event.md#private-options)
* [socket](event.md#private-socket)

### Methods

* [destroy](event.md#destroy)
* [getItineraryInformation](event.md#private-getitineraryinformation)
* [getItineraryItems](event.md#getitineraryitems)
* [getNotices](event.md#getnotices)

## Constructors

###  constructor

\+ **new Event**(`socket`: Socket, `id`: string, `options`: [ExtreamOptions](../interfaces/extreamoptions.md)): *[Event](event.md)*

*Defined in [event.ts:53](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/event.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`id` | string |
`options` | [ExtreamOptions](../interfaces/extreamoptions.md) |

**Returns:** *[Event](event.md)*

## Properties

###  id

• **id**: *string*

*Defined in [event.ts:52](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/event.ts#L52)*

___

###  itinerary

• **itinerary**: *[Itinerary](itinerary.md)[]* = []

*Defined in [event.ts:51](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/event.ts#L51)*

___

###  notices

• **notices**: *[Notices](notices.md)*

*Defined in [event.ts:53](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/event.ts#L53)*

___

### `Private` options

• **options**: *[ExtreamOptions](../interfaces/extreamoptions.md)*

*Defined in [event.ts:49](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/event.ts#L49)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [event.ts:48](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/event.ts#L48)*

## Methods

###  destroy

▸ **destroy**(): *void*

*Defined in [event.ts:112](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/event.ts#L112)*

Cleans up all listeners for this class. Call this when you no longer need access to this events information to ensure memory leaks are not caused.

**Returns:** *void*

___

### `Private` getItineraryInformation

▸ **getItineraryInformation**(`payload`: [ItineraryPayload](../interfaces/itinerarypayload.md)[]): *Promise‹void›*

*Defined in [event.ts:75](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/event.ts#L75)*

Creates an instance of the itinerary class based off of the payload information passed in.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`payload` | [ItineraryPayload](../interfaces/itinerarypayload.md)[] | All the itinerary information for a specific event  |

**Returns:** *Promise‹void›*

___

###  getItineraryItems

▸ **getItineraryItems**(): *Promise‹void›*

*Defined in [event.ts:88](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/event.ts#L88)*

Get all of the itinerary items for a specific event. After awaiting this method all the itinerary items are in the itineraries property of this class

**Returns:** *Promise‹void›*

___

###  getNotices

▸ **getNotices**(): *Promise‹void›*

*Defined in [event.ts:65](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/event.ts#L65)*

Get all of the unread notices for this event

**Returns:** *Promise‹void›*
