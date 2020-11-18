[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [ExtreamClient](extreamclient.md)

# Class: ExtreamClient

The Extream websocket and http communication client.

Only one of these should ever be created per application instance and shared across the app to avoid memory leaks.

## Hierarchy

* **ExtreamClient**

## Index

### Constructors

* [constructor](extreamclient.md#constructor)

### Properties

* [adminActions](extreamclient.md#adminactions)
* [consumerActions](extreamclient.md#consumeractions)
* [options](extreamclient.md#private-options)
* [socket](extreamclient.md#socket)
* [subscriptionManager](extreamclient.md#private-subscriptionmanager)
* [user](extreamclient.md#user)

### Accessors

* [admin](extreamclient.md#admin)
* [consumer](extreamclient.md#consumer)

### Methods

* [connect](extreamclient.md#connect)
* [destroy](extreamclient.md#destroy)
* [emit](extreamclient.md#emit)
* [on](extreamclient.md#on)

## Constructors

###  constructor

\+ **new ExtreamClient**(`options`: [ExtreamOptions](../interfaces/extreamoptions.md)): *[ExtreamClient](extreamclient.md)*

*Defined in [extream-client.ts:23](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/extream-client.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ExtreamOptions](../interfaces/extreamoptions.md) |

**Returns:** *[ExtreamClient](extreamclient.md)*

## Properties

###  adminActions

• **adminActions**: *[Admin](admin.md) | null* = null

*Defined in [extream-client.ts:19](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/extream-client.ts#L19)*

___

###  consumerActions

• **consumerActions**: *[Consumer](consumer.md) | null* = null

*Defined in [extream-client.ts:20](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/extream-client.ts#L20)*

___

### `Private` options

• **options**: *[ExtreamOptions](../interfaces/extreamoptions.md)*

*Defined in [extream-client.ts:22](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/extream-client.ts#L22)*

___

###  socket

• **socket**: *Socket | null* = null

*Defined in [extream-client.ts:18](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/extream-client.ts#L18)*

___

### `Private` subscriptionManager

• **subscriptionManager**: *[SubscriptionManager](subscriptionmanager.md) | null* = null

*Defined in [extream-client.ts:23](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/extream-client.ts#L23)*

___

###  user

• **user**: *[User](user.md)*

*Defined in [extream-client.ts:21](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/extream-client.ts#L21)*

## Accessors

###  admin

• **get admin**(): *[Admin](admin.md)*

*Defined in [extream-client.ts:33](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/extream-client.ts#L33)*

Access admin functionality such as creating itineraries ect.

**Returns:** *[Admin](admin.md)*

___

###  consumer

• **get consumer**(): *[Consumer](consumer.md)*

*Defined in [extream-client.ts:43](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/extream-client.ts#L43)*

Access user functionality such as join chat rooms, joining polls ect.

**Returns:** *[Consumer](consumer.md)*

## Methods

###  connect

▸ **connect**(`accessToken`: string, `visibility`: boolean): *Promise‹[ExtreamUser](../interfaces/extreamuser.md)›*

*Defined in [extream-client.ts:58](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/extream-client.ts#L58)*

Create an instance of the websocket and connect to it using the access token provided

**Parameters:**

Name | Type |
------ | ------ |
`accessToken` | string |
`visibility` | boolean |

**Returns:** *Promise‹[ExtreamUser](../interfaces/extreamuser.md)›*

___

###  destroy

▸ **destroy**(): *void*

*Defined in [extream-client.ts:118](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/extream-client.ts#L118)*

Cleans up all listeners for this class. Call this when your application instance is being left or destroyed.

**Returns:** *void*

___

###  emit

▸ **emit**(`topic`: string, `payload`: any): *void*

*Defined in [extream-client.ts:89](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/extream-client.ts#L89)*

Returns the emit method from the websocket instance

You probably don't want this unless you are doing some weird stuff. Try the specific action methods instead!

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |
`payload` | any |

**Returns:** *void*

___

###  on

▸ **on**(`topic`: string, `cb`: function): *void*

*Defined in [extream-client.ts:106](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/extream-client.ts#L106)*

Returns the on method from the websocket instance

You probably don't want this unless you are doing some weird stuff. Try the specific action methods instead!

**Parameters:**

▪ **topic**: *string*

▪ **cb**: *function*

▸ (`response`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`response` | any |

**Returns:** *void*
