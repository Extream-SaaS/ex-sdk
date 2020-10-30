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

*Defined in [itinerary-item/poll.ts:63](https://github.com/Extream-SaaS/ex-sdk/blob/67dc47e/src/itinerary-item/poll.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`id` | string |

**Returns:** *[Poll](poll.md)*

## Properties

###  id

• **id**: *string*

*Defined in [itinerary-item/poll.ts:61](https://github.com/Extream-SaaS/ex-sdk/blob/67dc47e/src/itinerary-item/poll.ts#L61)*

___

###  questions

• **questions**: *[Question](question.md)[]* = []

*Defined in [itinerary-item/poll.ts:62](https://github.com/Extream-SaaS/ex-sdk/blob/67dc47e/src/itinerary-item/poll.ts#L62)*

___

### `Private` socket

• **socket**: *Socket*

*Defined in [itinerary-item/poll.ts:59](https://github.com/Extream-SaaS/ex-sdk/blob/67dc47e/src/itinerary-item/poll.ts#L59)*

___

### `Private` subscriptionManager

• **subscriptionManager**: *[SubscriptionManager](subscriptionmanager.md)*

*Defined in [itinerary-item/poll.ts:60](https://github.com/Extream-SaaS/ex-sdk/blob/67dc47e/src/itinerary-item/poll.ts#L60)*

___

###  type

• **type**: *[PollType](../enums/polltype.md) | null* = null

*Defined in [itinerary-item/poll.ts:63](https://github.com/Extream-SaaS/ex-sdk/blob/67dc47e/src/itinerary-item/poll.ts#L63)*

## Methods

###  answer

▸ **answer**(`questionId`: string, `answerId`: string): *Promise‹void›*

*Defined in [itinerary-item/poll.ts:103](https://github.com/Extream-SaaS/ex-sdk/blob/67dc47e/src/itinerary-item/poll.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`questionId` | string |
`answerId` | string |

**Returns:** *Promise‹void›*

___

###  createQuestion

▸ **createQuestion**(`question`: [QuestionRequest](../interfaces/questionrequest.md)): *Promise‹void›*

*Defined in [itinerary-item/poll.ts:111](https://github.com/Extream-SaaS/ex-sdk/blob/67dc47e/src/itinerary-item/poll.ts#L111)*

**Parameters:**

Name | Type |
------ | ------ |
`question` | [QuestionRequest](../interfaces/questionrequest.md) |

**Returns:** *Promise‹void›*

___

###  destroy

▸ **destroy**(): *void*

*Defined in [itinerary-item/poll.ts:163](https://github.com/Extream-SaaS/ex-sdk/blob/67dc47e/src/itinerary-item/poll.ts#L163)*

**Returns:** *void*

___

###  get

▸ **get**(): *Promise‹void›*

*Defined in [itinerary-item/poll.ts:135](https://github.com/Extream-SaaS/ex-sdk/blob/67dc47e/src/itinerary-item/poll.ts#L135)*

**Returns:** *Promise‹void›*

___

###  listenForQuestions

▸ **listenForQuestions**(): *void*

*Defined in [itinerary-item/poll.ts:90](https://github.com/Extream-SaaS/ex-sdk/blob/67dc47e/src/itinerary-item/poll.ts#L90)*

**Returns:** *void*

___

###  listenForResponses

▸ **listenForResponses**(): *void*

*Defined in [itinerary-item/poll.ts:74](https://github.com/Extream-SaaS/ex-sdk/blob/67dc47e/src/itinerary-item/poll.ts#L74)*

**Returns:** *void*

___

### `Static` sortByOrder

▸ **sortByOrder**(`a`: [QuestionResponse](../interfaces/questionresponse.md), `b`: [QuestionResponse](../interfaces/questionresponse.md)): *number*

*Defined in [itinerary-item/poll.ts:99](https://github.com/Extream-SaaS/ex-sdk/blob/67dc47e/src/itinerary-item/poll.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [QuestionResponse](../interfaces/questionresponse.md) |
`b` | [QuestionResponse](../interfaces/questionresponse.md) |

**Returns:** *number*
