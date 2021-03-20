[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [ItineraryItem](itineraryitem.md)

# Class: ItineraryItem

Allows management of itinerary items for admins.

## Hierarchy

* **ItineraryItem**

## Index

### Constructors

* [constructor](itineraryitem.md#constructor)

### Properties

* [data](itineraryitem.md#data)
* [id](itineraryitem.md#id)
* [socket](itineraryitem.md#private-socket)
* [type](itineraryitem.md#type)

### Methods

* [get](itineraryitem.md#get)
* [update](itineraryitem.md#update)

## Constructors

###  constructor

\+ **new ItineraryItem**(`socket`: Socket, `id`: string, `type`: string): *[ItineraryItem](itineraryitem.md)*

*Defined in [admin/itinerary-item.ts:66](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/admin/itinerary-item.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`id` | string |
`type` | string |

**Returns:** *[ItineraryItem](itineraryitem.md)*

## Properties

###  data

• **data**: *[RmtpItineraryItemPayload](../interfaces/rmtpitineraryitempayload.md) | null* = null

*Defined in [admin/itinerary-item.ts:58](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/admin/itinerary-item.ts#L58)*

The data relating to this item. Populated after calling get.

___

###  id

• **id**: *string*

*Defined in [event.ts:25](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/event.ts#L25)*

*Defined in [admin/itinerary-item.ts:62](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/admin/itinerary-item.ts#L62)*

The id of the item

___

### `Private` socket

• **socket**: *Socket*

*Defined in [admin/itinerary-item.ts:54](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/admin/itinerary-item.ts#L54)*

___

###  type

• **type**: *string*

*Defined in [event.ts:24](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/event.ts#L24)*

*Defined in [admin/itinerary-item.ts:66](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/admin/itinerary-item.ts#L66)*

Type of the item e.g. chat, rtmp

## Methods

###  get

▸ **get**(): *Promise‹void›*

*Defined in [admin/itinerary-item.ts:77](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/admin/itinerary-item.ts#L77)*

Get all information for this itinerary item. This populates the data field.

**Returns:** *Promise‹void›*

___

###  update

▸ **update**(`update`: Partial‹[UpdateItemRequest](../globals.md#updateitemrequest)›): *Promise‹void›*

*Defined in [admin/itinerary-item.ts:104](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/admin/itinerary-item.ts#L104)*

Update a specific itinerary item. Can parse partial fields to this.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`update` | Partial‹[UpdateItemRequest](../globals.md#updateitemrequest)› |   |

**Returns:** *Promise‹void›*
