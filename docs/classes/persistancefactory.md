[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [PersistanceFactory](persistancefactory.md)

# Class: PersistanceFactory

## Hierarchy

* **PersistanceFactory**

## Index

### Methods

* [get](persistancefactory.md#get)

### Object literals

* [registry](persistancefactory.md#private-registry)

## Methods

###  get

▸ **get**(`type`: [PersistanceType](../enums/persistancetype.md)): *[IPersistance](../interfaces/ipersistance.md) | null*

*Defined in [persistance.ts:63](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/persistance.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [PersistanceType](../enums/persistancetype.md) |

**Returns:** *[IPersistance](../interfaces/ipersistance.md) | null*

## Object literals

### `Private` registry

### ▪ **registry**: *object*

*Defined in [persistance.ts:58](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/persistance.ts#L58)*

###  [PersistanceType.Cookie]

• **[PersistanceType.Cookie]**: *[CookiePersistance](cookiepersistance.md)‹›* = new CookiePersistance()

*Defined in [persistance.ts:60](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/persistance.ts#L60)*

###  [PersistanceType.None]

• **[PersistanceType.None]**: *null* = null

*Defined in [persistance.ts:59](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/persistance.ts#L59)*
