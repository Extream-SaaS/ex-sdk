[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [SubscriptionManager](subscriptionmanager.md)

# Class: SubscriptionManager

Manages a list of subscriptions, holding references to the listeners attached to allow classes to clean
up all the listeners they setup on creation easily.

Consumers of this class should create their own subscription managers in constructors and expose a destory method

## Hierarchy

* **SubscriptionManager**

## Index

### Constructors

* [constructor](subscriptionmanager.md#constructor)

### Properties

* [listeners](subscriptionmanager.md#private-listeners)
* [socket](subscriptionmanager.md#private-socket)

### Methods

* [addSubscription](subscriptionmanager.md#addsubscription)
* [removeAllSubscriptions](subscriptionmanager.md#removeallsubscriptions)

## Constructors

###  constructor

\+ **new SubscriptionManager**(`socket`: Socket): *[SubscriptionManager](subscriptionmanager.md)*

*Defined in [subscription-manager.ts:10](https://github.com/Extream-SaaS/ex-sdk/blob/b2de5a9/src/subscription-manager.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *[SubscriptionManager](subscriptionmanager.md)*

## Properties

### `Private` listeners

• **listeners**: *object[]* = []

*Defined in [subscription-manager.ts:10](https://github.com/Extream-SaaS/ex-sdk/blob/b2de5a9/src/subscription-manager.ts#L10)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [subscription-manager.ts:9](https://github.com/Extream-SaaS/ex-sdk/blob/b2de5a9/src/subscription-manager.ts#L9)*

## Methods

###  addSubscription

▸ **addSubscription**(`event`: string, `callback`: function): *void*

*Defined in [subscription-manager.ts:21](https://github.com/Extream-SaaS/ex-sdk/blob/b2de5a9/src/subscription-manager.ts#L21)*

List to for an event on the websocket

**Parameters:**

▪ **event**: *string*

event name

▪ **callback**: *function*

function to be called on event fire

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *void*

___

###  removeAllSubscriptions

▸ **removeAllSubscriptions**(): *void*

*Defined in [subscription-manager.ts:32](https://github.com/Extream-SaaS/ex-sdk/blob/b2de5a9/src/subscription-manager.ts#L32)*

Clean up all subscription the manager has setup

**Returns:** *void*
