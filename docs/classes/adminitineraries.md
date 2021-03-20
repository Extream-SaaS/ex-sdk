[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [AdminItineraries](adminitineraries.md)

# Class: AdminItineraries

Manages all of the itineraries for a specific event. Allows you to perform CRUD actions on itineraries for a specific event.

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

*Defined in [admin/admin-itineraries.ts:21](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/admin/admin-itineraries.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`event` | string |

**Returns:** *[AdminItineraries](adminitineraries.md)*

## Properties

###  event

• **event**: *string*

*Defined in [admin/admin-itineraries.ts:21](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/admin/admin-itineraries.ts#L21)*

The event all these itineraries are related to.

___

###  itineraries

• **itineraries**: *[AdminItinerary](adminitinerary.md)[]* = []

*Defined in [admin/admin-itineraries.ts:17](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/admin/admin-itineraries.ts#L17)*

All the itineraries associated to the event this class has been instaitated with.

___

### `Private` socket

• **socket**: *Socket*

*Defined in [admin/admin-itineraries.ts:13](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/admin/admin-itineraries.ts#L13)*

## Methods

###  createItinerary

▸ **createItinerary**(`itinerary`: Partial‹[ItineraryPayload](../interfaces/itinerarypayload.md)›): *Promise‹string›*

*Defined in [admin/admin-itineraries.ts:59](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/admin/admin-itineraries.ts#L59)*

Create an itinerary for the event this class is associated to

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`itinerary` | Partial‹[ItineraryPayload](../interfaces/itinerarypayload.md)› | The information about the itinerary  |

**Returns:** *Promise‹string›*

___

###  delete

▸ **delete**(`id`: string): *Promise‹void›*

*Defined in [admin/admin-itineraries.ts:85](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/admin/admin-itineraries.ts#L85)*

Remove an existing itinerary & all its' associated items from this event.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string |   |

**Returns:** *Promise‹void›*

___

###  getAll

▸ **getAll**(): *Promise‹void›*

*Defined in [admin/admin-itineraries.ts:31](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/admin/admin-itineraries.ts#L31)*

Get all the itineraries for an event. Once this method has been called all the itineraries are added to the itinerary property on the array.

**Returns:** *Promise‹void›*
