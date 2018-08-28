'use strcit'

const ErrorMessage = require('./../deps/ErrorMessage');
const {
  StrictEqualAssertion,
  EqualAssertion
} = require('./../index');

new StrictEqualAssertion(5, 5).call();

try {
  new StrictEqualAssertion(5, '5').call();
} catch (err) {
  new EqualAssertion(
    new ErrorMessage(err),
    '5 === \'5\''
  ).call();
}
