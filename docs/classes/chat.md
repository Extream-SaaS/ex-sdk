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
* [moderation](chat.md#moderation)
* [moderators](chat.md#moderators)
* [roomId](chat.md#roomid)
* [socket](chat.md#private-socket)
* [subscriptionManager](chat.md#private-subscriptionmanager)

### Methods

* [destroy](chat.md#destroy)
* [emitMessage](chat.md#private-emitmessage)
* [findMessage](chat.md#private-findmessage)
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

*Defined in [itinerary-item/chat.ts:156](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/chat.ts#L156)*

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

*Defined in [itinerary-item/chat.ts:146](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/chat.ts#L146)*

The instance id of the chat this instance is associated with

___

###  messages

• **messages**: *[Message](../interfaces/message.md)[]* = []

*Defined in [itinerary-item/chat.ts:138](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/chat.ts#L138)*

Dynamically updated list of messages for this room

___

###  moderation

• **moderation**: *string | undefined*

*Defined in [itinerary-item/chat.ts:156](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/chat.ts#L156)*

The moderation mode

___

###  moderators

• **moderators**: *string[]* = []

*Defined in [itinerary-item/chat.ts:151](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/chat.ts#L151)*

The array of moderator IDs

___

###  roomId

• **roomId**: *string*

*Defined in [itinerary-item/chat.ts:142](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/chat.ts#L142)*

The id of the chat this instance is associated with

___

### `Private` socket

• **socket**: *Socket*

*Defined in [itinerary-item/chat.ts:133](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/chat.ts#L133)*

___

### `Private` subscriptionManager

• **subscriptionManager**: *[SubscriptionManager](subscriptionmanager.md)*

*Defined in [itinerary-item/chat.ts:134](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/chat.ts#L134)*

## Methods

###  destroy

▸ **destroy**(): *void*

*Defined in [itinerary-item/chat.ts:379](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/chat.ts#L379)*

Cleans up all listeners for this class. Call this when you no longer need access to this events information to ensure memory leaks are not caused.

**Returns:** *void*

___

### `Private` emitMessage

▸ **emitMessage**(`message`: [MessageData](../globals.md#messagedata)): *Promise‹void›*

*Defined in [itinerary-item/chat.ts:195](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/chat.ts#L195)*

The message data to be sent

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | [MessageData](../globals.md#messagedata) | Message data to be sent  |

**Returns:** *Promise‹void›*

___

### `Private` findMessage

▸ **findMessage**(`id`: string): *[Message](../interfaces/message.md)*

*Defined in [itinerary-item/chat.ts:241](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/chat.ts#L241)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[Message](../interfaces/message.md)*

___

###  join

▸ **join**(): *Promise‹void›*

*Defined in [itinerary-item/chat.ts:294](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/chat.ts#L294)*

Join a chat room. Once joined all the messages property will be dynamically updated as messages
are sent/blocked.

**Returns:** *Promise‹void›*

___

###  removeMessage

▸ **removeMessage**(`message`: [BanMessageData](../interfaces/banmessagedata.md)): *void*

*Defined in [itinerary-item/chat.ts:184](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/chat.ts#L184)*

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

*Defined in [itinerary-item/chat.ts:237](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/chat.ts#L237)*

Reply to a specific message in the chat

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | [ReplyMessageData](../interfaces/replymessagedata.md) |   |

**Returns:** *Promise‹void›*

___

###  sendMessage

▸ **sendMessage**(`message`: [SendMessageData](../interfaces/sendmessagedata.md)): *Promise‹void›*

*Defined in [itinerary-item/chat.ts:228](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/chat.ts#L228)*

Send a message to the chat

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | [SendMessageData](../interfaces/sendmessagedata.md) |   |

**Returns:** *Promise‹void›*

___

### `Private` setupChatListeners

▸ **setupChatListeners**(): *void*

*Defined in [itinerary-item/chat.ts:249](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/chat.ts#L249)*

**Returns:** *void*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [itinerary-item/chat.ts:351](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/chat.ts#L351)*

Start a new dm in the chat room. Once started all the messages property will be dynamically updated as messages
are sent/blocked.

**Returns:** *Promise‹void›*

___

### `Static` `Private` sortByDate

▸ **sortByDate**(`a`: [Message](../interfaces/message.md) | [ChatMessageResponse](../interfaces/chatmessageresponse.md), `b`: [Message](../interfaces/message.md) | [ChatMessageResponse](../interfaces/chatmessageresponse.md)): *number*

*Defined in [itinerary-item/chat.ts:173](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/chat.ts#L173)*

Sort messages based on date descending

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | [Message](../interfaces/message.md) &#124; [ChatMessageResponse](../interfaces/chatmessageresponse.md) | - |
`b` | [Message](../interfaces/message.md) &#124; [ChatMessageResponse](../interfaces/chatmessageresponse.md) |   |

**Returns:** *number*
