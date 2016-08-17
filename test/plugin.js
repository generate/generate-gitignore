'use strict';

require('mocha');
var path = require('path');
var assert = require('assert');
var generate = require('generate');
var npm = require('npm-install-global');
var generator = require('..');
var app;

var isTravis = process.env.CI || process.env.TRAVIS;
var cwd = path.resolve.bind(path, __dirname, 'actual');

describe('generate-gitignore', function() {
  if (!isTravis) {
    before(function(cb) {
      npm.maybeInstall('generate', cb);
    });
  }

  beforeEach(function() {
    app = generate({silent: true});
    app.option('dest', cwd());
  });

  describe('plugin', function() {
    it('should only register the plugin once', function(cb) {
      var count = 0;
      app.on('plugin', function(name) {
        if (name === 'generate-gitignore') {
          count++;
        }
      });
      app.use(generator);
      app.use(generator);
      app.use(generator);
      assert.equal(count, 1);
      cb();
    });
  });
});
