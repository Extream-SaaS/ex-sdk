[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [Poll](poll.md)

# Class: Poll

Represents a poll itinerary item

## Hierarchy

* **Poll**

## Index

### Constructors

* [constructor](poll.md#constructor)

### Properties

* [id](poll.md#id)
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

## Constructors

###  constructor

\+ **new Poll**(`socket`: Socket, `id`: string): *[Poll](poll.md)*

*Defined in [itinerary-item/poll.ts:75](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/poll.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`id` | string |

**Returns:** *[Poll](poll.md)*

## Properties

###  id

• **id**: *string*

*Defined in [itinerary-item/poll.ts:67](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/poll.ts#L67)*

Itinerary item id

___

###  questions

• **questions**: *[Question](question.md)[]* = []

*Defined in [itinerary-item/poll.ts:71](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/poll.ts#L71)*

All of the questions that are active on this poll currently

___

### `Private` socket

• **socket**: *Socket*

*Defined in [itinerary-item/poll.ts:62](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/poll.ts#L62)*

___

### `Private` subscriptionManager

• **subscriptionManager**: *[SubscriptionManager](subscriptionmanager.md)*

*Defined in [itinerary-item/poll.ts:63](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/poll.ts#L63)*

___

###  type

• **type**: *[PollType](../enums/polltype.md) | null* = null

*Defined in [itinerary-item/poll.ts:75](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/poll.ts#L75)*

The type of the poll. Currently only immediate supported.

## Methods

###  answer

▸ **answer**(`questionId`: string, `answerId`: string): *Promise‹void›*

*Defined in [itinerary-item/poll.ts:126](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/poll.ts#L126)*

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

*Defined in [itinerary-item/poll.ts:194](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/poll.ts#L194)*

Cleans up all listeners for this class. Call this when you no longer need access to this events information to ensure memory leaks are not caused.

**Returns:** *void*

___

###  get

▸ **get**(): *Promise‹void›*

*Defined in [itinerary-item/poll.ts:161](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/poll.ts#L161)*

Get all information for this poll. Questions will be populated in the questions array.

**Returns:** *Promise‹void›*

___

###  listenForQuestions

▸ **listenForQuestions**(): *void*

*Defined in [itinerary-item/poll.ts:105](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/poll.ts#L105)*

Sets up websocket listeners for new questions being streamed into the poll

**Returns:** *void*

___

###  listenForResponses

▸ **listenForResponses**(): *void*

*Defined in [itinerary-item/poll.ts:86](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/poll.ts#L86)*

Sets up websocket listeners for other peoples responses coming in

**Returns:** *void*

___

### `Static` sortByOrder

▸ **sortByOrder**(`a`: [QuestionResponse](../interfaces/questionresponse.md), `b`: [QuestionResponse](../interfaces/questionresponse.md)): *number*

*Defined in [itinerary-item/poll.ts:117](https://github.com/Extream-SaaS/ex-sdk/blob/ff4c1d0/src/itinerary-item/poll.ts#L117)*

Sorts messages by date

**Parameters:**

Name | Type |
------ | ------ |
`a` | [QuestionResponse](../interfaces/questionresponse.md) |
`b` | [QuestionResponse](../interfaces/questionresponse.md) |

**Returns:** *number*
