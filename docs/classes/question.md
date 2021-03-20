[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [Question](question.md)

# Class: Question

Represents a questions related to a specific poll.

## Hierarchy

* **Question**

## Index

### Constructors

* [constructor](question.md#constructor)

### Properties

* [answers](question.md#answers)
* [id](question.md#id)
* [question](question.md#question)
* [responses](question.md#responses)
* [socket](question.md#private-socket)
* [time](question.md#time)
* [timeAdded](question.md#timeadded)
* [timeToLive](question.md#timetolive)

### Methods

* [answer](question.md#answer)
* [setResponses](question.md#setresponses)
* [sortResponses](question.md#sortresponses)
* [sortByOrder](question.md#static-sortbyorder)

## Constructors

###  constructor

\+ **new Question**(`socket`: Socket, `id`: string, `data`: [QuestionResponse](../interfaces/questionresponse.md)): *[Question](question.md)*

*Defined in [itinerary-item/question.ts:67](https://github.com/Extream-SaaS/ex-sdk/blob/194f895/src/itinerary-item/question.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`id` | string |
`data` | [QuestionResponse](../interfaces/questionresponse.md) |

**Returns:** *[Question](question.md)*

## Properties

###  answers

• **answers**: *[AnswerResponse](../interfaces/answerresponse.md)[]*

*Defined in [itinerary-item/question.ts:46](https://github.com/Extream-SaaS/ex-sdk/blob/194f895/src/itinerary-item/question.ts#L46)*

List of all answers

___

###  id

• **id**: *string*

*Defined in [itinerary-item/question.ts:42](https://github.com/Extream-SaaS/ex-sdk/blob/194f895/src/itinerary-item/question.ts#L42)*

___

###  question

• **question**: *string*

*Defined in [itinerary-item/question.ts:54](https://github.com/Extream-SaaS/ex-sdk/blob/194f895/src/itinerary-item/question.ts#L54)*

Text of the question e.g. "What is your name?"

___

###  responses

• **responses**: *object[]* = []

*Defined in [itinerary-item/question.ts:50](https://github.com/Extream-SaaS/ex-sdk/blob/194f895/src/itinerary-item/question.ts#L50)*

Time for the question to show

___

### `Private` socket

• **socket**: *Socket*

*Defined in [itinerary-item/question.ts:41](https://github.com/Extream-SaaS/ex-sdk/blob/194f895/src/itinerary-item/question.ts#L41)*

___

###  time

• **time**: *Date | undefined*

*Defined in [itinerary-item/question.ts:67](https://github.com/Extream-SaaS/ex-sdk/blob/194f895/src/itinerary-item/question.ts#L67)*

Time to display the question if pre-recorded

___

###  timeAdded

• **timeAdded**: *number*

*Defined in [itinerary-item/question.ts:62](https://github.com/Extream-SaaS/ex-sdk/blob/194f895/src/itinerary-item/question.ts#L62)*

Time question was streamed in

___

###  timeToLive

• **timeToLive**: *number*

*Defined in [itinerary-item/question.ts:58](https://github.com/Extream-SaaS/ex-sdk/blob/194f895/src/itinerary-item/question.ts#L58)*

Time for the question to show

## Methods

###  answer

▸ **answer**(`answer`: string, `poll`: string): *Promise‹void›*

*Defined in [itinerary-item/question.ts:112](https://github.com/Extream-SaaS/ex-sdk/blob/194f895/src/itinerary-item/question.ts#L112)*

Answer this question

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`answer` | string | The id of the answer you wish to give. |
`poll` | string | The id of the poll this question is related to  |

**Returns:** *Promise‹void›*

___

###  setResponses

▸ **setResponses**(`responses`: object): *void*

*Defined in [itinerary-item/question.ts:102](https://github.com/Extream-SaaS/ex-sdk/blob/194f895/src/itinerary-item/question.ts#L102)*

Set the responses of a question

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`responses` | object | The responses for a question  |

**Returns:** *void*

___

###  sortResponses

▸ **sortResponses**(`a`: [string, number], `b`: [string, number]): *number*

*Defined in [itinerary-item/question.ts:89](https://github.com/Extream-SaaS/ex-sdk/blob/194f895/src/itinerary-item/question.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [string, number] |
`b` | [string, number] |

**Returns:** *number*

___

### `Static` sortByOrder

▸ **sortByOrder**(`a`: [AnswerResponse](../interfaces/answerresponse.md), `b`: [AnswerResponse](../interfaces/answerresponse.md)): *number*

*Defined in [itinerary-item/question.ts:85](https://github.com/Extream-SaaS/ex-sdk/blob/194f895/src/itinerary-item/question.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [AnswerResponse](../interfaces/answerresponse.md) |
`b` | [AnswerResponse](../interfaces/answerresponse.md) |

**Returns:** *number*
