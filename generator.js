'use strict';

var fs = require('fs');
var path = require('path');
var utils = require('./utils');

module.exports = function(app, base) {
  // return if the generator is already registered
  if (!utils.isValid(app, 'generate-gitignore')) return;

  /**
   * Plugins
   */

  app.use(require('generate-defaults'));
  app.use(require('./generators/gitignore'));

  /**
   * Sub-generator
   */

  app.register('global', require('./generators/gitignore-global'));

  /**
   * Middleware for renaming dest files (must be done before `.conflicts()` comparison)
   */

  app.postRender(/\.gitignore$/, function(file, next) {
    file.basename = '.gitignore';
    next();
  });

  /**
   * Generate a `.gitignore` file to the current working directory.
   *
   * ```sh
   * $ gen gitignore
   * ```
   * @name gitignore
   * @api public
   */

  app.task('default', ['gitignore']);
  app.task('gitignore', function() {
    var opts = utils.extend({}, app.options, {key: 'stem', basename: '.gitignore'});
    return app.src('templates/*.gitignore', { cwd: __dirname })
      .pipe(utils.autocomplete(opts))
      .pipe(app.conflicts(app.cwd))
      .pipe(app.dest(app.cwd));
  });

  /**
   * Generate a global `.gitignore` file to global `.git` directory.
   *
   * ```sh
   * $ gen gitignore:global
   * ```
   * @name gitignore:global
   * @api public
   */

  app.task('global', ['gitignore-global']);
  app.task('gitignore-global', function() {
    var opts = utils.extend({}, app.options, {key: 'stem', basename: '.gitignore'});
    var config = utils.parseGitConfig.sync(utils.gitConfigPath('global'));
    var file = config.core && config.core.excludesfile || '~/.gitignore';
    var dest = path.dirname(utils.resolveDir(file));

    return app.src('templates/global/*.gitignore', { cwd: __dirname })
      .pipe(utils.autocomplete(opts))
      .pipe(app.conflicts(dest))
      .pipe(app.dest(dest));
  });

  /**
   * Generate local `.gitignore` tasks
   */

  app.task('create-gitignore', function(cb) {
    return app.src('templates/*.gitignore')
      .pipe(tasks({template: 'generators/support/local.tmpl'}))
      .pipe(app.renderFile('*'))
      .pipe(app.dest(app.cwd));
  });

  /**
   * Generate global `.gitignore` tasks
   */

  app.task('create-global', function(cb) {
    return app.src('templates/Global/*.gitignore')
      .pipe(tasks({template: 'generators/support/global.tmpl'}))
      .pipe(app.renderFile('*'))
      .pipe(app.dest(app.cwd));
  });

  /**
   * Generate all `.gitignore` tasks
   */

  app.task('create', ['create-*']);
};

/**
 * Plugin for generating individual gitignore tasks.
 *
 * The alternative would be to load in templates and create tasks on-the-fly,
 * but this approach is much faster and results in a better user experience.
 */

function tasks(options) {
  options = options || {};
  var fp = path.resolve(options.template);
  var tmpl = new utils.File({path: fp, contents: fs.readFileSync(fp)});
  var data = {tasks: []};

  return utils.through.obj(function(file, enc, next) {
    var description = options.description || file.stem;

    if (typeof description === 'function') {
      description = options.description(file);
    }

    data.tasks.push({
      alias: 'gitignore',
      path: path.relative(path.resolve('generators'), file.path),
      name: file.stem.toLowerCase(),
      description: description,
      relative: file.relative,
      basename: '.gitignore'
    });

    next();
  }, function(next) {
    tmpl.data = data;
    this.push(tmpl);
    next();
  });
}
