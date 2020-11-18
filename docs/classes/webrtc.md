[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [WebRtc](webrtc.md)

# Class: WebRtc

An Rtmp video item.

## Hierarchy

* **WebRtc**

## Index

### Constructors

* [constructor](webrtc.md#constructor)

### Properties

* [connected](webrtc.md#connected)
* [data](webrtc.md#data)
* [id](webrtc.md#id)
* [instance](webrtc.md#instance)
* [instances](webrtc.md#instances)
* [options](webrtc.md#private-options)
* [socket](webrtc.md#private-socket)
* [subscriptionManager](webrtc.md#private-subscriptionmanager)
* [token](webrtc.md#token)

### Methods

* [destroy](webrtc.md#destroy)
* [fetchToken](webrtc.md#fetchtoken)
* [get](webrtc.md#get)
* [getToken](webrtc.md#gettoken)
* [listenForIncomingCalls](webrtc.md#listenforincomingcalls)
* [startCall](webrtc.md#startcall)
* [verifyUser](webrtc.md#private-verifyuser)

## Constructors

###  constructor

\+ **new WebRtc**(`socket`: Socket, `id`: string, `options`: [ExtreamOptions](../interfaces/extreamoptions.md)): *[WebRtc](webrtc.md)*

*Defined in [itinerary-item/webrtc.ts:51](https://github.com/Extream-SaaS/ex-sdk/blob/c40df84/src/itinerary-item/webrtc.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`id` | string |
`options` | [ExtreamOptions](../interfaces/extreamoptions.md) |

**Returns:** *[WebRtc](webrtc.md)*

## Properties

###  connected

• **connected**: *boolean* = false

*Defined in [itinerary-item/webrtc.ts:47](https://github.com/Extream-SaaS/ex-sdk/blob/c40df84/src/itinerary-item/webrtc.ts#L47)*

Weather the current call is connected or not

___

###  data

• **data**: *[ReadWebRtcResponsePayload](../interfaces/readwebrtcresponsepayload.md) | null* = null

*Defined in [itinerary-item/webrtc.ts:43](https://github.com/Extream-SaaS/ex-sdk/blob/c40df84/src/itinerary-item/webrtc.ts#L43)*

All of the data relating to this item. Populated after calling the .get message.

___

###  id

• **id**: *string*

*Defined in [itinerary-item/webrtc.ts:31](https://github.com/Extream-SaaS/ex-sdk/blob/c40df84/src/itinerary-item/webrtc.ts#L31)*

The id of the itinerary item

___

###  instance

• **instance**: *string | null* = null

*Defined in [itinerary-item/webrtc.ts:35](https://github.com/Extream-SaaS/ex-sdk/blob/c40df84/src/itinerary-item/webrtc.ts#L35)*

The instance of the call item

___

###  instances

• **instances**: *string[]* = []

*Defined in [itinerary-item/webrtc.ts:39](https://github.com/Extream-SaaS/ex-sdk/blob/c40df84/src/itinerary-item/webrtc.ts#L39)*

The instance of the call item

___

### `Private` options

• **options**: *[ExtreamOptions](../interfaces/extreamoptions.md)*

*Defined in [itinerary-item/webrtc.ts:26](https://github.com/Extream-SaaS/ex-sdk/blob/c40df84/src/itinerary-item/webrtc.ts#L26)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [itinerary-item/webrtc.ts:25](https://github.com/Extream-SaaS/ex-sdk/blob/c40df84/src/itinerary-item/webrtc.ts#L25)*

___

### `Private` subscriptionManager

• **subscriptionManager**: *[SubscriptionManager](subscriptionmanager.md)*

*Defined in [itinerary-item/webrtc.ts:27](https://github.com/Extream-SaaS/ex-sdk/blob/c40df84/src/itinerary-item/webrtc.ts#L27)*

___

###  token

• **token**: *string | null* = null

*Defined in [itinerary-item/webrtc.ts:51](https://github.com/Extream-SaaS/ex-sdk/blob/c40df84/src/itinerary-item/webrtc.ts#L51)*

The web rtc token

## Methods

###  destroy

▸ **destroy**(): *void*

*Defined in [itinerary-item/webrtc.ts:155](https://github.com/Extream-SaaS/ex-sdk/blob/c40df84/src/itinerary-item/webrtc.ts#L155)*

**Returns:** *void*

___

###  fetchToken

▸ **fetchToken**(`userToken`: string): *Promise‹string[]›*

*Defined in [itinerary-item/webrtc.ts:69](https://github.com/Extream-SaaS/ex-sdk/blob/c40df84/src/itinerary-item/webrtc.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`userToken` | string |

**Returns:** *Promise‹string[]›*

___

###  get

▸ **get**(): *Promise‹void›*

*Defined in [itinerary-item/webrtc.ts:133](https://github.com/Extream-SaaS/ex-sdk/blob/c40df84/src/itinerary-item/webrtc.ts#L133)*

Call this method to populate the data property.

**Returns:** *Promise‹void›*

___

###  getToken

▸ **getToken**(`userToken`: string): *Promise‹string›*

*Defined in [itinerary-item/webrtc.ts:92](https://github.com/Extream-SaaS/ex-sdk/blob/c40df84/src/itinerary-item/webrtc.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`userToken` | string |

**Returns:** *Promise‹string›*

___

###  listenForIncomingCalls

▸ **listenForIncomingCalls**(`userToken`: string): *void*

*Defined in [itinerary-item/webrtc.ts:86](https://github.com/Extream-SaaS/ex-sdk/blob/c40df84/src/itinerary-item/webrtc.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`userToken` | string |

**Returns:** *void*

___

###  startCall

▸ **startCall**(`participants`: string[], `userToken`: string): *Promise‹string›*

*Defined in [itinerary-item/webrtc.ts:103](https://github.com/Extream-SaaS/ex-sdk/blob/c40df84/src/itinerary-item/webrtc.ts#L103)*

Start a call with a set of people

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`participants` | string[] | The people to invite to this call  |
`userToken` | string | - |

**Returns:** *Promise‹string›*

___

### `Private` verifyUser

▸ **verifyUser**(`userToken`: string): *Promise‹[ExtreamUser](../interfaces/extreamuser.md)›*

*Defined in [itinerary-item/webrtc.ts:60](https://github.com/Extream-SaaS/ex-sdk/blob/c40df84/src/itinerary-item/webrtc.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`userToken` | string |

**Returns:** *Promise‹[ExtreamUser](../interfaces/extreamuser.md)›*
