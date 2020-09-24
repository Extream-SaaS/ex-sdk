import { Chat } from '../chat'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MockedSocket from 'socket.io-mock'
import { ConsumerTopic } from '../topic'
import { InitialResponse } from '../utils'

const initialResponse = {
  messageId: '1529023143077761',
  status: 202,
  topic: 'ex-discussion'
} as InitialResponse

const mockUser = {
  email: 'foo@bar.com',
  id: '1',
  token: 'token',
  user_type: 'audience',
  username: 'baz'
}

const message = {
  from: mockUser,
  message: 'Some text',
  sent: '2020-09-23T00:00:17.047Z',
  uuid: '2be3f790-d12a-49a3-858c-3ef63c3c7ed7'
}

const payload = {
  addedAt: {
    _seconds: 1600460885,
    _nanoseconds: 493000000
  },
  addedBy: 'c4930666-2b78-473c-ad60-f0f8023ee554',
  configuration: {
    threads: true,
    moderation: 'post-moderate',
    private: true
  },
  end_date: {
    _seconds: 1602615600,
    _nanoseconds: 0
  },
  id: 'roomId',
  itinerary: '62eb048e-4108-4a68-8fec-d452085a2440',
  messages: {
    id1: message
  },
  start_date: {
    _seconds: 1602576000,
    _nanoseconds: 0
  },
  title: 'Some chat',
  type: 'chat'
}

const chatResponse = {
  action: 'chat',
  command: 'get',
  domain: 'consumer',
  socketId: 'socketId',
  payload,
  user: mockUser
}

describe('Chat class', () => {
  test('it sets the messages when chat get is responded', async () => {
    const socket = new MockedSocket()
    const chat = new Chat(socket, 'roomId')

    const joinPromise = chat.join()
    socket.socketClient.emit(ConsumerTopic.ChatGet, initialResponse)
    socket.socketClient.emit(ConsumerTopic.ChatGet, chatResponse)
    await joinPromise

    expect(chat.messages).toStrictEqual([
      {
        from: {
          email: 'foo@bar.com',
          id: '1',
          token: 'token',
          user_type: 'audience',
          username: 'baz'
        },
        message: 'Some text',
        sent: '2020-09-23T00:00:17.047Z',
        uuid: '2be3f790-d12a-49a3-858c-3ef63c3c7ed7',
        children: [],
        removed: false
      }
    ])
  })
})
