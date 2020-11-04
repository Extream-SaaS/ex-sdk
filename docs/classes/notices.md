[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [Notices](notices.md)

# Class: Notices

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

*Defined in [notices.ts:36](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/notices.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *[Notices](notices.md)*

## Properties

###  notices

• **notices**: *[Notice](../interfaces/notice.md)[]* = []

*Defined in [notices.ts:36](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/notices.ts#L36)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [notices.ts:35](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/notices.ts#L35)*

___

### `Private` subscriptionManager

• **subscriptionManager**: *[SubscriptionManager](subscriptionmanager.md)*

*Defined in [notices.ts:34](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/notices.ts#L34)*

## Methods

###  destroy

▸ **destroy**(): *void*

*Defined in [notices.ts:102](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/notices.ts#L102)*

**Returns:** *void*

___

###  get

▸ **get**(`request`: [NoticeGetRequest](../interfaces/noticegetrequest.md)): *Promise‹void›*

*Defined in [notices.ts:59](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/notices.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [NoticeGetRequest](../interfaces/noticegetrequest.md) |

**Returns:** *Promise‹void›*

___

### `Private` listenForNotices

▸ **listenForNotices**(`request`: [NoticeGetRequest](../interfaces/noticegetrequest.md)): *void*

*Defined in [notices.ts:52](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/notices.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [NoticeGetRequest](../interfaces/noticegetrequest.md) |

**Returns:** *void*

___

###  readNotice

▸ **readNotice**(`id`: string): *Promise‹void›*

*Defined in [notices.ts:78](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/notices.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹void›*

___

### `Static` `Private` sortByDate

▸ **sortByDate**(`a`: [Notice](../interfaces/notice.md), `b`: [Notice](../interfaces/notice.md)): *number*

*Defined in [notices.ts:48](https://github.com/Extream-SaaS/ex-sdk/blob/c4dac15/src/notices.ts#L48)*

Sort messages based on date descending

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | [Notice](../interfaces/notice.md) | - |
`b` | [Notice](../interfaces/notice.md) |   |

**Returns:** *number*