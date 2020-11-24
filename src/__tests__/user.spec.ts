import User, { UserType } from '../user'

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
      apiKey: 'apiKey',
      collab: 'collab'
    })

    fetchMock.mockOnce(JSON.stringify(mockUser), { status: 200 })

    const result = await user.fetchUser('username')
    expect(result).toStrictEqual(mockUser)
  })

  it('fetchUser returns null of there is a 404', async () => {
    const user = new User({
      auth: 'auth',
      gateway: 'gateway',
      apiKey: 'apiKey',
      collab: 'collab'
    })

    fetchMock.mockOnce(JSON.stringify({}), { status: 404 })

    const result = await user.fetchUser('username')
    expect(result).toBeNull()
  })

  it('fetchUser throws response if it 500s', async () => {
    const user = new User({
      auth: 'auth',
      gateway: 'gateway',
      apiKey: 'apiKey',
      collab: 'collab'
    })

    fetchMock.mockOnce(JSON.stringify({}), { status: 500 })

    try {
      await user.fetchUser('username')
      expect(false).toBeTruthy()
    } catch (e) {
      expect(e).toBeInstanceOf(Response)
    }
  })

  it('login calls endpoint with username, password and eventId', async () => {
    const user = new User({
      auth: 'www.url.com',
      gateway: 'gateway',
      apiKey: 'apiKey',
      collab: 'collab'
    })

    fetchMock.mockOnce(async (resp: Request) => {
      const body = await resp.text()
      expect(resp.url).toBe('www.url.com/auth/login')
      expect(body).toBe('username=username&password=password&eventId=eventId&grant_type=password')
      expect(resp.headers.get('Content-type')).toBe('application/x-www-form-urlencoded')
      return JSON.stringify({})
    })

    await user.login('username', 'password', 'eventId')
  })

  it('register calls endpoint with correct information', async () => {
    const user = new User({
      auth: 'www.url.com',
      gateway: 'gateway',
      apiKey: 'apiKey',
      collab: 'collab'
    })

    fetchMock.mockOnce(async (resp: Request) => {
      const body = await resp.text()

      expect(resp.url).toBe('www.url.com/auth/register')
      expect(resp.headers.get('Content-type')).toBe('application/x-www-form-urlencoded')
      expect(body).toBe('username=username&email=email&password=password&user_type=actor&user={"firstName":"asd"}')
      return JSON.stringify({})
    })

    await user.registerUser({
      username: 'username',
      email: 'email',
      password: 'password',
      user_type: UserType.Actor,
      user: {
        firstName: 'asd'
      }
    })
  })
})
