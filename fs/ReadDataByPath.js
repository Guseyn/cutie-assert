'use strict'

const { AsyncObject } = require('@cuties/cutie')
const fs = require('fs')

// Represented result is buffer or string
class ReadDataByPath extends AsyncObject {
  constructor (path, options) {
    super(path, options || {
      encoding: null,
      flag: 'r'
    });
  }

  definedAsyncCall () {
    return fs.readFile
  }
}

module.exports = ReadDataByPath
