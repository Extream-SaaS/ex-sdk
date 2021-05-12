import { Chat } from '../consumer'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MockedSocket from 'socket.io-mock'
import { ClientTopic, ConsumerTopic } from '../topic'
import sinon from 'sinon'

const mockNow = Date.now()
const correlationId = `${mockNow}-${ConsumerTopic.ChatGet}-roomId`

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
    moderators: ['c4930666-2b78-473c-ad60-f0f8023ee554'],
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
  let emit: sinon.SinonStub
  beforeEach(() => {
    socket = new MockedSocket()
    emit = sinon.stub()
    socket.emit = emit
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
    const joinPromise = chat.join(mockNow)
    socket.socketClient.emit(correlationId, initialResponse)
    socket.socketClient.emit(correlationId, chatResponse)
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
    const joinPromise = chat.join(mockNow)
    socket.socketClient.emit(correlationId, initialResponse)
    socket.socketClient.emit(correlationId, response)
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
    const joinPromise = chat.join(mockNow)
    socket.socketClient.emit(correlationId, initialResponse)
    socket.socketClient.emit(correlationId, response)
    await joinPromise

    expect(chat.messages[0].uuid).toBe('id3')
    expect(chat.messages[1].uuid).toBe('id1')
    expect(chat.messages[2].uuid).toBe('id2')
  })

  test('adds a message if streamed in', async () => {
    const joinPromise = chat.join(mockNow)
    socket.socketClient.emit(correlationId, initialResponse)
    socket.socketClient.emit(correlationId, chatResponse)
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
    const joinPromise = chat.join(mockNow)
    socket.socketClient.emit(correlationId, initialResponse)
    socket.socketClient.emit(correlationId, chatResponse)
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
    const joinPromise = chat.join(mockNow)
    socket.socketClient.emit(correlationId, initialResponse)
    socket.socketClient.emit(correlationId, chatResponse)
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
    const joinPromise = chat.join(mockNow)
    socket.socketClient.emit(correlationId, initialResponse)
    socket.socketClient.emit(correlationId, response)
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
    const joinPromise = chat.join(mockNow)
    socket.socketClient.emit(correlationId, initialResponse)
    socket.socketClient.emit(correlationId, {
      ...chatResponse,
      payload: {
        ...payload,
        id: 'not the right room id'
      }
    })
    socket.socketClient.emit(correlationId, {
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
    const joinPromise = chat.join(mockNow)
    socket.socketClient.emit(correlationId, initialResponse)
    socket.socketClient.emit(correlationId, chatResponse)
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
    const joinPromise = chat.join(mockNow)
    socket.socketClient.emit(correlationId, initialResponse)
    socket.socketClient.emit(correlationId, chatResponse)
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
    const joinPromise = chat.join(mockNow)
    socket.socketClient.emit(correlationId, initialResponse)
    socket.socketClient.emit(correlationId, {
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
    const send = emit.getCalls().find(({ args }) => args[0] === ConsumerTopic.ChatSend)
    expect(send?.args).toStrictEqual([
      'consumer_chat_send',
      {
        id: 'roomId',
        data: {
          instance: undefined,
          message: 'abc'
        }
      }
    ])
  })

  test('throws error if message could not be sent', async () => {
    const joinPromise = chat.join(mockNow)
    socket.socketClient.emit(correlationId, initialResponse)
    socket.socketClient.emit(correlationId, {
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

  it('allows users to reply to a message', async () => {
    const joinPromise = chat.join(mockNow)
    socket.socketClient.emit(correlationId, initialResponse)
    socket.socketClient.emit(correlationId, chatResponse)
    await joinPromise
    const promise = chat.replyToMessage({
      message: 'abc',
      private: false,
      parent: 'id1'
    })
    socket.socketClient.emit(ConsumerTopic.ChatSend, initialResponse)
    socket.socketClient.emit(ConsumerTopic.ChatSend, {})
    await promise
    const send = emit.getCalls().find(({ args }) => args[0] === ConsumerTopic.ChatSend)
    expect(send?.args).toStrictEqual([
      'consumer_chat_send',
      {
        id: 'roomId',
        data: {
          instance: undefined,
          message: 'abc',
          parent: 'id1',
          private: false
        }
      }
    ])
  })

  it('throws error if chat could not be joined', async () => {
    const joinPromise = chat.join(mockNow)
    socket.socketClient.emit(correlationId, { error: 'Wut' })
    try {
      await joinPromise
    } catch (e) {
      expect(e.message).toBe('Wut')
    }
  })

  it('allows users to remove a message', async () => {
    const joinPromise = chat.join(mockNow)
    socket.socketClient.emit(correlationId, initialResponse)
    socket.socketClient.emit(correlationId, chatResponse)
    await joinPromise
    chat.removeMessage({
      uuid: 'id1'
    })
    const send = emit.getCalls().find(({ args }) => args[0] === ClientTopic.ChatBan)
    expect(send?.args).toStrictEqual([
      'client_chat_ban',
      {
        id: 'roomId',
        data: {
          uuid: 'id1'
        }
      }
    ])
  })

  test('it sets the messages when chat get is responded', async () => {
    const startPromise = chat.start()
    socket.socketClient.emit(ConsumerTopic.ChatStart, initialResponse)
    socket.socketClient.emit(ConsumerTopic.ChatStart, {
      payload: {
        id: 'roomId',
        data: {
          instance: 'foo'
        }
      }
    })
    await startPromise

    expect(chat.instance).toEqual('foo')
    expect(chat.messages).toStrictEqual([])
  })

  test('it ignores the start responses for other rooms', async () => {
    const startPromise = chat.start()
    socket.socketClient.emit(ConsumerTopic.ChatStart, initialResponse)
    socket.socketClient.emit(ConsumerTopic.ChatStart, {
      payload: {
        id: 'bar',
        data: {
          instance: 'foo'
        }
      }
    })
    socket.socketClient.emit(ConsumerTopic.ChatStart, {
      payload: {
        id: 'roomId',
        data: {
          instance: 'baz'
        }
      }
    })
    await startPromise

    expect(chat.instance).toBe('baz')
  })

  test('it throws an error if there is an error in the response', async () => {
    const startPromise = chat.start()
    socket.socketClient.emit(ConsumerTopic.ChatStart, { error: 'foo' })
    try {
      await startPromise
    } catch (e) {
      expect(e.message).toBe('foo')
    }
  })
})
