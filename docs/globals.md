[@sublime-productions/extream-sdk](README.md) › [Globals](globals.md)

# @sublime-productions/extream-sdk

## Index

### Enumerations

* [AdminTopic](enums/admintopic.md)
* [AuthorizationTopic](enums/authorizationtopic.md)
* [ClientTopic](enums/clienttopic.md)
* [ConsumerTopic](enums/consumertopic.md)

### Classes

* [Admin](classes/admin.md)
* [Chat](classes/chat.md)
* [Client](classes/client.md)
* [Consumer](classes/consumer.md)
* [ExtreamClient](classes/extreamclient.md)
* [SubscriptionManager](classes/subscriptionmanager.md)
* [User](classes/user.md)

### Interfaces

* [AddedAt](interfaces/addedat.md)
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
* [ItineraryPayload](interfaces/itinerarypayload.md)
* [Message](interfaces/message.md)
* [Messages](interfaces/messages.md)
* [PrimaryContact](interfaces/primarycontact.md)
* [RegisterUserRequest](interfaces/registeruserrequest.md)
* [ReplyMessageData](interfaces/replymessagedata.md)
* [SendChatMessagePayload](interfaces/sendchatmessagepayload.md)
* [SendChatMessageResponse](interfaces/sendchatmessageresponse.md)
* [SendChatRequest](interfaces/sendchatrequest.md)
* [SendMessageData](interfaces/sendmessagedata.md)
* [StartChatResponse](interfaces/startchatresponse.md)
* [StartChatResponsePayload](interfaces/startchatresponsepayload.md)
* [StartChatResponsePayloadData](interfaces/startchatresponsepayloaddata.md)
* [UpdateOrganizationParams](interfaces/updateorganizationparams.md)
* [UpdatedAt](interfaces/updatedat.md)
* [UserFields](interfaces/userfields.md)

### Type aliases

* [MessageData](globals.md#messagedata)

### Functions

* [promiseTimeout](globals.md#const-promisetimeout)

## Type aliases

###  MessageData

Ƭ **MessageData**: *[ReplyMessageData](interfaces/replymessagedata.md) | [SendMessageData](interfaces/sendmessagedata.md)*

*Defined in [chat.ts:52](https://github.com/Extream-SaaS/ex-sdk/blob/b2de5a9/src/chat.ts#L52)*

## Functions

### `Const` promiseTimeout

▸ **promiseTimeout**‹**T**›(`promise`: Promise‹T›): *Promise‹T›*

*Defined in [utils.ts:21](https://github.com/Extream-SaaS/ex-sdk/blob/b2de5a9/src/utils.ts#L21)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`promise` | Promise‹T› |

**Returns:** *Promise‹T›*
