'use strcit'

const ErrorMessage = require('./../deps/ErrorMessage');
const {
  NotDeepEqualAssertion,
  EqualAssertion
} = require('./../index');

new NotDeepEqualAssertion(
  {a: 'a', b: 'b', c: 7},
  {a: 'a', b: 'b', c: '8'}
).call();

try {
  new NotDeepEqualAssertion(
    {a: 'a', b: 'b', c: 8},
    {a: 'a', b: 'b', c: '8'}
  ).call();
} catch (err) {
  new EqualAssertion(
    new ErrorMessage(err),
    '{ a: \'a\', b: \'b\', c: 8 } notDeepEqual { a: \'a\', b: \'b\', c: \'8\' }'
  ).call();
}
