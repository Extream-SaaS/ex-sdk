[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [ItineraryItem](itineraryitem.md)

# Class: ItineraryItem

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

*Defined in [admin/itinerary-item.ts:54](https://github.com/Extream-SaaS/ex-sdk/blob/bb35162/src/admin/itinerary-item.ts#L54)*

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

*Defined in [admin/itinerary-item.ts:52](https://github.com/Extream-SaaS/ex-sdk/blob/bb35162/src/admin/itinerary-item.ts#L52)*

___

###  id

• **id**: *string*

*Defined in [event.ts:25](https://github.com/Extream-SaaS/ex-sdk/blob/bb35162/src/event.ts#L25)*

*Defined in [admin/itinerary-item.ts:53](https://github.com/Extream-SaaS/ex-sdk/blob/bb35162/src/admin/itinerary-item.ts#L53)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [admin/itinerary-item.ts:51](https://github.com/Extream-SaaS/ex-sdk/blob/bb35162/src/admin/itinerary-item.ts#L51)*

___

###  type

• **type**: *string*

*Defined in [event.ts:24](https://github.com/Extream-SaaS/ex-sdk/blob/bb35162/src/event.ts#L24)*

*Defined in [admin/itinerary-item.ts:54](https://github.com/Extream-SaaS/ex-sdk/blob/bb35162/src/admin/itinerary-item.ts#L54)*

## Methods

###  get

▸ **get**(): *Promise‹void›*

*Defined in [admin/itinerary-item.ts:62](https://github.com/Extream-SaaS/ex-sdk/blob/bb35162/src/admin/itinerary-item.ts#L62)*

**Returns:** *Promise‹void›*

___

###  update

▸ **update**(`update`: Partial‹[UpdateItemRequest](../globals.md#updateitemrequest)›): *Promise‹void›*

*Defined in [admin/itinerary-item.ts:85](https://github.com/Extream-SaaS/ex-sdk/blob/bb35162/src/admin/itinerary-item.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`update` | Partial‹[UpdateItemRequest](../globals.md#updateitemrequest)› |

**Returns:** *Promise‹void›*
