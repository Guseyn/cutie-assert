'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const assert = require('assert');

// Represented result is block (for further using)
class NotThrownErrorAssertion extends AsyncObject {

  constructor(block, error, message) {
    super(block, error, message);
  }

  definedSyncCall() {
    return (block, error, message) => {
      assert.doesNotThrow(block, error, message);
      return block;
    }
  }

}

module.exports = NotThrownErrorAssertion;
