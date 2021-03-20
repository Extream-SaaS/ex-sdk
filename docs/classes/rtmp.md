[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [Rtmp](rtmp.md)

# Class: Rtmp

An Rtmp video item.

## Hierarchy

* **Rtmp**

## Index

### Constructors

* [constructor](rtmp.md#constructor)

### Properties

* [data](rtmp.md#data)
* [id](rtmp.md#id)
* [socket](rtmp.md#private-socket)

### Methods

* [get](rtmp.md#get)

## Constructors

###  constructor

\+ **new Rtmp**(`socket`: Socket, `id`: string): *[Rtmp](rtmp.md)*

*Defined in [itinerary-item/rtmp.ts:44](https://github.com/Extream-SaaS/ex-sdk/blob/194f895/src/itinerary-item/rtmp.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`id` | string |

**Returns:** *[Rtmp](rtmp.md)*

## Properties

###  data

• **data**: *[ReadRtmpResponsePayload](../interfaces/readrtmpresponsepayload.md) | null* = null

*Defined in [itinerary-item/rtmp.ts:44](https://github.com/Extream-SaaS/ex-sdk/blob/194f895/src/itinerary-item/rtmp.ts#L44)*

All of the data relating to this item. Populated after calling the .get message.

___

###  id

• **id**: *string*

*Defined in [itinerary-item/rtmp.ts:40](https://github.com/Extream-SaaS/ex-sdk/blob/194f895/src/itinerary-item/rtmp.ts#L40)*

The id of the itinerary item

___

### `Private` socket

• **socket**: *Socket*

*Defined in [itinerary-item/rtmp.ts:36](https://github.com/Extream-SaaS/ex-sdk/blob/194f895/src/itinerary-item/rtmp.ts#L36)*

## Methods

###  get

▸ **get**(): *Promise‹void›*

*Defined in [itinerary-item/rtmp.ts:54](https://github.com/Extream-SaaS/ex-sdk/blob/194f895/src/itinerary-item/rtmp.ts#L54)*

Call this method to populate the data property.

**Returns:** *Promise‹void›*
