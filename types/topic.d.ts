/* admin events */
export type AdminTopics =
'admin_organisation_create'
  | 'admin_organisation_update'
  | 'admin_organisation_read'
  | 'admin_event_create'
  | 'admin_event_update'
  | 'admin_event_read'
  | 'admin_itinerary_create'
  | 'admin_itinerary_update'
  | 'admin_itinerary_read'
  | 'admin_item_create'
  | 'admin_item_update'
  | 'admin_item_read'

/* client events */
export type ClientTopics =
'client_rtmp_get'
  | 'client_rtmp_activate'
  | 'client_chat_ban'
  | 'client_chat_activate'
  | 'client_poll_listener'

/* consumer events */
export type CosumerTopics =
'consumer_event_get'
  | 'consumer_itinerary_get'
  | 'consumer_chat_get'
  | 'consumer_chat_send'
  | 'consumer_chat_start'
  | 'consumer_rtmp_get'
  | 'consumer_poll_get'
  | 'consumer_poll_answer'
  | 'Send';

export type AuthorizationTopics = 'authorized' | 'unauthorized' | 'mfa' | 'connect';

export type EmitTopic = AdminTopics & ClientTopics & AuthorizationTopics