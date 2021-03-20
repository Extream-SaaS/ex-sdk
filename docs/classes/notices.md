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

*Defined in [notices.ts:44](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/notices.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *[Notices](notices.md)*

## Properties

###  notices

• **notices**: *[Notice](../interfaces/notice.md)[]* = []

*Defined in [notices.ts:44](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/notices.ts#L44)*

All of the unread notices for the logged in user

___

### `Private` socket

• **socket**: *Socket*

*Defined in [notices.ts:40](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/notices.ts#L40)*

___

### `Private` subscriptionManager

• **subscriptionManager**: *[SubscriptionManager](subscriptionmanager.md)*

*Defined in [notices.ts:39](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/notices.ts#L39)*

## Methods

###  destroy

▸ **destroy**(): *void*

*Defined in [notices.ts:123](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/notices.ts#L123)*

Cleans up all listeners for this class. Call this when you no longer need access to this events information to ensure memory leaks are not caused.

**Returns:** *void*

___

###  get

▸ **get**(`request`: [NoticeGetRequest](../interfaces/noticegetrequest.md)): *Promise‹void›*

*Defined in [notices.ts:71](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/notices.ts#L71)*

Get all of the notices that the user hasn't read and setup all the required listeners for new notices streamed in.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`request` | [NoticeGetRequest](../interfaces/noticegetrequest.md) |   |

**Returns:** *Promise‹void›*

___

### `Private` listenForNotices

▸ **listenForNotices**(`request`: [NoticeGetRequest](../interfaces/noticegetrequest.md)): *void*

*Defined in [notices.ts:60](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/notices.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [NoticeGetRequest](../interfaces/noticegetrequest.md) |

**Returns:** *void*

___

###  readNotice

▸ **readNotice**(`id`: string): *Promise‹void›*

*Defined in [notices.ts:94](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/notices.ts#L94)*

Mark a specific notice as read

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | THe id of the notice to mark as read for the logged in user  |

**Returns:** *Promise‹void›*

___

### `Static` `Private` sortByDate

▸ **sortByDate**(`a`: [Notice](../interfaces/notice.md), `b`: [Notice](../interfaces/notice.md)): *number*

*Defined in [notices.ts:56](https://github.com/Extream-SaaS/ex-sdk/blob/be861a6/src/notices.ts#L56)*

Sort messages based on date descending

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | [Notice](../interfaces/notice.md) | - |
`b` | [Notice](../interfaces/notice.md) |   |

**Returns:** *number*
