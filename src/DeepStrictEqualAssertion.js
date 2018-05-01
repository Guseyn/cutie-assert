'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const assert = require('assert');

// Represented result is actual value (for further using)
class DeepStrictEqualAssertion extends AsyncObject {

  constructor(actual, expected, message) {
    super(actual, expected, message);
  }

  definedSyncCall() {
    return (actual, expected, message) => {
      assert.deepStrictEqual(actual, expected, message);
      return actual;
    }
  }

}

module.exports = DeepStrictEqualAssertion;