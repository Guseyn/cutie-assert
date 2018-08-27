'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const assert = require('assert');

// Represented result is actual value (for further using)
class NotDeepEqualAssertion extends AsyncObject {

  constructor(actual, expected, message) {
    super(actual, expected, message);
  }

  definedSyncCall() {
    return (actual, expected, message) => {
      assert.notDeepEqual(actual, expected, message);
      return actual;
    }
  }

}

module.exports = NotDeepEqualAssertion;
