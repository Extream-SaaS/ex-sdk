[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [Itinerary](itinerary.md)

# Class: Itinerary

## Hierarchy

* **Itinerary**

## Index

### Constructors

* [constructor](itinerary.md#constructor)

### Properties

* [itineraryItems](itinerary.md#itineraryitems)
* [payload](itinerary.md#payload)
* [socket](itinerary.md#private-socket)
* [subscriptionManager](itinerary.md#private-subscriptionmanager)

### Methods

* [destroy](itinerary.md#destroy)
* [getItinerary](itinerary.md#getitinerary)
* [getWebRtcUrls](itinerary.md#private-getwebrtcurls)
* [readWebRtc](itinerary.md#private-readwebrtc)

## Constructors

###  constructor

\+ **new Itinerary**(`socket`: Socket): *[Itinerary](itinerary.md)*

*Defined in [itinerary.ts:38](https://github.com/Extream-SaaS/ex-sdk/blob/1dafdd0/src/itinerary.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *[Itinerary](itinerary.md)*

## Properties

###  itineraryItems

• **itineraryItems**: *[ReadWebRtcResponsePayload](../interfaces/readwebrtcresponsepayload.md)[]* = []

*Defined in [itinerary.ts:38](https://github.com/Extream-SaaS/ex-sdk/blob/1dafdd0/src/itinerary.ts#L38)*

___

###  payload

• **payload**: *[ItineraryPayload](../interfaces/itinerarypayload.md) | null* = null

*Defined in [itinerary.ts:37](https://github.com/Extream-SaaS/ex-sdk/blob/1dafdd0/src/itinerary.ts#L37)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [itinerary.ts:35](https://github.com/Extream-SaaS/ex-sdk/blob/1dafdd0/src/itinerary.ts#L35)*

___

### `Private` subscriptionManager

• **subscriptionManager**: *[SubscriptionManager](subscriptionmanager.md)*

*Defined in [itinerary.ts:36](https://github.com/Extream-SaaS/ex-sdk/blob/1dafdd0/src/itinerary.ts#L36)*

## Methods

###  destroy

▸ **destroy**(): *void*

*Defined in [itinerary.ts:97](https://github.com/Extream-SaaS/ex-sdk/blob/1dafdd0/src/itinerary.ts#L97)*

**Returns:** *void*

___

###  getItinerary

▸ **getItinerary**(`id`: string): *Promise‹void›*

*Defined in [itinerary.ts:68](https://github.com/Extream-SaaS/ex-sdk/blob/1dafdd0/src/itinerary.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹void›*

___

### `Private` getWebRtcUrls

▸ **getWebRtcUrls**(`itineraryItems`: string[]): *Promise‹void›*

*Defined in [itinerary.ts:64](https://github.com/Extream-SaaS/ex-sdk/blob/1dafdd0/src/itinerary.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`itineraryItems` | string[] |

**Returns:** *Promise‹void›*

___

### `Private` readWebRtc

▸ **readWebRtc**(`id`: string): *Promise‹void›*

*Defined in [itinerary.ts:45](https://github.com/Extream-SaaS/ex-sdk/blob/1dafdd0/src/itinerary.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹void›*
