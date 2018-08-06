'use strcit'

const {
  ErrorMessage
} = require('@guseyn/cutie-error');
const {
  NotEqualAssertion,
  EqualAssertion
} = require('./../index');

new NotEqualAssertion(5, 6).call();

try {
  new NotEqualAssertion(5, 5).call();
} catch (err) {
  new EqualAssertion(
    new ErrorMessage(err),
    '5 != 5'
  ).call();
}
