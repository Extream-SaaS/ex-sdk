import SubscriptionManager from '../subscription-manager'
import { ConsumerTopic } from '../topic'
import { InitialResponse, promiseTimeout } from '../utils'
import { AnswerPollsResponse, Question, QuestionResponse } from './question'

export enum PollType {
  Timed = 'timed',
  Immediate = 'live'
}

export interface PollConfiguration {
  type?: string
}

export interface GetPollResponsePayload {
  questions: QuestionResponse[]
  configuration: PollConfiguration
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

/**
 * Represents a poll itinerary item
 */
export class Poll {
  private socket: SocketIOClient.Socket;
  private subscriptionManager: SubscriptionManager;
  /**
   * Itinerary item id
   */
  public id: string;
  /**
   * All of the questions that are active on this poll currently
   */
  public questions: Question[] = []
  /**
   * The type of the poll. Currently only immediate supported.
   */
  public configuration: PollConfiguration | null = null

  constructor (socket: SocketIOClient.Socket, id: string) {
    this.socket = socket
    this.subscriptionManager = new SubscriptionManager(this.socket)
    this.id = id
  }

  /**
   * Sets up websocket listeners for other peoples responses coming in
   */
  listenForResponses (): void {
    this.subscriptionManager.addSubscription(ConsumerTopic.PollAnswer, (resp: AnswerPollsResponse) => {
      if ('error' in resp) {
        throw new Error(resp.error)
      } else if (!('status' in resp) && resp.payload) {
        if (resp.payload.id === this.id) {
          const question = this.questions.find(({ id }) => id === resp.payload.data.id)
          if (!question) {
            throw new Error(`Could not find question with id: ${resp.payload.data.id}`)
          }
          question.setResponses(resp.payload.data.responses)
        }
      }
    })
  }

  /**
   * Sets up websocket listeners for new questions being streamed into the poll
   */
  listenForQuestions (): void {
    this.subscriptionManager.addSubscription(ConsumerTopic.PollQuestion, (resp: PollQuestionResponse) => {
      if (resp.id === this.id) {
        const question = new Question(this.socket, resp.data.id, resp.data)
        this.questions = [question, ...this.questions].sort(Poll.sortByTime)
      }
    })
  }

  /**
   * Sorts answers by order
   */
  static sortByOrder (a: QuestionResponse, b: QuestionResponse): number {
    return a.order - b.order
  }

  /**
   * Sorts questions by date
   */
  static sortByTime (a: Question, b: Question): number {
    return new Date(a.time || Date.now()).getTime() - new Date(b.time || Date.now()).getTime()
  }

  /**
   * Anser a question
   * @param {string} questionId The id o the question to answer
   * @param {string} answerId The id of the answer to give
   */
  async answer (questionId: string, answerId: string): Promise<void> {
    const question = this.questions.find(({ id }) => id === questionId)
    if (!question) {
      throw new Error(`Could not find question with id: ${questionId}`)
    }
    await question.answer(answerId, this.id)
  }

  /**
   * Get all information for this poll. Questions will be populated in the questions array.
   */
  get (): Promise<void> {
    let callback: (resp: InitialResponse | GetPollResponse) => void
    return promiseTimeout(new Promise<void>((resolve, reject) => {
      callback = (resp: InitialResponse | GetPollResponse) => {
        if ('error' in resp) {
          reject(new Error(resp.error))
        } else if (!('status' in resp)) {
          this.configuration = resp.payload.configuration
          if (this.configuration.type !== PollType.Immediate) {
            const responseQuestions = [...Object.values(resp.payload.questions)].sort(Poll.sortByOrder)
            const questions = responseQuestions.map((q) => new Question(this.socket, q.id, q))
            this.questions = questions.sort(Poll.sortByTime)
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

  /**
   * Cleans up all listeners for this class. Call this when you no longer need access to this events information to ensure memory leaks are not caused.
   *
   * @returns { void }
   */
  destroy (): void {
    this.subscriptionManager.removeAllSubscriptions()
  }
}
