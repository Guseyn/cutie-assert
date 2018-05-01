'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const assert = require('assert');

// Represented result is thrown error
class IfErrorAssertion extends AsyncObject {

  constructor(value) {
    super(value);
  }

  definedSyncCall() {
    return (value) => {
      assert.doesNotThrow(value);
    }
  }

}

module.exports = IfErrorAssertion;
