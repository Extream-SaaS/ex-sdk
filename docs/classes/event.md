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
* [socket](event.md#private-socket)

### Methods

* [destroy](event.md#destroy)
* [getItineraryInformation](event.md#private-getitineraryinformation)
* [getItineraryItems](event.md#getitineraryitems)
* [getNotices](event.md#getnotices)

## Constructors

###  constructor

\+ **new Event**(`socket`: Socket, `id`: string): *[Event](event.md)*

*Defined in [event.ts:54](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/event.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`id` | string |

**Returns:** *[Event](event.md)*

## Properties

###  id

• **id**: *string*

*Defined in [event.ts:53](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/event.ts#L53)*

___

###  itinerary

• **itinerary**: *[Itinerary](itinerary.md)[]* = []

*Defined in [event.ts:52](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/event.ts#L52)*

___

###  notices

• **notices**: *[Notices](notices.md)*

*Defined in [event.ts:54](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/event.ts#L54)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [event.ts:49](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/event.ts#L49)*

## Methods

###  destroy

▸ **destroy**(): *void*

*Defined in [event.ts:113](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/event.ts#L113)*

Cleans up all listeners for this class. Call this when you no longer need access to this events information to ensure memory leaks are not caused.

**Returns:** *void*

___

### `Private` getItineraryInformation

▸ **getItineraryInformation**(`payload`: [ItineraryPayload](../interfaces/itinerarypayload.md)[]): *Promise‹void›*

*Defined in [event.ts:76](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/event.ts#L76)*

Creates an instance of the itinerary class based off of the payload information passed in.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`payload` | [ItineraryPayload](../interfaces/itinerarypayload.md)[] | All the itinerary information for a specific event  |

**Returns:** *Promise‹void›*

___

###  getItineraryItems

▸ **getItineraryItems**(): *Promise‹void›*

*Defined in [event.ts:89](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/event.ts#L89)*

Get all of the itinerary items for a specific event. After awaiting this method all the itinerary items are in the itineraries property of this class

**Returns:** *Promise‹void›*

___

###  getNotices

▸ **getNotices**(): *Promise‹void›*

*Defined in [event.ts:66](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/event.ts#L66)*

Get all of the unread notices for this event

**Returns:** *Promise‹void›*
