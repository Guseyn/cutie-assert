# cutie-assert

[![NPM Version][npm-image]][npm-url]

[Cutie](https://github.com/Guseyn/cutie) extension for <b>assert</b> module in Node. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

# Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-assert/tree/master/test).

# Usage

```js
const {
  // Here needed async objects from the table below
} = require('@cuties/assert');
```

For more information about parameters in the async objects visit [docs of Node](https://nodejs.org/en/docs/) for <b>assert</b> module.

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `Assertion`     | `assert` | `value, message` | `value` |
| `DeepEqualAssertion` | `assert.deepEqual` | `actual, expected, message` | `actual` |
| `DeepStrictEqualAssertion` | `assert.deepStrictEqual` | `actual, expected, message` | `actual` |
| `EqualAssertion` | `assert.equal` | `actual, expected, message` | `actual` |
| `FailedAssertion` | `assert.fail` | `actual, expected, message, operator ('!='), stackStartFunction (assert.fail)` | `thrown error` |
| `FailedAssertionWithMessageOnly` | `assert.fail` | `message` | `thrown error` |
| `IfErrorAssertion` | `assert.ifError` | `value` | `thrown error` or `value`(if it's false) |
| `NotDeepEqualAssertion` | `assert.notDeepEqual` | `actual, expected, message` | `actual` |
| `NotDeepStrictEqualAssertion` | `assert.notDeepStrictEqual` | `actual, expected, message` | `actual` |
| `NotEqualAssertion` | `assert.notEqual` | `actual, expected, message` | `actual` |
| `NotStrictEqualAssertion` | `assert.notStrictEqual` | `actual, expected, message` | `actual` |
| `NotThrownErrorAssertion` | `assert.doesNotThrow` | `block, error, message` | `block` |
| `OkAssertion` | `assert.ok` | `value, message`  | `value` |
| `StrictEqualAssertion` | `assert.strictEqual` | `actual, expected, message` | `actual` |
| `ThrownErrorAssertion` | `assert.throws` | `block, error, message` | `block` |

[npm-image]: https://img.shields.io/npm/v/@cuties/assert.svg
[npm-url]: https://npmjs.org/package/@cuties/assert
