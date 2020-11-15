import { ConsumerTopic } from '../topic'
import { InitialResponse, promiseTimeout } from '../utils'

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
  timeToLive: string
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

/**
 * Represents a questions related to a specific poll.
 */
export class Question {
  private socket: SocketIOClient.Socket
  public id: string
  /**
   * List of all answers
   */
  public answers: AnswerResponse[]
  /**
   * Time for the question to show
   */
  public responses: { [key: string]: number }
  /**
   * Text of the question e.g. "What is your name?"
   */
  public question: string
  /**
   * Time for the question to show
   */
  public timeToLive: number
  /**
   * Time question was streamed in
   */
  public timeAdded: number

  constructor (socket: SocketIOClient.Socket, id: string, data: QuestionResponse) {
    this.socket = socket
    this.id = id
    this.question = data.question
    this.answers = [...Object.values(data.answers)].sort(Question.sortByOrder)
    this.responses = Object.values(data.responses || {}).reduce((acc: { [key: string]: number }, cur) => {
      acc[cur.id] = cur.responses
      return acc
    }, {})
    this.timeToLive = parseInt(data.timeToLive) || 60
    this.timeAdded = Date.now()
  }

  static sortByOrder (a: AnswerResponse, b: AnswerResponse): number {
    return a.order - b.order
  }

  /**
   * Set the responses of a question
   * @param { [key: string]: number } responses The responses for a question
   */
  setResponses (responses: { [key: string]: number }): void {
    this.responses = responses
  }

  /**
   * Answer this question
   * @param {string} answer The id of the answer you wish to give.
   * @param {string} poll The id of the poll this question is related to
   */
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
