import SubscriptionManager from '../subscription-manager'
import { ClientTopic, ConsumerTopic } from '../topic'
import { InitialResponse, promiseTimeout } from '../utils'

export interface GetPollsResponse {
  payload: any
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

export enum QuestionType {
  Timed = 'Timed',
  Immediate = 'Immediate'
}

export class Question {
  private socket: SocketIOClient.Socket
  public type: QuestionType
  public data: any
  public id: string

  constructor (socket: SocketIOClient.Socket, type: QuestionType, id: string) {
    this.socket = socket
    this.type = type
    this.id = id
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

  /**
   *
   */
  constructor (socket: SocketIOClient.Socket, id: string) {
    this.socket = socket
    this.subscriptionManager = new SubscriptionManager(this.socket)
    this.id = id
  }

  listen (): void {
    // TODO add question? Or update question answers? Need to see repsonse.
    // this.subscriptionManager.addSubscription(ClientTopic.PollListener, () => {

    // })
  }

  get (): Promise<void> {
    let callback: (resp: InitialResponse | GetPollsResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: InitialResponse | GetPollsResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          // TODO create a question instance per response
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
