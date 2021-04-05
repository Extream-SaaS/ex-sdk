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

* [accessToken](extreamclient.md#accesstoken)
* [adminActions](extreamclient.md#adminactions)
* [consumerActions](extreamclient.md#consumeractions)
* [currentUser](extreamclient.md#currentuser)
* [options](extreamclient.md#private-options)
* [persistence](extreamclient.md#persistence)
* [socket](extreamclient.md#socket)
* [subscriptionManager](extreamclient.md#private-subscriptionmanager)
* [user](extreamclient.md#user)

### Accessors

* [admin](extreamclient.md#admin)
* [consumer](extreamclient.md#consumer)

### Methods

* [authenticate](extreamclient.md#authenticate)
* [connect](extreamclient.md#private-connect)
* [destroy](extreamclient.md#destroy)
* [emit](extreamclient.md#emit)
* [logout](extreamclient.md#logout)
* [on](extreamclient.md#on)
* [silentAuthenticate](extreamclient.md#silentauthenticate)

## Constructors

###  constructor

\+ **new ExtreamClient**(`options`: [ExtreamOptions](../interfaces/extreamoptions.md)): *[ExtreamClient](extreamclient.md)*

*Defined in [extream-client.ts:29](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/extream-client.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ExtreamOptions](../interfaces/extreamoptions.md) |

**Returns:** *[ExtreamClient](extreamclient.md)*

## Properties

###  accessToken

• **accessToken**: *string | undefined*

*Defined in [extream-client.ts:25](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/extream-client.ts#L25)*

___

###  adminActions

• **adminActions**: *[Admin](admin.md) | null* = null

*Defined in [extream-client.ts:22](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/extream-client.ts#L22)*

___

###  consumerActions

• **consumerActions**: *[Consumer](consumer.md) | null* = null

*Defined in [extream-client.ts:23](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/extream-client.ts#L23)*

___

###  currentUser

• **currentUser**: *[ExtreamUser](../interfaces/extreamuser.md) | null* = null

*Defined in [extream-client.ts:27](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/extream-client.ts#L27)*

___

### `Private` options

• **options**: *[ExtreamOptions](../interfaces/extreamoptions.md)*

*Defined in [extream-client.ts:28](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/extream-client.ts#L28)*

___

###  persistence

• **persistence**: *[IPersistence](../interfaces/ipersistence.md) | null*

*Defined in [extream-client.ts:26](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/extream-client.ts#L26)*

___

###  socket

• **socket**: *Socket | null* = null

*Defined in [extream-client.ts:21](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/extream-client.ts#L21)*

___

### `Private` subscriptionManager

• **subscriptionManager**: *[SubscriptionManager](subscriptionmanager.md) | null* = null

*Defined in [extream-client.ts:29](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/extream-client.ts#L29)*

___

###  user

• **user**: *[User](user.md)*

*Defined in [extream-client.ts:24](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/extream-client.ts#L24)*

## Accessors

###  admin

• **get admin**(): *[Admin](admin.md)*

*Defined in [extream-client.ts:41](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/extream-client.ts#L41)*

Access admin functionality such as creating itineraries ect.

**Returns:** *[Admin](admin.md)*

___

###  consumer

• **get consumer**(): *[Consumer](consumer.md)*

*Defined in [extream-client.ts:51](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/extream-client.ts#L51)*

Access user functionality such as join chat rooms, joining polls ect.

**Returns:** *[Consumer](consumer.md)*

## Methods

###  authenticate

▸ **authenticate**(`username`: string, `password`: string, `eventId?`: undefined | string, `authOptions?`: Partial‹[AuthorizationRequest](../interfaces/authorizationrequest.md)›): *Promise‹void›*

*Defined in [extream-client.ts:63](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/extream-client.ts#L63)*

Log the user in and open a authenticated websocket connection

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`username` | string | - |
`password` | string | - |
`eventId?` | undefined &#124; string | - |
`authOptions?` | Partial‹[AuthorizationRequest](../interfaces/authorizationrequest.md)› |   |

**Returns:** *Promise‹void›*

___

### `Private` connect

▸ **connect**(`accessToken`: string, `authOptions`: Partial‹[AuthorizationRequest](../interfaces/authorizationrequest.md)›): *Promise‹[ExtreamUser](../interfaces/extreamuser.md)›*

*Defined in [extream-client.ts:106](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/extream-client.ts#L106)*

Create an instance of the websocket and connect to it using the access token provided

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`accessToken` | string | - | - |
`authOptions` | Partial‹[AuthorizationRequest](../interfaces/authorizationrequest.md)› | {} |   |

**Returns:** *Promise‹[ExtreamUser](../interfaces/extreamuser.md)›*

___

###  destroy

▸ **destroy**(): *void*

*Defined in [extream-client.ts:167](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/extream-client.ts#L167)*

Cleans up all listeners for this class. Call this when your application instance is being left or destroyed.

**Returns:** *void*

___

###  emit

▸ **emit**(`topic`: string, `payload`: any): *void*

*Defined in [extream-client.ts:138](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/extream-client.ts#L138)*

Returns the emit method from the websocket instance

You probably don't want this unless you are doing some weird stuff. Try the specific action methods instead!

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |
`payload` | any |

**Returns:** *void*

___

###  logout

▸ **logout**(): *void*

*Defined in [extream-client.ts:94](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/extream-client.ts#L94)*

Log the current user out of the app

**Returns:** *void*

___

###  on

▸ **on**(`topic`: string, `cb`: function): *void*

*Defined in [extream-client.ts:155](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/extream-client.ts#L155)*

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

___

###  silentAuthenticate

▸ **silentAuthenticate**(`authOptions?`: Partial‹[AuthorizationRequest](../interfaces/authorizationrequest.md)›): *Promise‹void›*

*Defined in [extream-client.ts:79](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/extream-client.ts#L79)*

Log the user in and open a authenticated websocket connection, based on stored access tokens.
If persistence type (default cookies) is set to NONE then this feature will never work.
This feature allows you to restore users to sessions without having to go through the whole login process again.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`authOptions?` | Partial‹[AuthorizationRequest](../interfaces/authorizationrequest.md)› |   |

**Returns:** *Promise‹void›*
