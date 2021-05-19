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

### Accessors

* [itineraryTree](event.md#itinerarytree)

### Methods

* [destroy](event.md#destroy)
* [getItineraryInformation](event.md#private-getitineraryinformation)
* [getItineraryItems](event.md#getitineraryitems)
* [getNotices](event.md#getnotices)
* [getChildren](event.md#static-private-getchildren)

## Constructors

###  constructor

\+ **new Event**(`socket`: Socket, `id`: string): *[Event](event.md)*

*Defined in [consumer/event.ts:55](https://github.com/Extream-SaaS/ex-sdk/blob/fa826ae/src/consumer/event.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`id` | string |

**Returns:** *[Event](event.md)*

## Properties

###  id

• **id**: *string*

*Defined in [consumer/event.ts:54](https://github.com/Extream-SaaS/ex-sdk/blob/fa826ae/src/consumer/event.ts#L54)*

___

###  itinerary

• **itinerary**: *[Itinerary](itinerary.md)[]* = []

*Defined in [consumer/event.ts:53](https://github.com/Extream-SaaS/ex-sdk/blob/fa826ae/src/consumer/event.ts#L53)*

___

###  notices

• **notices**: *[Notices](notices.md)*

*Defined in [consumer/event.ts:55](https://github.com/Extream-SaaS/ex-sdk/blob/fa826ae/src/consumer/event.ts#L55)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [consumer/event.ts:50](https://github.com/Extream-SaaS/ex-sdk/blob/fa826ae/src/consumer/event.ts#L50)*

## Accessors

###  itineraryTree

• **get itineraryTree**(): *[Itinerary](itinerary.md)[]*

*Defined in [consumer/event.ts:64](https://github.com/Extream-SaaS/ex-sdk/blob/fa826ae/src/consumer/event.ts#L64)*

**Returns:** *[Itinerary](itinerary.md)[]*

## Methods

###  destroy

▸ **destroy**(): *void*

*Defined in [consumer/event.ts:126](https://github.com/Extream-SaaS/ex-sdk/blob/fa826ae/src/consumer/event.ts#L126)*

Cleans up all listeners for this class. Call this when you no longer need access to this events information to ensure memory leaks are not caused.

**Returns:** *void*

___

### `Private` getItineraryInformation

▸ **getItineraryInformation**(`payload`: [ItineraryPayload](../interfaces/itinerarypayload.md)[]): *Promise‹void›*

*Defined in [consumer/event.ts:89](https://github.com/Extream-SaaS/ex-sdk/blob/fa826ae/src/consumer/event.ts#L89)*

Creates an instance of the itinerary class based off of the payload information passed in.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`payload` | [ItineraryPayload](../interfaces/itinerarypayload.md)[] | All the itinerary information for a specific event  |

**Returns:** *Promise‹void›*

___

###  getItineraryItems

▸ **getItineraryItems**(): *Promise‹void›*

*Defined in [consumer/event.ts:102](https://github.com/Extream-SaaS/ex-sdk/blob/fa826ae/src/consumer/event.ts#L102)*

Get all of the itinerary items for a specific event. After awaiting this method all the itinerary items are in the itineraries property of this class

**Returns:** *Promise‹void›*

___

###  getNotices

▸ **getNotices**(): *Promise‹void›*

*Defined in [consumer/event.ts:79](https://github.com/Extream-SaaS/ex-sdk/blob/fa826ae/src/consumer/event.ts#L79)*

Get all of the unread notices for this event

**Returns:** *Promise‹void›*

___

### `Static` `Private` getChildren

▸ **getChildren**(`items`: [Itinerary](itinerary.md)[], `parentId`: string | null): *[Itinerary](itinerary.md)[]*

*Defined in [consumer/event.ts:68](https://github.com/Extream-SaaS/ex-sdk/blob/fa826ae/src/consumer/event.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [Itinerary](itinerary.md)[] |
`parentId` | string &#124; null |

**Returns:** *[Itinerary](itinerary.md)[]*
