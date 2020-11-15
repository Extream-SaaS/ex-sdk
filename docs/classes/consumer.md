[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [Consumer](consumer.md)

# Class: Consumer

Represents all the actions an event visitor can take. For example joining rooms, starting chats, getting notices ect.

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

*Defined in [consumer.ts:13](https://github.com/Extream-SaaS/ex-sdk/blob/22f780b/src/consumer.ts#L13)*

Create an instance of the admin sdk

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *[Consumer](consumer.md)*

## Properties

###  dms

• **dms**: *[Chat](chat.md)[]* = []

*Defined in [consumer.ts:13](https://github.com/Extream-SaaS/ex-sdk/blob/22f780b/src/consumer.ts#L13)*

___

###  room

• **room**: *[Chat](chat.md) | null* = null

*Defined in [consumer.ts:12](https://github.com/Extream-SaaS/ex-sdk/blob/22f780b/src/consumer.ts#L12)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [consumer.ts:11](https://github.com/Extream-SaaS/ex-sdk/blob/22f780b/src/consumer.ts#L11)*

## Methods

###  event

▸ **event**(`id`: string): *Promise‹[Event](event.md)›*

*Defined in [consumer.ts:58](https://github.com/Extream-SaaS/ex-sdk/blob/22f780b/src/consumer.ts#L58)*

Get a specific event. This class that represents everything that is happening at an event, allowing you get get itineraries, send messages ect.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | The id of the event to get  |

**Returns:** *Promise‹[Event](event.md)›*

___

###  join

▸ **join**(`roomId`: string, `instanceId?`: undefined | string): *Promise‹[Chat](chat.md)›*

*Defined in [consumer.ts:27](https://github.com/Extream-SaaS/ex-sdk/blob/22f780b/src/consumer.ts#L27)*

Create a chat room.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`roomId` | string |   |
`instanceId?` | undefined &#124; string | - |

**Returns:** *Promise‹[Chat](chat.md)›*

___

###  notices

▸ **notices**(`request`: [NoticeGetRequest](../interfaces/noticegetrequest.md)): *Promise‹[Notices](notices.md)›*

*Defined in [consumer.ts:48](https://github.com/Extream-SaaS/ex-sdk/blob/22f780b/src/consumer.ts#L48)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`request` | [NoticeGetRequest](../interfaces/noticegetrequest.md) | The event, itineraray, page or read filters to get notices  |

**Returns:** *Promise‹[Notices](notices.md)›*

___

###  startChat

▸ **startChat**(`roomId`: string): *Promise‹[Chat](chat.md)›*

*Defined in [consumer.ts:38](https://github.com/Extream-SaaS/ex-sdk/blob/22f780b/src/consumer.ts#L38)*

Start a new direct message chat in a specific room. Can be used for "help" chats.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`roomId` | string | the room id associated with the new dm  |

**Returns:** *Promise‹[Chat](chat.md)›*
