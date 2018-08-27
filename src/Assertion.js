'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const assert = require('assert');

// Represented result is value (for further using)
class Assertion extends AsyncObject {

  constructor(value, message) {
    super(value, message);
  }

  definedSyncCall() {
    return (value, message) => {
      assert(value, message);
      return value;
    }
  }

}

module.exports = Assertion;
