'use strcit'

const { IfErrorAssertion } = require('./../index')

new IfErrorAssertion(null).call()

try {
  new IfErrorAssertion(
    new Error('err')
  ).call()
} catch (err) {
  console.log(err)
}
