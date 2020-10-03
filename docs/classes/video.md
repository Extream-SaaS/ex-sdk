[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [Video](video.md)

# Class: Video

## Hierarchy

* **Video**

## Index

### Constructors

* [constructor](video.md#constructor)

### Properties

* [data](video.md#data)
* [id](video.md#id)
* [socket](video.md#private-socket)

### Methods

* [get](video.md#get)

## Constructors

###  constructor

\+ **new Video**(`socket`: Socket, `id`: string): *[Video](video.md)*

*Defined in [video.ts:8](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/video.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`id` | string |

**Returns:** *[Video](video.md)*

## Properties

###  data

• **data**: *[ReadWebRtcResponsePayload](../interfaces/readwebrtcresponsepayload.md) | null* = null

*Defined in [video.ts:8](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/video.ts#L8)*

___

###  id

• **id**: *string*

*Defined in [video.ts:7](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/video.ts#L7)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [video.ts:6](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/video.ts#L6)*

## Methods

###  get

▸ **get**(): *Promise‹void›*

*Defined in [video.ts:15](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/video.ts#L15)*

**Returns:** *Promise‹void›*