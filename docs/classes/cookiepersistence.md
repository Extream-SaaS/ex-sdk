[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [CookiePersistence](cookiepersistence.md)

# Class: CookiePersistence

## Hierarchy

* **CookiePersistence**

## Implements

* [IPersistence](../interfaces/ipersistence.md)

## Index

### Methods

* [clear](cookiepersistence.md#clear)
* [getCookie](cookiepersistence.md#private-getcookie)
* [getTokens](cookiepersistence.md#gettokens)
* [setCookie](cookiepersistence.md#private-setcookie)
* [setTokens](cookiepersistence.md#settokens)

## Methods

###  clear

▸ **clear**(): *void*

*Implementation of [IPersistence](../interfaces/ipersistence.md)*

*Defined in [user/persistence.ts:49](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/user/persistence.ts#L49)*

**Returns:** *void*

___

### `Private` getCookie

▸ **getCookie**(`name`: string): *undefined | string*

*Defined in [user/persistence.ts:23](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/user/persistence.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *undefined | string*

___

###  getTokens

▸ **getTokens**(): *[string | undefined, string | undefined]*

*Implementation of [IPersistence](../interfaces/ipersistence.md)*

*Defined in [user/persistence.ts:43](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/user/persistence.ts#L43)*

**Returns:** *[string | undefined, string | undefined]*

___

### `Private` setCookie

▸ **setCookie**(`name`: string, `value`: string, `expiry`: string): *void*

*Defined in [user/persistence.ts:18](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/user/persistence.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`value` | string |
`expiry` | string |

**Returns:** *void*

___

###  setTokens

▸ **setTokens**(`loginResponse`: [AuthenticationResponse](../interfaces/authenticationresponse.md)): *void*

*Implementation of [IPersistence](../interfaces/ipersistence.md)*

*Defined in [user/persistence.ts:38](https://github.com/Extream-SaaS/ex-sdk/blob/dd0fa1a/src/user/persistence.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`loginResponse` | [AuthenticationResponse](../interfaces/authenticationresponse.md) |

**Returns:** *void*
