[@sublime-productions/extream-sdk](../README.md) › [Globals](../globals.md) › [SendNoticeRequest](sendnoticerequest.md)

# Interface: SendNoticeRequest

## Hierarchy

* **SendNoticeRequest**

## Index

### Properties

* [event](sendnoticerequest.md#event)
* [itinerary](sendnoticerequest.md#optional-itinerary)
* [message](sendnoticerequest.md#message)
* [page](sendnoticerequest.md#optional-page)

## Properties

###  event

• **event**: *string*

*Defined in [admin/admin.ts:12](https://github.com/Extream-SaaS/ex-sdk/blob/fa826ae/src/admin/admin.ts#L12)*

The event id to send the message to

___

### `Optional` itinerary

• **itinerary**? : *undefined | string*

*Defined in [admin/admin.ts:16](https://github.com/Extream-SaaS/ex-sdk/blob/fa826ae/src/admin/admin.ts#L16)*

Filter this message to specific itinerary in a specific event

___

###  message

• **message**: *object*

*Defined in [admin/admin.ts:24](https://github.com/Extream-SaaS/ex-sdk/blob/fa826ae/src/admin/admin.ts#L24)*

Message information

#### Type declaration:

* **text**: *string*

___

### `Optional` page

• **page**? : *undefined | string*

*Defined in [admin/admin.ts:20](https://github.com/Extream-SaaS/ex-sdk/blob/fa826ae/src/admin/admin.ts#L20)*

Filter this message to specific page in a specific event
