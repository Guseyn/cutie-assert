# cutie-assert

[![NPM Version][npm-image]][npm-url]

[Cutie](https://github.com/Guseyn/cutie) extension for assert module in Node. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).


| Async Object  | Async/sync call | Parameters | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| Assertion     | `assert` | value, message | value |
| DeepEqualAssertion | `assert.deepEqual` | actual, expected, message | actual |
| DeepStrictEqualAssertion | `assert.deepStrictEqual` | actual, expected, message | actual |
| EqualAssertion | `assert.equal` | actual, expected, message | actual |
| FailedAssertion | `assert.fail` | actual, expected, message, operator ('!='), stackStartFunction (assert.fail) | thrown error |
| FailedAssertionWithMessageOnly | `assert.fail` | message | thrown error |
| IfErrorAssertion | `assert.ifError` | value | thrown error or value(if it's false) |
| NotDeepEqualAssertion | `assert.notDeepEqual` | actual, expected, message | actual |
| NotDeepStrictEqualAssertion| `assert.notDeepStrictEqual` | actual, expected, message | actual |
| NotEqualAssertion| `assert.notEqual` | actual, expected, message | actual |
| NotStrictEqualAssertion | `assert.notStrictEqual` | actual, expected, message | actual |
| NotThrownErrorAssertion | `assert.doesNotThrow` | block, error, message | block |
| OkAssertion | `assert.ok` | value, message  | value |
| StrictEqualAssertion | `assert.strictEqual` | actual, expected, message | actual |
| ThrownErrorAssertion | `assert.throws` | block, error, message | block |

[npm-image]: https://img.shields.io/npm/v/@guseyn/cutie-assert.svg
[npm-url]: https://npmjs.org/package/@guseyn/cutie-assert

# Examples

You can find examples of using this library in [test directory](https://github.com/Guseyn/cutie-assert/tree/master/test)
