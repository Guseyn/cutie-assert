'use strcit'

const ErrorMessage = require('./../deps/ErrorMessage');
const {
  DeepStrictEqualAssertion,
  EqualAssertion
} = require('./../index');

new DeepStrictEqualAssertion(
  {a: 'a', b: 'b', c: 7},
  {a: 'a', b: 'b', c: 7}
).call();

try {
  new DeepStrictEqualAssertion(
    {a: 'a', b: 'b', c: 7},
    {a: 'a', b: 'b', c: '7'}
  ).call();
} catch (err) {
  new EqualAssertion(
    new ErrorMessage(err), 
    '{ a: \'a\', b: \'b\', c: 7 } deepStrictEqual { a: \'a\', b: \'b\', c: \'7\' }'
  ).call();
}
