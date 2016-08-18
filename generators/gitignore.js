'use strict';

var file = require('./file');

module.exports = function(app) {

  /**
   * Generate a `.gitignore` file for Actionscript to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:actionscript
   * $ gen gitignore:actionscript --dest ./foo
   * ```
   * @name gitignore:actionscript
   * @api public
   */

  app.task('actionscript', ['gitignore-actionscript']);
  app.task('gitignore-actionscript', { silent: true }, function() {
    return file(app, '../templates/Actionscript.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Ada to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:ada
   * $ gen gitignore:ada --dest ./foo
   * ```
   * @name gitignore:ada
   * @api public
   */

  app.task('ada', ['gitignore-ada']);
  app.task('gitignore-ada', { silent: true }, function() {
    return file(app, '../templates/Ada.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Agda to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:agda
   * $ gen gitignore:agda --dest ./foo
   * ```
   * @name gitignore:agda
   * @api public
   */

  app.task('agda', ['gitignore-agda']);
  app.task('gitignore-agda', { silent: true }, function() {
    return file(app, '../templates/Agda.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Android to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:android
   * $ gen gitignore:android --dest ./foo
   * ```
   * @name gitignore:android
   * @api public
   */

  app.task('android', ['gitignore-android']);
  app.task('gitignore-android', { silent: true }, function() {
    return file(app, '../templates/Android.gitignore');
  });

  /**
   * Generate a `.gitignore` file for AppEngine to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:appengine
   * $ gen gitignore:appengine --dest ./foo
   * ```
   * @name gitignore:appengine
   * @api public
   */

  app.task('appengine', ['gitignore-appengine']);
  app.task('gitignore-appengine', { silent: true }, function() {
    return file(app, '../templates/AppEngine.gitignore');
  });

  /**
   * Generate a `.gitignore` file for AppceleratorTitanium to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:appceleratortitanium
   * $ gen gitignore:appceleratortitanium --dest ./foo
   * ```
   * @name gitignore:appceleratortitanium
   * @api public
   */

  app.task('appceleratortitanium', ['gitignore-appceleratortitanium']);
  app.task('gitignore-appceleratortitanium', { silent: true }, function() {
    return file(app, '../templates/AppceleratorTitanium.gitignore');
  });

  /**
   * Generate a `.gitignore` file for ArchLinuxPackages to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:archlinuxpackages
   * $ gen gitignore:archlinuxpackages --dest ./foo
   * ```
   * @name gitignore:archlinuxpackages
   * @api public
   */

  app.task('archlinuxpackages', ['gitignore-archlinuxpackages']);
  app.task('gitignore-archlinuxpackages', { silent: true }, function() {
    return file(app, '../templates/ArchLinuxPackages.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Autotools to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:autotools
   * $ gen gitignore:autotools --dest ./foo
   * ```
   * @name gitignore:autotools
   * @api public
   */

  app.task('autotools', ['gitignore-autotools']);
  app.task('gitignore-autotools', { silent: true }, function() {
    return file(app, '../templates/Autotools.gitignore');
  });

  /**
   * Generate a `.gitignore` file for C++ to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:c++
   * $ gen gitignore:c++ --dest ./foo
   * ```
   * @name gitignore:c++
   * @api public
   */

  app.task('c++', ['gitignore-c++']);
  app.task('gitignore-c++', { silent: true }, function() {
    return file(app, '../templates/C++.gitignore');
  });

  /**
   * Generate a `.gitignore` file for C to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:c
   * $ gen gitignore:c --dest ./foo
   * ```
   * @name gitignore:c
   * @api public
   */

  app.task('c', ['gitignore-c']);
  app.task('gitignore-c', { silent: true }, function() {
    return file(app, '../templates/C.gitignore');
  });

  /**
   * Generate a `.gitignore` file for CFWheels to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:cfwheels
   * $ gen gitignore:cfwheels --dest ./foo
   * ```
   * @name gitignore:cfwheels
   * @api public
   */

  app.task('cfwheels', ['gitignore-cfwheels']);
  app.task('gitignore-cfwheels', { silent: true }, function() {
    return file(app, '../templates/CFWheels.gitignore');
  });

  /**
   * Generate a `.gitignore` file for CMake to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:cmake
   * $ gen gitignore:cmake --dest ./foo
   * ```
   * @name gitignore:cmake
   * @api public
   */

  app.task('cmake', ['gitignore-cmake']);
  app.task('gitignore-cmake', { silent: true }, function() {
    return file(app, '../templates/CMake.gitignore');
  });

  /**
   * Generate a `.gitignore` file for CUDA to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:cuda
   * $ gen gitignore:cuda --dest ./foo
   * ```
   * @name gitignore:cuda
   * @api public
   */

  app.task('cuda', ['gitignore-cuda']);
  app.task('gitignore-cuda', { silent: true }, function() {
    return file(app, '../templates/CUDA.gitignore');
  });

  /**
   * Generate a `.gitignore` file for CakePHP to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:cakephp
   * $ gen gitignore:cakephp --dest ./foo
   * ```
   * @name gitignore:cakephp
   * @api public
   */

  app.task('cakephp', ['gitignore-cakephp']);
  app.task('gitignore-cakephp', { silent: true }, function() {
    return file(app, '../templates/CakePHP.gitignore');
  });

  /**
   * Generate a `.gitignore` file for ChefCookbook to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:chefcookbook
   * $ gen gitignore:chefcookbook --dest ./foo
   * ```
   * @name gitignore:chefcookbook
   * @api public
   */

  app.task('chefcookbook', ['gitignore-chefcookbook']);
  app.task('gitignore-chefcookbook', { silent: true }, function() {
    return file(app, '../templates/ChefCookbook.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Clojure to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:clojure
   * $ gen gitignore:clojure --dest ./foo
   * ```
   * @name gitignore:clojure
   * @api public
   */

  app.task('clojure', ['gitignore-clojure']);
  app.task('gitignore-clojure', { silent: true }, function() {
    return file(app, '../templates/Clojure.gitignore');
  });

  /**
   * Generate a `.gitignore` file for CodeIgniter to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:codeigniter
   * $ gen gitignore:codeigniter --dest ./foo
   * ```
   * @name gitignore:codeigniter
   * @api public
   */

  app.task('codeigniter', ['gitignore-codeigniter']);
  app.task('gitignore-codeigniter', { silent: true }, function() {
    return file(app, '../templates/CodeIgniter.gitignore');
  });

  /**
   * Generate a `.gitignore` file for CommonLisp to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:commonlisp
   * $ gen gitignore:commonlisp --dest ./foo
   * ```
   * @name gitignore:commonlisp
   * @api public
   */

  app.task('commonlisp', ['gitignore-commonlisp']);
  app.task('gitignore-commonlisp', { silent: true }, function() {
    return file(app, '../templates/CommonLisp.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Composer to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:composer
   * $ gen gitignore:composer --dest ./foo
   * ```
   * @name gitignore:composer
   * @api public
   */

  app.task('composer', ['gitignore-composer']);
  app.task('gitignore-composer', { silent: true }, function() {
    return file(app, '../templates/Composer.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Concrete5 to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:concrete5
   * $ gen gitignore:concrete5 --dest ./foo
   * ```
   * @name gitignore:concrete5
   * @api public
   */

  app.task('concrete5', ['gitignore-concrete5']);
  app.task('gitignore-concrete5', { silent: true }, function() {
    return file(app, '../templates/Concrete5.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Coq to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:coq
   * $ gen gitignore:coq --dest ./foo
   * ```
   * @name gitignore:coq
   * @api public
   */

  app.task('coq', ['gitignore-coq']);
  app.task('gitignore-coq', { silent: true }, function() {
    return file(app, '../templates/Coq.gitignore');
  });

  /**
   * Generate a `.gitignore` file for CraftCMS to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:craftcms
   * $ gen gitignore:craftcms --dest ./foo
   * ```
   * @name gitignore:craftcms
   * @api public
   */

  app.task('craftcms', ['gitignore-craftcms']);
  app.task('gitignore-craftcms', { silent: true }, function() {
    return file(app, '../templates/CraftCMS.gitignore');
  });

  /**
   * Generate a `.gitignore` file for D to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:d
   * $ gen gitignore:d --dest ./foo
   * ```
   * @name gitignore:d
   * @api public
   */

  app.task('d', ['gitignore-d']);
  app.task('gitignore-d', { silent: true }, function() {
    return file(app, '../templates/D.gitignore');
  });

  /**
   * Generate a `.gitignore` file for DM to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:dm
   * $ gen gitignore:dm --dest ./foo
   * ```
   * @name gitignore:dm
   * @api public
   */

  app.task('dm', ['gitignore-dm']);
  app.task('gitignore-dm', { silent: true }, function() {
    return file(app, '../templates/DM.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Dart to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:dart
   * $ gen gitignore:dart --dest ./foo
   * ```
   * @name gitignore:dart
   * @api public
   */

  app.task('dart', ['gitignore-dart']);
  app.task('gitignore-dart', { silent: true }, function() {
    return file(app, '../templates/Dart.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Delphi to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:delphi
   * $ gen gitignore:delphi --dest ./foo
   * ```
   * @name gitignore:delphi
   * @api public
   */

  app.task('delphi', ['gitignore-delphi']);
  app.task('gitignore-delphi', { silent: true }, function() {
    return file(app, '../templates/Delphi.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Drupal to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:drupal
   * $ gen gitignore:drupal --dest ./foo
   * ```
   * @name gitignore:drupal
   * @api public
   */

  app.task('drupal', ['gitignore-drupal']);
  app.task('gitignore-drupal', { silent: true }, function() {
    return file(app, '../templates/Drupal.gitignore');
  });

  /**
   * Generate a `.gitignore` file for EPiServer to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:episerver
   * $ gen gitignore:episerver --dest ./foo
   * ```
   * @name gitignore:episerver
   * @api public
   */

  app.task('episerver', ['gitignore-episerver']);
  app.task('gitignore-episerver', { silent: true }, function() {
    return file(app, '../templates/EPiServer.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Eagle to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:eagle
   * $ gen gitignore:eagle --dest ./foo
   * ```
   * @name gitignore:eagle
   * @api public
   */

  app.task('eagle', ['gitignore-eagle']);
  app.task('gitignore-eagle', { silent: true }, function() {
    return file(app, '../templates/Eagle.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Elisp to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:elisp
   * $ gen gitignore:elisp --dest ./foo
   * ```
   * @name gitignore:elisp
   * @api public
   */

  app.task('elisp', ['gitignore-elisp']);
  app.task('gitignore-elisp', { silent: true }, function() {
    return file(app, '../templates/Elisp.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Elixir to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:elixir
   * $ gen gitignore:elixir --dest ./foo
   * ```
   * @name gitignore:elixir
   * @api public
   */

  app.task('elixir', ['gitignore-elixir']);
  app.task('gitignore-elixir', { silent: true }, function() {
    return file(app, '../templates/Elixir.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Elm to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:elm
   * $ gen gitignore:elm --dest ./foo
   * ```
   * @name gitignore:elm
   * @api public
   */

  app.task('elm', ['gitignore-elm']);
  app.task('gitignore-elm', { silent: true }, function() {
    return file(app, '../templates/Elm.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Erlang to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:erlang
   * $ gen gitignore:erlang --dest ./foo
   * ```
   * @name gitignore:erlang
   * @api public
   */

  app.task('erlang', ['gitignore-erlang']);
  app.task('gitignore-erlang', { silent: true }, function() {
    return file(app, '../templates/Erlang.gitignore');
  });

  /**
   * Generate a `.gitignore` file for ExpressionEngine to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:expressionengine
   * $ gen gitignore:expressionengine --dest ./foo
   * ```
   * @name gitignore:expressionengine
   * @api public
   */

  app.task('expressionengine', ['gitignore-expressionengine']);
  app.task('gitignore-expressionengine', { silent: true }, function() {
    return file(app, '../templates/ExpressionEngine.gitignore');
  });

  /**
   * Generate a `.gitignore` file for ExtJs to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:extjs
   * $ gen gitignore:extjs --dest ./foo
   * ```
   * @name gitignore:extjs
   * @api public
   */

  app.task('extjs', ['gitignore-extjs']);
  app.task('gitignore-extjs', { silent: true }, function() {
    return file(app, '../templates/ExtJs.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Fancy to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:fancy
   * $ gen gitignore:fancy --dest ./foo
   * ```
   * @name gitignore:fancy
   * @api public
   */

  app.task('fancy', ['gitignore-fancy']);
  app.task('gitignore-fancy', { silent: true }, function() {
    return file(app, '../templates/Fancy.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Finale to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:finale
   * $ gen gitignore:finale --dest ./foo
   * ```
   * @name gitignore:finale
   * @api public
   */

  app.task('finale', ['gitignore-finale']);
  app.task('gitignore-finale', { silent: true }, function() {
    return file(app, '../templates/Finale.gitignore');
  });

  /**
   * Generate a `.gitignore` file for ForceDotCom to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:forcedotcom
   * $ gen gitignore:forcedotcom --dest ./foo
   * ```
   * @name gitignore:forcedotcom
   * @api public
   */

  app.task('forcedotcom', ['gitignore-forcedotcom']);
  app.task('gitignore-forcedotcom', { silent: true }, function() {
    return file(app, '../templates/ForceDotCom.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Fortran to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:fortran
   * $ gen gitignore:fortran --dest ./foo
   * ```
   * @name gitignore:fortran
   * @api public
   */

  app.task('fortran', ['gitignore-fortran']);
  app.task('gitignore-fortran', { silent: true }, function() {
    return file(app, '../templates/Fortran.gitignore');
  });

  /**
   * Generate a `.gitignore` file for FuelPHP to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:fuelphp
   * $ gen gitignore:fuelphp --dest ./foo
   * ```
   * @name gitignore:fuelphp
   * @api public
   */

  app.task('fuelphp', ['gitignore-fuelphp']);
  app.task('gitignore-fuelphp', { silent: true }, function() {
    return file(app, '../templates/FuelPHP.gitignore');
  });

  /**
   * Generate a `.gitignore` file for GWT to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:gwt
   * $ gen gitignore:gwt --dest ./foo
   * ```
   * @name gitignore:gwt
   * @api public
   */

  app.task('gwt', ['gitignore-gwt']);
  app.task('gitignore-gwt', { silent: true }, function() {
    return file(app, '../templates/GWT.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Gcov to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:gcov
   * $ gen gitignore:gcov --dest ./foo
   * ```
   * @name gitignore:gcov
   * @api public
   */

  app.task('gcov', ['gitignore-gcov']);
  app.task('gitignore-gcov', { silent: true }, function() {
    return file(app, '../templates/Gcov.gitignore');
  });

  /**
   * Generate a `.gitignore` file for GitBook to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:gitbook
   * $ gen gitignore:gitbook --dest ./foo
   * ```
   * @name gitignore:gitbook
   * @api public
   */

  app.task('gitbook', ['gitignore-gitbook']);
  app.task('gitignore-gitbook', { silent: true }, function() {
    return file(app, '../templates/GitBook.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Go to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:go
   * $ gen gitignore:go --dest ./foo
   * ```
   * @name gitignore:go
   * @api public
   */

  app.task('go', ['gitignore-go']);
  app.task('gitignore-go', { silent: true }, function() {
    return file(app, '../templates/Go.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Gradle to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:gradle
   * $ gen gitignore:gradle --dest ./foo
   * ```
   * @name gitignore:gradle
   * @api public
   */

  app.task('gradle', ['gitignore-gradle']);
  app.task('gitignore-gradle', { silent: true }, function() {
    return file(app, '../templates/Gradle.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Grails to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:grails
   * $ gen gitignore:grails --dest ./foo
   * ```
   * @name gitignore:grails
   * @api public
   */

  app.task('grails', ['gitignore-grails']);
  app.task('gitignore-grails', { silent: true }, function() {
    return file(app, '../templates/Grails.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Haskell to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:haskell
   * $ gen gitignore:haskell --dest ./foo
   * ```
   * @name gitignore:haskell
   * @api public
   */

  app.task('haskell', ['gitignore-haskell']);
  app.task('gitignore-haskell', { silent: true }, function() {
    return file(app, '../templates/Haskell.gitignore');
  });

  /**
   * Generate a `.gitignore` file for IGORPro to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:igorpro
   * $ gen gitignore:igorpro --dest ./foo
   * ```
   * @name gitignore:igorpro
   * @api public
   */

  app.task('igorpro', ['gitignore-igorpro']);
  app.task('gitignore-igorpro', { silent: true }, function() {
    return file(app, '../templates/IGORPro.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Idris to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:idris
   * $ gen gitignore:idris --dest ./foo
   * ```
   * @name gitignore:idris
   * @api public
   */

  app.task('idris', ['gitignore-idris']);
  app.task('gitignore-idris', { silent: true }, function() {
    return file(app, '../templates/Idris.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Java to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:java
   * $ gen gitignore:java --dest ./foo
   * ```
   * @name gitignore:java
   * @api public
   */

  app.task('java', ['gitignore-java']);
  app.task('gitignore-java', { silent: true }, function() {
    return file(app, '../templates/Java.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Jboss to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:jboss
   * $ gen gitignore:jboss --dest ./foo
   * ```
   * @name gitignore:jboss
   * @api public
   */

  app.task('jboss', ['gitignore-jboss']);
  app.task('gitignore-jboss', { silent: true }, function() {
    return file(app, '../templates/Jboss.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Jekyll to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:jekyll
   * $ gen gitignore:jekyll --dest ./foo
   * ```
   * @name gitignore:jekyll
   * @api public
   */

  app.task('jekyll', ['gitignore-jekyll']);
  app.task('gitignore-jekyll', { silent: true }, function() {
    return file(app, '../templates/Jekyll.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Joomla to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:joomla
   * $ gen gitignore:joomla --dest ./foo
   * ```
   * @name gitignore:joomla
   * @api public
   */

  app.task('joomla', ['gitignore-joomla']);
  app.task('gitignore-joomla', { silent: true }, function() {
    return file(app, '../templates/Joomla.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Julia to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:julia
   * $ gen gitignore:julia --dest ./foo
   * ```
   * @name gitignore:julia
   * @api public
   */

  app.task('julia', ['gitignore-julia']);
  app.task('gitignore-julia', { silent: true }, function() {
    return file(app, '../templates/Julia.gitignore');
  });

  /**
   * Generate a `.gitignore` file for KiCad to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:kicad
   * $ gen gitignore:kicad --dest ./foo
   * ```
   * @name gitignore:kicad
   * @api public
   */

  app.task('kicad', ['gitignore-kicad']);
  app.task('gitignore-kicad', { silent: true }, function() {
    return file(app, '../templates/KiCad.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Kohana to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:kohana
   * $ gen gitignore:kohana --dest ./foo
   * ```
   * @name gitignore:kohana
   * @api public
   */

  app.task('kohana', ['gitignore-kohana']);
  app.task('gitignore-kohana', { silent: true }, function() {
    return file(app, '../templates/Kohana.gitignore');
  });

  /**
   * Generate a `.gitignore` file for LabVIEW to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:labview
   * $ gen gitignore:labview --dest ./foo
   * ```
   * @name gitignore:labview
   * @api public
   */

  app.task('labview', ['gitignore-labview']);
  app.task('gitignore-labview', { silent: true }, function() {
    return file(app, '../templates/LabVIEW.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Laravel to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:laravel
   * $ gen gitignore:laravel --dest ./foo
   * ```
   * @name gitignore:laravel
   * @api public
   */

  app.task('laravel', ['gitignore-laravel']);
  app.task('gitignore-laravel', { silent: true }, function() {
    return file(app, '../templates/Laravel.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Leiningen to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:leiningen
   * $ gen gitignore:leiningen --dest ./foo
   * ```
   * @name gitignore:leiningen
   * @api public
   */

  app.task('leiningen', ['gitignore-leiningen']);
  app.task('gitignore-leiningen', { silent: true }, function() {
    return file(app, '../templates/Leiningen.gitignore');
  });

  /**
   * Generate a `.gitignore` file for LemonStand to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:lemonstand
   * $ gen gitignore:lemonstand --dest ./foo
   * ```
   * @name gitignore:lemonstand
   * @api public
   */

  app.task('lemonstand', ['gitignore-lemonstand']);
  app.task('gitignore-lemonstand', { silent: true }, function() {
    return file(app, '../templates/LemonStand.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Lilypond to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:lilypond
   * $ gen gitignore:lilypond --dest ./foo
   * ```
   * @name gitignore:lilypond
   * @api public
   */

  app.task('lilypond', ['gitignore-lilypond']);
  app.task('gitignore-lilypond', { silent: true }, function() {
    return file(app, '../templates/Lilypond.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Lithium to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:lithium
   * $ gen gitignore:lithium --dest ./foo
   * ```
   * @name gitignore:lithium
   * @api public
   */

  app.task('lithium', ['gitignore-lithium']);
  app.task('gitignore-lithium', { silent: true }, function() {
    return file(app, '../templates/Lithium.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Lua to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:lua
   * $ gen gitignore:lua --dest ./foo
   * ```
   * @name gitignore:lua
   * @api public
   */

  app.task('lua', ['gitignore-lua']);
  app.task('gitignore-lua', { silent: true }, function() {
    return file(app, '../templates/Lua.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Magento to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:magento
   * $ gen gitignore:magento --dest ./foo
   * ```
   * @name gitignore:magento
   * @api public
   */

  app.task('magento', ['gitignore-magento']);
  app.task('gitignore-magento', { silent: true }, function() {
    return file(app, '../templates/Magento.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Maven to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:maven
   * $ gen gitignore:maven --dest ./foo
   * ```
   * @name gitignore:maven
   * @api public
   */

  app.task('maven', ['gitignore-maven']);
  app.task('gitignore-maven', { silent: true }, function() {
    return file(app, '../templates/Maven.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Mercury to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:mercury
   * $ gen gitignore:mercury --dest ./foo
   * ```
   * @name gitignore:mercury
   * @api public
   */

  app.task('mercury', ['gitignore-mercury']);
  app.task('gitignore-mercury', { silent: true }, function() {
    return file(app, '../templates/Mercury.gitignore');
  });

  /**
   * Generate a `.gitignore` file for MetaProgrammingSystem to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:metaprogrammingsystem
   * $ gen gitignore:metaprogrammingsystem --dest ./foo
   * ```
   * @name gitignore:metaprogrammingsystem
   * @api public
   */

  app.task('metaprogrammingsystem', ['gitignore-metaprogrammingsystem']);
  app.task('gitignore-metaprogrammingsystem', { silent: true }, function() {
    return file(app, '../templates/MetaProgrammingSystem.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Minimal to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:minimal
   * $ gen gitignore:minimal --dest ./foo
   * ```
   * @name gitignore:minimal
   * @api public
   */

  app.task('minimal', ['gitignore-minimal']);
  app.task('gitignore-minimal', { silent: true }, function() {
    return file(app, '../templates/Minimal.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Nanoc to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:nanoc
   * $ gen gitignore:nanoc --dest ./foo
   * ```
   * @name gitignore:nanoc
   * @api public
   */

  app.task('nanoc', ['gitignore-nanoc']);
  app.task('gitignore-nanoc', { silent: true }, function() {
    return file(app, '../templates/Nanoc.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Nim to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:nim
   * $ gen gitignore:nim --dest ./foo
   * ```
   * @name gitignore:nim
   * @api public
   */

  app.task('nim', ['gitignore-nim']);
  app.task('gitignore-nim', { silent: true }, function() {
    return file(app, '../templates/Nim.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Node to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:node
   * $ gen gitignore:node --dest ./foo
   * ```
   * @name gitignore:node
   * @api public
   */

  app.task('node', ['gitignore-node']);
  app.task('gitignore-node', { silent: true }, function() {
    return file(app, '../templates/Node.gitignore');
  });

  /**
   * Generate a `.gitignore` file for OCaml to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:ocaml
   * $ gen gitignore:ocaml --dest ./foo
   * ```
   * @name gitignore:ocaml
   * @api public
   */

  app.task('ocaml', ['gitignore-ocaml']);
  app.task('gitignore-ocaml', { silent: true }, function() {
    return file(app, '../templates/OCaml.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Objective-C to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:objective-c
   * $ gen gitignore:objective-c --dest ./foo
   * ```
   * @name gitignore:objective-c
   * @api public
   */

  app.task('objective-c', ['gitignore-objective-c']);
  app.task('gitignore-objective-c', { silent: true }, function() {
    return file(app, '../templates/Objective-C.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Opa to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:opa
   * $ gen gitignore:opa --dest ./foo
   * ```
   * @name gitignore:opa
   * @api public
   */

  app.task('opa', ['gitignore-opa']);
  app.task('gitignore-opa', { silent: true }, function() {
    return file(app, '../templates/Opa.gitignore');
  });

  /**
   * Generate a `.gitignore` file for OpenCart to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:opencart
   * $ gen gitignore:opencart --dest ./foo
   * ```
   * @name gitignore:opencart
   * @api public
   */

  app.task('opencart', ['gitignore-opencart']);
  app.task('gitignore-opencart', { silent: true }, function() {
    return file(app, '../templates/OpenCart.gitignore');
  });

  /**
   * Generate a `.gitignore` file for OracleForms to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:oracleforms
   * $ gen gitignore:oracleforms --dest ./foo
   * ```
   * @name gitignore:oracleforms
   * @api public
   */

  app.task('oracleforms', ['gitignore-oracleforms']);
  app.task('gitignore-oracleforms', { silent: true }, function() {
    return file(app, '../templates/OracleForms.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Packer to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:packer
   * $ gen gitignore:packer --dest ./foo
   * ```
   * @name gitignore:packer
   * @api public
   */

  app.task('packer', ['gitignore-packer']);
  app.task('gitignore-packer', { silent: true }, function() {
    return file(app, '../templates/Packer.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Perl to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:perl
   * $ gen gitignore:perl --dest ./foo
   * ```
   * @name gitignore:perl
   * @api public
   */

  app.task('perl', ['gitignore-perl']);
  app.task('gitignore-perl', { silent: true }, function() {
    return file(app, '../templates/Perl.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Phalcon to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:phalcon
   * $ gen gitignore:phalcon --dest ./foo
   * ```
   * @name gitignore:phalcon
   * @api public
   */

  app.task('phalcon', ['gitignore-phalcon']);
  app.task('gitignore-phalcon', { silent: true }, function() {
    return file(app, '../templates/Phalcon.gitignore');
  });

  /**
   * Generate a `.gitignore` file for PlayFramework to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:playframework
   * $ gen gitignore:playframework --dest ./foo
   * ```
   * @name gitignore:playframework
   * @api public
   */

  app.task('playframework', ['gitignore-playframework']);
  app.task('gitignore-playframework', { silent: true }, function() {
    return file(app, '../templates/PlayFramework.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Plone to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:plone
   * $ gen gitignore:plone --dest ./foo
   * ```
   * @name gitignore:plone
   * @api public
   */

  app.task('plone', ['gitignore-plone']);
  app.task('gitignore-plone', { silent: true }, function() {
    return file(app, '../templates/Plone.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Prestashop to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:prestashop
   * $ gen gitignore:prestashop --dest ./foo
   * ```
   * @name gitignore:prestashop
   * @api public
   */

  app.task('prestashop', ['gitignore-prestashop']);
  app.task('gitignore-prestashop', { silent: true }, function() {
    return file(app, '../templates/Prestashop.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Processing to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:processing
   * $ gen gitignore:processing --dest ./foo
   * ```
   * @name gitignore:processing
   * @api public
   */

  app.task('processing', ['gitignore-processing']);
  app.task('gitignore-processing', { silent: true }, function() {
    return file(app, '../templates/Processing.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Python to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:python
   * $ gen gitignore:python --dest ./foo
   * ```
   * @name gitignore:python
   * @api public
   */

  app.task('python', ['gitignore-python']);
  app.task('gitignore-python', { silent: true }, function() {
    return file(app, '../templates/Python.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Qooxdoo to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:qooxdoo
   * $ gen gitignore:qooxdoo --dest ./foo
   * ```
   * @name gitignore:qooxdoo
   * @api public
   */

  app.task('qooxdoo', ['gitignore-qooxdoo']);
  app.task('gitignore-qooxdoo', { silent: true }, function() {
    return file(app, '../templates/Qooxdoo.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Qt to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:qt
   * $ gen gitignore:qt --dest ./foo
   * ```
   * @name gitignore:qt
   * @api public
   */

  app.task('qt', ['gitignore-qt']);
  app.task('gitignore-qt', { silent: true }, function() {
    return file(app, '../templates/Qt.gitignore');
  });

  /**
   * Generate a `.gitignore` file for R to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:r
   * $ gen gitignore:r --dest ./foo
   * ```
   * @name gitignore:r
   * @api public
   */

  app.task('r', ['gitignore-r']);
  app.task('gitignore-r', { silent: true }, function() {
    return file(app, '../templates/R.gitignore');
  });

  /**
   * Generate a `.gitignore` file for ROS to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:ros
   * $ gen gitignore:ros --dest ./foo
   * ```
   * @name gitignore:ros
   * @api public
   */

  app.task('ros', ['gitignore-ros']);
  app.task('gitignore-ros', { silent: true }, function() {
    return file(app, '../templates/ROS.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Rails to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:rails
   * $ gen gitignore:rails --dest ./foo
   * ```
   * @name gitignore:rails
   * @api public
   */

  app.task('rails', ['gitignore-rails']);
  app.task('gitignore-rails', { silent: true }, function() {
    return file(app, '../templates/Rails.gitignore');
  });

  /**
   * Generate a `.gitignore` file for RhodesRhomobile to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:rhodesrhomobile
   * $ gen gitignore:rhodesrhomobile --dest ./foo
   * ```
   * @name gitignore:rhodesrhomobile
   * @api public
   */

  app.task('rhodesrhomobile', ['gitignore-rhodesrhomobile']);
  app.task('gitignore-rhodesrhomobile', { silent: true }, function() {
    return file(app, '../templates/RhodesRhomobile.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Ruby to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:ruby
   * $ gen gitignore:ruby --dest ./foo
   * ```
   * @name gitignore:ruby
   * @api public
   */

  app.task('ruby', ['gitignore-ruby']);
  app.task('gitignore-ruby', { silent: true }, function() {
    return file(app, '../templates/Ruby.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Rust to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:rust
   * $ gen gitignore:rust --dest ./foo
   * ```
   * @name gitignore:rust
   * @api public
   */

  app.task('rust', ['gitignore-rust']);
  app.task('gitignore-rust', { silent: true }, function() {
    return file(app, '../templates/Rust.gitignore');
  });

  /**
   * Generate a `.gitignore` file for SCons to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:scons
   * $ gen gitignore:scons --dest ./foo
   * ```
   * @name gitignore:scons
   * @api public
   */

  app.task('scons', ['gitignore-scons']);
  app.task('gitignore-scons', { silent: true }, function() {
    return file(app, '../templates/SCons.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Sass to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:sass
   * $ gen gitignore:sass --dest ./foo
   * ```
   * @name gitignore:sass
   * @api public
   */

  app.task('sass', ['gitignore-sass']);
  app.task('gitignore-sass', { silent: true }, function() {
    return file(app, '../templates/Sass.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Scala to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:scala
   * $ gen gitignore:scala --dest ./foo
   * ```
   * @name gitignore:scala
   * @api public
   */

  app.task('scala', ['gitignore-scala']);
  app.task('gitignore-scala', { silent: true }, function() {
    return file(app, '../templates/Scala.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Scheme to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:scheme
   * $ gen gitignore:scheme --dest ./foo
   * ```
   * @name gitignore:scheme
   * @api public
   */

  app.task('scheme', ['gitignore-scheme']);
  app.task('gitignore-scheme', { silent: true }, function() {
    return file(app, '../templates/Scheme.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Scrivener to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:scrivener
   * $ gen gitignore:scrivener --dest ./foo
   * ```
   * @name gitignore:scrivener
   * @api public
   */

  app.task('scrivener', ['gitignore-scrivener']);
  app.task('gitignore-scrivener', { silent: true }, function() {
    return file(app, '../templates/Scrivener.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Sdcc to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:sdcc
   * $ gen gitignore:sdcc --dest ./foo
   * ```
   * @name gitignore:sdcc
   * @api public
   */

  app.task('sdcc', ['gitignore-sdcc']);
  app.task('gitignore-sdcc', { silent: true }, function() {
    return file(app, '../templates/Sdcc.gitignore');
  });

  /**
   * Generate a `.gitignore` file for SeamGen to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:seamgen
   * $ gen gitignore:seamgen --dest ./foo
   * ```
   * @name gitignore:seamgen
   * @api public
   */

  app.task('seamgen', ['gitignore-seamgen']);
  app.task('gitignore-seamgen', { silent: true }, function() {
    return file(app, '../templates/SeamGen.gitignore');
  });

  /**
   * Generate a `.gitignore` file for SketchUp to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:sketchup
   * $ gen gitignore:sketchup --dest ./foo
   * ```
   * @name gitignore:sketchup
   * @api public
   */

  app.task('sketchup', ['gitignore-sketchup']);
  app.task('gitignore-sketchup', { silent: true }, function() {
    return file(app, '../templates/SketchUp.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Smalltalk to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:smalltalk
   * $ gen gitignore:smalltalk --dest ./foo
   * ```
   * @name gitignore:smalltalk
   * @api public
   */

  app.task('smalltalk', ['gitignore-smalltalk']);
  app.task('gitignore-smalltalk', { silent: true }, function() {
    return file(app, '../templates/Smalltalk.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Stella to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:stella
   * $ gen gitignore:stella --dest ./foo
   * ```
   * @name gitignore:stella
   * @api public
   */

  app.task('stella', ['gitignore-stella']);
  app.task('gitignore-stella', { silent: true }, function() {
    return file(app, '../templates/Stella.gitignore');
  });

  /**
   * Generate a `.gitignore` file for SugarCRM to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:sugarcrm
   * $ gen gitignore:sugarcrm --dest ./foo
   * ```
   * @name gitignore:sugarcrm
   * @api public
   */

  app.task('sugarcrm', ['gitignore-sugarcrm']);
  app.task('gitignore-sugarcrm', { silent: true }, function() {
    return file(app, '../templates/SugarCRM.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Swift to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:swift
   * $ gen gitignore:swift --dest ./foo
   * ```
   * @name gitignore:swift
   * @api public
   */

  app.task('swift', ['gitignore-swift']);
  app.task('gitignore-swift', { silent: true }, function() {
    return file(app, '../templates/Swift.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Symfony to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:symfony
   * $ gen gitignore:symfony --dest ./foo
   * ```
   * @name gitignore:symfony
   * @api public
   */

  app.task('symfony', ['gitignore-symfony']);
  app.task('gitignore-symfony', { silent: true }, function() {
    return file(app, '../templates/Symfony.gitignore');
  });

  /**
   * Generate a `.gitignore` file for SymphonyCMS to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:symphonycms
   * $ gen gitignore:symphonycms --dest ./foo
   * ```
   * @name gitignore:symphonycms
   * @api public
   */

  app.task('symphonycms', ['gitignore-symphonycms']);
  app.task('gitignore-symphonycms', { silent: true }, function() {
    return file(app, '../templates/SymphonyCMS.gitignore');
  });

  /**
   * Generate a `.gitignore` file for TeX to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:tex
   * $ gen gitignore:tex --dest ./foo
   * ```
   * @name gitignore:tex
   * @api public
   */

  app.task('tex', ['gitignore-tex']);
  app.task('gitignore-tex', { silent: true }, function() {
    return file(app, '../templates/TeX.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Terraform to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:terraform
   * $ gen gitignore:terraform --dest ./foo
   * ```
   * @name gitignore:terraform
   * @api public
   */

  app.task('terraform', ['gitignore-terraform']);
  app.task('gitignore-terraform', { silent: true }, function() {
    return file(app, '../templates/Terraform.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Textpattern to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:textpattern
   * $ gen gitignore:textpattern --dest ./foo
   * ```
   * @name gitignore:textpattern
   * @api public
   */

  app.task('textpattern', ['gitignore-textpattern']);
  app.task('gitignore-textpattern', { silent: true }, function() {
    return file(app, '../templates/Textpattern.gitignore');
  });

  /**
   * Generate a `.gitignore` file for TurboGears2 to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:turbogears2
   * $ gen gitignore:turbogears2 --dest ./foo
   * ```
   * @name gitignore:turbogears2
   * @api public
   */

  app.task('turbogears2', ['gitignore-turbogears2']);
  app.task('gitignore-turbogears2', { silent: true }, function() {
    return file(app, '../templates/TurboGears2.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Typo3 to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:typo3
   * $ gen gitignore:typo3 --dest ./foo
   * ```
   * @name gitignore:typo3
   * @api public
   */

  app.task('typo3', ['gitignore-typo3']);
  app.task('gitignore-typo3', { silent: true }, function() {
    return file(app, '../templates/Typo3.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Umbraco to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:umbraco
   * $ gen gitignore:umbraco --dest ./foo
   * ```
   * @name gitignore:umbraco
   * @api public
   */

  app.task('umbraco', ['gitignore-umbraco']);
  app.task('gitignore-umbraco', { silent: true }, function() {
    return file(app, '../templates/Umbraco.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Unity to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:unity
   * $ gen gitignore:unity --dest ./foo
   * ```
   * @name gitignore:unity
   * @api public
   */

  app.task('unity', ['gitignore-unity']);
  app.task('gitignore-unity', { silent: true }, function() {
    return file(app, '../templates/Unity.gitignore');
  });

  /**
   * Generate a `.gitignore` file for UnrealEngine to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:unrealengine
   * $ gen gitignore:unrealengine --dest ./foo
   * ```
   * @name gitignore:unrealengine
   * @api public
   */

  app.task('unrealengine', ['gitignore-unrealengine']);
  app.task('gitignore-unrealengine', { silent: true }, function() {
    return file(app, '../templates/UnrealEngine.gitignore');
  });

  /**
   * Generate a `.gitignore` file for VVVV to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:vvvv
   * $ gen gitignore:vvvv --dest ./foo
   * ```
   * @name gitignore:vvvv
   * @api public
   */

  app.task('vvvv', ['gitignore-vvvv']);
  app.task('gitignore-vvvv', { silent: true }, function() {
    return file(app, '../templates/VVVV.gitignore');
  });

  /**
   * Generate a `.gitignore` file for VisualStudio to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:visualstudio
   * $ gen gitignore:visualstudio --dest ./foo
   * ```
   * @name gitignore:visualstudio
   * @api public
   */

  app.task('visualstudio', ['gitignore-visualstudio']);
  app.task('gitignore-visualstudio', { silent: true }, function() {
    return file(app, '../templates/VisualStudio.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Waf to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:waf
   * $ gen gitignore:waf --dest ./foo
   * ```
   * @name gitignore:waf
   * @api public
   */

  app.task('waf', ['gitignore-waf']);
  app.task('gitignore-waf', { silent: true }, function() {
    return file(app, '../templates/Waf.gitignore');
  });

  /**
   * Generate a `.gitignore` file for WordPress to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:wordpress
   * $ gen gitignore:wordpress --dest ./foo
   * ```
   * @name gitignore:wordpress
   * @api public
   */

  app.task('wordpress', ['gitignore-wordpress']);
  app.task('gitignore-wordpress', { silent: true }, function() {
    return file(app, '../templates/WordPress.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Xojo to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:xojo
   * $ gen gitignore:xojo --dest ./foo
   * ```
   * @name gitignore:xojo
   * @api public
   */

  app.task('xojo', ['gitignore-xojo']);
  app.task('gitignore-xojo', { silent: true }, function() {
    return file(app, '../templates/Xojo.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Yeoman to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:yeoman
   * $ gen gitignore:yeoman --dest ./foo
   * ```
   * @name gitignore:yeoman
   * @api public
   */

  app.task('yeoman', ['gitignore-yeoman']);
  app.task('gitignore-yeoman', { silent: true }, function() {
    return file(app, '../templates/Yeoman.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Yii to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:yii
   * $ gen gitignore:yii --dest ./foo
   * ```
   * @name gitignore:yii
   * @api public
   */

  app.task('yii', ['gitignore-yii']);
  app.task('gitignore-yii', { silent: true }, function() {
    return file(app, '../templates/Yii.gitignore');
  });

  /**
   * Generate a `.gitignore` file for ZendFramework to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:zendframework
   * $ gen gitignore:zendframework --dest ./foo
   * ```
   * @name gitignore:zendframework
   * @api public
   */

  app.task('zendframework', ['gitignore-zendframework']);
  app.task('gitignore-zendframework', { silent: true }, function() {
    return file(app, '../templates/ZendFramework.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Zephir to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:zephir
   * $ gen gitignore:zephir --dest ./foo
   * ```
   * @name gitignore:zephir
   * @api public
   */

  app.task('zephir', ['gitignore-zephir']);
  app.task('gitignore-zephir', { silent: true }, function() {
    return file(app, '../templates/Zephir.gitignore');
  });

};
