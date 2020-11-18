/**
 * All of the authorization related websocket events
 */
export enum AuthorizationTopic {
  Authorized = 'authorized',
  Authorize = 'authorize',
  Unauthorized = 'unauthorized',
  Mfa = 'mfa',
  Connect = 'connect',
}

/**
 * All of the admin related websocket events
 */
export enum AdminTopic {
  OrganisationCreate = 'admin_organisation_create',
  OrganisationUpdate = 'admin_organisation_update',
  OrganisationRead = 'admin_organisation_read',
  EventCreate = 'admin_event_create',
  EventUpdate = 'admin_event_update',
  EventRead = 'admin_event_read',
  ItineraryCreate = 'admin_itinerary_create',
  ItineraryUpdate = 'admin_itinerary_update',
  ItineraryRead = 'admin_itinerary_read',
  ItineraryRemove = 'admin_itinerary_delete',
  ItemCreate = 'admin_item_create',
  ItemDelete = 'admin_item_delete',
  ItemUpdate = 'admin_item_update',
  ItemRead = 'admin_item_read',
}

/**
 * All of the client related websocket events
 */
export enum ClientTopic {
  RtmpGet = 'client_rtmp_get',
  RtmpActivate = 'client_rtmp_activate',
  ChatBan = 'client_chat_ban',
  ChatActivate = 'client_chat_activate',
  PollListener = 'client_poll_listener',
  NoticeSend = 'client_notice_send',
}

/**
 * All of the consumer related websocket events
 */
export enum ConsumerTopic {
  ChatGet = 'consumer_chat_get',
  ChatReceive = 'consumer_chat_receive',
  ChatRemove = 'consumer_chat_remove',
  ChatSend = 'consumer_chat_send',
  ChatStart = 'consumer_chat_start',
  EventGet = 'consumer_event_get',
  ItineraryGet = 'consumer_itinerary_get',
  OnlineLeave = 'consumer_online_leave',
  OnlineJoin = 'consumer_online_join',
  OnlineUsers = 'consumer_online_users',
  PollAnswer = 'consumer_poll_answer',
  PollGet = 'consumer_poll_get',
  PollQuestion = 'consumer_poll_question',
  QuestionCreate = 'consumer_question_create',
  RtmpGet = 'consumer_rtmp_get',
  WebrtcRead = 'consumer_webrtc_read',
  WebrtcStart = 'consumer_webrtc_start',
  WebrtcIncoming = 'consumer_webrtc_incoming',
  NoticeGet = 'consumer_notice_get',
  NoticeReceive = 'consumer_notice_receive',
  NoticeRead = 'consumer_notice_read',
}

export type Topics = {
  Authorization: AuthorizationTopic,
  AdminTopic: AdminTopic,
  ClientTopic: ClientTopic,
  ConsumerTopic: ConsumerTopic,
}
