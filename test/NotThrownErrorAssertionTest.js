'use strcit'

const ErrorMessage = require('./../deps/ErrorMessage');
const {
  NotThrownErrorAssertion,
  EqualAssertion
} = require('./../index');

new NotThrownErrorAssertion(
  () => {},
  new Error('error')
).call();

try {
  new NotThrownErrorAssertion(() => {
    throw new Error('error');
  }, Error).call();
} catch (err) {
  new EqualAssertion(
    new ErrorMessage(err),
    'Got unwanted exception.'
  ).call();
}
