'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const assert = require('assert');

// Represented result is thrown error or value(if it's false)
class IfErrorAssertion extends AsyncObject {

  constructor(value) {
    super(value);
  }

  definedSyncCall() {
    return (value) => {
      assert.ifError(value);
      return value;
    }
  }

}

module.exports = IfErrorAssertion;
