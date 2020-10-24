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

* [sendNotice](admin.md#sendnotice)

## Constructors

###  constructor

\+ **new Admin**(`socket`: Socket): *[Admin](admin.md)*

*Defined in [admin.ts:30](https://github.com/Extream-SaaS/ex-sdk/blob/d44c660/src/admin.ts#L30)*

Create an instance of the admin sdk

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *[Admin](admin.md)*

## Properties

### `Private` socket

• **socket**: *Socket*

*Defined in [admin.ts:30](https://github.com/Extream-SaaS/ex-sdk/blob/d44c660/src/admin.ts#L30)*

## Methods

###  sendNotice

▸ **sendNotice**(`request`: [SendNoticeRequest](../interfaces/sendnoticerequest.md)): *Promise‹void›*

*Defined in [admin.ts:38](https://github.com/Extream-SaaS/ex-sdk/blob/d44c660/src/admin.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [SendNoticeRequest](../interfaces/sendnoticerequest.md) |

**Returns:** *Promise‹void›*
