[extream-sdk](../README.md) › [Globals](../globals.md) › [ChatRoom](chatroom.md)

# Class: ChatRoom

## Hierarchy

* **ChatRoom**

## Index

### Constructors

* [constructor](chatroom.md#constructor)

### Properties

* [listeners](chatroom.md#private-listeners)
* [messages](chatroom.md#messages)
* [roomId](chatroom.md#roomid)
* [socket](chatroom.md#private-socket)

### Methods

* [addListener](chatroom.md#private-addlistener)
* [destroy](chatroom.md#destroy)
* [joinChat](chatroom.md#joinchat)
* [removeMessage](chatroom.md#removemessage)
* [sendMessage](chatroom.md#sendmessage)
* [sortByDate](chatroom.md#static-private-sortbydate)

## Constructors

###  constructor

\+ **new ChatRoom**(`socket`: Socket, `roomId`: string): *[ChatRoom](chatroom.md)*

*Defined in [src/chat-room.ts:144](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/src/chat-room.ts#L144)*

Create an instance of the admin sdk

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`roomId` | string |

**Returns:** *[ChatRoom](chatroom.md)*

## Properties

### `Private` listeners

• **listeners**: *object*

*Defined in [src/chat-room.ts:139](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/src/chat-room.ts#L139)*

#### Type declaration:

* \[ **key**: *string*\]: function

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  messages

• **messages**: *[Message](../interfaces/message.md)[]* = []

*Defined in [src/chat-room.ts:144](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/src/chat-room.ts#L144)*

Dynamically updated list of messages for this room

___

###  roomId

• **roomId**: *string*

*Defined in [src/chat-room.ts:140](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/src/chat-room.ts#L140)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [src/chat-room.ts:138](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/src/chat-room.ts#L138)*

## Methods

### `Private` addListener

▸ **addListener**(`event`: string, `callback`: function): *void*

*Defined in [src/chat-room.ts:170](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/src/chat-room.ts#L170)*

Push event listener into the socket. We need to store references to the functions being executed in order
to clean up properly.

Otherwise Chat creation would leak 4 events handlers and possibly all the messages for the chats on every creation

**Parameters:**

▪ **event**: *string*

▪ **callback**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *void*

___

###  destroy

▸ **destroy**(): *void*

*Defined in [src/chat-room.ts:312](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/src/chat-room.ts#L312)*

Call once the a user leaves the chat to remove all event listener.

If this is not called each instance of this class with leak event listeners.

**Returns:** *void*

___

###  joinChat

▸ **joinChat**(): *Promise‹void›*

*Defined in [src/chat-room.ts:214](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/src/chat-room.ts#L214)*

Join a chat room. Once joined all the messages property will be dynamically updated as messages
are sent/blocked.

**Returns:** *Promise‹void›*

___

###  removeMessage

▸ **removeMessage**(`message`: [BanMessageRequest](../interfaces/banmessagerequest.md)): *void*

*Defined in [src/chat-room.ts:181](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/src/chat-room.ts#L181)*

Remove a specific message for all user in the chat room.

This function can only be executed by admins

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | [BanMessageRequest](../interfaces/banmessagerequest.md) | The messah  |

**Returns:** *void*

___

###  sendMessage

▸ **sendMessage**(`message`: [SendChatRequest](../interfaces/sendchatrequest.md)): *Promise‹void›*

*Defined in [src/chat-room.ts:190](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/src/chat-room.ts#L190)*

Send a message to the chat currently connected

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | [SendChatRequest](../interfaces/sendchatrequest.md) |   |

**Returns:** *Promise‹void›*

___

### `Static` `Private` sortByDate

▸ **sortByDate**(`a`: [Message](../interfaces/message.md) | [ChatMessageResponse](../interfaces/chatmessageresponse.md), `b`: [Message](../interfaces/message.md) | [ChatMessageResponse](../interfaces/chatmessageresponse.md)): *number*

*Defined in [src/chat-room.ts:158](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/src/chat-room.ts#L158)*

Sort messages based on date descending

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | [Message](../interfaces/message.md) &#124; [ChatMessageResponse](../interfaces/chatmessageresponse.md) | - |
`b` | [Message](../interfaces/message.md) &#124; [ChatMessageResponse](../interfaces/chatmessageresponse.md) |   |

**Returns:** *number*
