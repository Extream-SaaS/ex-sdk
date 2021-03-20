[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [OnlineUsers](onlineusers.md)

# Class: OnlineUsers

## Hierarchy

* **OnlineUsers**

## Index

### Constructors

* [constructor](onlineusers.md#constructor)

### Properties

* [socket](onlineusers.md#private-socket)
* [subscriptionManager](onlineusers.md#private-subscriptionmanager)
* [users](onlineusers.md#users)

### Methods

* [destroy](onlineusers.md#destroy)
* [get](onlineusers.md#get)

## Constructors

###  constructor

\+ **new OnlineUsers**(`socket`: Socket): *[OnlineUsers](onlineusers.md)*

*Defined in [online-users.ts:12](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/online-users.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *[OnlineUsers](onlineusers.md)*

## Properties

### `Private` socket

• **socket**: *Socket*

*Defined in [online-users.ts:8](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/online-users.ts#L8)*

___

### `Private` subscriptionManager

• **subscriptionManager**: *[SubscriptionManager](subscriptionmanager.md)*

*Defined in [online-users.ts:7](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/online-users.ts#L7)*

___

###  users

• **users**: *[ExtreamUser](../interfaces/extreamuser.md)[]* = []

*Defined in [online-users.ts:12](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/online-users.ts#L12)*

All of the unread notices for the logged in user

## Methods

###  destroy

▸ **destroy**(): *void*

*Defined in [online-users.ts:19](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/online-users.ts#L19)*

**Returns:** *void*

___

###  get

▸ **get**(`request`: any): *Promise‹void›*

*Defined in [online-users.ts:23](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/online-users.ts#L23)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`request` | any | {} |

**Returns:** *Promise‹void›*
