'use strcit'

const { NotThrownErrorAssertion } = require('./../index')

new NotThrownErrorAssertion(
  () => {},
  new Error('error')
).call()
