'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const assert = require('assert');

// Represented result is thrown error
class FailedAssertion extends AsyncObject {

  constructor(actual, expected, message, operator, stackStartFunction) {
    super(actual, expected, message, operator || '!=', stackStartFunction || assert.fail);
  }

  definedSyncCall() {
    return (actual, expected, message, operator, stackStartFunction) => {
      assert.fail(actual, expected, message, operator, stackStartFunction);
    }
  }

}

module.exports = FailedAssertion;
