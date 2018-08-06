'use strcit'

const {
  ErrorMessage
} = require('@guseyn/cutie-error');
const {
  Assertion,
  EqualAssertion
} = require('./../index');

new Assertion(true, 'not true').call();

try {
  new Assertion(false, 'not true').call();
} catch (err) {
  new EqualAssertion(
    new ErrorMessage(err), 'not true'
  ).call();
}
