'use strcit'

const ErrorMessage = require('./../deps/ErrorMessage');
const {
  DeepEqualAssertion,
  EqualAssertion
} = require('./../index');

new DeepEqualAssertion(
  {a: 'a', b: 'b', c: 7},
  {a: 'a', b: 'b', c: '7'}
).call();

try {
  new DeepEqualAssertion(
    {a: 'a', b: 'b', c: 8},
    {a: 'a', b: 'b', c: '7'}
  ).call();
} catch (err) {
  new EqualAssertion(
    new ErrorMessage(err),
    '{ a: \'a\', b: \'b\', c: 8 } deepEqual { a: \'a\', b: \'b\', c: \'7\' }'
  ).call();
}
