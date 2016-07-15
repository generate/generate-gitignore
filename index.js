'use strict';

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
    return app.src('templates/_gitignore', {cwd: __dirname})
      .pipe(app.conflicts(app.cwd))
      .pipe(app.dest(app.cwd));
  });
};

