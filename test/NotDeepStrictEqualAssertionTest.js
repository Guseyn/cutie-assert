'use strcit'

const { NotDeepStrictEqualAssertion } = require('./../index')

new NotDeepStrictEqualAssertion(
  { a: 'a', b: 'b', c: 7 },
  { a: 'a', b: 'b', c: '7' }
).call()
