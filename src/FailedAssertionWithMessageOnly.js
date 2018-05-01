'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const assert = require('assert');

// Represented result is thrown error
class FailedAssertionWithMessageOnly extends AsyncObject {

  constructor(message) {
    super(message);
  }

  definedSyncCall() {
    return (message) => {
      assert.fail(message);
    }
  }

}

module.exports = FailedAssertionWithMessageOnly;
