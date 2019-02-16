# cutie-assert

[![NPM Version](https://img.shields.io/npm/v/@cuties/assert.svg)](https://npmjs.org/package/@cuties/assert)
[![Build Status](https://travis-ci.org/Guseyn/cutie-assert.svg?branch=master)](https://travis-ci.org/Guseyn/cutie-assert)
[![codecov](https://codecov.io/gh/Guseyn/cutie-assert/branch/master/graph/badge.svg)](https://codecov.io/gh/Guseyn/cutie-assert)

[Cutie](https://github.com/Guseyn/cutie) extension for <b>assert</b> module in Node. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

## Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-assert/tree/master/test).

## Install

`npm install @cuties/assert`

## Run test

`npm test`

## Run build

`npm run build`

## Usage

```js
const {
  // Here needed async objects from the table below
} = require('@cuties/assert');
```

For more information about parameters in the async objects visit [docs of Node](https://nodejs.org/en/docs/) for <b>assert</b> module.

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `Assertion`     | `assert` | `value, message` | `value` |
| `DeepStrictEqualAssertion` | `assert.deepStrictEqual` | `actual, expected, message` | `actual` |
| `FailedAssertion` | `assert.fail` | `actual, expected, message, operator ('!='), stackStartFunction (assert.fail)` | `thrown error` |
| `FailedAssertionWithMessageOnly` | `assert.fail` | `message` | `thrown error` |
| `IfErrorAssertion` | `assert.ifError` | `value` | `thrown error` or `value`(if it's false) |
| `NotDeepStrictEqualAssertion` | `assert.notDeepStrictEqual` | `actual, expected, message` | `actual` |
| `NotStrictEqualAssertion` | `assert.notStrictEqual` | `actual, expected, message` | `actual` |
| `NotThrownErrorAssertion` | `assert.doesNotThrow` | `block, error, message` | `block` |
| `OkAssertion` | `assert.ok` | `value, message`  | `value` |
| `StrictEqualAssertion` | `assert.strictEqual` | `actual, expected, message` | `actual` |
| `ThrownErrorAssertion` | `assert.throws` | `block, error, message` | `block` |
