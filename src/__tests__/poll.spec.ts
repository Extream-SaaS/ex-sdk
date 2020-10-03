import { Poll, PollType } from '../itinerary-item'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MockedSocket from 'socket.io-mock'
import sinon from 'sinon'
import { ClientTopic, ConsumerTopic } from '../topic'

const initialResponse = {
  messageId: '1529023143077761',
  status: 202,
  topic: 'ex-itinerary'
}

const pollId = 'id'

const payload = {
  type: PollType.Timed,
  questions: [
    {
      question: 'Donde esta la biblioteca?',
      id: 'question_id',
      order: 1,
      answers: [
        {
          id: 'answer_id_1',
          order: 1,
          text: 'me llamo t bone la araña discoteca'
        },
        {
          id: 'answer_id_2',
          order: 2,
          text: 'discoteca. Discoteca, muñeca, La biblioteca Está en'
        }
      ]
    }
  ]
}

const mockUser = {
  email: 'foo@bar.com',
  id: '1',
  token: 'token',
  user_type: 'audience',
  username: 'baz'
}

const pollResponse = {
  action: 'chat',
  command: 'get',
  domain: 'consumer',
  socketId: 'socketId',
  payload,
  user: mockUser
}

const addQuestionResponse = {
  id: 'id',
  data: {
    question: 'Where is the moon?',
    id: 'question_id',
    order: 1,
    answers: [
      {
        id: 'answer_id',
        order: 1,
        text: 'way up high'
      }
    ]
  }
}

const pollResponses = {
  id: 'id',
  data: {
    id: 'question_id',
    responses: {
      answer_id_1: 4,
      answer_id_2: 2
    }
  }
}

describe('Poll', () => {
  let poll: Poll
  let socket: MockedSocket
  let emit: sinon.SinonStub

  beforeEach(() => {
    socket = new MockedSocket()
    emit = sinon.stub()
    socket.emit = emit
    poll = new Poll(socket, pollId)
  })

  afterEach(() => {
    poll.destroy()
    if (socket._callbacks) {
      const nonCleanedUpListeners = Object
        .values(socket._callbacks as (...args: any[]) => void[])
        .reduce((acc: number, cur: (...args: any[]) => void[]) => acc + cur.length, 0)
      if (nonCleanedUpListeners) {
        throw new Error('Socket listeners were not cleaned up between tests')
      }
    }
  })

  it('creates a questions for the poll and sets poll type', async () => {
    const get = poll.get()
    socket.socketClient.emit(ConsumerTopic.PollGet, initialResponse)
    socket.socketClient.emit(ConsumerTopic.PollGet, pollResponse)
    await get
    expect(poll.questions[0].id).toEqual('question_id')
    expect(poll.questions[0].answers).toStrictEqual([
      {
        id: 'answer_id_1',
        order: 1,
        text: 'me llamo t bone la araña discoteca'
      },
      {
        id: 'answer_id_2',
        order: 2,
        text: 'discoteca. Discoteca, muñeca, La biblioteca Está en'
      }
    ])
    expect(poll.type).toEqual(PollType.Timed)
  })

  it('rejects if there is an error in the response', async () => {
    const get = poll.get()
    socket.socketClient.emit(ConsumerTopic.PollGet, {
      error: 'foo',
      ...initialResponse
    })
    try {
      await get
      expect(false).toBe(true)
    } catch (e) {
      expect(e.message).toBe('foo')
    }
  })

  it('does not set questions if format is immediate', async () => {
    const get = poll.get()
    socket.socketClient.emit(ConsumerTopic.PollGet, initialResponse)
    socket.socketClient.emit(ConsumerTopic.PollGet, {
      ...pollResponse,
      payload: {
        ...payload,
        type: PollType.Immediate
      }
    })
    await get
    expect(poll.questions.length).toEqual(0)
    expect(poll.type).toEqual(PollType.Immediate)
  })

  it('orders the questions that are received initially', async () => {
    const get = poll.get()
    socket.socketClient.emit(ConsumerTopic.PollGet, initialResponse)
    socket.socketClient.emit(ConsumerTopic.PollGet, {
      ...pollResponse,
      payload: {
        ...payload,
        questions: [
          {
            question: 'Donde esta la biblioteca?',
            id: 'question_id_3',
            order: 3,
            answers: []
          },
          {
            question: 'Donde esta la biblioteca?',
            id: 'question_id_1',
            order: 1,
            answers: []
          },
          {
            question: 'Donde esta la biblioteca?',
            id: 'question_id_2',
            order: 2,
            answers: []
          }
        ]
      }
    })
    await get
    expect(poll.questions[0].id).toEqual('question_id_1')
    expect(poll.questions[1].id).toEqual('question_id_2')
    expect(poll.questions[2].id).toEqual('question_id_3')
  })

  it('orders the answers of questions', async () => {
    const get = poll.get()
    socket.socketClient.emit(ConsumerTopic.PollGet, initialResponse)
    socket.socketClient.emit(ConsumerTopic.PollGet, {
      ...pollResponse,
      payload: {
        ...payload,
        questions: [
          {
            question: 'Donde esta la biblioteca?',
            id: 'question_id',
            order: 3,
            answers: [
              {
                id: 'answer_id_3',
                order: 3,
                text: 'me llamo t bone la araña discoteca'
              },
              {
                id: 'answer_id_1',
                order: 1,
                text: 'discoteca. Discoteca, muñeca, La biblioteca Está en'
              },
              {
                id: 'answer_id_2',
                order: 2,
                text: 'discoteca. Discoteca, muñeca, La biblioteca Está en'
              }
            ]
          }
        ]
      }
    })
    await get
    expect(poll.questions[0].answers).toStrictEqual([
      {
        id: 'answer_id_1',
        order: 1,
        text: 'discoteca. Discoteca, muñeca, La biblioteca Está en'
      },
      {
        id: 'answer_id_2',
        order: 2,
        text: 'discoteca. Discoteca, muñeca, La biblioteca Está en'
      },
      {
        id: 'answer_id_3',
        order: 3,
        text: 'me llamo t bone la araña discoteca'
      }
    ])
  })

  it('allows questions to be streamed in', async () => {
    const get = poll.get()
    socket.socketClient.emit(ConsumerTopic.PollGet, initialResponse)
    socket.socketClient.emit(ConsumerTopic.PollGet, {
      ...pollResponse,
      payload: {
        ...payload,
        type: PollType.Immediate,
        questions: []
      }
    })
    await get
    socket.socketClient.emit(ConsumerTopic.PollQuestion, addQuestionResponse)
    expect(poll.questions[0].id).toEqual('question_id')
    expect(poll.questions[0].answers).toStrictEqual([{
      id: 'answer_id',
      order: 1,
      text: 'way up high'
    }])
  })

  it('ignores a question streamed in for a different poll', async () => {
    const get = poll.get()
    socket.socketClient.emit(ConsumerTopic.PollGet, initialResponse)
    socket.socketClient.emit(ConsumerTopic.PollGet, {
      ...pollResponse,
      payload: {
        ...payload,
        type: PollType.Immediate,
        questions: []
      }
    })
    await get
    socket.socketClient.emit(ConsumerTopic.PollQuestion, {
      ...addQuestionResponse,
      id: 'foo'
    })
    expect(poll.questions.length).toEqual(0)
  })

  it('listens for responses', async () => {
    const get = poll.get()
    socket.socketClient.emit(ConsumerTopic.PollGet, initialResponse)
    socket.socketClient.emit(ConsumerTopic.PollGet, pollResponse)
    await get
    socket.socketClient.emit(ClientTopic.PollListener, pollResponses)
    expect(poll.questions[0].responses).toStrictEqual({
      answer_id_1: 4,
      answer_id_2: 2
    })
  })

  it('ignores responses for different polls', async () => {
    const get = poll.get()
    socket.socketClient.emit(ConsumerTopic.PollGet, initialResponse)
    socket.socketClient.emit(ConsumerTopic.PollGet, pollResponse)
    await get
    socket.socketClient.emit(ClientTopic.PollListener, {
      ...pollResponses,
      id: 'foo'
    })
    expect(poll.questions[0].responses).toStrictEqual({
      answer_id_1: 0,
      answer_id_2: 0
    })
  })

  it('throws an error if question cannot be found', async () => {
    try {
      const get = poll.get()
      socket.socketClient.emit(ConsumerTopic.PollGet, initialResponse)
      socket.socketClient.emit(ConsumerTopic.PollGet, pollResponse)
      await get
      socket.socketClient.emit(ClientTopic.PollListener, {
        ...pollResponses,
        data: {
          id: 'foo',
          responses: {
            answer_id_1: 4,
            answer_id_2: 2
          }
        }
      })
      expect(false).toBe(true)
    } catch (e) {
      expect(e.message).toBe('Could not find question with id: foo')
    }
  })

  it('allows users to awnser questions', async () => {
    const get = poll.get()
    socket.socketClient.emit(ConsumerTopic.PollGet, initialResponse)
    socket.socketClient.emit(ConsumerTopic.PollGet, pollResponse)
    await get
    const sendPromise = poll.answer('question_id', 'answer_id')
    expect(emit.calledTwice).toBeTruthy()
    expect(emit.secondCall.args).toStrictEqual([
      'consumer_poll_answer',
      {
        answer: 'answer_id',
        question: 'question_id'
      }
    ])
    socket.socketClient.emit(ConsumerTopic.PollAnswer, initialResponse)
    socket.socketClient.emit(ConsumerTopic.PollAnswer, {})
    await sendPromise
  })

  it('throws if question cannot be found', async () => {
    const get = poll.get()
    socket.socketClient.emit(ConsumerTopic.PollGet, initialResponse)
    socket.socketClient.emit(ConsumerTopic.PollGet, pollResponse)
    await get
    try {
      await poll.answer('foo', 'answer_id')
      expect(false).toBe(true)
    } catch (e) {
      expect(e.message).toBe('Could not find question with id: foo')
    }
  })

  it('throws if there is an error answering a question', async () => {
    const get = poll.get()
    socket.socketClient.emit(ConsumerTopic.PollGet, initialResponse)
    socket.socketClient.emit(ConsumerTopic.PollGet, pollResponse)
    await get
    const sendPromise = poll.answer('question_id', 'answer_id')
    expect(emit.calledTwice).toBeTruthy()
    expect(emit.secondCall.args).toStrictEqual([
      'consumer_poll_answer',
      {
        answer: 'answer_id',
        question: 'question_id'
      }
    ])
    socket.socketClient.emit(ConsumerTopic.PollAnswer, { error: 'foo' })
    try {
      await sendPromise
      expect(false).toBe(true)
    } catch (e) {
      expect(e.message).toBe('foo')
    }
  })
})
