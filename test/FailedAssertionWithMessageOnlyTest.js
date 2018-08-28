'use strcit'

const ErrorMessage = require('./../deps/ErrorMessage');
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
