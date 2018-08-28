'use strcit'

const ErrorMessage = require('./../deps/ErrorMessage');
const {
  NotStrictEqualAssertion,
  EqualAssertion
} = require('./../index');

new NotStrictEqualAssertion(5, '5').call();

try {
  new NotStrictEqualAssertion(5, 5).call();
} catch (err) {
  new EqualAssertion(
    new ErrorMessage(err),
    '5 !== 5'
  ).call();
}
