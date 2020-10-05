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
* [responses](question.md#responses)
* [socket](question.md#private-socket)

### Methods

* [answer](question.md#answer)
* [setResponses](question.md#setresponses)
* [sortByOrder](question.md#static-sortbyorder)

## Constructors

###  constructor

\+ **new Question**(`socket`: Socket, `id`: string, `data`: [QuestionResponse](../interfaces/questionresponse.md)): *[Question](question.md)*

*Defined in [itinerary-item/question.ts:26](https://github.com/Extream-SaaS/ex-sdk/blob/a37ebb4/src/itinerary-item/question.ts#L26)*

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

*Defined in [itinerary-item/question.ts:25](https://github.com/Extream-SaaS/ex-sdk/blob/a37ebb4/src/itinerary-item/question.ts#L25)*

___

###  id

• **id**: *string*

*Defined in [itinerary-item/question.ts:24](https://github.com/Extream-SaaS/ex-sdk/blob/a37ebb4/src/itinerary-item/question.ts#L24)*

___

###  responses

• **responses**: *object*

*Defined in [itinerary-item/question.ts:26](https://github.com/Extream-SaaS/ex-sdk/blob/a37ebb4/src/itinerary-item/question.ts#L26)*

#### Type declaration:

* \[ **key**: *string*\]: number

___

### `Private` socket

• **socket**: *Socket*

*Defined in [itinerary-item/question.ts:23](https://github.com/Extream-SaaS/ex-sdk/blob/a37ebb4/src/itinerary-item/question.ts#L23)*

## Methods

###  answer

▸ **answer**(`answer`: string, `poll`: string): *Promise‹void›*

*Defined in [itinerary-item/question.ts:47](https://github.com/Extream-SaaS/ex-sdk/blob/a37ebb4/src/itinerary-item/question.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`answer` | string |
`poll` | string |

**Returns:** *Promise‹void›*

___

###  setResponses

▸ **setResponses**(`responses`: object): *void*

*Defined in [itinerary-item/question.ts:43](https://github.com/Extream-SaaS/ex-sdk/blob/a37ebb4/src/itinerary-item/question.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`responses` | object |

**Returns:** *void*

___

### `Static` sortByOrder

▸ **sortByOrder**(`a`: [AnswerResponse](../interfaces/answerresponse.md), `b`: [AnswerResponse](../interfaces/answerresponse.md)): *number*

*Defined in [itinerary-item/question.ts:39](https://github.com/Extream-SaaS/ex-sdk/blob/a37ebb4/src/itinerary-item/question.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [AnswerResponse](../interfaces/answerresponse.md) |
`b` | [AnswerResponse](../interfaces/answerresponse.md) |

**Returns:** *number*
