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

* [configuration](chat.md#configuration)
* [instance](chat.md#instance)
* [messages](chat.md#messages)
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

*Defined in [itinerary-item/chat.ts:163](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/itinerary-item/chat.ts#L163)*

Create an instance of a chat

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`roomId` | string |
`instance?` | undefined &#124; string |

**Returns:** *[Chat](chat.md)*

## Properties

###  configuration

• **configuration**: *[ChatConfig](../interfaces/chatconfig.md) | null* = null

*Defined in [itinerary-item/chat.ts:163](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/itinerary-item/chat.ts#L163)*

All of this chats' specific configuration properties

___

###  instance

• **instance**: *string | undefined*

*Defined in [itinerary-item/chat.ts:153](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/itinerary-item/chat.ts#L153)*

The instance id of the chat this instance is associated with

___

###  messages

• **messages**: *[Message](../interfaces/message.md)[]* = []

*Defined in [itinerary-item/chat.ts:145](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/itinerary-item/chat.ts#L145)*

Dynamically updated list of messages for this room

___

###  moderators

• **moderators**: *string[]* = []

*Defined in [itinerary-item/chat.ts:158](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/itinerary-item/chat.ts#L158)*

The array of moderator IDs

___

###  roomId

• **roomId**: *string*

*Defined in [itinerary-item/chat.ts:149](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/itinerary-item/chat.ts#L149)*

The id of the chat this instance is associated with

___

### `Private` socket

• **socket**: *Socket*

*Defined in [itinerary-item/chat.ts:140](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/itinerary-item/chat.ts#L140)*

___

### `Private` subscriptionManager

• **subscriptionManager**: *[SubscriptionManager](subscriptionmanager.md)*

*Defined in [itinerary-item/chat.ts:141](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/itinerary-item/chat.ts#L141)*

## Methods

###  destroy

▸ **destroy**(): *void*

*Defined in [itinerary-item/chat.ts:385](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/itinerary-item/chat.ts#L385)*

Cleans up all listeners for this class. Call this when you no longer need access to this events information to ensure memory leaks are not caused.

**Returns:** *void*

___

### `Private` emitMessage

▸ **emitMessage**(`message`: [MessageData](../globals.md#messagedata)): *Promise‹void›*

*Defined in [itinerary-item/chat.ts:202](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/itinerary-item/chat.ts#L202)*

The message data to be sent

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | [MessageData](../globals.md#messagedata) | Message data to be sent  |

**Returns:** *Promise‹void›*

___

### `Private` findMessage

▸ **findMessage**(`id`: string): *[Message](../interfaces/message.md)*

*Defined in [itinerary-item/chat.ts:248](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/itinerary-item/chat.ts#L248)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[Message](../interfaces/message.md)*

___

###  join

▸ **join**(): *Promise‹void›*

*Defined in [itinerary-item/chat.ts:301](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/itinerary-item/chat.ts#L301)*

Join a chat room. Once joined all the messages property will be dynamically updated as messages
are sent/blocked.

**Returns:** *Promise‹void›*

___

###  removeMessage

▸ **removeMessage**(`message`: [BanMessageData](../interfaces/banmessagedata.md)): *void*

*Defined in [itinerary-item/chat.ts:191](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/itinerary-item/chat.ts#L191)*

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

*Defined in [itinerary-item/chat.ts:244](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/itinerary-item/chat.ts#L244)*

Reply to a specific message in the chat

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | [ReplyMessageData](../interfaces/replymessagedata.md) |   |

**Returns:** *Promise‹void›*

___

###  sendMessage

▸ **sendMessage**(`message`: [SendMessageData](../interfaces/sendmessagedata.md)): *Promise‹void›*

*Defined in [itinerary-item/chat.ts:235](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/itinerary-item/chat.ts#L235)*

Send a message to the chat

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | [SendMessageData](../interfaces/sendmessagedata.md) |   |

**Returns:** *Promise‹void›*

___

### `Private` setupChatListeners

▸ **setupChatListeners**(): *void*

*Defined in [itinerary-item/chat.ts:256](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/itinerary-item/chat.ts#L256)*

**Returns:** *void*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [itinerary-item/chat.ts:357](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/itinerary-item/chat.ts#L357)*

Start a new dm in the chat room. Once started all the messages property will be dynamically updated as messages
are sent/blocked.

**Returns:** *Promise‹void›*

___

### `Static` `Private` sortByDate

▸ **sortByDate**(`a`: [Message](../interfaces/message.md) | [ChatMessageResponse](../interfaces/chatmessageresponse.md), `b`: [Message](../interfaces/message.md) | [ChatMessageResponse](../interfaces/chatmessageresponse.md)): *number*

*Defined in [itinerary-item/chat.ts:180](https://github.com/Extream-SaaS/ex-sdk/blob/1c866e4/src/itinerary-item/chat.ts#L180)*

Sort messages based on date descending

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | [Message](../interfaces/message.md) &#124; [ChatMessageResponse](../interfaces/chatmessageresponse.md) | - |
`b` | [Message](../interfaces/message.md) &#124; [ChatMessageResponse](../interfaces/chatmessageresponse.md) |   |

**Returns:** *number*
