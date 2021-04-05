[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [PersistenceFactory](persistencefactory.md)

# Class: PersistenceFactory

## Hierarchy

* **PersistenceFactory**

## Index

### Methods

* [get](persistencefactory.md#get)

### Object literals

* [registry](persistencefactory.md#private-registry)

## Methods

###  get

▸ **get**(`type`: [PersistenceType](../enums/persistencetype.md)): *[IPersistence](../interfaces/ipersistence.md) | null*

*Defined in [user/persistence.ts:63](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/user/persistence.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [PersistenceType](../enums/persistencetype.md) |

**Returns:** *[IPersistence](../interfaces/ipersistence.md) | null*

## Object literals

### `Private` registry

### ▪ **registry**: *object*

*Defined in [user/persistence.ts:58](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/user/persistence.ts#L58)*

###  [PersistenceType.Cookie]

• **[PersistenceType.Cookie]**: *[CookiePersistence](cookiepersistence.md)‹›* = new CookiePersistence()

*Defined in [user/persistence.ts:60](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/user/persistence.ts#L60)*

###  [PersistenceType.None]

• **[PersistenceType.None]**: *null* = null

*Defined in [user/persistence.ts:59](https://github.com/Extream-SaaS/ex-sdk/blob/ed34b16/src/user/persistence.ts#L59)*
