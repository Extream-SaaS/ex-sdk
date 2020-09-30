[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [Consumer](consumer.md)

# Class: Consumer

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

* [join](consumer.md#join)
* [startChat](consumer.md#startchat)

## Constructors

###  constructor

\+ **new Consumer**(`socket`: Socket): *[Consumer](consumer.md)*

*Defined in [consumer.ts:7](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/consumer.ts#L7)*

Create an instance of the admin sdk

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *[Consumer](consumer.md)*

## Properties

###  dms

• **dms**: *[Chat](chat.md)[]* = []

*Defined in [consumer.ts:7](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/consumer.ts#L7)*

___

###  room

• **room**: *[Chat](chat.md) | null* = null

*Defined in [consumer.ts:6](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/consumer.ts#L6)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [consumer.ts:5](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/consumer.ts#L5)*

## Methods

###  join

▸ **join**(`roomId`: string, `instanceId?`: undefined | string): *[Chat](chat.md)*

*Defined in [consumer.ts:21](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/consumer.ts#L21)*

Create a chat room.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`roomId` | string |   |
`instanceId?` | undefined &#124; string | - |

**Returns:** *[Chat](chat.md)*

___

###  startChat

▸ **startChat**(`roomId`: string): *Promise‹[Chat](chat.md)‹››*

*Defined in [consumer.ts:32](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/consumer.ts#L32)*

Start a new DM in a specific room

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`roomId` | string | the room id associated with the new dm  |

**Returns:** *Promise‹[Chat](chat.md)‹››*
