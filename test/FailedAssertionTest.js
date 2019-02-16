'use strcit'

const { FailedAssertion } = require('./../index')

try {
  new FailedAssertion(
    4, 8, undefined, '>'
  ).call()
} catch (err) {
  console.log(err)
}

try {
  new FailedAssertion(
    4, 8, undefined
  ).call()
} catch (err) {
  console.log(err)
}
