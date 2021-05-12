[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [Poll](poll.md)

# Class: Poll

Represents a poll itinerary item

## Hierarchy

* **Poll**

## Implements

* [IEntity](../interfaces/ientity.md)
* [IDestroyable](../interfaces/idestroyable.md)

## Index

### Constructors

* [constructor](poll.md#constructor)

### Properties

* [configuration](poll.md#configuration)
* [id](poll.md#id)
* [payload](poll.md#payload)
* [questions](poll.md#questions)
* [socket](poll.md#private-socket)
* [subscriptionManager](poll.md#private-subscriptionmanager)
* [type](poll.md#type)

### Methods

* [answer](poll.md#answer)
* [destroy](poll.md#destroy)
* [get](poll.md#get)
* [listenForQuestions](poll.md#listenforquestions)
* [listenForResponses](poll.md#listenforresponses)
* [sortByOrder](poll.md#static-sortbyorder)
* [sortByTime](poll.md#static-sortbytime)

## Constructors

###  constructor

\+ **new Poll**(`socket`: Socket, `id`: string): *[Poll](poll.md)*

*Defined in [consumer/itinerary-item/poll.ts:80](https://github.com/Extream-SaaS/ex-sdk/blob/936e0b7/src/consumer/itinerary-item/poll.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`id` | string |

**Returns:** *[Poll](poll.md)*

## Properties

###  configuration

• **configuration**: *[PollConfiguration](../interfaces/pollconfiguration.md) | null* = null

*Defined in [consumer/itinerary-item/poll.ts:78](https://github.com/Extream-SaaS/ex-sdk/blob/936e0b7/src/consumer/itinerary-item/poll.ts#L78)*

The type of the poll. Currently only immediate supported.

___

###  id

• **id**: *string*

*Defined in [consumer/itinerary-item/poll.ts:70](https://github.com/Extream-SaaS/ex-sdk/blob/936e0b7/src/consumer/itinerary-item/poll.ts#L70)*

Itinerary item id

___

###  payload

• **payload**: *[GetPollResponsePayload](../interfaces/getpollresponsepayload.md) | null* = null

*Defined in [consumer/itinerary-item/poll.ts:80](https://github.com/Extream-SaaS/ex-sdk/blob/936e0b7/src/consumer/itinerary-item/poll.ts#L80)*

___

###  questions

• **questions**: *[Question](question.md)[]* = []

*Defined in [consumer/itinerary-item/poll.ts:74](https://github.com/Extream-SaaS/ex-sdk/blob/936e0b7/src/consumer/itinerary-item/poll.ts#L74)*

All of the questions that are active on this poll currently

___

### `Private` socket

• **socket**: *Socket*

*Defined in [consumer/itinerary-item/poll.ts:65](https://github.com/Extream-SaaS/ex-sdk/blob/936e0b7/src/consumer/itinerary-item/poll.ts#L65)*

___

### `Private` subscriptionManager

• **subscriptionManager**: *[SubscriptionManager](subscriptionmanager.md)*

*Defined in [consumer/itinerary-item/poll.ts:66](https://github.com/Extream-SaaS/ex-sdk/blob/936e0b7/src/consumer/itinerary-item/poll.ts#L66)*

___

###  type

• **type**: *[ItineraryType](../enums/itinerarytype.md)* = ItineraryType.Poll

*Defined in [consumer/itinerary-item/poll.ts:79](https://github.com/Extream-SaaS/ex-sdk/blob/936e0b7/src/consumer/itinerary-item/poll.ts#L79)*

## Methods

###  answer

▸ **answer**(`questionId`: string, `answerId`: string): *Promise‹void›*

*Defined in [consumer/itinerary-item/poll.ts:138](https://github.com/Extream-SaaS/ex-sdk/blob/936e0b7/src/consumer/itinerary-item/poll.ts#L138)*

Anser a question

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`questionId` | string | The id o the question to answer |
`answerId` | string | The id of the answer to give  |

**Returns:** *Promise‹void›*

___

###  destroy

▸ **destroy**(): *void*

*Implementation of [IDestroyable](../interfaces/idestroyable.md)*

*Defined in [consumer/itinerary-item/poll.ts:197](https://github.com/Extream-SaaS/ex-sdk/blob/936e0b7/src/consumer/itinerary-item/poll.ts#L197)*

Cleans up all listeners for this class. Call this when you no longer need access to this events information to ensure memory leaks are not caused.

**Returns:** *void*

___

###  get

▸ **get**(): *Promise‹void›*

*Defined in [consumer/itinerary-item/poll.ts:149](https://github.com/Extream-SaaS/ex-sdk/blob/936e0b7/src/consumer/itinerary-item/poll.ts#L149)*

Get all information for this poll. Questions will be populated in the questions array.

**Returns:** *Promise‹void›*

___

###  listenForQuestions

▸ **listenForQuestions**(): *void*

*Defined in [consumer/itinerary-item/poll.ts:110](https://github.com/Extream-SaaS/ex-sdk/blob/936e0b7/src/consumer/itinerary-item/poll.ts#L110)*

Sets up websocket listeners for new questions being streamed into the poll

**Returns:** *void*

___

###  listenForResponses

▸ **listenForResponses**(): *void*

*Defined in [consumer/itinerary-item/poll.ts:91](https://github.com/Extream-SaaS/ex-sdk/blob/936e0b7/src/consumer/itinerary-item/poll.ts#L91)*

Sets up websocket listeners for other peoples responses coming in

**Returns:** *void*

___

### `Static` sortByOrder

▸ **sortByOrder**(`a`: [QuestionResponse](../interfaces/questionresponse.md), `b`: [QuestionResponse](../interfaces/questionresponse.md)): *number*

*Defined in [consumer/itinerary-item/poll.ts:122](https://github.com/Extream-SaaS/ex-sdk/blob/936e0b7/src/consumer/itinerary-item/poll.ts#L122)*

Sorts answers by order

**Parameters:**

Name | Type |
------ | ------ |
`a` | [QuestionResponse](../interfaces/questionresponse.md) |
`b` | [QuestionResponse](../interfaces/questionresponse.md) |

**Returns:** *number*

___

### `Static` sortByTime

▸ **sortByTime**(`a`: [Question](question.md), `b`: [Question](question.md)): *number*

*Defined in [consumer/itinerary-item/poll.ts:129](https://github.com/Extream-SaaS/ex-sdk/blob/936e0b7/src/consumer/itinerary-item/poll.ts#L129)*

Sorts questions by date

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Question](question.md) |
`b` | [Question](question.md) |

**Returns:** *number*
