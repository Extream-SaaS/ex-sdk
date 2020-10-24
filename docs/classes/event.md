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
* [socket](event.md#private-socket)

### Methods

* [getItineraryInformation](event.md#private-getitineraryinformation)
* [getItineraryItems](event.md#getitineraryitems)

## Constructors

###  constructor

\+ **new Event**(`socket`: Socket, `id`: string): *[Event](event.md)*

*Defined in [event.ts:49](https://github.com/Extream-SaaS/ex-sdk/blob/d44c660/src/event.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`id` | string |

**Returns:** *[Event](event.md)*

## Properties

###  id

• **id**: *string*

*Defined in [event.ts:49](https://github.com/Extream-SaaS/ex-sdk/blob/d44c660/src/event.ts#L49)*

___

###  itinerary

• **itinerary**: *[Itinerary](itinerary.md)[]* = []

*Defined in [event.ts:48](https://github.com/Extream-SaaS/ex-sdk/blob/d44c660/src/event.ts#L48)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [event.ts:47](https://github.com/Extream-SaaS/ex-sdk/blob/d44c660/src/event.ts#L47)*

## Methods

### `Private` getItineraryInformation

▸ **getItineraryInformation**(`payload`: [ItineraryPayload](../interfaces/itinerarypayload.md)[]): *Promise‹void›*

*Defined in [event.ts:56](https://github.com/Extream-SaaS/ex-sdk/blob/d44c660/src/event.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [ItineraryPayload](../interfaces/itinerarypayload.md)[] |

**Returns:** *Promise‹void›*

___

###  getItineraryItems

▸ **getItineraryItems**(): *Promise‹void›*

*Defined in [event.ts:65](https://github.com/Extream-SaaS/ex-sdk/blob/d44c660/src/event.ts#L65)*

**Returns:** *Promise‹void›*
