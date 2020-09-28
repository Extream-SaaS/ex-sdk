[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [Consumer](consumer.md)

# Class: Consumer

## Hierarchy

* **Consumer**

## Index

### Constructors

* [constructor](consumer.md#constructor)

### Properties

* [dms](consumer.md#dms)
* [room](consumer.md#room)
* [socket](consumer.md#private-socket)
* [subscriptionManager](consumer.md#private-subscriptionmanager)

### Methods

* [getItinerary](consumer.md#private-getitinerary)
* [itinerary](consumer.md#itinerary)
* [itineraryByEvent](consumer.md#itinerarybyevent)
* [join](consumer.md#join)
* [startChat](consumer.md#startchat)

## Constructors

###  constructor

\+ **new Consumer**(`socket`: Socket): *[Consumer](consumer.md)*

*Defined in [consumer.ts:12](https://github.com/Extream-SaaS/ex-sdk/blob/b2de5a9/src/consumer.ts#L12)*

Create an instance of the admin sdk

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *[Consumer](consumer.md)*

## Properties

###  dms

• **dms**: *[Chat](chat.md)[]* = []

*Defined in [consumer.ts:12](https://github.com/Extream-SaaS/ex-sdk/blob/b2de5a9/src/consumer.ts#L12)*

___

###  room

• **room**: *[Chat](chat.md) | null* = null

*Defined in [consumer.ts:11](https://github.com/Extream-SaaS/ex-sdk/blob/b2de5a9/src/consumer.ts#L11)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [consumer.ts:9](https://github.com/Extream-SaaS/ex-sdk/blob/b2de5a9/src/consumer.ts#L9)*

___

### `Private` subscriptionManager

• **subscriptionManager**: *[SubscriptionManager](subscriptionmanager.md)*

*Defined in [consumer.ts:10](https://github.com/Extream-SaaS/ex-sdk/blob/b2de5a9/src/consumer.ts#L10)*

## Methods

### `Private` getItinerary

▸ **getItinerary**‹**T**›(`request`: object): *Promise‹T›*

*Defined in [consumer.ts:44](https://github.com/Extream-SaaS/ex-sdk/blob/b2de5a9/src/consumer.ts#L44)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **request**: *object*

Name | Type |
------ | ------ |
`event?` | undefined &#124; string |
`id?` | undefined &#124; string |

**Returns:** *Promise‹T›*

___

###  itinerary

▸ **itinerary**(`id`: string): *Promise‹[GetItineraryResponse](../interfaces/getitineraryresponse.md)›*

*Defined in [consumer.ts:64](https://github.com/Extream-SaaS/ex-sdk/blob/b2de5a9/src/consumer.ts#L64)*

Get a single itinerary item

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | the id of the itinerary item to get  |

**Returns:** *Promise‹[GetItineraryResponse](../interfaces/getitineraryresponse.md)›*

___

###  itineraryByEvent

▸ **itineraryByEvent**(`event`: string): *Promise‹[GetEventItineraryResponse](../interfaces/geteventitineraryresponse.md)›*

*Defined in [consumer.ts:72](https://github.com/Extream-SaaS/ex-sdk/blob/b2de5a9/src/consumer.ts#L72)*

Get all itinerary items for a specific event

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | string | the id of the event to the itinerary items for  |

**Returns:** *Promise‹[GetEventItineraryResponse](../interfaces/geteventitineraryresponse.md)›*

___

###  join

▸ **join**(`roomId`: string, `instanceId?`: undefined | string): *[Chat](chat.md)*

*Defined in [consumer.ts:27](https://github.com/Extream-SaaS/ex-sdk/blob/b2de5a9/src/consumer.ts#L27)*

Create a chat room.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`roomId` | string |   |
`instanceId?` | undefined &#124; string | - |

**Returns:** *[Chat](chat.md)*

___

###  startChat

▸ **startChat**(`roomId`: string): *Promise‹[Chat](chat.md)‹››*

*Defined in [consumer.ts:38](https://github.com/Extream-SaaS/ex-sdk/blob/b2de5a9/src/consumer.ts#L38)*

Start a new DM in a specific room

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`roomId` | string | the room id associated with the new dm  |

**Returns:** *Promise‹[Chat](chat.md)‹››*
