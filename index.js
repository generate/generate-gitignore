'use strict';

var path = require('path');
var isValid = require('is-valid-app');

module.exports = function(app) {
  // return if the generator is already registered
  if (!isValid(app, 'generate-gitignore')) return;

  /**
   * Generates a `.gitignore` file to the current working directory. The
   * built-in template can be [overridden](#customization).
   *
   * ```sh
   * $ gen gitignore
   * ```
   * @name gitignore
   * @api public
   */

  app.task('default', ['gitignore']);
  app.task('gitignore', function(cb) {
    var cwd = app.dir || path.resolve(__dirname, 'templates');
    return app.src('_gitignore', {cwd: cwd})
      .pipe(app.conflicts(app.cwd))
      .pipe(app.dest(app.cwd));
  });
};

