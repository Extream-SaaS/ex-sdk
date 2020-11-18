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
* [timeAdded](question.md#timeadded)
* [timeToLive](question.md#timetolive)

### Methods

* [answer](question.md#answer)
* [setResponses](question.md#setresponses)
* [sortByOrder](question.md#static-sortbyorder)

## Constructors

###  constructor

\+ **new Question**(`socket`: Socket, `id`: string, `data`: [QuestionResponse](../interfaces/questionresponse.md)): *[Question](question.md)*

*Defined in [itinerary-item/question.ts:61](https://github.com/Extream-SaaS/ex-sdk/blob/8b68273/src/itinerary-item/question.ts#L61)*

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

*Defined in [itinerary-item/question.ts:45](https://github.com/Extream-SaaS/ex-sdk/blob/8b68273/src/itinerary-item/question.ts#L45)*

List of all answers

___

###  id

• **id**: *string*

*Defined in [itinerary-item/question.ts:41](https://github.com/Extream-SaaS/ex-sdk/blob/8b68273/src/itinerary-item/question.ts#L41)*

___

###  question

• **question**: *string*

*Defined in [itinerary-item/question.ts:53](https://github.com/Extream-SaaS/ex-sdk/blob/8b68273/src/itinerary-item/question.ts#L53)*

Text of the question e.g. "What is your name?"

___

###  responses

• **responses**: *object*

*Defined in [itinerary-item/question.ts:49](https://github.com/Extream-SaaS/ex-sdk/blob/8b68273/src/itinerary-item/question.ts#L49)*

Time for the question to show

#### Type declaration:

* \[ **key**: *string*\]: number

___

### `Private` socket

• **socket**: *Socket*

*Defined in [itinerary-item/question.ts:40](https://github.com/Extream-SaaS/ex-sdk/blob/8b68273/src/itinerary-item/question.ts#L40)*

___

###  timeAdded

• **timeAdded**: *number*

*Defined in [itinerary-item/question.ts:61](https://github.com/Extream-SaaS/ex-sdk/blob/8b68273/src/itinerary-item/question.ts#L61)*

Time question was streamed in

___

###  timeToLive

• **timeToLive**: *number*

*Defined in [itinerary-item/question.ts:57](https://github.com/Extream-SaaS/ex-sdk/blob/8b68273/src/itinerary-item/question.ts#L57)*

Time for the question to show

## Methods

###  answer

▸ **answer**(`answer`: string, `poll`: string): *Promise‹void›*

*Defined in [itinerary-item/question.ts:93](https://github.com/Extream-SaaS/ex-sdk/blob/8b68273/src/itinerary-item/question.ts#L93)*

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

*Defined in [itinerary-item/question.ts:84](https://github.com/Extream-SaaS/ex-sdk/blob/8b68273/src/itinerary-item/question.ts#L84)*

Set the responses of a question

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`responses` | object | The responses for a question  |

**Returns:** *void*

___

### `Static` sortByOrder

▸ **sortByOrder**(`a`: [AnswerResponse](../interfaces/answerresponse.md), `b`: [AnswerResponse](../interfaces/answerresponse.md)): *number*

*Defined in [itinerary-item/question.ts:76](https://github.com/Extream-SaaS/ex-sdk/blob/8b68273/src/itinerary-item/question.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [AnswerResponse](../interfaces/answerresponse.md) |
`b` | [AnswerResponse](../interfaces/answerresponse.md) |

**Returns:** *number*
