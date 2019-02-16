'use strcit'

const { FailedAssertionWithMessageOnly } = require('./../index')

try {
  new FailedAssertionWithMessageOnly(
    'err'
  ).call()
} catch (err) {
  console.log(err)
}
