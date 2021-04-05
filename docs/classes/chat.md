[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [Chat](chat.md)

# Class: Chat

Represents a single chat and handles all subscription and updating logic for that chat

After creating an instance either call `join` if you know which room you want to join (and instance if applicable)
or call `start` in order to create a chat instance.

## Hierarchy

* **Chat**

## Implements

* [IEntity](../interfaces/ientity.md)
* [IDestroyable](../interfaces/idestroyable.md)

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
* [type](chat.md#type)

### Methods

* [destroy](chat.md#destroy)
* [emitMessage](chat.md#private-emitmessage)
* [findMessage](chat.md#private-findmessage)
* [get](chat.md#get)
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

*Defined in [consumer/itinerary-item/chat.ts:166](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/consumer/itinerary-item/chat.ts#L166)*

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

*Defined in [consumer/itinerary-item/chat.ts:164](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/consumer/itinerary-item/chat.ts#L164)*

All of this chats' specific configuration properties

___

###  instance

• **instance**: *string | undefined*

*Defined in [consumer/itinerary-item/chat.ts:154](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/consumer/itinerary-item/chat.ts#L154)*

The instance id of the chat this instance is associated with

___

###  messages

• **messages**: *[Message](../interfaces/message.md)[]* = []

*Defined in [consumer/itinerary-item/chat.ts:146](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/consumer/itinerary-item/chat.ts#L146)*

Dynamically updated list of messages for this room

___

###  moderators

• **moderators**: *string[]* = []

*Defined in [consumer/itinerary-item/chat.ts:159](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/consumer/itinerary-item/chat.ts#L159)*

The array of moderator IDs

___

###  roomId

• **roomId**: *string*

*Defined in [consumer/itinerary-item/chat.ts:150](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/consumer/itinerary-item/chat.ts#L150)*

The id of the chat this instance is associated with

___

### `Private` socket

• **socket**: *Socket*

*Defined in [consumer/itinerary-item/chat.ts:141](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/consumer/itinerary-item/chat.ts#L141)*

___

### `Private` subscriptionManager

• **subscriptionManager**: *[SubscriptionManager](subscriptionmanager.md)*

*Defined in [consumer/itinerary-item/chat.ts:142](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/consumer/itinerary-item/chat.ts#L142)*

___

###  type

• **type**: *[ItineraryType](../enums/itinerarytype.md)* = ItineraryType.Chat

*Defined in [consumer/itinerary-item/chat.ts:166](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/consumer/itinerary-item/chat.ts#L166)*

## Methods

###  destroy

▸ **destroy**(): *void*

*Implementation of [IDestroyable](../interfaces/idestroyable.md)*

*Defined in [consumer/itinerary-item/chat.ts:392](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/consumer/itinerary-item/chat.ts#L392)*

Cleans up all listeners for this class. Call this when you no longer need access to this events information to ensure memory leaks are not caused.

**Returns:** *void*

___

### `Private` emitMessage

▸ **emitMessage**(`message`: [MessageData](../globals.md#messagedata)): *Promise‹void›*

*Defined in [consumer/itinerary-item/chat.ts:205](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/consumer/itinerary-item/chat.ts#L205)*

The message data to be sent

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | [MessageData](../globals.md#messagedata) | Message data to be sent  |

**Returns:** *Promise‹void›*

___

### `Private` findMessage

▸ **findMessage**(`id`: string): *[Message](../interfaces/message.md)*

*Defined in [consumer/itinerary-item/chat.ts:251](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/consumer/itinerary-item/chat.ts#L251)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[Message](../interfaces/message.md)*

___

###  get

▸ **get**(): *Promise‹void›*

*Defined in [consumer/itinerary-item/chat.ts:304](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/consumer/itinerary-item/chat.ts#L304)*

Join a chat room. Once joined all the messages property will be dynamically updated as messages
are sent/blocked.

**Returns:** *Promise‹void›*

___

###  join

▸ **join**(): *Promise‹void›*

*Defined in [consumer/itinerary-item/chat.ts:356](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/consumer/itinerary-item/chat.ts#L356)*

**Returns:** *Promise‹void›*

___

###  removeMessage

▸ **removeMessage**(`message`: [BanMessageData](../interfaces/banmessagedata.md)): *void*

*Defined in [consumer/itinerary-item/chat.ts:194](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/consumer/itinerary-item/chat.ts#L194)*

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

*Defined in [consumer/itinerary-item/chat.ts:247](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/consumer/itinerary-item/chat.ts#L247)*

Reply to a specific message in the chat

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | [ReplyMessageData](../interfaces/replymessagedata.md) |   |

**Returns:** *Promise‹void›*

___

###  sendMessage

▸ **sendMessage**(`message`: [SendMessageData](../interfaces/sendmessagedata.md)): *Promise‹void›*

*Defined in [consumer/itinerary-item/chat.ts:238](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/consumer/itinerary-item/chat.ts#L238)*

Send a message to the chat

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | [SendMessageData](../interfaces/sendmessagedata.md) |   |

**Returns:** *Promise‹void›*

___

### `Private` setupChatListeners

▸ **setupChatListeners**(): *void*

*Defined in [consumer/itinerary-item/chat.ts:259](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/consumer/itinerary-item/chat.ts#L259)*

**Returns:** *void*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [consumer/itinerary-item/chat.ts:364](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/consumer/itinerary-item/chat.ts#L364)*

Start a new dm in the chat room. Once started all the messages property will be dynamically updated as messages
are sent/blocked.

**Returns:** *Promise‹void›*

___

### `Static` `Private` sortByDate

▸ **sortByDate**(`a`: [Message](../interfaces/message.md) | [ChatMessageResponse](../interfaces/chatmessageresponse.md), `b`: [Message](../interfaces/message.md) | [ChatMessageResponse](../interfaces/chatmessageresponse.md)): *number*

*Defined in [consumer/itinerary-item/chat.ts:183](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/consumer/itinerary-item/chat.ts#L183)*

Sort messages based on date descending

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | [Message](../interfaces/message.md) &#124; [ChatMessageResponse](../interfaces/chatmessageresponse.md) | - |
`b` | [Message](../interfaces/message.md) &#124; [ChatMessageResponse](../interfaces/chatmessageresponse.md) |   |

**Returns:** *number*
