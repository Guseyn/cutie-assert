'use strcit'

const {
  ErrorMessage
} = require('@guseyn/cutie-error');
const {
  EqualAssertion,
  FailedAssertion
} = require('./../index');

try {
  new FailedAssertion(
    4, 8, undefined, '>'
  ).call();
} catch (err) {
  new EqualAssertion(
    new ErrorMessage(err), '4 > 8'
  ).call();
}