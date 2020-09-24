import { Chat } from '../chat'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MockedSocket from 'socket.io-mock'
import { ConsumerTopic } from '../topic'

const initialResponse = {
  messageId: '1529023143077761',
  status: 202,
  topic: 'ex-discussion'
}

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
  uuid: 'id1'
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
  let socket: MockedSocket
  let chat: Chat
  beforeEach(() => {
    socket = new MockedSocket()
    chat = new Chat(socket, 'roomId')
  })

  afterEach(() => {
    chat.destroy()
    const nonCleanedUpListeners = Object
      .values(socket._callbacks as (...args: any[]) => void[])
      .reduce((acc: number, cur: (...args: any[]) => void[]) => acc + cur.length, 0)
    if (nonCleanedUpListeners) {
      throw new Error('Socket listeners were not cleaned up between tests')
    }
  })

  test('it sets the messages when chat get is responded', async () => {
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
        uuid: 'id1',
        children: [],
        removed: false
      }
    ])
  })

  test('it groups child messages into parent', async () => {
    const messages = {
      id1: message,
      id2: {
        ...message,
        uuid: 'id2',
        parent: message.uuid
      },
      id3: {
        ...message,
        uuid: 'id3',
        parent: message.uuid
      },
      id4: {
        ...message,
        uuid: 'id4'
      },
      id5: {
        ...message,
        uuid: 'id5',
        parent: 'id4'
      }
    }
    const response = {
      ...chatResponse,
      payload: {
        ...payload,
        messages
      }
    }
    const joinPromise = chat.join()
    socket.socketClient.emit(ConsumerTopic.ChatGet, initialResponse)
    socket.socketClient.emit(ConsumerTopic.ChatGet, response)
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
        uuid: 'id1',
        children: [
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
            uuid: 'id2',
            parent: 'id1'
          },
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
            uuid: 'id3',
            parent: 'id1'
          }
        ],
        removed: false
      },
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
        uuid: 'id4',
        children: [
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
            uuid: 'id5',
            parent: 'id4'
          }
        ],
        removed: false
      }
    ])
  })

  test('it sorts messages by date they were sent', async () => {
    const messages = {
      id1: message,
      id2: {
        ...message,
        uuid: 'id2',
        sent: new Date().toISOString()
      },
      id3: {
        ...message,
        uuid: 'id3',
        sent: new Date(0).toISOString()
      }
    }
    const response = {
      ...chatResponse,
      payload: {
        ...payload,
        messages
      }
    }
    const joinPromise = chat.join()
    socket.socketClient.emit(ConsumerTopic.ChatGet, initialResponse)
    socket.socketClient.emit(ConsumerTopic.ChatGet, response)
    await joinPromise

    expect(chat.messages[0].uuid).toBe('id3')
    expect(chat.messages[1].uuid).toBe('id1')
    expect(chat.messages[2].uuid).toBe('id2')
  })

  test('adds a message if streamed in', async () => {
    const joinPromise = chat.join()
    socket.socketClient.emit(ConsumerTopic.ChatGet, initialResponse)
    socket.socketClient.emit(ConsumerTopic.ChatGet, chatResponse)
    await joinPromise
    socket.socketClient.emit(ConsumerTopic.ChatReceive, {
      from: mockUser,
      id: 'roomId',
      message: 'Next message',
      sent: '2020-09-24T19:54:05.940Z',
      uuid: 'id4'
    })

    expect(chat.messages).toStrictEqual([{
      from: {
        email: 'foo@bar.com',
        id: '1',
        token: 'token',
        user_type: 'audience',
        username: 'baz'
      },
      message: 'Some text',
      sent: '2020-09-23T00:00:17.047Z',
      uuid: 'id1',
      children: [],
      removed: false
    },
    {
      from: {
        email: 'foo@bar.com',
        id: '1',
        token: 'token',
        user_type: 'audience',
        username: 'baz'
      },
      id: 'roomId',
      message: 'Next message',
      sent: '2020-09-24T19:54:05.940Z',
      uuid: 'id4',
      children: [],
      removed: false
    }])
  })

  test('adds a child message if streamed in', async () => {
    const joinPromise = chat.join()
    socket.socketClient.emit(ConsumerTopic.ChatGet, initialResponse)
    socket.socketClient.emit(ConsumerTopic.ChatGet, chatResponse)
    await joinPromise
    socket.socketClient.emit(ConsumerTopic.ChatReceive, {
      from: mockUser,
      id: 'roomId',
      message: 'Next message',
      parent: 'id1',
      sent: '2020-09-24T19:54:05.940Z',
      uuid: 'id4'
    })

    expect(chat.messages).toStrictEqual([{
      from: {
        email: 'foo@bar.com',
        id: '1',
        token: 'token',
        user_type: 'audience',
        username: 'baz'
      },
      message: 'Some text',
      sent: '2020-09-23T00:00:17.047Z',
      uuid: 'id1',
      children: [
        {
          from: {
            email: 'foo@bar.com',
            id: '1',
            token: 'token',
            user_type: 'audience',
            username: 'baz'
          },
          id: 'roomId',
          message: 'Next message',
          parent: 'id1',
          sent: '2020-09-24T19:54:05.940Z',
          uuid: 'id4',
          removed: false
        }
      ],
      removed: false
    }])
  })

  test('removes a message if streamed in', async () => {
    const joinPromise = chat.join()
    socket.socketClient.emit(ConsumerTopic.ChatGet, initialResponse)
    socket.socketClient.emit(ConsumerTopic.ChatGet, chatResponse)
    await joinPromise
    socket.socketClient.emit(ConsumerTopic.ChatRemove, {
      id: 'roomId',
      uuid: 'id1'
    })

    expect(chat.messages).toStrictEqual([{
      from: {
        email: 'foo@bar.com',
        id: '1',
        token: 'token',
        user_type: 'audience',
        username: 'baz'
      },
      message: 'Some text',
      sent: '2020-09-23T00:00:17.047Z',
      uuid: 'id1',
      children: [],
      removed: true
    }])
  })

  test('removes a child message if streamed in', async () => {
    const messages = {
      id1: message,
      id2: {
        ...message,
        uuid: 'id2',
        parent: message.uuid
      }
    }
    const response = {
      ...chatResponse,
      payload: {
        ...payload,
        messages
      }
    }
    const joinPromise = chat.join()
    socket.socketClient.emit(ConsumerTopic.ChatGet, initialResponse)
    socket.socketClient.emit(ConsumerTopic.ChatGet, response)
    await joinPromise
    socket.socketClient.emit(ConsumerTopic.ChatRemove, {
      id: 'roomId',
      uuid: 'id2',
      parent: 'id1'
    })

    expect(chat.messages).toStrictEqual([{
      from: {
        email: 'foo@bar.com',
        id: '1',
        token: 'token',
        user_type: 'audience',
        username: 'baz'
      },
      message: 'Some text',
      sent: '2020-09-23T00:00:17.047Z',
      uuid: 'id1',
      children: [
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
          uuid: 'id2',
          parent: 'id1',
          removed: true
        }
      ],
      removed: false
    }])
  })

  test('does not resolve if the get message is not the same as the room id', async () => {
    const joinPromise = chat.join()
    socket.socketClient.emit(ConsumerTopic.ChatGet, initialResponse)
    socket.socketClient.emit(ConsumerTopic.ChatGet, {
      ...chatResponse,
      payload: {
        ...payload,
        id: 'not the right room id'
      }
    })
    socket.socketClient.emit(ConsumerTopic.ChatGet, {
      ...chatResponse,
      payload: {
        ...payload,
        messages: {}
      }
    })
    await joinPromise

    expect(chat.messages).toStrictEqual([])
  })

  test('does not add the message if the room id is different', async () => {
    const joinPromise = chat.join()
    socket.socketClient.emit(ConsumerTopic.ChatGet, initialResponse)
    socket.socketClient.emit(ConsumerTopic.ChatGet, chatResponse)
    await joinPromise
    socket.socketClient.emit(ConsumerTopic.ChatReceive, {
      from: mockUser,
      id: 'wrong room id',
      message: 'Next message',
      sent: '2020-09-24T19:54:05.940Z',
      uuid: 'id4'
    })

    expect(chat.messages).toStrictEqual([{
      from: {
        email: 'foo@bar.com',
        id: '1',
        token: 'token',
        user_type: 'audience',
        username: 'baz'
      },
      message: 'Some text',
      sent: '2020-09-23T00:00:17.047Z',
      uuid: 'id1',
      children: [],
      removed: false
    }])
  })

  test('does not remove the message if the room id is different', async () => {
    const joinPromise = chat.join()
    socket.socketClient.emit(ConsumerTopic.ChatGet, initialResponse)
    socket.socketClient.emit(ConsumerTopic.ChatGet, chatResponse)
    await joinPromise
    socket.socketClient.emit(ConsumerTopic.ChatRemove, {
      id: 'wrong room id',
      uuid: 'id1'
    })

    expect(chat.messages).toStrictEqual([{
      from: {
        email: 'foo@bar.com',
        id: '1',
        token: 'token',
        user_type: 'audience',
        username: 'baz'
      },
      message: 'Some text',
      sent: '2020-09-23T00:00:17.047Z',
      uuid: 'id1',
      children: [],
      removed: false
    }])
  })

  test('allows users to send a message', async () => {
    const joinPromise = chat.join()
    socket.socketClient.emit(ConsumerTopic.ChatGet, initialResponse)
    socket.socketClient.emit(ConsumerTopic.ChatGet, {
      ...chatResponse,
      payload: {
        ...payload,
        messages: {}
      }
    })
    await joinPromise
    const promise = chat.sendMessage({
      message: 'abc'
    })
    socket.socketClient.emit(ConsumerTopic.ChatSend, initialResponse)
    socket.socketClient.emit(ConsumerTopic.ChatSend, {})
    await promise
    expect(chat.messages).toStrictEqual([])
  })

  test('throws error if message could not be sent', async () => {
    const joinPromise = chat.join()
    socket.socketClient.emit(ConsumerTopic.ChatGet, initialResponse)
    socket.socketClient.emit(ConsumerTopic.ChatGet, {
      ...chatResponse,
      payload: {
        ...payload,
        messages: {}
      }
    })
    await joinPromise
    const promise = chat.sendMessage({
      message: 'abc'
    })
    socket.socketClient.emit(ConsumerTopic.ChatSend, {
      error: 'Things went wrong'
    })
    try {
      await promise
      expect(false).toBeTruthy()
    } catch (e) {
      expect(e.message).toBe('Things went wrong')
    }
  })
})
