import User from '../user'
import sinon from 'sinon'

import fetchMock from 'jest-fetch-mock'

const mockUser = {
  email: 'foo@bar.com',
  id: '1',
  token: 'token',
  user_type: 'audience',
  username: 'baz'
}

describe('User', () => {
  beforeAll(() => {
    fetchMock.enableMocks()
  })

  afterAll(() => {
    fetchMock.disableMocks()
  })

  afterEach(() => {
    fetchMock.resetMocks()
  })

  it('fetchUser checks if a user is present or not', async () => {
    const user = new User({
      auth: 'auth',
      gateway: 'gateway',
      apiKey: 'apiKey'
    })

    fetchMock.mockOnce(JSON.stringify(mockUser), { status: 200 })

    const result = await user.fetchUser('username')
    expect(result).toStrictEqual(mockUser)
  })

  it('fetchUser returns null of there is a 404', async () => {
    const user = new User({
      auth: 'auth',
      gateway: 'gateway',
      apiKey: 'apiKey'
    })

    fetchMock.mockOnce(JSON.stringify({}), { status: 404 })

    const result = await user.fetchUser('username')
    expect(result).toBeNull()
  })

  it('fetchUser throws response if it 500s', async () => {
    const user = new User({
      auth: 'auth',
      gateway: 'gateway',
      apiKey: 'apiKey'
    })

    fetchMock.mockOnce(JSON.stringify({}), { status: 500 })

    try {
      await user.fetchUser('username')
      expect(false).toBeTruthy()
    } catch (e) {
      expect(e).toBeInstanceOf(Response)
    }
  })
})
