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

* [Admin](classes/admin.md)
* [AdminItineraries](classes/adminitineraries.md)
* [AdminItinerary](classes/adminitinerary.md)
* [Chat](classes/chat.md)
* [Consumer](classes/consumer.md)
* [Event](classes/event.md)
* [ExtreamClient](classes/extreamclient.md)
* [Itinerary](classes/itinerary.md)
* [ItineraryItem](classes/itineraryitem.md)
* [Notices](classes/notices.md)
* [Poll](classes/poll.md)
* [Question](classes/question.md)
* [Rtmp](classes/rtmp.md)
* [SubscriptionManager](classes/subscriptionmanager.md)
* [User](classes/user.md)
* [WebRtc](classes/webrtc.md)

### Interfaces

* [AnswerPollsResponse](interfaces/answerpollsresponse.md)
* [AnswerResponse](interfaces/answerresponse.md)
* [AuthenticationParams](interfaces/authenticationparams.md)
* [AuthenticationResponse](interfaces/authenticationresponse.md)
* [BanMessageData](interfaces/banmessagedata.md)
* [BanMessageRequest](interfaces/banmessagerequest.md)
* [ChatCreateRequest](interfaces/chatcreaterequest.md)
* [ChatMessageResponse](interfaces/chatmessageresponse.md)
* [ChatMessages](interfaces/chatmessages.md)
* [ChatUpdateRequest](interfaces/chatupdaterequest.md)
* [Configuration](interfaces/configuration.md)
* [CreateQuestionResponse](interfaces/createquestionresponse.md)
* [DeleteItineraryItemResponse](interfaces/deleteitineraryitemresponse.md)
* [EntityResponse](interfaces/entityresponse.md)
* [EventsPayload](interfaces/eventspayload.md)
* [ExtreamAuthUser](interfaces/extreamauthuser.md)
* [ExtreamOptions](interfaces/extreamoptions.md)
* [ExtreamUser](interfaces/extreamuser.md)
* [GetChatPayload](interfaces/getchatpayload.md)
* [GetNoticesResponse](interfaces/getnoticesresponse.md)
* [GetPollResponse](interfaces/getpollresponse.md)
* [GetPollResponsePayload](interfaces/getpollresponsepayload.md)
* [InitialResponse](interfaces/initialresponse.md)
* [ItineraryItemPayload](interfaces/itineraryitempayload.md)
* [ItineraryPayload](interfaces/itinerarypayload.md)
* [Message](interfaces/message.md)
* [Messages](interfaces/messages.md)
* [Notice](interfaces/notice.md)
* [NoticeGetRequest](interfaces/noticegetrequest.md)
* [PollAnswerResponse](interfaces/pollanswerresponse.md)
* [PollCreateRequest](interfaces/pollcreaterequest.md)
* [PollListenerResponse](interfaces/polllistenerresponse.md)
* [PollQuestionResponse](interfaces/pollquestionresponse.md)
* [PollUpdateRequest](interfaces/pollupdaterequest.md)
* [QuestionAnswerData](interfaces/questionanswerdata.md)
* [QuestionRequest](interfaces/questionrequest.md)
* [QuestionResponse](interfaces/questionresponse.md)
* [ReadNoticesResponse](interfaces/readnoticesresponse.md)
* [ReadRtmpResponsePayload](interfaces/readrtmpresponsepayload.md)
* [ReadWebRtcResponsePayload](interfaces/readwebrtcresponsepayload.md)
* [RegisterUserRequest](interfaces/registeruserrequest.md)
* [ReplyMessageData](interfaces/replymessagedata.md)
* [RmtpCreateRequest](interfaces/rmtpcreaterequest.md)
* [RmtpItineraryItemPayload](interfaces/rmtpitineraryitempayload.md)
* [RmtpUpdateRequest](interfaces/rmtpupdaterequest.md)
* [RtcConfiguration](interfaces/rtcconfiguration.md)
* [RtmpConfiguration](interfaces/rtmpconfiguration.md)
* [RtmpItineraryItemConfiguration](interfaces/rtmpitineraryitemconfiguration.md)
* [SendChatMessagePayload](interfaces/sendchatmessagepayload.md)
* [SendChatRequest](interfaces/sendchatrequest.md)
* [SendMessageData](interfaces/sendmessagedata.md)
* [SendNoticeRequest](interfaces/sendnoticerequest.md)
* [SendNoticeResponse](interfaces/sendnoticeresponse.md)
* [SocketResponse](interfaces/socketresponse.md)
* [StartChatResponsePayload](interfaces/startchatresponsepayload.md)
* [StartChatResponsePayloadData](interfaces/startchatresponsepayloaddata.md)
* [TimeStamp](interfaces/timestamp.md)
* [UserFields](interfaces/userfields.md)
* [WebRtcConfiguration](interfaces/webrtcconfiguration.md)
* [WebRtcCreateRequest](interfaces/webrtccreaterequest.md)
* [WebRtcUpdateRequest](interfaces/webrtcupdaterequest.md)

### Type aliases

* [CreateItemRequest](globals.md#createitemrequest)
* [CreateItemResponse](globals.md#createitemresponse)
* [CreateItineraryResponse](globals.md#createitineraryresponse)
* [EventsByOrganizationResponse](globals.md#eventsbyorganizationresponse)
* [GetChatResponse](globals.md#getchatresponse)
* [GetEventItinerariesResponse](globals.md#geteventitinerariesresponse)
* [GetEventItineraryResponse](globals.md#geteventitineraryresponse)
* [GetItineraryResponse](globals.md#getitineraryresponse)
* [GetRmtpItineraryItemResponse](globals.md#getrmtpitineraryitemresponse)
* [MessageData](globals.md#messagedata)
* [ReadRtmpResponse](globals.md#readrtmpresponse)
* [ReadWebRtcResponse](globals.md#readwebrtcresponse)
* [SendChatMessageResponse](globals.md#sendchatmessageresponse)
* [StartChatResponse](globals.md#startchatresponse)
* [Topics](globals.md#topics)
* [UpdateItemRequest](globals.md#updateitemrequest)

### Functions

* [promiseTimeout](globals.md#const-promisetimeout)

## Type aliases

###  CreateItemRequest

Ƭ **CreateItemRequest**: *[PollCreateRequest](interfaces/pollcreaterequest.md) | [WebRtcCreateRequest](interfaces/webrtccreaterequest.md) | [RmtpCreateRequest](interfaces/rmtpcreaterequest.md) | [ChatCreateRequest](interfaces/chatcreaterequest.md)*

*Defined in [admin/admin-itinerary.ts:18](https://github.com/Extream-SaaS/ex-sdk/blob/34a42fe/src/admin/admin-itinerary.ts#L18)*

___

###  CreateItemResponse

Ƭ **CreateItemResponse**: *[SocketResponse](interfaces/socketresponse.md)‹object›*

*Defined in [admin/admin-itinerary.ts:20](https://github.com/Extream-SaaS/ex-sdk/blob/34a42fe/src/admin/admin-itinerary.ts#L20)*

___

###  CreateItineraryResponse

Ƭ **CreateItineraryResponse**: *[SocketResponse](interfaces/socketresponse.md)‹any›*

*Defined in [admin/admin-itineraries.ts:6](https://github.com/Extream-SaaS/ex-sdk/blob/34a42fe/src/admin/admin-itineraries.ts#L6)*

___

###  EventsByOrganizationResponse

Ƭ **EventsByOrganizationResponse**: *[SocketResponse](interfaces/socketresponse.md)‹[EventsPayload](interfaces/eventspayload.md)[]›*

*Defined in [event.ts:21](https://github.com/Extream-SaaS/ex-sdk/blob/34a42fe/src/event.ts#L21)*

___

###  GetChatResponse

Ƭ **GetChatResponse**: *[SocketResponse](interfaces/socketresponse.md)‹[GetChatPayload](interfaces/getchatpayload.md)›*

*Defined in [itinerary-item/chat.ts:85](https://github.com/Extream-SaaS/ex-sdk/blob/34a42fe/src/itinerary-item/chat.ts#L85)*

___

###  GetEventItinerariesResponse

Ƭ **GetEventItinerariesResponse**: *[SocketResponse](interfaces/socketresponse.md)‹[ItineraryPayload](interfaces/itinerarypayload.md)[]›*

*Defined in [admin/admin-itineraries.ts:7](https://github.com/Extream-SaaS/ex-sdk/blob/34a42fe/src/admin/admin-itineraries.ts#L7)*

___

###  GetEventItineraryResponse

Ƭ **GetEventItineraryResponse**: *[SocketResponse](interfaces/socketresponse.md)‹[ItineraryPayload](interfaces/itinerarypayload.md)[]›*

*Defined in [event.ts:43](https://github.com/Extream-SaaS/ex-sdk/blob/34a42fe/src/event.ts#L43)*

___

###  GetItineraryResponse

Ƭ **GetItineraryResponse**: *[SocketResponse](interfaces/socketresponse.md)‹[ItineraryPayload](interfaces/itinerarypayload.md)›*

*Defined in [event.ts:45](https://github.com/Extream-SaaS/ex-sdk/blob/34a42fe/src/event.ts#L45)*

___

###  GetRmtpItineraryItemResponse

Ƭ **GetRmtpItineraryItemResponse**: *[SocketResponse](interfaces/socketresponse.md)‹[RmtpItineraryItemPayload](interfaces/rmtpitineraryitempayload.md)›*

*Defined in [admin/itinerary-item.ts:37](https://github.com/Extream-SaaS/ex-sdk/blob/34a42fe/src/admin/itinerary-item.ts#L37)*

___

###  MessageData

Ƭ **MessageData**: *[ReplyMessageData](interfaces/replymessagedata.md) | [SendMessageData](interfaces/sendmessagedata.md)*

*Defined in [itinerary-item/chat.ts:45](https://github.com/Extream-SaaS/ex-sdk/blob/34a42fe/src/itinerary-item/chat.ts#L45)*

___

###  ReadRtmpResponse

Ƭ **ReadRtmpResponse**: *[SocketResponse](interfaces/socketresponse.md)‹[ReadRtmpResponsePayload](interfaces/readrtmpresponsepayload.md)›*

*Defined in [itinerary-item/rtmp.ts:30](https://github.com/Extream-SaaS/ex-sdk/blob/34a42fe/src/itinerary-item/rtmp.ts#L30)*

___

###  ReadWebRtcResponse

Ƭ **ReadWebRtcResponse**: *[SocketResponse](interfaces/socketresponse.md)‹[ReadWebRtcResponsePayload](interfaces/readwebrtcresponsepayload.md)›*

*Defined in [itinerary-item/webrtc.ts:17](https://github.com/Extream-SaaS/ex-sdk/blob/34a42fe/src/itinerary-item/webrtc.ts#L17)*

___

###  SendChatMessageResponse

Ƭ **SendChatMessageResponse**: *[SocketResponse](interfaces/socketresponse.md)‹[SendChatMessagePayload](interfaces/sendchatmessagepayload.md)›*

*Defined in [itinerary-item/chat.ts:24](https://github.com/Extream-SaaS/ex-sdk/blob/34a42fe/src/itinerary-item/chat.ts#L24)*

___

###  StartChatResponse

Ƭ **StartChatResponse**: *[SocketResponse](interfaces/socketresponse.md)‹[StartChatResponsePayload](interfaces/startchatresponsepayload.md)›*

*Defined in [itinerary-item/chat.ts:124](https://github.com/Extream-SaaS/ex-sdk/blob/34a42fe/src/itinerary-item/chat.ts#L124)*

___

###  Topics

Ƭ **Topics**: *object*

*Defined in [topic.ts:67](https://github.com/Extream-SaaS/ex-sdk/blob/34a42fe/src/topic.ts#L67)*

#### Type declaration:

* **AdminTopic**: *[AdminTopic](globals.md#admintopic)*

* **Authorization**: *[AuthorizationTopic](enums/authorizationtopic.md)*

* **ClientTopic**: *[ClientTopic](globals.md#clienttopic)*

* **ConsumerTopic**: *[ConsumerTopic](globals.md#consumertopic)*

___

###  UpdateItemRequest

Ƭ **UpdateItemRequest**: *[PollUpdateRequest](interfaces/pollupdaterequest.md) | [WebRtcUpdateRequest](interfaces/webrtcupdaterequest.md) | [RmtpUpdateRequest](interfaces/rmtpupdaterequest.md) | [ChatUpdateRequest](interfaces/chatupdaterequest.md)*

*Defined in [admin/itinerary-item.ts:48](https://github.com/Extream-SaaS/ex-sdk/blob/34a42fe/src/admin/itinerary-item.ts#L48)*

## Functions

### `Const` promiseTimeout

▸ **promiseTimeout**‹**T**›(`promise`: Promise‹T›): *Promise‹T›*

*Defined in [utils.ts:38](https://github.com/Extream-SaaS/ex-sdk/blob/34a42fe/src/utils.ts#L38)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`promise` | Promise‹T› |

**Returns:** *Promise‹T›*
