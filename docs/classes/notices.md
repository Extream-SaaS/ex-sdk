[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [Notices](notices.md)

# Class: Notices

Notices (also known as voice of god) are a method of sending

## Hierarchy

* **Notices**

## Index

### Constructors

* [constructor](notices.md#constructor)

### Properties

* [notices](notices.md#notices)
* [socket](notices.md#private-socket)
* [subscriptionManager](notices.md#private-subscriptionmanager)

### Methods

* [destroy](notices.md#destroy)
* [get](notices.md#get)
* [listenForNotices](notices.md#private-listenfornotices)
* [readNotice](notices.md#readnotice)
* [sortByDate](notices.md#static-private-sortbydate)

## Constructors

###  constructor

\+ **new Notices**(`socket`: Socket): *[Notices](notices.md)*

*Defined in [notices.ts:41](https://github.com/Extream-SaaS/ex-sdk/blob/bef9da7/src/notices.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *[Notices](notices.md)*

## Properties

###  notices

• **notices**: *[Notice](../interfaces/notice.md)[]* = []

*Defined in [notices.ts:41](https://github.com/Extream-SaaS/ex-sdk/blob/bef9da7/src/notices.ts#L41)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [notices.ts:40](https://github.com/Extream-SaaS/ex-sdk/blob/bef9da7/src/notices.ts#L40)*

___

### `Private` subscriptionManager

• **subscriptionManager**: *[SubscriptionManager](subscriptionmanager.md)*

*Defined in [notices.ts:39](https://github.com/Extream-SaaS/ex-sdk/blob/bef9da7/src/notices.ts#L39)*

## Methods

###  destroy

▸ **destroy**(): *void*

*Defined in [notices.ts:107](https://github.com/Extream-SaaS/ex-sdk/blob/bef9da7/src/notices.ts#L107)*

**Returns:** *void*

___

###  get

▸ **get**(`request`: [NoticeGetRequest](../interfaces/noticegetrequest.md)): *Promise‹void›*

*Defined in [notices.ts:64](https://github.com/Extream-SaaS/ex-sdk/blob/bef9da7/src/notices.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [NoticeGetRequest](../interfaces/noticegetrequest.md) |

**Returns:** *Promise‹void›*

___

### `Private` listenForNotices

▸ **listenForNotices**(`request`: [NoticeGetRequest](../interfaces/noticegetrequest.md)): *void*

*Defined in [notices.ts:57](https://github.com/Extream-SaaS/ex-sdk/blob/bef9da7/src/notices.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [NoticeGetRequest](../interfaces/noticegetrequest.md) |

**Returns:** *void*

___

###  readNotice

▸ **readNotice**(`id`: string): *Promise‹void›*

*Defined in [notices.ts:83](https://github.com/Extream-SaaS/ex-sdk/blob/bef9da7/src/notices.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹void›*

___

### `Static` `Private` sortByDate

▸ **sortByDate**(`a`: [Notice](../interfaces/notice.md), `b`: [Notice](../interfaces/notice.md)): *number*

*Defined in [notices.ts:53](https://github.com/Extream-SaaS/ex-sdk/blob/bef9da7/src/notices.ts#L53)*

Sort messages based on date descending

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | [Notice](../interfaces/notice.md) | - |
`b` | [Notice](../interfaces/notice.md) |   |

**Returns:** *number*
