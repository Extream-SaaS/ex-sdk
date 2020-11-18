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
* [options](webrtc.md#private-options)
* [socket](webrtc.md#private-socket)
* [subscriptionManager](webrtc.md#private-subscriptionmanager)
* [token](webrtc.md#token)

### Methods

* [destroy](webrtc.md#destroy)
* [get](webrtc.md#get)
* [getToken](webrtc.md#gettoken)
* [listenForIncomingCalls](webrtc.md#listenforincomingcalls)
* [startCall](webrtc.md#startcall)
* [verifyUser](webrtc.md#private-verifyuser)

## Constructors

###  constructor

\+ **new WebRtc**(`socket`: Socket, `id`: string, `options`: [ExtreamOptions](../interfaces/extreamoptions.md)): *[WebRtc](webrtc.md)*

*Defined in [itinerary-item/webrtc.ts:47](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/itinerary-item/webrtc.ts#L47)*

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

*Defined in [itinerary-item/webrtc.ts:43](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/itinerary-item/webrtc.ts#L43)*

Weather the current call is connected or not

___

###  data

• **data**: *[ReadWebRtcResponsePayload](../interfaces/readwebrtcresponsepayload.md) | null* = null

*Defined in [itinerary-item/webrtc.ts:39](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/itinerary-item/webrtc.ts#L39)*

All of the data relating to this item. Populated after calling the .get message.

___

###  id

• **id**: *string*

*Defined in [itinerary-item/webrtc.ts:31](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/itinerary-item/webrtc.ts#L31)*

The id of the itinerary item

___

###  instance

• **instance**: *string | null* = null

*Defined in [itinerary-item/webrtc.ts:35](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/itinerary-item/webrtc.ts#L35)*

The instance of the call item

___

### `Private` options

• **options**: *[ExtreamOptions](../interfaces/extreamoptions.md)*

*Defined in [itinerary-item/webrtc.ts:26](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/itinerary-item/webrtc.ts#L26)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [itinerary-item/webrtc.ts:25](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/itinerary-item/webrtc.ts#L25)*

___

### `Private` subscriptionManager

• **subscriptionManager**: *[SubscriptionManager](subscriptionmanager.md)*

*Defined in [itinerary-item/webrtc.ts:27](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/itinerary-item/webrtc.ts#L27)*

___

###  token

• **token**: *string | null* = null

*Defined in [itinerary-item/webrtc.ts:47](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/itinerary-item/webrtc.ts#L47)*

The web rtc token

## Methods

###  destroy

▸ **destroy**(): *void*

*Defined in [itinerary-item/webrtc.ts:153](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/itinerary-item/webrtc.ts#L153)*

**Returns:** *void*

___

###  get

▸ **get**(): *Promise‹void›*

*Defined in [itinerary-item/webrtc.ts:131](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/itinerary-item/webrtc.ts#L131)*

Call this method to populate the data property.

**Returns:** *Promise‹void›*

___

###  getToken

▸ **getToken**(`userToken`: string): *Promise‹string[]›*

*Defined in [itinerary-item/webrtc.ts:65](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/itinerary-item/webrtc.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`userToken` | string |

**Returns:** *Promise‹string[]›*

___

###  listenForIncomingCalls

▸ **listenForIncomingCalls**(`userToken`: string): *void*

*Defined in [itinerary-item/webrtc.ts:82](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/itinerary-item/webrtc.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`userToken` | string |

**Returns:** *void*

___

###  startCall

▸ **startCall**(`participants`: string[], `userToken`: string): *Promise‹string›*

*Defined in [itinerary-item/webrtc.ts:99](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/itinerary-item/webrtc.ts#L99)*

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

*Defined in [itinerary-item/webrtc.ts:56](https://github.com/Extream-SaaS/ex-sdk/blob/f6d569e/src/itinerary-item/webrtc.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`userToken` | string |

**Returns:** *Promise‹[ExtreamUser](../interfaces/extreamuser.md)›*
