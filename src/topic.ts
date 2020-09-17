/* admin events */
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
  ItemCreate = 'admin_item_create',
  ItemUpdate = 'admin_item_update',
  ItemRead = 'admin_item_read',
}

/* client events */
export enum ClientTopic {
  RtmpGet = 'client_rtmp_get',
  RtmpActivate = 'client_rtmp_activate',
  ChatBan = 'client_chat_ban',
  ChatActivate = 'client_chat_activate',
  PollListener = 'client_poll_listener',
}

/* consumer events */
export enum ConsumerTopic {
  ChatGet = 'consumer_chat_get',
  ChatReceive = 'consumer_chat_receive',
  ChatRemove = 'consumer_chat_remove',
  ChatSend = 'consumer_chat_send',
  ChatStart = 'consumer_chat_start',
  EventGet = 'consumer_event_get',
  ItineraryGet = 'consumer_itinerary_get',
  PollGet = 'consumer_poll_get',
  PollAnswer = 'consumer_poll_answer',
  RtmpGet = 'consumer_rtmp_get',
}

/* authorization events */
export enum AuthorizationTopic {
  Authorized = 'authorized',
  Unauthorized = 'unauthorized',
  Mfa = 'mfa',
  Connect = 'connect',
}

// type ValueOf<T> = T[keyof T];

// export type ConsumerTopics = ValueOf<ConsumerTopic>;
// export type ClientTopics = keyof typeof ClientTopic;
// export type AdminTopics = keyof typeof AdminTopic;
// export type AuthorizationTopics = keyof typeof AuthorizationTopic;
