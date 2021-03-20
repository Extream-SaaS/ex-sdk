import { Consumer } from '../consumer'
import { ExtreamClient } from '../extream-client'
import * as exSdk from '../index'
import { Itinerary } from '../itinerary'
import { Chat, ItineraryType, Poll, PollType, Rtmp } from '../itinerary-item'
import { AuthorizationTopic, AdminTopic, ClientTopic, ConsumerTopic } from '../topic'
import { UserType } from '../user'

describe('Index', () => {
  it('exports extream client as default', () => {
    expect(exSdk.default).toEqual(ExtreamClient)
  })

  it('exports other classes as named exports', () => {
    expect(exSdk.Chat).toEqual(Chat)
    expect(exSdk.PollType).toEqual(PollType)
    expect(exSdk.Poll).toEqual(Poll)
    expect(exSdk.Rtmp).toEqual(Rtmp)
    expect(exSdk.Consumer).toEqual(Consumer)
    expect(exSdk.ItineraryType).toEqual(ItineraryType)
    expect(exSdk.Itinerary).toEqual(Itinerary)
    expect(exSdk.AuthorizationTopic).toEqual(AuthorizationTopic)
    expect(exSdk.AdminTopic).toEqual(AdminTopic)
    expect(exSdk.ClientTopic).toEqual(ClientTopic)
    expect(exSdk.ConsumerTopic).toEqual(ConsumerTopic)
    expect(exSdk.UserType).toEqual(UserType)
  })
})
