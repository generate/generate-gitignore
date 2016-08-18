'use strict';

var gulp = require('gulp');
var through = require('through2');
var clone = require('gh-clone');
var del = require('delete');
var File = require('vinyl');
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
  return gulp.src('vendor/**/*.gitignore')
    .pipe(through.obj(function(file, enc, next) {
      next(null, file);
    }, function(next) {
      this.push(new File({
        path: 'Minimal.gitignore',
        contents: new Buffer('node_modules\ncoverage')
      }));
      next();
    }))
    .pipe(gulp.dest('templates'))
});

gulp.task('default', ['del']);

