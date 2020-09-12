[extream-sdk](../README.md) › [Globals](../globals.md) › [ExtreamClient](extreamclient.md)

# Class: ExtreamClient

The Extream websocket and http communication client.

Only one of these should ever be created per application instance and shared across the app to avoid memory leaks.

## Hierarchy

* **ExtreamClient**

## Index

### Constructors

* [constructor](extreamclient.md#constructor)

### Properties

* [adminActions](extreamclient.md#private-adminactions)
* [clientActions](extreamclient.md#private-clientactions)
* [consumerActions](extreamclient.md#private-consumeractions)
* [headers](extreamclient.md#private-headers)
* [options](extreamclient.md#private-options)
* [socket](extreamclient.md#socket)

### Accessors

* [admin](extreamclient.md#admin)
* [client](extreamclient.md#client)
* [consumer](extreamclient.md#consumer)

### Methods

* [authenticate](extreamclient.md#authenticate)
* [connect](extreamclient.md#connect)
* [emit](extreamclient.md#emit)
* [fetchUser](extreamclient.md#fetchuser)
* [on](extreamclient.md#on)
* [performFetch](extreamclient.md#private-performfetch)

## Constructors

###  constructor

\+ **new ExtreamClient**(`options`: [ExtreamOptions](../interfaces/extreamoptions.md)): *[ExtreamClient](extreamclient.md)*

*Defined in [index.ts:42](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/index.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ExtreamOptions](../interfaces/extreamoptions.md) |

**Returns:** *[ExtreamClient](extreamclient.md)*

## Properties

### `Private` adminActions

• **adminActions**: *AdminActions | null* = null

*Defined in [index.ts:38](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/index.ts#L38)*

___

### `Private` clientActions

• **clientActions**: *ClientActions | null* = null

*Defined in [index.ts:40](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/index.ts#L40)*

___

### `Private` consumerActions

• **consumerActions**: *ConsumerActions | null* = null

*Defined in [index.ts:39](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/index.ts#L39)*

___

### `Private` headers

• **headers**: *Headers*

*Defined in [index.ts:42](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/index.ts#L42)*

___

### `Private` options

• **options**: *[ExtreamOptions](../interfaces/extreamoptions.md)*

*Defined in [index.ts:41](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/index.ts#L41)*

___

###  socket

• **socket**: *Socket | null* = null

*Defined in [index.ts:37](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/index.ts#L37)*

## Accessors

###  admin

• **get admin**(): *AdminActions*

*Defined in [index.ts:72](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/index.ts#L72)*

**Returns:** *AdminActions*

___

###  client

• **get client**(): *ClientActions*

*Defined in [index.ts:52](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/index.ts#L52)*

**Returns:** *ClientActions*

___

###  consumer

• **get consumer**(): *ConsumerActions*

*Defined in [index.ts:62](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/index.ts#L62)*

**Returns:** *ConsumerActions*

## Methods

###  authenticate

▸ **authenticate**(`username`: string, `password`: string): *Promise‹[AuthenticationResponse](../interfaces/authenticationresponse.md)›*

*Defined in [index.ts:165](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/index.ts#L165)*

Given a username and password, will authenticate the user against the ExtreamClient

**Parameters:**

Name | Type |
------ | ------ |
`username` | string |
`password` | string |

**Returns:** *Promise‹[AuthenticationResponse](../interfaces/authenticationresponse.md)›*

___

###  connect

▸ **connect**(`accessToken`: string): *Promise‹void›*

*Defined in [index.ts:100](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/index.ts#L100)*

Create an instance of the websocket and connect to it using the access token provided

**Parameters:**

Name | Type |
------ | ------ |
`accessToken` | string |

**Returns:** *Promise‹void›*

___

###  emit

▸ **emit**(`topic`: string, `payload`: any): *void*

*Defined in [index.ts:133](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/index.ts#L133)*

Returns the emit method from the websocket instance

You probably don't want this unless you are doing some weird stuff. Try the specific action methods instead!

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |
`payload` | any |

**Returns:** *void*

___

###  fetchUser

▸ **fetchUser**(`username`: string): *Promise‹ExtreamAuthUser›*

*Defined in [index.ts:194](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/index.ts#L194)*

Given a username and password, will fetch the user

**Parameters:**

Name | Type |
------ | ------ |
`username` | string |

**Returns:** *Promise‹ExtreamAuthUser›*

___

###  on

▸ **on**(`topic`: string, `cb`: function): *void*

*Defined in [index.ts:150](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/index.ts#L150)*

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

### `Private` performFetch

▸ **performFetch**‹**T**›(`url`: string, `options`: RequestInit | undefined): *Promise‹T›*

*Defined in [index.ts:82](https://github.com/Extream-SaaS/ex-sdk/blob/1abcccc/index.ts#L82)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`options` | RequestInit &#124; undefined |

**Returns:** *Promise‹T›*
