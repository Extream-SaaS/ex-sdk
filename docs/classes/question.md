[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [Question](question.md)

# Class: Question

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

*Defined in [itinerary-item/question.ts:43](https://github.com/Extream-SaaS/ex-sdk/blob/e74397e/src/itinerary-item/question.ts#L43)*

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

*Defined in [itinerary-item/question.ts:39](https://github.com/Extream-SaaS/ex-sdk/blob/e74397e/src/itinerary-item/question.ts#L39)*

___

###  id

• **id**: *string*

*Defined in [itinerary-item/question.ts:38](https://github.com/Extream-SaaS/ex-sdk/blob/e74397e/src/itinerary-item/question.ts#L38)*

___

###  question

• **question**: *string*

*Defined in [itinerary-item/question.ts:41](https://github.com/Extream-SaaS/ex-sdk/blob/e74397e/src/itinerary-item/question.ts#L41)*

___

###  responses

• **responses**: *object*

*Defined in [itinerary-item/question.ts:40](https://github.com/Extream-SaaS/ex-sdk/blob/e74397e/src/itinerary-item/question.ts#L40)*

#### Type declaration:

* \[ **key**: *string*\]: number

___

### `Private` socket

• **socket**: *Socket*

*Defined in [itinerary-item/question.ts:37](https://github.com/Extream-SaaS/ex-sdk/blob/e74397e/src/itinerary-item/question.ts#L37)*

___

###  timeAdded

• **timeAdded**: *number*

*Defined in [itinerary-item/question.ts:43](https://github.com/Extream-SaaS/ex-sdk/blob/e74397e/src/itinerary-item/question.ts#L43)*

___

###  timeToLive

• **timeToLive**: *number*

*Defined in [itinerary-item/question.ts:42](https://github.com/Extream-SaaS/ex-sdk/blob/e74397e/src/itinerary-item/question.ts#L42)*

## Methods

###  answer

▸ **answer**(`answer`: string, `poll`: string): *Promise‹void›*

*Defined in [itinerary-item/question.ts:72](https://github.com/Extream-SaaS/ex-sdk/blob/e74397e/src/itinerary-item/question.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`answer` | string |
`poll` | string |

**Returns:** *Promise‹void›*

___

###  setResponses

▸ **setResponses**(`responses`: object): *void*

*Defined in [itinerary-item/question.ts:68](https://github.com/Extream-SaaS/ex-sdk/blob/e74397e/src/itinerary-item/question.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`responses` | object |

**Returns:** *void*

___

### `Static` sortByOrder

▸ **sortByOrder**(`a`: [AnswerResponse](../interfaces/answerresponse.md), `b`: [AnswerResponse](../interfaces/answerresponse.md)): *number*

*Defined in [itinerary-item/question.ts:64](https://github.com/Extream-SaaS/ex-sdk/blob/e74397e/src/itinerary-item/question.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [AnswerResponse](../interfaces/answerresponse.md) |
`b` | [AnswerResponse](../interfaces/answerresponse.md) |

**Returns:** *number*
