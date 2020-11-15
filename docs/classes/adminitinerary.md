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

*Defined in [admin/admin-itinerary.ts:29](https://github.com/Extream-SaaS/ex-sdk/blob/bb35162/src/admin/admin-itinerary.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`id` | string |

**Returns:** *[AdminItinerary](adminitinerary.md)*

## Properties

###  data

• **data**: *[ItineraryPayload](../interfaces/itinerarypayload.md) | null* = null

*Defined in [admin/admin-itinerary.ts:27](https://github.com/Extream-SaaS/ex-sdk/blob/bb35162/src/admin/admin-itinerary.ts#L27)*

___

###  id

• **id**: *string*

*Defined in [admin/admin-itinerary.ts:28](https://github.com/Extream-SaaS/ex-sdk/blob/bb35162/src/admin/admin-itinerary.ts#L28)*

___

###  items

• **items**: *ItineraryItem[]* = []

*Defined in [admin/admin-itinerary.ts:29](https://github.com/Extream-SaaS/ex-sdk/blob/bb35162/src/admin/admin-itinerary.ts#L29)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [admin/admin-itinerary.ts:26](https://github.com/Extream-SaaS/ex-sdk/blob/bb35162/src/admin/admin-itinerary.ts#L26)*

## Methods

###  create

▸ **create**(`payload`: [ItineraryPayload](../interfaces/itinerarypayload.md)): *void*

*Defined in [admin/admin-itinerary.ts:36](https://github.com/Extream-SaaS/ex-sdk/blob/bb35162/src/admin/admin-itinerary.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [ItineraryPayload](../interfaces/itinerarypayload.md) |

**Returns:** *void*

___

###  createItineraryItem

▸ **createItineraryItem**(`item`: [InitialResponse](../interfaces/initialresponse.md) | [CreateItemRequest](../globals.md#createitemrequest)): *Promise‹void›*

*Defined in [admin/admin-itinerary.ts:107](https://github.com/Extream-SaaS/ex-sdk/blob/bb35162/src/admin/admin-itinerary.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [InitialResponse](../interfaces/initialresponse.md) &#124; [CreateItemRequest](../globals.md#createitemrequest) |

**Returns:** *Promise‹void›*

___

###  deleteItem

▸ **deleteItem**(`id`: string): *Promise‹void›*

*Defined in [admin/admin-itinerary.ts:86](https://github.com/Extream-SaaS/ex-sdk/blob/bb35162/src/admin/admin-itinerary.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹void›*

___

###  get

▸ **get**(): *Promise‹void›*

*Defined in [admin/admin-itinerary.ts:66](https://github.com/Extream-SaaS/ex-sdk/blob/bb35162/src/admin/admin-itinerary.ts#L66)*

**Returns:** *Promise‹void›*

___

###  update

▸ **update**(`update`: Partial‹[ItineraryPayload](../interfaces/itinerarypayload.md)›): *Promise‹void›*

*Defined in [admin/admin-itinerary.ts:46](https://github.com/Extream-SaaS/ex-sdk/blob/bb35162/src/admin/admin-itinerary.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`update` | Partial‹[ItineraryPayload](../interfaces/itinerarypayload.md)› |

**Returns:** *Promise‹void›*
