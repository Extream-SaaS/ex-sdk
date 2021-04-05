[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [AdminItinerary](adminitinerary.md)

# Class: AdminItinerary

## Hierarchy

* **AdminItinerary**

## Index

### Constructors

* [constructor](adminitinerary.md#constructor)

### Properties

* [data](adminitinerary.md#data)
* [id](adminitinerary.md#id)
* [items](adminitinerary.md#items)
* [socket](adminitinerary.md#private-socket)

### Methods

* [create](adminitinerary.md#create)
* [createItineraryItem](adminitinerary.md#createitineraryitem)
* [deleteItem](adminitinerary.md#deleteitem)
* [get](adminitinerary.md#get)
* [update](adminitinerary.md#update)

## Constructors

###  constructor

\+ **new AdminItinerary**(`socket`: Socket, `id`: string): *[AdminItinerary](adminitinerary.md)*

*Defined in [admin/admin-itinerary.ts:38](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/admin/admin-itinerary.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`id` | string |

**Returns:** *[AdminItinerary](adminitinerary.md)*

## Properties

###  data

• **data**: *[ItineraryPayload](../interfaces/itinerarypayload.md) | null* = null

*Defined in [admin/admin-itinerary.ts:30](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/admin/admin-itinerary.ts#L30)*

All the information relating to the itinerary. This is populated after calling `get`.

___

###  id

• **id**: *string*

*Defined in [admin/admin-itinerary.ts:34](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/admin/admin-itinerary.ts#L34)*

The id of this itinerary

___

###  items

• **items**: *ItineraryItem[]* = []

*Defined in [admin/admin-itinerary.ts:38](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/admin/admin-itinerary.ts#L38)*

A list of all itinerary items related to this itinerary. If an item is added/removed then this updates.

___

### `Private` socket

• **socket**: *Socket*

*Defined in [admin/admin-itinerary.ts:26](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/admin/admin-itinerary.ts#L26)*

## Methods

###  create

▸ **create**(`payload`: [ItineraryPayload](../interfaces/itinerarypayload.md)): *void*

*Defined in [admin/admin-itinerary.ts:49](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/admin/admin-itinerary.ts#L49)*

Create a new itinerary based on the payload

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`payload` | [ItineraryPayload](../interfaces/itinerarypayload.md) |   |

**Returns:** *void*

___

###  createItineraryItem

▸ **createItineraryItem**(`item`: [InitialResponse](../interfaces/initialresponse.md) | [CreateItemRequest](../globals.md#createitemrequest)): *Promise‹void›*

*Defined in [admin/admin-itinerary.ts:135](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/admin/admin-itinerary.ts#L135)*

Create an itinerary item for this itinerary

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | [InitialResponse](../interfaces/initialresponse.md) &#124; [CreateItemRequest](../globals.md#createitemrequest) | The information of the item you wish to create  |

**Returns:** *Promise‹void›*

___

###  deleteItem

▸ **deleteItem**(`id`: string): *Promise‹void›*

*Defined in [admin/admin-itinerary.ts:110](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/admin/admin-itinerary.ts#L110)*

Delete an itinerary item from this itinerary

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | The id of the item to remove  |

**Returns:** *Promise‹void›*

___

###  get

▸ **get**(): *Promise‹void›*

*Defined in [admin/admin-itinerary.ts:86](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/admin/admin-itinerary.ts#L86)*

Get all information for this itinerary item. This populates the data field.

**Returns:** *Promise‹void›*

___

###  update

▸ **update**(`update`: Partial‹[ItineraryPayload](../interfaces/itinerarypayload.md)›): *Promise‹void›*

*Defined in [admin/admin-itinerary.ts:63](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/admin/admin-itinerary.ts#L63)*

Update an itinerary item. Can be a single field or the whole thing.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`update` | Partial‹[ItineraryPayload](../interfaces/itinerarypayload.md)› |   |

**Returns:** *Promise‹void›*
