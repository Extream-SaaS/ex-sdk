[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [Rtmp](rtmp.md)

# Class: Rtmp

An Rtmp video item.

## Hierarchy

* **Rtmp**

## Implements

* [IEntity](../interfaces/ientity.md)

## Index

### Constructors

* [constructor](rtmp.md#constructor)

### Properties

* [id](rtmp.md#id)
* [payload](rtmp.md#payload)
* [socket](rtmp.md#private-socket)
* [type](rtmp.md#type)

### Methods

* [get](rtmp.md#get)

## Constructors

###  constructor

\+ **new Rtmp**(`socket`: Socket, `id`: string): *[Rtmp](rtmp.md)*

*Defined in [consumer/itinerary-item/rtmp.ts:46](https://github.com/Extream-SaaS/ex-sdk/blob/fa826ae/src/consumer/itinerary-item/rtmp.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`id` | string |

**Returns:** *[Rtmp](rtmp.md)*

## Properties

###  id

• **id**: *string*

*Defined in [consumer/itinerary-item/rtmp.ts:41](https://github.com/Extream-SaaS/ex-sdk/blob/fa826ae/src/consumer/itinerary-item/rtmp.ts#L41)*

The id of the itinerary item

___

###  payload

• **payload**: *[ReadRtmpResponsePayload](../interfaces/readrtmpresponsepayload.md) | null* = null

*Defined in [consumer/itinerary-item/rtmp.ts:45](https://github.com/Extream-SaaS/ex-sdk/blob/fa826ae/src/consumer/itinerary-item/rtmp.ts#L45)*

All of the data relating to this item. Populated after calling the .get message.

___

### `Private` socket

• **socket**: *Socket*

*Defined in [consumer/itinerary-item/rtmp.ts:37](https://github.com/Extream-SaaS/ex-sdk/blob/fa826ae/src/consumer/itinerary-item/rtmp.ts#L37)*

___

###  type

• **type**: *[ItineraryType](../enums/itinerarytype.md)* = ItineraryType.Rtmp

*Defined in [consumer/itinerary-item/rtmp.ts:46](https://github.com/Extream-SaaS/ex-sdk/blob/fa826ae/src/consumer/itinerary-item/rtmp.ts#L46)*

## Methods

###  get

▸ **get**(): *Promise‹void›*

*Defined in [consumer/itinerary-item/rtmp.ts:56](https://github.com/Extream-SaaS/ex-sdk/blob/fa826ae/src/consumer/itinerary-item/rtmp.ts#L56)*

Call this method to populate the data property.

**Returns:** *Promise‹void›*
