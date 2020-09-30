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

*Defined in [event.ts:71](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/event.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`id` | string |

**Returns:** *[Event](event.md)*

## Properties

###  id

• **id**: *string*

*Defined in [event.ts:71](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/event.ts#L71)*

___

###  itinerary

• **itinerary**: *[Itinerary](itinerary.md)[]* = []

*Defined in [event.ts:70](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/event.ts#L70)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [event.ts:69](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/event.ts#L69)*

## Methods

### `Private` getItineraryInformation

▸ **getItineraryInformation**(`payload`: [ItineraryPayload](../interfaces/itinerarypayload.md)[]): *Promise‹void›*

*Defined in [event.ts:78](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/event.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [ItineraryPayload](../interfaces/itinerarypayload.md)[] |

**Returns:** *Promise‹void›*

___

###  getItineraryItems

▸ **getItineraryItems**(): *Promise‹void›*

*Defined in [event.ts:87](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/event.ts#L87)*

**Returns:** *Promise‹void›*
