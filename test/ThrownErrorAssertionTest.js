'use strcit'

const {
  ErrorMessage
} = require('@guseyn/cutie-error');
const {
  ThrownErrorAssertion,
  EqualAssertion
} = require('./../index');

new ThrownErrorAssertion(() => {
  throw new Error('error');
}, Error).call();

try {
  new ThrownErrorAssertion(
    () => {},
    new Error('error')
  ).call();
} catch (err) {
  new EqualAssertion(
    new ErrorMessage(err),
    'Missing expected exception (Error).'
  ).call();
}
