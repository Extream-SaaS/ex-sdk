import SubscriptionManager from '../subscription-manager'
import { ConsumerTopic } from '../topic'
import { InitialResponse, promiseTimeout, TimeStamp } from '../utils'

export enum PollType {
  Timed = 'Timed',
  Immediate = 'Immediate'
}

export interface AnswerResponse {
  id: string
  order: number
  text: string
}

export interface QuestionResponse {
  time?: TimeStamp
  question: string
  id: string
  order: number
  answers: AnswerResponse[]
}

export interface GetPollResponsePayload {
  type: PollType
  questions: QuestionResponse []
}

export interface GetPollResponse {
  payload: GetPollResponsePayload
}

export interface AnswerPollsResponse {
  payload: any
}

export interface PollListenerResponse {
  payload: any
}

export interface QuestionAnswerData {
  question: string;
  answer: string;
}

export class Question {
  private socket: SocketIOClient.Socket
  public id: string
  public answers: AnswerResponse[]

  constructor (socket: SocketIOClient.Socket, id: string, data: QuestionResponse) {
    this.socket = socket
    this.id = id
    this.answers = data.answers
  }

  answer (data: QuestionAnswerData): Promise<void> {
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
        id: this.id,
        data
      })
    })).finally(() => {
      this.socket.removeListener(ConsumerTopic.PollAnswer, callback)
    })
  }
}

export class Poll {
  private socket: SocketIOClient.Socket;
  private subscriptionManager: SubscriptionManager;
  public id: string;
  public questions: Question[] = []
  public type: PollType | null = null

  /**
   *
   */
  constructor (socket: SocketIOClient.Socket, id: string) {
    this.socket = socket
    this.subscriptionManager = new SubscriptionManager(this.socket)
    this.id = id
  }

  // listen (): void {
  // // TODO add question? Or update question answers? Need to see repsonse.
  // this.subscriptionManager.addSubscription(ClientTopic.PollListener, () => {
  // })
  // }

  // listenForQuestions (): void {
  //   // TODO add question? Or update question answers? Need to see repsonse.
  //   this.subscriptionManager.addSubscription(ClientTopic.PollListener, () => {

  //   })
  // }

  static sortByOrder (a: QuestionResponse, b: QuestionResponse) {
    return a.order - b.order
  }

  get (): Promise<void> {
    let callback: (resp: InitialResponse | GetPollResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: InitialResponse | GetPollResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          this.type = resp.payload.type
          if (this.type !== PollType.Immediate) {
            const responseQuestions = [...resp.payload.questions].sort(Poll.sortByOrder)
            const questions = responseQuestions.map((q) => new Question(this.socket, q.id, q))
            this.questions = questions
          }
          resolve()
        }
      }
      this.socket.on(ConsumerTopic.PollGet, callback)
      this.socket.emit(ConsumerTopic.PollGet, {
        id: this.id
      })
    })).finally(() => {
      this.socket.removeListener(ConsumerTopic.PollGet, callback)
    })
  }

  destroy (): void {
    this.subscriptionManager.removeAllSubscriptions()
  }
}
