[@sublime-productions/extream-sdk](README.md) › [Globals](globals.md)

# @sublime-productions/extream-sdk

## Index

### Enumerations

* [AdminTopic](enums/admintopic.md)
* [AuthorizationTopic](enums/authorizationtopic.md)
* [ClientTopic](enums/clienttopic.md)
* [ConsumerTopic](enums/consumertopic.md)
* [ItineraryType](enums/itinerarytype.md)
* [UserType](enums/usertype.md)

### Classes

* [Admin](classes/admin.md)
* [Chat](classes/chat.md)
* [Client](classes/client.md)
* [Consumer](classes/consumer.md)
* [Event](classes/event.md)
* [ExtreamClient](classes/extreamclient.md)
* [Itinerary](classes/itinerary.md)
* [SubscriptionManager](classes/subscriptionmanager.md)
* [User](classes/user.md)
* [Video](classes/video.md)

### Interfaces

* [AuthenticationParams](interfaces/authenticationparams.md)
* [AuthenticationResponse](interfaces/authenticationresponse.md)
* [BanMessageData](interfaces/banmessagedata.md)
* [BanMessageRequest](interfaces/banmessagerequest.md)
* [ChatMessageResponse](interfaces/chatmessageresponse.md)
* [ChatMessages](interfaces/chatmessages.md)
* [Configuration](interfaces/configuration.md)
* [CreateOrganizationParams](interfaces/createorganizationparams.md)
* [EventsByOrganizationResponse](interfaces/eventsbyorganizationresponse.md)
* [EventsPayload](interfaces/eventspayload.md)
* [ExtreamAuthUser](interfaces/extreamauthuser.md)
* [ExtreamOptions](interfaces/extreamoptions.md)
* [ExtreamUser](interfaces/extreamuser.md)
* [GetChatPayload](interfaces/getchatpayload.md)
* [GetChatResponse](interfaces/getchatresponse.md)
* [GetEventItineraryResponse](interfaces/geteventitineraryresponse.md)
* [GetItineraryResponse](interfaces/getitineraryresponse.md)
* [InitialResponse](interfaces/initialresponse.md)
* [ItineraryItem](interfaces/itineraryitem.md)
* [ItineraryPayload](interfaces/itinerarypayload.md)
* [Message](interfaces/message.md)
* [Messages](interfaces/messages.md)
* [PrimaryContact](interfaces/primarycontact.md)
* [ReadWebRtcResponse](interfaces/readwebrtcresponse.md)
* [ReadWebRtcResponsePayload](interfaces/readwebrtcresponsepayload.md)
* [RegisterUserRequest](interfaces/registeruserrequest.md)
* [ReplyMessageData](interfaces/replymessagedata.md)
* [RtcConfiguration](interfaces/rtcconfiguration.md)
* [SendChatMessagePayload](interfaces/sendchatmessagepayload.md)
* [SendChatMessageResponse](interfaces/sendchatmessageresponse.md)
* [SendChatRequest](interfaces/sendchatrequest.md)
* [SendMessageData](interfaces/sendmessagedata.md)
* [StartChatResponse](interfaces/startchatresponse.md)
* [StartChatResponsePayload](interfaces/startchatresponsepayload.md)
* [StartChatResponsePayloadData](interfaces/startchatresponsepayloaddata.md)
* [TimeStamp](interfaces/timestamp.md)
* [UpdateOrganizationParams](interfaces/updateorganizationparams.md)
* [UserFields](interfaces/userfields.md)

### Type aliases

* [MessageData](globals.md#messagedata)

### Functions

* [promiseTimeout](globals.md#const-promisetimeout)

## Type aliases

###  MessageData

Ƭ **MessageData**: *[ReplyMessageData](interfaces/replymessagedata.md) | [SendMessageData](interfaces/sendmessagedata.md)*

*Defined in [chat.ts:52](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/chat.ts#L52)*

## Functions

### `Const` promiseTimeout

▸ **promiseTimeout**‹**T**›(`promise`: Promise‹T›): *Promise‹T›*

*Defined in [utils.ts:26](https://github.com/Extream-SaaS/ex-sdk/blob/3458c8e/src/utils.ts#L26)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`promise` | Promise‹T› |

**Returns:** *Promise‹T›*
