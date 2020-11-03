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

*Defined in [event.ts:51](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/event.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`id` | string |

**Returns:** *[Event](event.md)*

## Properties

###  id

• **id**: *string*

*Defined in [event.ts:50](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/event.ts#L50)*

___

###  itinerary

• **itinerary**: *[Itinerary](itinerary.md)[]* = []

*Defined in [event.ts:49](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/event.ts#L49)*

___

###  notices

• **notices**: *[Notices](notices.md)*

*Defined in [event.ts:51](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/event.ts#L51)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [event.ts:48](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/event.ts#L48)*

## Methods

###  destroy

▸ **destroy**(): *void*

*Defined in [event.ts:93](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/event.ts#L93)*

**Returns:** *void*

___

### `Private` getItineraryInformation

▸ **getItineraryInformation**(`payload`: [ItineraryPayload](../interfaces/itinerarypayload.md)[]): *Promise‹void›*

*Defined in [event.ts:65](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/event.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [ItineraryPayload](../interfaces/itinerarypayload.md)[] |

**Returns:** *Promise‹void›*

___

###  getItineraryItems

▸ **getItineraryItems**(): *Promise‹void›*

*Defined in [event.ts:74](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/event.ts#L74)*

**Returns:** *Promise‹void›*

___

###  getNotices

▸ **getNotices**(): *Promise‹void›*

*Defined in [event.ts:59](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/event.ts#L59)*

**Returns:** *Promise‹void›*
