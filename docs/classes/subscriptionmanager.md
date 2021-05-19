[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [SubscriptionManager](subscriptionmanager.md)

# Class: SubscriptionManager

Manages a list of subscriptions, holding references to the listeners attached to allow classes to clean
up all the listeners they setup easily.

Consumers of this class should create their own subscription managers in constructors and expose a destroy method

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
* [removeSubscription](subscriptionmanager.md#removesubscription)

## Constructors

###  constructor

\+ **new SubscriptionManager**(`socket`: Socket): *[SubscriptionManager](subscriptionmanager.md)*

*Defined in [utils/subscription-manager.ts:9](https://github.com/Extream-SaaS/ex-sdk/blob/fa826ae/src/utils/subscription-manager.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *[SubscriptionManager](subscriptionmanager.md)*

## Properties

### `Private` listeners

• **listeners**: *object[]* = []

*Defined in [utils/subscription-manager.ts:9](https://github.com/Extream-SaaS/ex-sdk/blob/fa826ae/src/utils/subscription-manager.ts#L9)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [utils/subscription-manager.ts:8](https://github.com/Extream-SaaS/ex-sdk/blob/fa826ae/src/utils/subscription-manager.ts#L8)*

## Methods

###  addSubscription

▸ **addSubscription**(`event`: string, `callback`: function): *void*

*Defined in [utils/subscription-manager.ts:20](https://github.com/Extream-SaaS/ex-sdk/blob/fa826ae/src/utils/subscription-manager.ts#L20)*

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

*Defined in [utils/subscription-manager.ts:49](https://github.com/Extream-SaaS/ex-sdk/blob/fa826ae/src/utils/subscription-manager.ts#L49)*

Clean up all subscription the manager has setup

**Returns:** *void*

___

###  removeSubscription

▸ **removeSubscription**(`event`: string): *void*

*Defined in [utils/subscription-manager.ts:32](https://github.com/Extream-SaaS/ex-sdk/blob/fa826ae/src/utils/subscription-manager.ts#L32)*

Remove an event subscription

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | string | event name  |

**Returns:** *void*
