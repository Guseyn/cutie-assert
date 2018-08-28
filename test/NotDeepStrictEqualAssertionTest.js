'use strcit'

const ErrorMessage = require('./../deps/ErrorMessage');
const {
  NotDeepStrictEqualAssertion,
  EqualAssertion
} = require('./../index');

new NotDeepStrictEqualAssertion(
  {a: 'a', b: 'b', c: 7},
  {a: 'a', b: 'b', c: '7'}
).call();

try {
  new NotDeepStrictEqualAssertion(
    {a: 'a', b: 'b', c: 7},
    {a: 'a', b: 'b', c: 7}
  ).call();
} catch (err) {
  new EqualAssertion(
    new ErrorMessage(err), 
    '{ a: \'a\', b: \'b\', c: 7 } notDeepStrictEqual { a: \'a\', b: \'b\', c: 7 }'
  ).call();
}
