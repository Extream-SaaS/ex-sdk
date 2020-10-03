// import { Itinerary } from '../itinerary'
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// import MockedSocket from 'socket.io-mock'
// import sinon from 'sinon'
// import { ConsumerTopic } from '../topic'

// const initialResponse = {
//   messageId: '1529023143077761',
//   status: 202,
//   topic: 'ex-itinerary'
// }

// describe('Itinerary', () => {
//   let socket
//   let emit
//   let itinerary
//   beforeEach(() => {
//     socket = new MockedSocket()
//     emit = sinon.stub()
//     socket.emit = emit
//     itinerary = new Itinerary(socket)
//   })

//   afterEach(() => {
//     const nonCleanedUpListeners = Object
//       .values(socket._callbacks as (...args: any[]) => void[])
//       .reduce((acc: number, cur: (...args: any[]) => void[]) => acc + cur.length, 0)
//     if (nonCleanedUpListeners) {
//       throw new Error('Socket listeners were not cleaned up between tests')
//     }
//   })
//   it('creates a video item for each video item responded', () => {
//     const promise = itinerary.get('id')
//     socket.socketClient.emit(ConsumerTopic.ChatGet, initialResponse)
//     socket.socketClient.emit(ConsumerTopic.ChatGet, chatResponse)
//   })
// })
