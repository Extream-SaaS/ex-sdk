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
* [socket](adminitinerary.md#private-socket)

### Methods

* [createItem](adminitinerary.md#createitem)
* [get](adminitinerary.md#get)
* [update](adminitinerary.md#update)

## Constructors

###  constructor

\+ **new AdminItinerary**(`socket`: Socket, `id`: string): *[AdminItinerary](adminitinerary.md)*

*Defined in [admin/admin-itinerary.ts:8](https://github.com/Extream-SaaS/ex-sdk/blob/67dc47e/src/admin/admin-itinerary.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`id` | string |

**Returns:** *[AdminItinerary](adminitinerary.md)*

## Properties

###  data

• **data**: *[ItineraryPayload](../interfaces/itinerarypayload.md) | null* = null

*Defined in [admin/admin-itinerary.ts:7](https://github.com/Extream-SaaS/ex-sdk/blob/67dc47e/src/admin/admin-itinerary.ts#L7)*

___

###  id

• **id**: *string*

*Defined in [admin/admin-itinerary.ts:8](https://github.com/Extream-SaaS/ex-sdk/blob/67dc47e/src/admin/admin-itinerary.ts#L8)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [admin/admin-itinerary.ts:6](https://github.com/Extream-SaaS/ex-sdk/blob/67dc47e/src/admin/admin-itinerary.ts#L6)*

## Methods

###  createItem

▸ **createItem**(`payload`: [ItineraryPayload](../interfaces/itinerarypayload.md)): *void*

*Defined in [admin/admin-itinerary.ts:15](https://github.com/Extream-SaaS/ex-sdk/blob/67dc47e/src/admin/admin-itinerary.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | [ItineraryPayload](../interfaces/itinerarypayload.md) |

**Returns:** *void*

___

###  get

▸ **get**(): *Promise‹void›*

*Defined in [admin/admin-itinerary.ts:42](https://github.com/Extream-SaaS/ex-sdk/blob/67dc47e/src/admin/admin-itinerary.ts#L42)*

**Returns:** *Promise‹void›*

___

###  update

▸ **update**(`update`: Partial‹[ItineraryPayload](../interfaces/itinerarypayload.md)›): *Promise‹void›*

*Defined in [admin/admin-itinerary.ts:22](https://github.com/Extream-SaaS/ex-sdk/blob/67dc47e/src/admin/admin-itinerary.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`update` | Partial‹[ItineraryPayload](../interfaces/itinerarypayload.md)› |

**Returns:** *Promise‹void›*
