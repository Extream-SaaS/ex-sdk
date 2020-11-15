[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [User](user.md)

# Class: User

## Hierarchy

* **User**

## Index

### Constructors

* [constructor](user.md#constructor)

### Properties

* [headers](user.md#headers)
* [options](user.md#options)

### Methods

* [fetchUser](user.md#fetchuser)
* [login](user.md#login)
* [objectToUrlFormData](user.md#private-objecttourlformdata)
* [performFetch](user.md#private-performfetch)
* [registerUser](user.md#registeruser)

## Constructors

###  constructor

\+ **new User**(`options`: [ExtreamOptions](../interfaces/extreamoptions.md)): *[User](user.md)*

*Defined in [user.ts:59](https://github.com/Extream-SaaS/ex-sdk/blob/22f780b/src/user.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ExtreamOptions](../interfaces/extreamoptions.md) |

**Returns:** *[User](user.md)*

## Properties

###  headers

• **headers**: *Headers*

*Defined in [user.ts:58](https://github.com/Extream-SaaS/ex-sdk/blob/22f780b/src/user.ts#L58)*

___

###  options

• **options**: *[ExtreamOptions](../interfaces/extreamoptions.md)*

*Defined in [user.ts:59](https://github.com/Extream-SaaS/ex-sdk/blob/22f780b/src/user.ts#L59)*

## Methods

###  fetchUser

▸ **fetchUser**(`username`: string): *Promise‹[ExtreamAuthUser](../interfaces/extreamauthuser.md) | null›*

*Defined in [user.ts:122](https://github.com/Extream-SaaS/ex-sdk/blob/22f780b/src/user.ts#L122)*

Try and fetch a user and see weather they exist or not

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`username` | string | the username to check if it exists or not  |

**Returns:** *Promise‹[ExtreamAuthUser](../interfaces/extreamauthuser.md) | null›*

___

###  login

▸ **login**(`username`: string, `password`: string, `eventId?`: undefined | string): *Promise‹[AuthenticationResponse](../interfaces/authenticationresponse.md)›*

*Defined in [user.ts:146](https://github.com/Extream-SaaS/ex-sdk/blob/22f780b/src/user.ts#L146)*

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

*Defined in [user.ts:73](https://github.com/Extream-SaaS/ex-sdk/blob/22f780b/src/user.ts#L73)*

Utility to turn object into url encoded form data

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | object |   |

**Returns:** *string*

___

### `Private` performFetch

▸ **performFetch**‹**T**›(`url`: string, `options`: RequestInit | undefined): *Promise‹T›*

*Defined in [user.ts:84](https://github.com/Extream-SaaS/ex-sdk/blob/22f780b/src/user.ts#L84)*

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

▸ **registerUser**(`params`: [RegisterUserRequest](../interfaces/registeruserrequest.md)): *Promise‹unknown›*

*Defined in [user.ts:103](https://github.com/Extream-SaaS/ex-sdk/blob/22f780b/src/user.ts#L103)*

Register a new user

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [RegisterUserRequest](../interfaces/registeruserrequest.md) | Use information  |

**Returns:** *Promise‹unknown›*
