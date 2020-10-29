[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [Consumer](consumer.md)

# Class: Consumer

## Hierarchy

* **Consumer**

## Index

### Constructors

* [constructor](consumer.md#constructor)

### Properties

* [dms](consumer.md#dms)
* [room](consumer.md#room)
* [socket](consumer.md#private-socket)

### Methods

* [event](consumer.md#event)
* [join](consumer.md#join)
* [notices](consumer.md#notices)
* [startChat](consumer.md#startchat)

## Constructors

###  constructor

\+ **new Consumer**(`socket`: Socket): *[Consumer](consumer.md)*

*Defined in [consumer.ts:8](https://github.com/Extream-SaaS/ex-sdk/blob/d73bdfb/src/consumer.ts#L8)*

Create an instance of the admin sdk

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *[Consumer](consumer.md)*

## Properties

###  dms

• **dms**: *[Chat](chat.md)[]* = []

*Defined in [consumer.ts:8](https://github.com/Extream-SaaS/ex-sdk/blob/d73bdfb/src/consumer.ts#L8)*

___

###  room

• **room**: *[Chat](chat.md) | null* = null

*Defined in [consumer.ts:7](https://github.com/Extream-SaaS/ex-sdk/blob/d73bdfb/src/consumer.ts#L7)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [consumer.ts:6](https://github.com/Extream-SaaS/ex-sdk/blob/d73bdfb/src/consumer.ts#L6)*

## Methods

###  event

▸ **event**(`id`: string): *Promise‹[Event](event.md)›*

*Defined in [consumer.ts:49](https://github.com/Extream-SaaS/ex-sdk/blob/d73bdfb/src/consumer.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹[Event](event.md)›*

___

###  join

▸ **join**(`roomId`: string, `instanceId?`: undefined | string): *[Chat](chat.md)*

*Defined in [consumer.ts:22](https://github.com/Extream-SaaS/ex-sdk/blob/d73bdfb/src/consumer.ts#L22)*

Create a chat room.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`roomId` | string |   |
`instanceId?` | undefined &#124; string | - |

**Returns:** *[Chat](chat.md)*

___

###  notices

▸ **notices**(`request`: [NoticeGetRequest](../interfaces/noticegetrequest.md)): *Promise‹[Notices](notices.md)›*

*Defined in [consumer.ts:43](https://github.com/Extream-SaaS/ex-sdk/blob/d73bdfb/src/consumer.ts#L43)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`request` | [NoticeGetRequest](../interfaces/noticegetrequest.md) | The event, itineraray, page or read filters to get notices  |

**Returns:** *Promise‹[Notices](notices.md)›*

___

###  startChat

▸ **startChat**(`roomId`: string): *Promise‹[Chat](chat.md)›*

*Defined in [consumer.ts:33](https://github.com/Extream-SaaS/ex-sdk/blob/d73bdfb/src/consumer.ts#L33)*

Start a new DM in a specific room

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`roomId` | string | the room id associated with the new dm  |

**Returns:** *Promise‹[Chat](chat.md)›*
