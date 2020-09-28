[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [Chat](chat.md)

# Class: Chat

Represents a single chat and handles all subscription and updating logic for that chat

After creating an instance either call `join` if you know which room you want to join (and instance if applicable)
or call `start` in order to create a chat instance.

## Hierarchy

* **Chat**

## Index

### Constructors

* [constructor](chat.md#constructor)

### Properties

* [instance](chat.md#instance)
* [messages](chat.md#messages)
* [roomId](chat.md#roomid)
* [socket](chat.md#private-socket)
* [subscriptionManager](chat.md#private-subscriptionmanager)

### Methods

* [destroy](chat.md#destroy)
* [emitMessage](chat.md#private-emitmessage)
* [join](chat.md#join)
* [removeMessage](chat.md#removemessage)
* [replyToMessage](chat.md#replytomessage)
* [sendMessage](chat.md#sendmessage)
* [setupChatListeners](chat.md#private-setupchatlisteners)
* [start](chat.md#start)
* [sortByDate](chat.md#static-private-sortbydate)

## Constructors

###  constructor

\+ **new Chat**(`socket`: Socket, `roomId`: string, `instance?`: undefined | string): *[Chat](chat.md)*

*Defined in [chat.ts:176](https://github.com/Extream-SaaS/ex-sdk/blob/489cbc8/src/chat.ts#L176)*

Create an instance of a chat

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`roomId` | string |
`instance?` | undefined &#124; string |

**Returns:** *[Chat](chat.md)*

## Properties

###  instance

• **instance**: *string | undefined*

*Defined in [chat.ts:176](https://github.com/Extream-SaaS/ex-sdk/blob/489cbc8/src/chat.ts#L176)*

The instance id of the chat this instance is associated with

___

###  messages

• **messages**: *[Message](../interfaces/message.md)[]* = []

*Defined in [chat.ts:168](https://github.com/Extream-SaaS/ex-sdk/blob/489cbc8/src/chat.ts#L168)*

Dynamically updated list of messages for this room

___

###  roomId

• **roomId**: *string*

*Defined in [chat.ts:172](https://github.com/Extream-SaaS/ex-sdk/blob/489cbc8/src/chat.ts#L172)*

The id of the chat this instance is associated with

___

### `Private` socket

• **socket**: *Socket*

*Defined in [chat.ts:163](https://github.com/Extream-SaaS/ex-sdk/blob/489cbc8/src/chat.ts#L163)*

___

### `Private` subscriptionManager

• **subscriptionManager**: *[SubscriptionManager](subscriptionmanager.md)*

*Defined in [chat.ts:164](https://github.com/Extream-SaaS/ex-sdk/blob/489cbc8/src/chat.ts#L164)*

## Methods

###  destroy

▸ **destroy**(): *void*

*Defined in [chat.ts:396](https://github.com/Extream-SaaS/ex-sdk/blob/489cbc8/src/chat.ts#L396)*

Call once the a user leaves the chat to remove all event listener.

If this is not called each instance of this class with leak event listeners.

**Returns:** *void*

___

### `Private` emitMessage

▸ **emitMessage**(`message`: [MessageData](../globals.md#messagedata)): *Promise‹void›*

*Defined in [chat.ts:215](https://github.com/Extream-SaaS/ex-sdk/blob/489cbc8/src/chat.ts#L215)*

The message data to be sent

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | [MessageData](../globals.md#messagedata) | Message data to be sent  |

**Returns:** *Promise‹void›*

___

###  join

▸ **join**(): *Promise‹void›*

*Defined in [chat.ts:314](https://github.com/Extream-SaaS/ex-sdk/blob/489cbc8/src/chat.ts#L314)*

Join a chat room. Once joined all the messages property will be dynamically updated as messages
are sent/blocked.

**Returns:** *Promise‹void›*

___

###  removeMessage

▸ **removeMessage**(`message`: [BanMessageData](../interfaces/banmessagedata.md)): *void*

*Defined in [chat.ts:204](https://github.com/Extream-SaaS/ex-sdk/blob/489cbc8/src/chat.ts#L204)*

Remove a specific message for all user in the chat room.

This function can only be executed by admins

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | [BanMessageData](../interfaces/banmessagedata.md) | The messah  |

**Returns:** *void*

___

###  replyToMessage

▸ **replyToMessage**(`message`: [ReplyMessageData](../interfaces/replymessagedata.md)): *Promise‹void›*

*Defined in [chat.ts:256](https://github.com/Extream-SaaS/ex-sdk/blob/489cbc8/src/chat.ts#L256)*

Reply to a specific message in the chat

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | [ReplyMessageData](../interfaces/replymessagedata.md) |   |

**Returns:** *Promise‹void›*

___

###  sendMessage

▸ **sendMessage**(`message`: [SendMessageData](../interfaces/sendmessagedata.md)): *Promise‹void›*

*Defined in [chat.ts:247](https://github.com/Extream-SaaS/ex-sdk/blob/489cbc8/src/chat.ts#L247)*

Send a message to the chat

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | [SendMessageData](../interfaces/sendmessagedata.md) |   |

**Returns:** *Promise‹void›*

___

### `Private` setupChatListeners

▸ **setupChatListeners**(): *void*

*Defined in [chat.ts:260](https://github.com/Extream-SaaS/ex-sdk/blob/489cbc8/src/chat.ts#L260)*

**Returns:** *void*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [chat.ts:369](https://github.com/Extream-SaaS/ex-sdk/blob/489cbc8/src/chat.ts#L369)*

Start a new dm in the chat room. Once started all the messages property will be dynamically updated as messages
are sent/blocked.

**Returns:** *Promise‹void›*

___

### `Static` `Private` sortByDate

▸ **sortByDate**(`a`: [Message](../interfaces/message.md) | [ChatMessageResponse](../interfaces/chatmessageresponse.md), `b`: [Message](../interfaces/message.md) | [ChatMessageResponse](../interfaces/chatmessageresponse.md)): *number*

*Defined in [chat.ts:193](https://github.com/Extream-SaaS/ex-sdk/blob/489cbc8/src/chat.ts#L193)*

Sort messages based on date descending

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | [Message](../interfaces/message.md) &#124; [ChatMessageResponse](../interfaces/chatmessageresponse.md) | - |
`b` | [Message](../interfaces/message.md) &#124; [ChatMessageResponse](../interfaces/chatmessageresponse.md) |   |

**Returns:** *number*
