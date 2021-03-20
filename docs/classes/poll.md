[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [Poll](poll.md)

# Class: Poll

Represents a poll itinerary item

## Hierarchy

* **Poll**

## Index

### Constructors

* [constructor](poll.md#constructor)

### Properties

* [configuration](poll.md#configuration)
* [id](poll.md#id)
* [questions](poll.md#questions)
* [socket](poll.md#private-socket)
* [subscriptionManager](poll.md#private-subscriptionmanager)

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

*Defined in [itinerary-item/poll.ts:77](https://github.com/Extream-SaaS/ex-sdk/blob/600cbb0/src/itinerary-item/poll.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`id` | string |

**Returns:** *[Poll](poll.md)*

## Properties

###  configuration

• **configuration**: *[PollConfiguration](../interfaces/pollconfiguration.md) | null* = null

*Defined in [itinerary-item/poll.ts:77](https://github.com/Extream-SaaS/ex-sdk/blob/600cbb0/src/itinerary-item/poll.ts#L77)*

The type of the poll. Currently only immediate supported.

___

###  id

• **id**: *string*

*Defined in [itinerary-item/poll.ts:69](https://github.com/Extream-SaaS/ex-sdk/blob/600cbb0/src/itinerary-item/poll.ts#L69)*

Itinerary item id

___

###  questions

• **questions**: *[Question](question.md)[]* = []

*Defined in [itinerary-item/poll.ts:73](https://github.com/Extream-SaaS/ex-sdk/blob/600cbb0/src/itinerary-item/poll.ts#L73)*

All of the questions that are active on this poll currently

___

### `Private` socket

• **socket**: *Socket*

*Defined in [itinerary-item/poll.ts:64](https://github.com/Extream-SaaS/ex-sdk/blob/600cbb0/src/itinerary-item/poll.ts#L64)*

___

### `Private` subscriptionManager

• **subscriptionManager**: *[SubscriptionManager](subscriptionmanager.md)*

*Defined in [itinerary-item/poll.ts:65](https://github.com/Extream-SaaS/ex-sdk/blob/600cbb0/src/itinerary-item/poll.ts#L65)*

## Methods

###  answer

▸ **answer**(`questionId`: string, `answerId`: string): *Promise‹void›*

*Defined in [itinerary-item/poll.ts:135](https://github.com/Extream-SaaS/ex-sdk/blob/600cbb0/src/itinerary-item/poll.ts#L135)*

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

*Defined in [itinerary-item/poll.ts:203](https://github.com/Extream-SaaS/ex-sdk/blob/600cbb0/src/itinerary-item/poll.ts#L203)*

Cleans up all listeners for this class. Call this when you no longer need access to this events information to ensure memory leaks are not caused.

**Returns:** *void*

___

###  get

▸ **get**(): *Promise‹void›*

*Defined in [itinerary-item/poll.ts:170](https://github.com/Extream-SaaS/ex-sdk/blob/600cbb0/src/itinerary-item/poll.ts#L170)*

Get all information for this poll. Questions will be populated in the questions array.

**Returns:** *Promise‹void›*

___

###  listenForQuestions

▸ **listenForQuestions**(): *void*

*Defined in [itinerary-item/poll.ts:107](https://github.com/Extream-SaaS/ex-sdk/blob/600cbb0/src/itinerary-item/poll.ts#L107)*

Sets up websocket listeners for new questions being streamed into the poll

**Returns:** *void*

___

###  listenForResponses

▸ **listenForResponses**(): *void*

*Defined in [itinerary-item/poll.ts:88](https://github.com/Extream-SaaS/ex-sdk/blob/600cbb0/src/itinerary-item/poll.ts#L88)*

Sets up websocket listeners for other peoples responses coming in

**Returns:** *void*

___

### `Static` sortByOrder

▸ **sortByOrder**(`a`: [QuestionResponse](../interfaces/questionresponse.md), `b`: [QuestionResponse](../interfaces/questionresponse.md)): *number*

*Defined in [itinerary-item/poll.ts:119](https://github.com/Extream-SaaS/ex-sdk/blob/600cbb0/src/itinerary-item/poll.ts#L119)*

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

*Defined in [itinerary-item/poll.ts:126](https://github.com/Extream-SaaS/ex-sdk/blob/600cbb0/src/itinerary-item/poll.ts#L126)*

Sorts questions by date

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Question](question.md) |
`b` | [Question](question.md) |

**Returns:** *number*
