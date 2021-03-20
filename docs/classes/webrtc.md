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
* [type](webrtc.md#type)

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

*Defined in [itinerary-item/webrtc.ts:54](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary-item/webrtc.ts#L54)*

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

*Defined in [itinerary-item/webrtc.ts:49](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary-item/webrtc.ts#L49)*

Weather the current call is connected or not

___

###  data

• **data**: *[ReadWebRtcResponsePayload](../interfaces/readwebrtcresponsepayload.md) | null* = null

*Defined in [itinerary-item/webrtc.ts:45](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary-item/webrtc.ts#L45)*

All of the data relating to this item. Populated after calling the .get message.

___

###  id

• **id**: *string*

*Defined in [itinerary-item/webrtc.ts:33](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary-item/webrtc.ts#L33)*

The id of the itinerary item

___

###  instance

• **instance**: *string | null* = null

*Defined in [itinerary-item/webrtc.ts:37](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary-item/webrtc.ts#L37)*

The instance of the call item

___

###  instances

• **instances**: *string[]* = []

*Defined in [itinerary-item/webrtc.ts:41](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary-item/webrtc.ts#L41)*

The instance of the call item

___

### `Private` options

• **options**: *[ExtreamOptions](../interfaces/extreamoptions.md)*

*Defined in [itinerary-item/webrtc.ts:28](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary-item/webrtc.ts#L28)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [itinerary-item/webrtc.ts:27](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary-item/webrtc.ts#L27)*

___

### `Private` subscriptionManager

• **subscriptionManager**: *[SubscriptionManager](subscriptionmanager.md)*

*Defined in [itinerary-item/webrtc.ts:29](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary-item/webrtc.ts#L29)*

___

###  token

• **token**: *string | null* = null

*Defined in [itinerary-item/webrtc.ts:53](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary-item/webrtc.ts#L53)*

The web rtc token

___

###  type

• **type**: *[ItineraryType](../enums/itinerarytype.md)* = ItineraryType.WebRtc

*Defined in [itinerary-item/webrtc.ts:54](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary-item/webrtc.ts#L54)*

## Methods

###  destroy

▸ **destroy**(): *void*

*Defined in [itinerary-item/webrtc.ts:158](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary-item/webrtc.ts#L158)*

**Returns:** *void*

___

###  fetchToken

▸ **fetchToken**(`userToken`: string): *Promise‹string[]›*

*Defined in [itinerary-item/webrtc.ts:72](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary-item/webrtc.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`userToken` | string |

**Returns:** *Promise‹string[]›*

___

###  get

▸ **get**(): *Promise‹void›*

*Defined in [itinerary-item/webrtc.ts:136](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary-item/webrtc.ts#L136)*

Call this method to populate the data property.

**Returns:** *Promise‹void›*

___

###  getToken

▸ **getToken**(`userToken`: string): *Promise‹string›*

*Defined in [itinerary-item/webrtc.ts:95](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary-item/webrtc.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`userToken` | string |

**Returns:** *Promise‹string›*

___

###  listenForIncomingCalls

▸ **listenForIncomingCalls**(): *void*

*Defined in [itinerary-item/webrtc.ts:89](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary-item/webrtc.ts#L89)*

**Returns:** *void*

___

###  startCall

▸ **startCall**(`participants`: string[], `userToken`: string): *Promise‹string›*

*Defined in [itinerary-item/webrtc.ts:106](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary-item/webrtc.ts#L106)*

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

*Defined in [itinerary-item/webrtc.ts:63](https://github.com/Extream-SaaS/ex-sdk/blob/849839b/src/itinerary-item/webrtc.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`userToken` | string |

**Returns:** *Promise‹[ExtreamUser](../interfaces/extreamuser.md)›*
