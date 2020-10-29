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

* [getItinerary](admin.md#getitinerary)
* [sendNotice](admin.md#sendnotice)

## Constructors

###  constructor

\+ **new Admin**(`socket`: Socket): *[Admin](admin.md)*

*Defined in [admin.ts:31](https://github.com/Extream-SaaS/ex-sdk/blob/d73bdfb/src/admin.ts#L31)*

Create an instance of the admin sdk

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *[Admin](admin.md)*

## Properties

### `Private` socket

• **socket**: *Socket*

*Defined in [admin.ts:31](https://github.com/Extream-SaaS/ex-sdk/blob/d73bdfb/src/admin.ts#L31)*

## Methods

###  getItinerary

▸ **getItinerary**(`id`: string): *Promise‹Itinerary›*

*Defined in [admin.ts:39](https://github.com/Extream-SaaS/ex-sdk/blob/d73bdfb/src/admin.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹Itinerary›*

___

###  sendNotice

▸ **sendNotice**(`request`: [SendNoticeRequest](../interfaces/sendnoticerequest.md)): *Promise‹void›*

*Defined in [admin.ts:45](https://github.com/Extream-SaaS/ex-sdk/blob/d73bdfb/src/admin.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [SendNoticeRequest](../interfaces/sendnoticerequest.md) |

**Returns:** *Promise‹void›*
