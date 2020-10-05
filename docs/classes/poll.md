[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [Poll](poll.md)

# Class: Poll

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
* [createQuestion](poll.md#createquestion)
* [destroy](poll.md#destroy)
* [get](poll.md#get)
* [listenForQuestions](poll.md#listenforquestions)
* [listenForResponses](poll.md#listenforresponses)
* [sortByOrder](poll.md#static-sortbyorder)

## Constructors

###  constructor

\+ **new Poll**(`socket`: Socket, `id`: string): *[Poll](poll.md)*

*Defined in [itinerary-item/poll.ts:61](https://github.com/Extream-SaaS/ex-sdk/blob/a37ebb4/src/itinerary-item/poll.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`id` | string |

**Returns:** *[Poll](poll.md)*

## Properties

###  id

• **id**: *string*

*Defined in [itinerary-item/poll.ts:59](https://github.com/Extream-SaaS/ex-sdk/blob/a37ebb4/src/itinerary-item/poll.ts#L59)*

___

###  questions

• **questions**: *[Question](question.md)[]* = []

*Defined in [itinerary-item/poll.ts:60](https://github.com/Extream-SaaS/ex-sdk/blob/a37ebb4/src/itinerary-item/poll.ts#L60)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [itinerary-item/poll.ts:57](https://github.com/Extream-SaaS/ex-sdk/blob/a37ebb4/src/itinerary-item/poll.ts#L57)*

___

### `Private` subscriptionManager

• **subscriptionManager**: *[SubscriptionManager](subscriptionmanager.md)*

*Defined in [itinerary-item/poll.ts:58](https://github.com/Extream-SaaS/ex-sdk/blob/a37ebb4/src/itinerary-item/poll.ts#L58)*

___

###  type

• **type**: *[PollType](../enums/polltype.md) | null* = null

*Defined in [itinerary-item/poll.ts:61](https://github.com/Extream-SaaS/ex-sdk/blob/a37ebb4/src/itinerary-item/poll.ts#L61)*

## Methods

###  answer

▸ **answer**(`questionId`: string, `answerId`: string): *Promise‹void›*

*Defined in [itinerary-item/poll.ts:97](https://github.com/Extream-SaaS/ex-sdk/blob/a37ebb4/src/itinerary-item/poll.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`questionId` | string |
`answerId` | string |

**Returns:** *Promise‹void›*

___

###  createQuestion

▸ **createQuestion**(`question`: [QuestionRequest](../interfaces/questionrequest.md)): *Promise‹void›*

*Defined in [itinerary-item/poll.ts:105](https://github.com/Extream-SaaS/ex-sdk/blob/a37ebb4/src/itinerary-item/poll.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`question` | [QuestionRequest](../interfaces/questionrequest.md) |

**Returns:** *Promise‹void›*

___

###  destroy

▸ **destroy**(): *void*

*Defined in [itinerary-item/poll.ts:157](https://github.com/Extream-SaaS/ex-sdk/blob/a37ebb4/src/itinerary-item/poll.ts#L157)*

**Returns:** *void*

___

###  get

▸ **get**(): *Promise‹void›*

*Defined in [itinerary-item/poll.ts:129](https://github.com/Extream-SaaS/ex-sdk/blob/a37ebb4/src/itinerary-item/poll.ts#L129)*

**Returns:** *Promise‹void›*

___

###  listenForQuestions

▸ **listenForQuestions**(): *void*

*Defined in [itinerary-item/poll.ts:84](https://github.com/Extream-SaaS/ex-sdk/blob/a37ebb4/src/itinerary-item/poll.ts#L84)*

**Returns:** *void*

___

###  listenForResponses

▸ **listenForResponses**(): *void*

*Defined in [itinerary-item/poll.ts:72](https://github.com/Extream-SaaS/ex-sdk/blob/a37ebb4/src/itinerary-item/poll.ts#L72)*

**Returns:** *void*

___

### `Static` sortByOrder

▸ **sortByOrder**(`a`: [QuestionResponse](../interfaces/questionresponse.md), `b`: [QuestionResponse](../interfaces/questionresponse.md)): *number*

*Defined in [itinerary-item/poll.ts:93](https://github.com/Extream-SaaS/ex-sdk/blob/a37ebb4/src/itinerary-item/poll.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [QuestionResponse](../interfaces/questionresponse.md) |
`b` | [QuestionResponse](../interfaces/questionresponse.md) |

**Returns:** *number*
