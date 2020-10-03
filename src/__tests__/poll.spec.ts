import { Poll, PollType } from '../itinerary-item'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MockedSocket from 'socket.io-mock'
import sinon from 'sinon'
import { ConsumerTopic } from '../topic'

const initialResponse = {
  messageId: '1529023143077761',
  status: 202,
  topic: 'ex-itinerary'
}

const pollId = 'id'

const payload = {
  type: PollType.Immediate,
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

// const addQuestionResponse = {
//   id: 'poll_id',
//   data: {
//     question: 'Where is the moon?',
//     id: 'question_id',
//     order: 1,
//     answers: [
//       {
//         id: 'answer_id',
//         order: 1,
//         text: 'way up high'
//       }
//     ]
//   }
// }

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
        text: 'discoteca. Discoteca, muñeca, La biblioteca Está en' }
    ])
    expect(poll.type).toEqual(PollType.Immediate)
  })
})
