import { ConsumerTopic } from '../topic'
import { InitialResponse, promiseTimeout, TimeStamp } from '../utils'

export interface AnswerResponse {
  id: string
  order: number
  text: string
}

export interface AnswerPollsResponse {
  payload: any
}

export interface QuestionResponse {
  time?: TimeStamp
  question: string
  id: string
  order: number
  answers: { [id: string]: AnswerResponse }
}

export class Question {
  private socket: SocketIOClient.Socket
  public id: string
  public answers: AnswerResponse[]
  public responses: { [key: string]: number }

  constructor (socket: SocketIOClient.Socket, id: string, data: QuestionResponse) {
    this.socket = socket
    this.id = id
    this.answers = [...Object.values(data.answers)].sort(Question.sortByOrder)
    // TODO do we get the initial responses from the server or not?
    this.responses = this.answers.reduce((acc: Record<string, number>, cur: AnswerResponse) => {
      acc[cur.id] = 0
      return acc
    }, {})
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
        } else if (!('status' in resp)) {
          resolve()
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
