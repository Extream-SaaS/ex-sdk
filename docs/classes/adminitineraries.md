[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [AdminItineraries](adminitineraries.md)

# Class: AdminItineraries

## Hierarchy

* **AdminItineraries**

## Index

### Constructors

* [constructor](adminitineraries.md#constructor)

### Properties

* [event](adminitineraries.md#event)
* [itineraries](adminitineraries.md#itineraries)
* [socket](adminitineraries.md#private-socket)

### Methods

* [createItinerary](adminitineraries.md#createitinerary)
* [delete](adminitineraries.md#delete)
* [getAll](adminitineraries.md#getall)

## Constructors

###  constructor

\+ **new AdminItineraries**(`socket`: Socket, `event`: string): *[AdminItineraries](adminitineraries.md)*

*Defined in [admin/admin-itineraries.ts:12](https://github.com/Extream-SaaS/ex-sdk/blob/ca89c6b/src/admin/admin-itineraries.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`event` | string |

**Returns:** *[AdminItineraries](adminitineraries.md)*

## Properties

###  event

• **event**: *string*

*Defined in [admin/admin-itineraries.ts:12](https://github.com/Extream-SaaS/ex-sdk/blob/ca89c6b/src/admin/admin-itineraries.ts#L12)*

___

###  itineraries

• **itineraries**: *[AdminItinerary](adminitinerary.md)[]* = []

*Defined in [admin/admin-itineraries.ts:11](https://github.com/Extream-SaaS/ex-sdk/blob/ca89c6b/src/admin/admin-itineraries.ts#L11)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [admin/admin-itineraries.ts:10](https://github.com/Extream-SaaS/ex-sdk/blob/ca89c6b/src/admin/admin-itineraries.ts#L10)*

## Methods

###  createItinerary

▸ **createItinerary**(`itinerary`: Partial‹[ItineraryPayload](../interfaces/itinerarypayload.md)›): *Promise‹string›*

*Defined in [admin/admin-itineraries.ts:43](https://github.com/Extream-SaaS/ex-sdk/blob/ca89c6b/src/admin/admin-itineraries.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`itinerary` | Partial‹[ItineraryPayload](../interfaces/itinerarypayload.md)› |

**Returns:** *Promise‹string›*

___

###  delete

▸ **delete**(`id`: string): *Promise‹void›*

*Defined in [admin/admin-itineraries.ts:65](https://github.com/Extream-SaaS/ex-sdk/blob/ca89c6b/src/admin/admin-itineraries.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹void›*

___

###  getAll

▸ **getAll**(): *Promise‹void›*

*Defined in [admin/admin-itineraries.ts:19](https://github.com/Extream-SaaS/ex-sdk/blob/ca89c6b/src/admin/admin-itineraries.ts#L19)*

**Returns:** *Promise‹void›*
