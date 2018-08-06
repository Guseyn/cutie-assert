'use strcit'

const {
  ErrorMessage
} = require('@guseyn/cutie-error');
const {
  EqualAssertion,
  FailedAssertionWithMessageOnly
} = require('./../index');

try {
  new FailedAssertionWithMessageOnly(
    'err'
  ).call();
} catch (err) {
  new EqualAssertion(
    new ErrorMessage(err), 'err'
  ).call();
}
