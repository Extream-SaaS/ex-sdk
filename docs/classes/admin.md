[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [Admin](admin.md)

# Class: Admin

## Hierarchy

* **Admin**

## Index

### Constructors

* [constructor](admin.md#constructor)

### Properties

* [socket](admin.md#private-socket)

### Methods

* [createItinerary](admin.md#createitinerary)
* [getItineraries](admin.md#getitineraries)
* [getItinerary](admin.md#getitinerary)
* [sendNotice](admin.md#sendnotice)

## Constructors

###  constructor

\+ **new Admin**(`socket`: Socket): *[Admin](admin.md)*

*Defined in [admin.ts:33](https://github.com/Extream-SaaS/ex-sdk/blob/67dc47e/src/admin.ts#L33)*

Create an instance of the admin sdk

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *[Admin](admin.md)*

## Properties

### `Private` socket

• **socket**: *Socket*

*Defined in [admin.ts:33](https://github.com/Extream-SaaS/ex-sdk/blob/67dc47e/src/admin.ts#L33)*

## Methods

###  createItinerary

▸ **createItinerary**(`itinerary`: Partial‹[ItineraryPayload](../interfaces/itinerarypayload.md)›): *Promise‹any›*

*Defined in [admin.ts:41](https://github.com/Extream-SaaS/ex-sdk/blob/67dc47e/src/admin.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`itinerary` | Partial‹[ItineraryPayload](../interfaces/itinerarypayload.md)› |

**Returns:** *Promise‹any›*

___

###  getItineraries

▸ **getItineraries**(`event`: string): *Promise‹[AdminItineraries](adminitineraries.md)›*

*Defined in [admin.ts:60](https://github.com/Extream-SaaS/ex-sdk/blob/67dc47e/src/admin.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |

**Returns:** *Promise‹[AdminItineraries](adminitineraries.md)›*

___

###  getItinerary

▸ **getItinerary**(`id`: string): *Promise‹[AdminItinerary](adminitinerary.md)›*

*Defined in [admin.ts:66](https://github.com/Extream-SaaS/ex-sdk/blob/67dc47e/src/admin.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹[AdminItinerary](adminitinerary.md)›*

___

###  sendNotice

▸ **sendNotice**(`request`: [SendNoticeRequest](../interfaces/sendnoticerequest.md)): *Promise‹void›*

*Defined in [admin.ts:72](https://github.com/Extream-SaaS/ex-sdk/blob/67dc47e/src/admin.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [SendNoticeRequest](../interfaces/sendnoticerequest.md) |

**Returns:** *Promise‹void›*
