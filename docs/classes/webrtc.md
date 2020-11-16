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
* [socket](webrtc.md#private-socket)

### Methods

* [get](webrtc.md#get)
* [startCall](webrtc.md#startcall)

## Constructors

###  constructor

\+ **new WebRtc**(`socket`: Socket, `id`: string): *[WebRtc](webrtc.md)*

*Defined in [itinerary-item/webrtc.ts:39](https://github.com/Extream-SaaS/ex-sdk/blob/34a42fe/src/itinerary-item/webrtc.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`id` | string |

**Returns:** *[WebRtc](webrtc.md)*

## Properties

###  connected

• **connected**: *boolean* = false

*Defined in [itinerary-item/webrtc.ts:39](https://github.com/Extream-SaaS/ex-sdk/blob/34a42fe/src/itinerary-item/webrtc.ts#L39)*

Weather the current call is connected or not

___

###  data

• **data**: *[ReadWebRtcResponsePayload](../interfaces/readwebrtcresponsepayload.md) | null* = null

*Defined in [itinerary-item/webrtc.ts:35](https://github.com/Extream-SaaS/ex-sdk/blob/34a42fe/src/itinerary-item/webrtc.ts#L35)*

All of the data relating to this item. Populated after calling the .get message.

___

###  id

• **id**: *string*

*Defined in [itinerary-item/webrtc.ts:27](https://github.com/Extream-SaaS/ex-sdk/blob/34a42fe/src/itinerary-item/webrtc.ts#L27)*

The id of the itinerary item

___

###  instance

• **instance**: *string | null* = null

*Defined in [itinerary-item/webrtc.ts:31](https://github.com/Extream-SaaS/ex-sdk/blob/34a42fe/src/itinerary-item/webrtc.ts#L31)*

The instance of the call item

___

### `Private` socket

• **socket**: *Socket*

*Defined in [itinerary-item/webrtc.ts:23](https://github.com/Extream-SaaS/ex-sdk/blob/34a42fe/src/itinerary-item/webrtc.ts#L23)*

## Methods

###  get

▸ **get**(): *Promise‹void›*

*Defined in [itinerary-item/webrtc.ts:76](https://github.com/Extream-SaaS/ex-sdk/blob/34a42fe/src/itinerary-item/webrtc.ts#L76)*

Call this method to populate the data property.

**Returns:** *Promise‹void›*

___

###  startCall

▸ **startCall**(`participants`: string[]): *Promise‹void›*

*Defined in [itinerary-item/webrtc.ts:50](https://github.com/Extream-SaaS/ex-sdk/blob/34a42fe/src/itinerary-item/webrtc.ts#L50)*

Start a call with a set of people

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`participants` | string[] | The people to invite to this call  |

**Returns:** *Promise‹void›*
