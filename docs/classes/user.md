[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [User](user.md)

# Class: User

A class to allow login and registration of users.

## Hierarchy

* **User**

## Index

### Constructors

* [constructor](user.md#constructor)

### Properties

* [headers](user.md#headers)
* [options](user.md#options)

### Methods

* [completeUser](user.md#completeuser)
* [fetchUser](user.md#fetchuser)
* [login](user.md#login)
* [objectToUrlFormData](user.md#private-objecttourlformdata)
* [performFetch](user.md#private-performfetch)
* [registerUser](user.md#registeruser)

## Constructors

###  constructor

\+ **new User**(`options`: [ExtreamOptions](../interfaces/extreamoptions.md)): *[User](user.md)*

*Defined in [user/user.ts:66](https://github.com/Extream-SaaS/ex-sdk/blob/83ee764/src/user/user.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ExtreamOptions](../interfaces/extreamoptions.md) |

**Returns:** *[User](user.md)*

## Properties

###  headers

• **headers**: *object*

*Defined in [user/user.ts:65](https://github.com/Extream-SaaS/ex-sdk/blob/83ee764/src/user/user.ts#L65)*

#### Type declaration:

* \[ **key**: *string*\]: string

___

###  options

• **options**: *[ExtreamOptions](../interfaces/extreamoptions.md)*

*Defined in [user/user.ts:66](https://github.com/Extream-SaaS/ex-sdk/blob/83ee764/src/user/user.ts#L66)*

## Methods

###  completeUser

▸ **completeUser**(`userId`: string, `params`: [RegisterUserRequest](../interfaces/registeruserrequest.md)): *Promise‹[ExtreamUser](../interfaces/extreamuser.md)›*

*Defined in [user/user.ts:130](https://github.com/Extream-SaaS/ex-sdk/blob/83ee764/src/user/user.ts#L130)*

Complete an invited user

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`userId` | string | - |
`params` | [RegisterUserRequest](../interfaces/registeruserrequest.md) | User information  |

**Returns:** *Promise‹[ExtreamUser](../interfaces/extreamuser.md)›*

___

###  fetchUser

▸ **fetchUser**(`username`: string): *Promise‹[ExtreamAuthUser](../interfaces/extreamauthuser.md) | null›*

*Defined in [user/user.ts:149](https://github.com/Extream-SaaS/ex-sdk/blob/83ee764/src/user/user.ts#L149)*

Try and fetch a user and see weather they exist or not

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`username` | string | the username to check if it exists or not  |

**Returns:** *Promise‹[ExtreamAuthUser](../interfaces/extreamauthuser.md) | null›*

___

###  login

▸ **login**(`username`: string, `password`: string, `eventId?`: undefined | string): *Promise‹[AuthenticationResponse](../interfaces/authenticationresponse.md)›*

*Defined in [user/user.ts:173](https://github.com/Extream-SaaS/ex-sdk/blob/83ee764/src/user/user.ts#L173)*

Given a username and password, will authenticate the user against the ExtreamClient

**Parameters:**

Name | Type |
------ | ------ |
`username` | string |
`password` | string |
`eventId?` | undefined &#124; string |

**Returns:** *Promise‹[AuthenticationResponse](../interfaces/authenticationresponse.md)›*

___

### `Private` objectToUrlFormData

▸ **objectToUrlFormData**(`params`: object): *string*

*Defined in [user/user.ts:80](https://github.com/Extream-SaaS/ex-sdk/blob/83ee764/src/user/user.ts#L80)*

Utility to turn object into url encoded form data

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | object |   |

**Returns:** *string*

___

### `Private` performFetch

▸ **performFetch**‹**T**›(`url`: string, `options`: RequestInit | undefined): *Promise‹T›*

*Defined in [user/user.ts:91](https://github.com/Extream-SaaS/ex-sdk/blob/83ee764/src/user/user.ts#L91)*

Utility to perform a generic fetch request

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`url` | string | Url to fetch to |
`options` | RequestInit &#124; undefined | Fetch options  |

**Returns:** *Promise‹T›*

___

###  registerUser

▸ **registerUser**(`params`: [RegisterUserRequest](../interfaces/registeruserrequest.md)): *Promise‹[ExtreamUser](../interfaces/extreamuser.md)›*

*Defined in [user/user.ts:110](https://github.com/Extream-SaaS/ex-sdk/blob/83ee764/src/user/user.ts#L110)*

Register a new user

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [RegisterUserRequest](../interfaces/registeruserrequest.md) | Use information  |

**Returns:** *Promise‹[ExtreamUser](../interfaces/extreamuser.md)›*
