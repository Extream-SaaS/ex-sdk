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

*Defined in [consumer/itinerary-item/webrtc.ts:55](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/itinerary-item/webrtc.ts#L55)*

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

*Defined in [consumer/itinerary-item/webrtc.ts:50](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/itinerary-item/webrtc.ts#L50)*

Weather the current call is connected or not

___

###  data

• **data**: *[ReadWebRtcResponsePayload](../interfaces/readwebrtcresponsepayload.md) | null* = null

*Defined in [consumer/itinerary-item/webrtc.ts:46](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/itinerary-item/webrtc.ts#L46)*

All of the data relating to this item. Populated after calling the .get message.

___

###  id

• **id**: *string*

*Defined in [consumer/itinerary-item/webrtc.ts:34](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/itinerary-item/webrtc.ts#L34)*

The id of the itinerary item

___

###  instance

• **instance**: *string | null* = null

*Defined in [consumer/itinerary-item/webrtc.ts:38](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/itinerary-item/webrtc.ts#L38)*

The instance of the call item

___

###  instances

• **instances**: *string[]* = []

*Defined in [consumer/itinerary-item/webrtc.ts:42](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/itinerary-item/webrtc.ts#L42)*

The instance of the call item

___

### `Private` options

• **options**: *[ExtreamOptions](../interfaces/extreamoptions.md)*

*Defined in [consumer/itinerary-item/webrtc.ts:29](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/itinerary-item/webrtc.ts#L29)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [consumer/itinerary-item/webrtc.ts:28](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/itinerary-item/webrtc.ts#L28)*

___

### `Private` subscriptionManager

• **subscriptionManager**: *[SubscriptionManager](subscriptionmanager.md)*

*Defined in [consumer/itinerary-item/webrtc.ts:30](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/itinerary-item/webrtc.ts#L30)*

___

###  token

• **token**: *string | null* = null

*Defined in [consumer/itinerary-item/webrtc.ts:54](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/itinerary-item/webrtc.ts#L54)*

The web rtc token

___

###  type

• **type**: *[ItineraryType](../enums/itinerarytype.md)* = ItineraryType.WebRtc

*Defined in [consumer/itinerary-item/webrtc.ts:55](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/itinerary-item/webrtc.ts#L55)*

## Methods

###  destroy

▸ **destroy**(): *void*

*Defined in [consumer/itinerary-item/webrtc.ts:159](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/itinerary-item/webrtc.ts#L159)*

**Returns:** *void*

___

###  fetchToken

▸ **fetchToken**(`userToken`: string): *Promise‹string[]›*

*Defined in [consumer/itinerary-item/webrtc.ts:73](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/itinerary-item/webrtc.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`userToken` | string |

**Returns:** *Promise‹string[]›*

___

###  get

▸ **get**(): *Promise‹void›*

*Defined in [consumer/itinerary-item/webrtc.ts:137](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/itinerary-item/webrtc.ts#L137)*

Call this method to populate the data property.

**Returns:** *Promise‹void›*

___

###  getToken

▸ **getToken**(`userToken`: string): *Promise‹string›*

*Defined in [consumer/itinerary-item/webrtc.ts:96](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/itinerary-item/webrtc.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`userToken` | string |

**Returns:** *Promise‹string›*

___

###  listenForIncomingCalls

▸ **listenForIncomingCalls**(): *void*

*Defined in [consumer/itinerary-item/webrtc.ts:90](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/itinerary-item/webrtc.ts#L90)*

**Returns:** *void*

___

###  startCall

▸ **startCall**(`participants`: string[], `userToken`: string): *Promise‹string›*

*Defined in [consumer/itinerary-item/webrtc.ts:107](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/itinerary-item/webrtc.ts#L107)*

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

*Defined in [consumer/itinerary-item/webrtc.ts:64](https://github.com/Extream-SaaS/ex-sdk/blob/2aed8a2/src/consumer/itinerary-item/webrtc.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`userToken` | string |

**Returns:** *Promise‹[ExtreamUser](../interfaces/extreamuser.md)›*
