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

*Defined in [itinerary-item/chat.ts:142](https://github.com/Extream-SaaS/ex-sdk/blob/6a99c99/src/itinerary-item/chat.ts#L142)*

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

*Defined in [itinerary-item/chat.ts:142](https://github.com/Extream-SaaS/ex-sdk/blob/6a99c99/src/itinerary-item/chat.ts#L142)*

The instance id of the chat this instance is associated with

___

###  messages

• **messages**: *[Message](../interfaces/message.md)[]* = []

*Defined in [itinerary-item/chat.ts:134](https://github.com/Extream-SaaS/ex-sdk/blob/6a99c99/src/itinerary-item/chat.ts#L134)*

Dynamically updated list of messages for this room

___

###  roomId

• **roomId**: *string*

*Defined in [itinerary-item/chat.ts:138](https://github.com/Extream-SaaS/ex-sdk/blob/6a99c99/src/itinerary-item/chat.ts#L138)*

The id of the chat this instance is associated with

___

### `Private` socket

• **socket**: *Socket*

*Defined in [itinerary-item/chat.ts:129](https://github.com/Extream-SaaS/ex-sdk/blob/6a99c99/src/itinerary-item/chat.ts#L129)*

___

### `Private` subscriptionManager

• **subscriptionManager**: *[SubscriptionManager](subscriptionmanager.md)*

*Defined in [itinerary-item/chat.ts:130](https://github.com/Extream-SaaS/ex-sdk/blob/6a99c99/src/itinerary-item/chat.ts#L130)*

## Methods

###  destroy

▸ **destroy**(): *void*

*Defined in [itinerary-item/chat.ts:362](https://github.com/Extream-SaaS/ex-sdk/blob/6a99c99/src/itinerary-item/chat.ts#L362)*

Call once the a user leaves the chat to remove all event listener.

If this is not called each instance of this class with leak event listeners.

**Returns:** *void*

___

### `Private` emitMessage

▸ **emitMessage**(`message`: [MessageData](../globals.md#messagedata)): *Promise‹void›*

*Defined in [itinerary-item/chat.ts:181](https://github.com/Extream-SaaS/ex-sdk/blob/6a99c99/src/itinerary-item/chat.ts#L181)*

The message data to be sent

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | [MessageData](../globals.md#messagedata) | Message data to be sent  |

**Returns:** *Promise‹void›*

___

### `Private` findMessage

▸ **findMessage**(`id`: string): *[Message](../interfaces/message.md)*

*Defined in [itinerary-item/chat.ts:227](https://github.com/Extream-SaaS/ex-sdk/blob/6a99c99/src/itinerary-item/chat.ts#L227)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[Message](../interfaces/message.md)*

___

###  join

▸ **join**(): *Promise‹void›*

*Defined in [itinerary-item/chat.ts:280](https://github.com/Extream-SaaS/ex-sdk/blob/6a99c99/src/itinerary-item/chat.ts#L280)*

Join a chat room. Once joined all the messages property will be dynamically updated as messages
are sent/blocked.

**Returns:** *Promise‹void›*

___

###  removeMessage

▸ **removeMessage**(`message`: [BanMessageData](../interfaces/banmessagedata.md)): *void*

*Defined in [itinerary-item/chat.ts:170](https://github.com/Extream-SaaS/ex-sdk/blob/6a99c99/src/itinerary-item/chat.ts#L170)*

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

*Defined in [itinerary-item/chat.ts:223](https://github.com/Extream-SaaS/ex-sdk/blob/6a99c99/src/itinerary-item/chat.ts#L223)*

Reply to a specific message in the chat

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | [ReplyMessageData](../interfaces/replymessagedata.md) |   |

**Returns:** *Promise‹void›*

___

###  sendMessage

▸ **sendMessage**(`message`: [SendMessageData](../interfaces/sendmessagedata.md)): *Promise‹void›*

*Defined in [itinerary-item/chat.ts:214](https://github.com/Extream-SaaS/ex-sdk/blob/6a99c99/src/itinerary-item/chat.ts#L214)*

Send a message to the chat

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | [SendMessageData](../interfaces/sendmessagedata.md) |   |

**Returns:** *Promise‹void›*

___

### `Private` setupChatListeners

▸ **setupChatListeners**(): *void*

*Defined in [itinerary-item/chat.ts:235](https://github.com/Extream-SaaS/ex-sdk/blob/6a99c99/src/itinerary-item/chat.ts#L235)*

**Returns:** *void*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [itinerary-item/chat.ts:334](https://github.com/Extream-SaaS/ex-sdk/blob/6a99c99/src/itinerary-item/chat.ts#L334)*

Start a new dm in the chat room. Once started all the messages property will be dynamically updated as messages
are sent/blocked.

**Returns:** *Promise‹void›*

___

### `Static` `Private` sortByDate

▸ **sortByDate**(`a`: [Message](../interfaces/message.md) | [ChatMessageResponse](../interfaces/chatmessageresponse.md), `b`: [Message](../interfaces/message.md) | [ChatMessageResponse](../interfaces/chatmessageresponse.md)): *number*

*Defined in [itinerary-item/chat.ts:159](https://github.com/Extream-SaaS/ex-sdk/blob/6a99c99/src/itinerary-item/chat.ts#L159)*

Sort messages based on date descending

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | [Message](../interfaces/message.md) &#124; [ChatMessageResponse](../interfaces/chatmessageresponse.md) | - |
`b` | [Message](../interfaces/message.md) &#124; [ChatMessageResponse](../interfaces/chatmessageresponse.md) |   |

**Returns:** *number*
