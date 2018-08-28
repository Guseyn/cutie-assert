'use strcit'

const ErrorMessage = require('./../deps/ErrorMessage');
const {
  EqualAssertion
} = require('./../index');

new EqualAssertion(5, '5').call();

try {
  new EqualAssertion(5, '6').call();
} catch (err) {
  new EqualAssertion(
    new ErrorMessage(err),
    '5 == \'6\''
  ).call();
}
