[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [CookiePersistance](cookiepersistance.md)

# Class: CookiePersistance

## Hierarchy

* **CookiePersistance**

## Implements

* [IPersistance](../interfaces/ipersistance.md)

## Index

### Methods

* [clear](cookiepersistance.md#clear)
* [getCookie](cookiepersistance.md#private-getcookie)
* [getTokens](cookiepersistance.md#gettokens)
* [setCookie](cookiepersistance.md#private-setcookie)
* [setTokens](cookiepersistance.md#settokens)

## Methods

###  clear

▸ **clear**(): *void*

*Implementation of [IPersistance](../interfaces/ipersistance.md)*

*Defined in [persistance.ts:49](https://github.com/Extream-SaaS/ex-sdk/blob/600cbb0/src/persistance.ts#L49)*

**Returns:** *void*

___

### `Private` getCookie

▸ **getCookie**(`name`: string): *undefined | string*

*Defined in [persistance.ts:23](https://github.com/Extream-SaaS/ex-sdk/blob/600cbb0/src/persistance.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *undefined | string*

___

###  getTokens

▸ **getTokens**(): *[string | undefined, string | undefined]*

*Implementation of [IPersistance](../interfaces/ipersistance.md)*

*Defined in [persistance.ts:43](https://github.com/Extream-SaaS/ex-sdk/blob/600cbb0/src/persistance.ts#L43)*

**Returns:** *[string | undefined, string | undefined]*

___

### `Private` setCookie

▸ **setCookie**(`name`: string, `value`: string, `expiry`: string): *void*

*Defined in [persistance.ts:18](https://github.com/Extream-SaaS/ex-sdk/blob/600cbb0/src/persistance.ts#L18)*

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

*Implementation of [IPersistance](../interfaces/ipersistance.md)*

*Defined in [persistance.ts:38](https://github.com/Extream-SaaS/ex-sdk/blob/600cbb0/src/persistance.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`loginResponse` | [AuthenticationResponse](../interfaces/authenticationresponse.md) |

**Returns:** *void*
