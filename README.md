# cutie-assert
Cutie extension for assert module in Node. It's based on [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).


| Async Object  | Async/sync call       | Parameters      | Representation result |
| ------------- | ----------------------| --------------- | --------------------- |
| Assertion     | assert                | value, message  | value                 |
|  DeepEqualAssertion   | assert.deepEqual          | actual, expected, message                |     actual                  |
|DeepStrictEqualAssertion|assert.deepStrictEqual|actual, expected, message|actual|
|EqualAssertion|assert.equal|actual, expected, message|actual|
|FailedAssertion|assert.fail|actual, expected, message, operator, stackStartFunction|thrown error|
|FailedAssertionWithMessageOnly|assert.fail|message|thrown error|
|||||
