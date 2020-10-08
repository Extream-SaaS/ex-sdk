import SubscriptionManager from '../subscription-manager'
import { ClientTopic, ConsumerTopic } from '../topic'
import { InitialResponse, promiseTimeout } from '../utils'
import { Question, QuestionResponse } from './question'

export enum PollType {
  Timed = 'timed',
  Immediate = 'immediate'
}

export interface GetPollResponsePayload {
  questions: QuestionResponse[]
  configuration: {
    mode: PollType
  }
}

export interface GetPollResponse {
  payload: GetPollResponsePayload
}

export interface CreateQuestionResponse {
  id: string;
  payload: QuestionResponse;
}

export interface PollListenerResponse {
  payload: any
}

export interface QuestionAnswerData {
  question: string;
  answer: string;
}

export interface PollQuestionResponse {
  id: string;
  data: QuestionResponse
}

export interface PollAnswerResponse {
  id: string
  data: {
    id: string
    responses: { [key: string]: number }
  }
}

export interface QuestionRequest {
  question: string;
  order: number;
  answers: {
    order: number;
    text: string;
  } []
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

  listenForResponses (): void {
    this.subscriptionManager.addSubscription(ClientTopic.PollListener, (resp: PollAnswerResponse) => {
      if (this.id === resp.id) {
        const question = this.questions.find(({ id }) => id === resp.data.id)
        if (!question) {
          throw new Error(`Could not find question with id: ${resp.data.id}`)
        }
        question.setResponses(resp.data.responses)
      }
    })
  }

  listenForQuestions (): void {
    this.subscriptionManager.addSubscription(ConsumerTopic.PollQuestion, (resp: PollQuestionResponse) => {
      if (resp.id === this.id) {
        const question = new Question(this.socket, resp.data.id, resp.data)
        this.questions = [...this.questions, question]
      }
    })
  }

  static sortByOrder (a: QuestionResponse, b: QuestionResponse): number {
    return a.order - b.order
  }

  async answer (questionId: string, answerId: string): Promise<void> {
    const question = this.questions.find(({ id }) => id === questionId)
    if (!question) {
      throw new Error(`Could not find question with id: ${questionId}`)
    }
    await question.answer(answerId, this.id)
  }

  createQuestion (question: QuestionRequest): Promise<void> {
    let callback: (resp: InitialResponse | CreateQuestionResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: InitialResponse | CreateQuestionResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          if (resp.id === this.id) {
            const question = new Question(this.socket, resp.payload.id, resp.payload)
            this.questions = [...this.questions, question]
            resolve()
          }
        }
      }
      this.socket.on(ConsumerTopic.QuestionCreate, callback)
      this.socket.emit(ConsumerTopic.QuestionCreate, {
        id: this.id,
        ...question
      })
    })).finally(() => {
      this.socket.removeListener(ConsumerTopic.QuestionCreate, callback)
    })
  }

  get (): Promise<void> {
    let callback: (resp: InitialResponse | GetPollResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: InitialResponse | GetPollResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          console.log(resp.payload)
          this.type = resp.payload.configuration.mode
          if (this.type !== PollType.Immediate) {
            const responseQuestions = [...Object.values(resp.payload.questions)].sort(Poll.sortByOrder)
            const questions = responseQuestions.map((q) => new Question(this.socket, q.id, q))
            this.questions = questions
          } else {
            this.listenForQuestions()
          }
          this.listenForResponses()
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
