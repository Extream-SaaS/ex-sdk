[@sublime-productions/extream-sdk](README.md) › [Globals](globals.md)

# @sublime-productions/extream-sdk

## Index

### Enumerations

* [AdminTopic](enums/admintopic.md)
* [AuthorizationTopic](enums/authorizationtopic.md)
* [ClientTopic](enums/clienttopic.md)
* [ConsumerTopic](enums/consumertopic.md)
* [ItineraryType](enums/itinerarytype.md)
* [PollType](enums/polltype.md)
* [UserType](enums/usertype.md)

### Classes

* [Chat](classes/chat.md)
* [Consumer](classes/consumer.md)
* [Event](classes/event.md)
* [ExtreamClient](classes/extreamclient.md)
* [Itinerary](classes/itinerary.md)
* [Poll](classes/poll.md)
* [Question](classes/question.md)
* [SubscriptionManager](classes/subscriptionmanager.md)
* [User](classes/user.md)
* [Video](classes/video.md)

### Interfaces

* [AnswerPollsResponse](interfaces/answerpollsresponse.md)
* [AnswerResponse](interfaces/answerresponse.md)
* [AuthenticationParams](interfaces/authenticationparams.md)
* [AuthenticationResponse](interfaces/authenticationresponse.md)
* [BanMessageData](interfaces/banmessagedata.md)
* [BanMessageRequest](interfaces/banmessagerequest.md)
* [ChatMessageResponse](interfaces/chatmessageresponse.md)
* [ChatMessages](interfaces/chatmessages.md)
* [Configuration](interfaces/configuration.md)
* [CreateQuestionResponse](interfaces/createquestionresponse.md)
* [EventsPayload](interfaces/eventspayload.md)
* [ExtreamAuthUser](interfaces/extreamauthuser.md)
* [ExtreamOptions](interfaces/extreamoptions.md)
* [ExtreamUser](interfaces/extreamuser.md)
* [GetChatPayload](interfaces/getchatpayload.md)
* [GetPollResponse](interfaces/getpollresponse.md)
* [GetPollResponsePayload](interfaces/getpollresponsepayload.md)
* [InitialResponse](interfaces/initialresponse.md)
* [ItineraryItem](interfaces/itineraryitem.md)
* [ItineraryPayload](interfaces/itinerarypayload.md)
* [Message](interfaces/message.md)
* [Messages](interfaces/messages.md)
* [PollAnswerResponse](interfaces/pollanswerresponse.md)
* [PollListenerResponse](interfaces/polllistenerresponse.md)
* [PollQuestionResponse](interfaces/pollquestionresponse.md)
* [QuestionAnswerData](interfaces/questionanswerdata.md)
* [QuestionRequest](interfaces/questionrequest.md)
* [QuestionResponse](interfaces/questionresponse.md)
* [ReadWebRtcResponsePayload](interfaces/readwebrtcresponsepayload.md)
* [RegisterUserRequest](interfaces/registeruserrequest.md)
* [ReplyMessageData](interfaces/replymessagedata.md)
* [RtcConfiguration](interfaces/rtcconfiguration.md)
* [SendChatMessagePayload](interfaces/sendchatmessagepayload.md)
* [SendChatRequest](interfaces/sendchatrequest.md)
* [SendMessageData](interfaces/sendmessagedata.md)
* [SocketResponse](interfaces/socketresponse.md)
* [StartChatResponsePayload](interfaces/startchatresponsepayload.md)
* [StartChatResponsePayloadData](interfaces/startchatresponsepayloaddata.md)
* [TimeStamp](interfaces/timestamp.md)
* [UserFields](interfaces/userfields.md)

### Type aliases

* [EventsByOrganizationResponse](globals.md#eventsbyorganizationresponse)
* [GetChatResponse](globals.md#getchatresponse)
* [GetEventItineraryResponse](globals.md#geteventitineraryresponse)
* [GetItineraryResponse](globals.md#getitineraryresponse)
* [MessageData](globals.md#messagedata)
* [ReadWebRtcResponse](globals.md#readwebrtcresponse)
* [SendChatMessageResponse](globals.md#sendchatmessageresponse)
* [StartChatResponse](globals.md#startchatresponse)
* [Topics](globals.md#topics)

### Functions

* [promiseTimeout](globals.md#const-promisetimeout)

## Type aliases

###  EventsByOrganizationResponse

Ƭ **EventsByOrganizationResponse**: *[SocketResponse](interfaces/socketresponse.md)‹[EventsPayload](interfaces/eventspayload.md)[]›*

*Defined in [event.ts:20](https://github.com/Extream-SaaS/ex-sdk/blob/fc506a8/src/event.ts#L20)*

___

###  GetChatResponse

Ƭ **GetChatResponse**: *[SocketResponse](interfaces/socketresponse.md)‹[GetChatPayload](interfaces/getchatpayload.md)›*

*Defined in [itinerary-item/chat.ts:82](https://github.com/Extream-SaaS/ex-sdk/blob/fc506a8/src/itinerary-item/chat.ts#L82)*

___

###  GetEventItineraryResponse

Ƭ **GetEventItineraryResponse**: *[SocketResponse](interfaces/socketresponse.md)‹[ItineraryPayload](interfaces/itinerarypayload.md)[]›*

*Defined in [event.ts:42](https://github.com/Extream-SaaS/ex-sdk/blob/fc506a8/src/event.ts#L42)*

___

###  GetItineraryResponse

Ƭ **GetItineraryResponse**: *[SocketResponse](interfaces/socketresponse.md)‹[ItineraryPayload](interfaces/itinerarypayload.md)›*

*Defined in [event.ts:44](https://github.com/Extream-SaaS/ex-sdk/blob/fc506a8/src/event.ts#L44)*

___

###  MessageData

Ƭ **MessageData**: *[ReplyMessageData](interfaces/replymessagedata.md) | [SendMessageData](interfaces/sendmessagedata.md)*

*Defined in [itinerary-item/chat.ts:42](https://github.com/Extream-SaaS/ex-sdk/blob/fc506a8/src/itinerary-item/chat.ts#L42)*

___

###  ReadWebRtcResponse

Ƭ **ReadWebRtcResponse**: *[SocketResponse](interfaces/socketresponse.md)‹[ReadWebRtcResponsePayload](interfaces/readwebrtcresponsepayload.md)›*

*Defined in [itinerary.ts:23](https://github.com/Extream-SaaS/ex-sdk/blob/fc506a8/src/itinerary.ts#L23)*

___

###  SendChatMessageResponse

Ƭ **SendChatMessageResponse**: *[SocketResponse](interfaces/socketresponse.md)‹[SendChatMessagePayload](interfaces/sendchatmessagepayload.md)›*

*Defined in [itinerary-item/chat.ts:24](https://github.com/Extream-SaaS/ex-sdk/blob/fc506a8/src/itinerary-item/chat.ts#L24)*

___

###  StartChatResponse

Ƭ **StartChatResponse**: *[SocketResponse](interfaces/socketresponse.md)‹[StartChatResponsePayload](interfaces/startchatresponsepayload.md)›*

*Defined in [itinerary-item/chat.ts:120](https://github.com/Extream-SaaS/ex-sdk/blob/fc506a8/src/itinerary-item/chat.ts#L120)*

___

###  Topics

Ƭ **Topics**: *object*

*Defined in [topic.ts:52](https://github.com/Extream-SaaS/ex-sdk/blob/fc506a8/src/topic.ts#L52)*

#### Type declaration:

* **AdminTopic**: *[AdminTopic](globals.md#admintopic)*

* **Authorization**: *[AuthorizationTopic](enums/authorizationtopic.md)*

* **ClientTopic**: *[ClientTopic](globals.md#clienttopic)*

* **ConsumerTopic**: *[ConsumerTopic](globals.md#consumertopic)*

## Functions

### `Const` promiseTimeout

▸ **promiseTimeout**‹**T**›(`promise`: Promise‹T›): *Promise‹T›*

*Defined in [utils.ts:38](https://github.com/Extream-SaaS/ex-sdk/blob/fc506a8/src/utils.ts#L38)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`promise` | Promise‹T› |

**Returns:** *Promise‹T›*
