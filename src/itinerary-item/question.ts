import { ConsumerTopic } from '../topic'
import { InitialResponse, promiseTimeout, TimeStamp } from '../utils'

export interface AnswerResponse {
  id: string
  order: number
  text: string
}

export interface AnswerPollsResponse {
  error?: string
  payload: {
    id: string
    data: {
      id: string
      responses: { [key: string]: number }
    }
  }
}

export interface QuestionResponse {
  timeToLive: number
  question: string
  id: string
  order: number
  answers: { [id: string]: AnswerResponse }
  responses: {
    [id: string]: {
      id: string
      responses: number
      respondants: string[]
    }
  }
}

export class Question {
  private socket: SocketIOClient.Socket
  public id: string
  public answers: AnswerResponse[]
  public responses: { [key: string]: number }
  public question: string
  public timeToLive: number
  public timeAdded: number

  constructor (socket: SocketIOClient.Socket, id: string, data: QuestionResponse) {
    this.socket = socket
    this.id = id
    this.question = data.question
    this.answers = [...Object.values(data.answers)].sort(Question.sortByOrder)
    this.responses = Object.values(data.responses).reduce((acc: { [key: string]: number }, cur) => {
      acc[cur.id] = cur.responses
      return acc
    }, {})
    this.timeToLive = data.timeToLive || 5
    this.timeAdded = Date.now()
  }

  static sortByOrder (a: AnswerResponse, b: AnswerResponse): number {
    return a.order - b.order
  }

  setResponses (responses: { [key: string]: number }): void {
    this.responses = responses
  }

  answer (answer: string, poll: string): Promise<void> {
    let callback: (resp: InitialResponse | AnswerPollsResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: InitialResponse | AnswerPollsResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp) && resp.payload) {
          if (resp.payload.data.id === this.id) {
            this.responses = { ...resp.payload.data.responses }
            resolve()
          }
        }
      }
      this.socket.on(ConsumerTopic.PollAnswer, callback)
      this.socket.emit(ConsumerTopic.PollAnswer, {
        id: poll,
        data: {
          answer,
          question: this.id
        }
      })
    })).finally(() => {
      this.socket.removeListener(ConsumerTopic.PollAnswer, callback)
    })
  }
}
