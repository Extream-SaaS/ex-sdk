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

*Defined in [user/online-users.ts:9](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/user/online-users.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *[OnlineUsers](onlineusers.md)*

## Properties

### `Private` socket

• **socket**: *Socket*

*Defined in [user/online-users.ts:8](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/user/online-users.ts#L8)*

___

### `Private` subscriptionManager

• **subscriptionManager**: *[SubscriptionManager](subscriptionmanager.md)*

*Defined in [user/online-users.ts:7](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/user/online-users.ts#L7)*

___

###  users

• **users**: *[ExtreamUser](../interfaces/extreamuser.md)[]* = []

*Defined in [user/online-users.ts:9](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/user/online-users.ts#L9)*

## Methods

###  destroy

▸ **destroy**(): *void*

*Defined in [user/online-users.ts:16](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/user/online-users.ts#L16)*

**Returns:** *void*

___

###  get

▸ **get**(`request`: any): *Promise‹void›*

*Defined in [user/online-users.ts:20](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/user/online-users.ts#L20)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`request` | any | {} |

**Returns:** *Promise‹void›*
