'use strict';

require('mocha');
var assert = require('assert');
var gitignore = require('./');

describe('generate-gitignore', function() {
  it('should export a function', function() {
    assert.equal(typeof gitignore, 'function');
  });

  it('should export an object', function() {
    assert(gitignore);
    assert.equal(typeof gitignore, 'object');
  });

  it('should throw an error when invalid args are passed', function(cb) {
    try {
      gitignore();
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'expected first argument to be a string');
      assert.equal(err.message, 'expected a callback function');
      cb();
    }
  });
});
