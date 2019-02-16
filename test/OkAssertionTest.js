'use strcit'

const { OkAssertion } = require('./../index')

new OkAssertion(true, 'not true').call()
