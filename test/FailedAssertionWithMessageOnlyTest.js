'use strcit'

const {
  ErrorMessage
} = require('@cuties/error');
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
