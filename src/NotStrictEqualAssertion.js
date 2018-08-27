'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const assert = require('assert');

// Represented result is actual value (for further using)
class NotStrictEqualAssertion extends AsyncObject {

  constructor(actual, expected, message) {
    super(actual, expected, message);
  }

  definedSyncCall() {
    return (actual, expected, message) => {
      assert.notStrictEqual(actual, expected, message);
      return actual;
    }
  }

}

module.exports = NotStrictEqualAssertion;
