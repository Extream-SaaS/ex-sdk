import { SubscriptionManager } from '../utils/subscription-manager'
import sinon from 'sinon'

describe('Subscription manager', () => {
  it('allows all listeners to be cleared out', () => {
    const on = sinon.stub()
    const removeEventListener = sinon.stub()
    const fn = () => ({})
    const mocket: any = {
      on,
      removeEventListener
    }
    const subscriptionManager = new SubscriptionManager(mocket)
    subscriptionManager.addSubscription('foo', fn)
    subscriptionManager.addSubscription('foo', fn)
    subscriptionManager.addSubscription('bar', fn)
    subscriptionManager.removeAllSubscriptions()
    expect(on.calledThrice).toBeTruthy()
    expect(removeEventListener.calledThrice).toBeTruthy()
    const expectedArgs = [
      ['foo', fn],
      ['foo', fn],
      ['bar', fn]
    ]
    expectedArgs.forEach((args, i) => {
      expect(removeEventListener.getCall(i).args).toStrictEqual(args)
    })
  })
})
