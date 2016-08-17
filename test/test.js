'use strict';

require('mocha');
var fs = require('fs');
var path = require('path');
var assert = require('assert');
var generate = require('generate');
var npm = require('npm-install-global');
var intercept = require('intercept-stdout');
var bddStdin = require('bdd-stdin');
var del = require('delete');
var generator = require('..');
var app;

var isTravis = process.env.CI || process.env.TRAVIS;
var actual = path.resolve.bind(path, __dirname, 'actual');

function interception(re) {
  return intercept(function(str) {
    if (re.test(str)) {
      return '';
    } else {
      return str.trim();
    }
  });
}

function exists(name, cb) {
  return function(err) {
    if (err) return cb(err);
    fs.stat(actual(name), cb);
  };
}

describe('generate-gitignore', function() {
  if (!isTravis) {
    before(function(cb) {
      npm.maybeInstall('generate', cb);
    });
  }

  beforeEach(function() {
    app = generate({silent: true});
    app.option('dest', actual());
  });

  afterEach(function(cb) {
    del(actual(), cb);
  });

  describe('tasks', function() {
    it('should extend tasks onto the instance', function() {
      app.use(generator);
      assert(app.tasks.hasOwnProperty('node'));
      assert(app.tasks.hasOwnProperty('default'));
      assert(app.tasks.hasOwnProperty('gitignore'));
    });

    it('should generate a node .gitignore', function(cb) {
      app.use(generator);
      app.generate('node', exists('.gitignore', cb));
    });

    it('should generate an Ada .gitignore', function(cb) {
      app.use(generator);
      app.generate('ada', exists('.gitignore', cb));
    });
  });

  describe('generator (API)', function() {
    it('should run the  node task on the generator', function(cb) {
      app.register('gitignore', generator);
      app.generate('gitignore:node', exists('.gitignore', cb));
    });
  });

  describe('sub-generator', function() {
    it('should work as a sub-generator', function(cb) {
      app.register('foo', function(foo) {
        foo.register('gitignore', generator);
      });
      app.generate('foo.gitignore:node', exists('.gitignore', cb));
    });

    it('should work with nested sub-generators', function(cb) {
      app
        .register('foo', generator)
        .register('bar', generator)
        .register('baz', generator);
      app.generate('foo.bar.baz:node', exists('.gitignore', cb));
    });
  });
});
