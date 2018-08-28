'use strcit'

const ErrorMessage = require('./../deps/ErrorMessage');
const {
  OkAssertion,
  EqualAssertion
} = require('./../index');

new OkAssertion(true, 'not true').call();

try {
  new OkAssertion(false, 'not true').call();
} catch (err) {
  new EqualAssertion(
    new ErrorMessage(err), 'not true'
  ).call();
}
