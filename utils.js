'use strict';

var utils = require('lazy-cache')(require);
var fn = require;
require = utils;

/**
 * Lazily required module dependencies
 */

require('extend-shallow', 'extend');
require('git-config-path');
require('gulp-autocomplete-prompt', 'autocomplete');
require('is-valid-app', 'isValid');
require('parse-git-config');
require('resolve-dir');
require('through2', 'through');
require('vinyl', 'File');
require = fn;

/**
 * Expose `utils` modules
 */

module.exports = utils;
