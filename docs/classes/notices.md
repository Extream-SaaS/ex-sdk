[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [Notices](notices.md)

# Class: Notices

Notices (also known as voice of god) are a method of sending

## Hierarchy

* **Notices**

## Implements

* [IEntity](../interfaces/ientity.md)
* [IDestroyable](../interfaces/idestroyable.md)

## Index

### Constructors

* [constructor](notices.md#constructor)

### Properties

* [payload](notices.md#payload)
* [socket](notices.md#private-socket)
* [subscriptionManager](notices.md#private-subscriptionmanager)

### Accessors

* [notices](notices.md#notices)

### Methods

* [destroy](notices.md#destroy)
* [get](notices.md#get)
* [listenForNotices](notices.md#private-listenfornotices)
* [readNotice](notices.md#readnotice)
* [sortByDate](notices.md#static-private-sortbydate)

## Constructors

###  constructor

\+ **new Notices**(`socket`: Socket): *[Notices](notices.md)*

*Defined in [consumer/notices.ts:44](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/notices.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *[Notices](notices.md)*

## Properties

###  payload

• **payload**: *[Notice](../interfaces/notice.md)[]* = []

*Defined in [consumer/notices.ts:44](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/notices.ts#L44)*

All of the unread notices for the logged in user

___

### `Private` socket

• **socket**: *Socket*

*Defined in [consumer/notices.ts:40](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/notices.ts#L40)*

___

### `Private` subscriptionManager

• **subscriptionManager**: *[SubscriptionManager](subscriptionmanager.md)*

*Defined in [consumer/notices.ts:39](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/notices.ts#L39)*

## Accessors

###  notices

• **get notices**(): *[Notice](../interfaces/notice.md)[]*

*Defined in [consumer/notices.ts:51](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/notices.ts#L51)*

**Returns:** *[Notice](../interfaces/notice.md)[]*

## Methods

###  destroy

▸ **destroy**(): *void*

*Implementation of [IDestroyable](../interfaces/idestroyable.md)*

*Defined in [consumer/notices.ts:127](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/notices.ts#L127)*

Cleans up all listeners for this class. Call this when you no longer need access to this events information to ensure memory leaks are not caused.

**Returns:** *void*

___

###  get

▸ **get**(`request`: [NoticeGetRequest](../interfaces/noticegetrequest.md)): *Promise‹void›*

*Defined in [consumer/notices.ts:75](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/notices.ts#L75)*

Get all of the notices that the user hasn't read and setup all the required listeners for new notices streamed in.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`request` | [NoticeGetRequest](../interfaces/noticegetrequest.md) |   |

**Returns:** *Promise‹void›*

___

### `Private` listenForNotices

▸ **listenForNotices**(`request`: [NoticeGetRequest](../interfaces/noticegetrequest.md)): *void*

*Defined in [consumer/notices.ts:64](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/notices.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [NoticeGetRequest](../interfaces/noticegetrequest.md) |

**Returns:** *void*

___

###  readNotice

▸ **readNotice**(`id`: string): *Promise‹void›*

*Defined in [consumer/notices.ts:98](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/notices.ts#L98)*

Mark a specific notice as read

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | THe id of the notice to mark as read for the logged in user  |

**Returns:** *Promise‹void›*

___

### `Static` `Private` sortByDate

▸ **sortByDate**(`a`: [Notice](../interfaces/notice.md), `b`: [Notice](../interfaces/notice.md)): *number*

*Defined in [consumer/notices.ts:60](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/notices.ts#L60)*

Sort messages based on date descending

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | [Notice](../interfaces/notice.md) | - |
`b` | [Notice](../interfaces/notice.md) |   |

**Returns:** *number*
