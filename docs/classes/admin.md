[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [Admin](admin.md)

# Class: Admin

The admin class can be used to manage the itineraries, polls and notices for a specific event.

## Hierarchy

* **Admin**

## Index

### Constructors

* [constructor](admin.md#constructor)

### Properties

* [socket](admin.md#private-socket)

### Methods

* [getItineraries](admin.md#getitineraries)
* [getItinerary](admin.md#getitinerary)
* [sendNotice](admin.md#sendnotice)

## Constructors

###  constructor

\+ **new Admin**(`socket`: Socket): *[Admin](admin.md)*

*Defined in [admin.ts:36](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/admin.ts#L36)*

Create an instance of the admin sdk

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *[Admin](admin.md)*

## Properties

### `Private` socket

• **socket**: *Socket*

*Defined in [admin.ts:36](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/admin.ts#L36)*

## Methods

###  getItineraries

▸ **getItineraries**(`event`: string): *Promise‹[AdminItineraries](adminitineraries.md)›*

*Defined in [admin.ts:50](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/admin.ts#L50)*

The Id of the event to get all the itineraries for

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |

**Returns:** *Promise‹[AdminItineraries](adminitineraries.md)›*

___

###  getItinerary

▸ **getItinerary**(`id`: string): *Promise‹[AdminItinerary](adminitinerary.md)›*

*Defined in [admin.ts:62](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/admin.ts#L62)*

The Id of the itinerary to get

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹[AdminItinerary](adminitinerary.md)›*

___

###  sendNotice

▸ **sendNotice**(`request`: [SendNoticeRequest](../interfaces/sendnoticerequest.md)): *Promise‹void›*

*Defined in [admin.ts:74](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/admin.ts#L74)*

Send a notice (or voice of god message) to everyone at the event

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`request` | [SendNoticeRequest](../interfaces/sendnoticerequest.md) | Message and filters to apply to the message to be sent |

**Returns:** *Promise‹void›*
