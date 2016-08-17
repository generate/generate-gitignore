'use strict';

var gulp = require('gulp');
var clone = require('gh-clone');
var del = require('delete');
var copy = require('copy');

gulp.task('del', function(cb) {
  del(['vendor', 'templates'], function(err) {
    if (err) return cb(err);
    gulp.start(['copy'], cb);
  });
});

gulp.task('clone', function(cb) {
  clone({repo: 'github/gitignore', dest: 'vendor'}, cb);
});

gulp.task('copy', ['clone'], function(cb) {
  copy('vendor/**/*.gitignore', 'templates', cb);
});

gulp.task('default', ['del']);

