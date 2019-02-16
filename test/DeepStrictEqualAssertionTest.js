'use strcit'

const { DeepStrictEqualAssertion } = require('./../index')

new DeepStrictEqualAssertion(
  { a: 'a', b: 'b', c: 7 },
  { a: 'a', b: 'b', c: 7 }
).call()
