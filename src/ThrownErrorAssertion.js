'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const assert = require('assert');

// Represented result is block (for further using)
class ThrownErrorAssertion extends AsyncObject {

  constructor(block, error, message) {
    super(block, error, message);
  }

  definedSyncCall() {
    return (block, error, message) => {
      assert.throws(block, error, message);
      return block;
    }
  }

}

module.exports = ThrownErrorAssertion;
