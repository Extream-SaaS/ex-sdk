[extream-sdk](../README.md) › [Globals](../globals.md) › [Consumer](consumer.md)

# Class: Consumer

## Hierarchy

* **Consumer**

## Index

### Constructors

* [constructor](consumer.md#constructor)

### Properties

* [socket](consumer.md#private-socket)

### Methods

* [createChatRoomInstance](consumer.md#createchatroominstance)
* [joinChatRoom](consumer.md#joinchatroom)

## Constructors

###  constructor

\+ **new Consumer**(`socket`: Socket): *[Consumer](consumer.md)*

*Defined in [src/consumer.ts:8](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/src/consumer.ts#L8)*

Create an instance of the admin sdk

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *[Consumer](consumer.md)*

## Properties

### `Private` socket

• **socket**: *Socket*

*Defined in [src/consumer.ts:8](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/src/consumer.ts#L8)*

## Methods

###  createChatRoomInstance

▸ **createChatRoomInstance**(`roomId`: string): *[ChatRoom](chatroom.md)*

*Defined in [src/consumer.ts:21](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/src/consumer.ts#L21)*

Create a chat room.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`roomId` | string |   |

**Returns:** *[ChatRoom](chatroom.md)*

___

###  joinChatRoom

▸ **joinChatRoom**(`roomId`: string): *Promise‹[ChatRoom](chatroom.md)›*

*Defined in [src/consumer.ts:30](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/src/consumer.ts#L30)*

Create an instance of a chat room and join that chat room.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`roomId` | string |   |

**Returns:** *Promise‹[ChatRoom](chatroom.md)›*
