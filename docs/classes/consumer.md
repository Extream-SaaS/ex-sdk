[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [Consumer](consumer.md)

# Class: Consumer

Represents all the actions an event visitor can take. For example joining rooms, starting chats, getting notices ect.

## Hierarchy

* **Consumer**

## Index

### Constructors

* [constructor](consumer.md#constructor)

### Properties

* [options](consumer.md#private-options)
* [room](consumer.md#room)
* [socket](consumer.md#private-socket)

### Methods

* [event](consumer.md#event)
* [join](consumer.md#join)
* [onlineUsers](consumer.md#onlineusers)
* [startChat](consumer.md#startchat)

## Constructors

###  constructor

\+ **new Consumer**(`socket`: Socket, `options`: [ExtreamOptions](../interfaces/extreamoptions.md)): *[Consumer](consumer.md)*

*Defined in [consumer/consumer.ts:12](https://github.com/Extream-SaaS/ex-sdk/blob/936e0b7/src/consumer/consumer.ts#L12)*

Create an instance of the admin sdk

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`options` | [ExtreamOptions](../interfaces/extreamoptions.md) |

**Returns:** *[Consumer](consumer.md)*

## Properties

### `Private` options

• **options**: *[ExtreamOptions](../interfaces/extreamoptions.md)*

*Defined in [consumer/consumer.ts:11](https://github.com/Extream-SaaS/ex-sdk/blob/936e0b7/src/consumer/consumer.ts#L11)*

___

###  room

• **room**: *[Chat](chat.md) | null* = null

*Defined in [consumer/consumer.ts:12](https://github.com/Extream-SaaS/ex-sdk/blob/936e0b7/src/consumer/consumer.ts#L12)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [consumer/consumer.ts:10](https://github.com/Extream-SaaS/ex-sdk/blob/936e0b7/src/consumer/consumer.ts#L10)*

## Methods

###  event

▸ **event**(`id`: string): *Promise‹[Event](event.md)›*

*Defined in [consumer/consumer.ts:59](https://github.com/Extream-SaaS/ex-sdk/blob/936e0b7/src/consumer/consumer.ts#L59)*

Get a specific event. This class that represents everything that is happening at an event, allowing you get get itineraries, send messages ect.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | The id of the event to get  |

**Returns:** *Promise‹[Event](event.md)›*

___

###  join

▸ **join**(`roomId`: string, `instanceId?`: undefined | string): *Promise‹[Chat](chat.md)›*

*Defined in [consumer/consumer.ts:38](https://github.com/Extream-SaaS/ex-sdk/blob/936e0b7/src/consumer/consumer.ts#L38)*

Create a chat room.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`roomId` | string |   |
`instanceId?` | undefined &#124; string | - |

**Returns:** *Promise‹[Chat](chat.md)›*

___

###  onlineUsers

▸ **onlineUsers**(`request`: any): *Promise‹[OnlineUsers](onlineusers.md)›*

*Defined in [consumer/consumer.ts:27](https://github.com/Extream-SaaS/ex-sdk/blob/936e0b7/src/consumer/consumer.ts#L27)*

Get a list of online users

**Parameters:**

Name | Type |
------ | ------ |
`request` | any |

**Returns:** *Promise‹[OnlineUsers](onlineusers.md)›*

___

###  startChat

▸ **startChat**(`roomId`: string): *Promise‹[Chat](chat.md)›*

*Defined in [consumer/consumer.ts:49](https://github.com/Extream-SaaS/ex-sdk/blob/936e0b7/src/consumer/consumer.ts#L49)*

Start a new direct message chat in a specific room. Can be used for "help" chats.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`roomId` | string | the room id associated with the new dm  |

**Returns:** *Promise‹[Chat](chat.md)›*
