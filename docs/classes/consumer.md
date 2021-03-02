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
* [options](consumer.md#private-options)
* [room](consumer.md#room)
* [socket](consumer.md#private-socket)

### Methods

* [event](consumer.md#event)
* [join](consumer.md#join)
* [notices](consumer.md#notices)
* [onlineUsers](consumer.md#onlineusers)
* [startChat](consumer.md#startchat)

## Constructors

###  constructor

\+ **new Consumer**(`socket`: Socket, `options`: [ExtreamOptions](../interfaces/extreamoptions.md)): *[Consumer](consumer.md)*

*Defined in [consumer.ts:16](https://github.com/Extream-SaaS/ex-sdk/blob/4323002/src/consumer.ts#L16)*

Create an instance of the admin sdk

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`options` | [ExtreamOptions](../interfaces/extreamoptions.md) |

**Returns:** *[Consumer](consumer.md)*

## Properties

###  dms

• **dms**: *[Chat](chat.md)[]* = []

*Defined in [consumer.ts:16](https://github.com/Extream-SaaS/ex-sdk/blob/4323002/src/consumer.ts#L16)*

___

### `Private` options

• **options**: *[ExtreamOptions](../interfaces/extreamoptions.md)*

*Defined in [consumer.ts:14](https://github.com/Extream-SaaS/ex-sdk/blob/4323002/src/consumer.ts#L14)*

___

###  room

• **room**: *[Chat](chat.md) | null* = null

*Defined in [consumer.ts:15](https://github.com/Extream-SaaS/ex-sdk/blob/4323002/src/consumer.ts#L15)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [consumer.ts:13](https://github.com/Extream-SaaS/ex-sdk/blob/4323002/src/consumer.ts#L13)*

## Methods

###  event

▸ **event**(`id`: string): *Promise‹[Event](event.md)›*

*Defined in [consumer.ts:73](https://github.com/Extream-SaaS/ex-sdk/blob/4323002/src/consumer.ts#L73)*

Get a specific event. This class that represents everything that is happening at an event, allowing you get get itineraries, send messages ect.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | The id of the event to get  |

**Returns:** *Promise‹[Event](event.md)›*

___

###  join

▸ **join**(`roomId`: string, `instanceId?`: undefined | string): *Promise‹[Chat](chat.md)›*

*Defined in [consumer.ts:42](https://github.com/Extream-SaaS/ex-sdk/blob/4323002/src/consumer.ts#L42)*

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

*Defined in [consumer.ts:63](https://github.com/Extream-SaaS/ex-sdk/blob/4323002/src/consumer.ts#L63)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`request` | [NoticeGetRequest](../interfaces/noticegetrequest.md) | The event, itineraray, page or read filters to get notices  |

**Returns:** *Promise‹[Notices](notices.md)›*

___

###  onlineUsers

▸ **onlineUsers**(`request`: any): *Promise‹[OnlineUsers](onlineusers.md)›*

*Defined in [consumer.ts:31](https://github.com/Extream-SaaS/ex-sdk/blob/4323002/src/consumer.ts#L31)*

Get a list of online users

**Parameters:**

Name | Type |
------ | ------ |
`request` | any |

**Returns:** *Promise‹[OnlineUsers](onlineusers.md)›*

___

###  startChat

▸ **startChat**(`roomId`: string): *Promise‹[Chat](chat.md)›*

*Defined in [consumer.ts:53](https://github.com/Extream-SaaS/ex-sdk/blob/4323002/src/consumer.ts#L53)*

Start a new direct message chat in a specific room. Can be used for "help" chats.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`roomId` | string | the room id associated with the new dm  |

**Returns:** *Promise‹[Chat](chat.md)›*
