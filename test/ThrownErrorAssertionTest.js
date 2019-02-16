'use strcit'

const { ThrownErrorAssertion } = require('./../index')

new ThrownErrorAssertion(() => {
  throw new Error('error')
}, Error).call()
