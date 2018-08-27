'use strcit'

const {
  ErrorMessage
} = require('@cuties/error');
const {
  EqualAssertion,
  IfErrorAssertion
} = require('./../index');

try {
  new IfErrorAssertion(
    new Error('err')
  ).call();
} catch (err) {
  new EqualAssertion(
    new ErrorMessage(err), 'err'
  ).call();
}

new EqualAssertion(
  new IfErrorAssertion(0), 0
).call();
