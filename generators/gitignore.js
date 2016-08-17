'use strict';

module.exports = function(app) {

  /**
   * Generate a `.gitignore` file for Actionscript to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:actionscript
   * $ gen gitignore:actionscript --dest ./foo
   * ```
   * @name actionscript
   * @api public
   */

  app.task('actionscript', { silent: true }, function() {
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
   * @name ada
   * @api public
   */

  app.task('ada', { silent: true }, function() {
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
   * @name agda
   * @api public
   */

  app.task('agda', { silent: true }, function() {
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
   * @name android
   * @api public
   */

  app.task('android', { silent: true }, function() {
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
   * @name appengine
   * @api public
   */

  app.task('appengine', { silent: true }, function() {
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
   * @name appceleratortitanium
   * @api public
   */

  app.task('appceleratortitanium', { silent: true }, function() {
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
   * @name archlinuxpackages
   * @api public
   */

  app.task('archlinuxpackages', { silent: true }, function() {
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
   * @name autotools
   * @api public
   */

  app.task('autotools', { silent: true }, function() {
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
   * @name c++
   * @api public
   */

  app.task('c++', { silent: true }, function() {
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
   * @name c
   * @api public
   */

  app.task('c', { silent: true }, function() {
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
   * @name cfwheels
   * @api public
   */

  app.task('cfwheels', { silent: true }, function() {
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
   * @name cmake
   * @api public
   */

  app.task('cmake', { silent: true }, function() {
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
   * @name cuda
   * @api public
   */

  app.task('cuda', { silent: true }, function() {
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
   * @name cakephp
   * @api public
   */

  app.task('cakephp', { silent: true }, function() {
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
   * @name chefcookbook
   * @api public
   */

  app.task('chefcookbook', { silent: true }, function() {
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
   * @name clojure
   * @api public
   */

  app.task('clojure', { silent: true }, function() {
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
   * @name codeigniter
   * @api public
   */

  app.task('codeigniter', { silent: true }, function() {
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
   * @name commonlisp
   * @api public
   */

  app.task('commonlisp', { silent: true }, function() {
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
   * @name composer
   * @api public
   */

  app.task('composer', { silent: true }, function() {
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
   * @name concrete5
   * @api public
   */

  app.task('concrete5', { silent: true }, function() {
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
   * @name coq
   * @api public
   */

  app.task('coq', { silent: true }, function() {
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
   * @name craftcms
   * @api public
   */

  app.task('craftcms', { silent: true }, function() {
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
   * @name d
   * @api public
   */

  app.task('d', { silent: true }, function() {
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
   * @name dm
   * @api public
   */

  app.task('dm', { silent: true }, function() {
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
   * @name dart
   * @api public
   */

  app.task('dart', { silent: true }, function() {
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
   * @name delphi
   * @api public
   */

  app.task('delphi', { silent: true }, function() {
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
   * @name drupal
   * @api public
   */

  app.task('drupal', { silent: true }, function() {
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
   * @name episerver
   * @api public
   */

  app.task('episerver', { silent: true }, function() {
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
   * @name eagle
   * @api public
   */

  app.task('eagle', { silent: true }, function() {
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
   * @name elisp
   * @api public
   */

  app.task('elisp', { silent: true }, function() {
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
   * @name elixir
   * @api public
   */

  app.task('elixir', { silent: true }, function() {
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
   * @name elm
   * @api public
   */

  app.task('elm', { silent: true }, function() {
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
   * @name erlang
   * @api public
   */

  app.task('erlang', { silent: true }, function() {
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
   * @name expressionengine
   * @api public
   */

  app.task('expressionengine', { silent: true }, function() {
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
   * @name extjs
   * @api public
   */

  app.task('extjs', { silent: true }, function() {
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
   * @name fancy
   * @api public
   */

  app.task('fancy', { silent: true }, function() {
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
   * @name finale
   * @api public
   */

  app.task('finale', { silent: true }, function() {
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
   * @name forcedotcom
   * @api public
   */

  app.task('forcedotcom', { silent: true }, function() {
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
   * @name fortran
   * @api public
   */

  app.task('fortran', { silent: true }, function() {
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
   * @name fuelphp
   * @api public
   */

  app.task('fuelphp', { silent: true }, function() {
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
   * @name gwt
   * @api public
   */

  app.task('gwt', { silent: true }, function() {
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
   * @name gcov
   * @api public
   */

  app.task('gcov', { silent: true }, function() {
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
   * @name gitbook
   * @api public
   */

  app.task('gitbook', { silent: true }, function() {
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
   * @name go
   * @api public
   */

  app.task('go', { silent: true }, function() {
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
   * @name gradle
   * @api public
   */

  app.task('gradle', { silent: true }, function() {
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
   * @name grails
   * @api public
   */

  app.task('grails', { silent: true }, function() {
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
   * @name haskell
   * @api public
   */

  app.task('haskell', { silent: true }, function() {
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
   * @name igorpro
   * @api public
   */

  app.task('igorpro', { silent: true }, function() {
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
   * @name idris
   * @api public
   */

  app.task('idris', { silent: true }, function() {
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
   * @name java
   * @api public
   */

  app.task('java', { silent: true }, function() {
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
   * @name jboss
   * @api public
   */

  app.task('jboss', { silent: true }, function() {
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
   * @name jekyll
   * @api public
   */

  app.task('jekyll', { silent: true }, function() {
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
   * @name joomla
   * @api public
   */

  app.task('joomla', { silent: true }, function() {
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
   * @name julia
   * @api public
   */

  app.task('julia', { silent: true }, function() {
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
   * @name kicad
   * @api public
   */

  app.task('kicad', { silent: true }, function() {
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
   * @name kohana
   * @api public
   */

  app.task('kohana', { silent: true }, function() {
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
   * @name labview
   * @api public
   */

  app.task('labview', { silent: true }, function() {
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
   * @name laravel
   * @api public
   */

  app.task('laravel', { silent: true }, function() {
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
   * @name leiningen
   * @api public
   */

  app.task('leiningen', { silent: true }, function() {
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
   * @name lemonstand
   * @api public
   */

  app.task('lemonstand', { silent: true }, function() {
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
   * @name lilypond
   * @api public
   */

  app.task('lilypond', { silent: true }, function() {
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
   * @name lithium
   * @api public
   */

  app.task('lithium', { silent: true }, function() {
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
   * @name lua
   * @api public
   */

  app.task('lua', { silent: true }, function() {
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
   * @name magento
   * @api public
   */

  app.task('magento', { silent: true }, function() {
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
   * @name maven
   * @api public
   */

  app.task('maven', { silent: true }, function() {
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
   * @name mercury
   * @api public
   */

  app.task('mercury', { silent: true }, function() {
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
   * @name metaprogrammingsystem
   * @api public
   */

  app.task('metaprogrammingsystem', { silent: true }, function() {
    return file(app, '../templates/MetaProgrammingSystem.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Nanoc to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore:nanoc
   * $ gen gitignore:nanoc --dest ./foo
   * ```
   * @name nanoc
   * @api public
   */

  app.task('nanoc', { silent: true }, function() {
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
   * @name nim
   * @api public
   */

  app.task('nim', { silent: true }, function() {
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
   * @name node
   * @api public
   */

  app.task('node', { silent: true }, function() {
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
   * @name ocaml
   * @api public
   */

  app.task('ocaml', { silent: true }, function() {
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
   * @name objective-c
   * @api public
   */

  app.task('objective-c', { silent: true }, function() {
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
   * @name opa
   * @api public
   */

  app.task('opa', { silent: true }, function() {
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
   * @name opencart
   * @api public
   */

  app.task('opencart', { silent: true }, function() {
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
   * @name oracleforms
   * @api public
   */

  app.task('oracleforms', { silent: true }, function() {
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
   * @name packer
   * @api public
   */

  app.task('packer', { silent: true }, function() {
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
   * @name perl
   * @api public
   */

  app.task('perl', { silent: true }, function() {
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
   * @name phalcon
   * @api public
   */

  app.task('phalcon', { silent: true }, function() {
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
   * @name playframework
   * @api public
   */

  app.task('playframework', { silent: true }, function() {
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
   * @name plone
   * @api public
   */

  app.task('plone', { silent: true }, function() {
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
   * @name prestashop
   * @api public
   */

  app.task('prestashop', { silent: true }, function() {
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
   * @name processing
   * @api public
   */

  app.task('processing', { silent: true }, function() {
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
   * @name python
   * @api public
   */

  app.task('python', { silent: true }, function() {
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
   * @name qooxdoo
   * @api public
   */

  app.task('qooxdoo', { silent: true }, function() {
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
   * @name qt
   * @api public
   */

  app.task('qt', { silent: true }, function() {
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
   * @name r
   * @api public
   */

  app.task('r', { silent: true }, function() {
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
   * @name ros
   * @api public
   */

  app.task('ros', { silent: true }, function() {
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
   * @name rails
   * @api public
   */

  app.task('rails', { silent: true }, function() {
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
   * @name rhodesrhomobile
   * @api public
   */

  app.task('rhodesrhomobile', { silent: true }, function() {
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
   * @name ruby
   * @api public
   */

  app.task('ruby', { silent: true }, function() {
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
   * @name rust
   * @api public
   */

  app.task('rust', { silent: true }, function() {
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
   * @name scons
   * @api public
   */

  app.task('scons', { silent: true }, function() {
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
   * @name sass
   * @api public
   */

  app.task('sass', { silent: true }, function() {
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
   * @name scala
   * @api public
   */

  app.task('scala', { silent: true }, function() {
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
   * @name scheme
   * @api public
   */

  app.task('scheme', { silent: true }, function() {
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
   * @name scrivener
   * @api public
   */

  app.task('scrivener', { silent: true }, function() {
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
   * @name sdcc
   * @api public
   */

  app.task('sdcc', { silent: true }, function() {
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
   * @name seamgen
   * @api public
   */

  app.task('seamgen', { silent: true }, function() {
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
   * @name sketchup
   * @api public
   */

  app.task('sketchup', { silent: true }, function() {
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
   * @name smalltalk
   * @api public
   */

  app.task('smalltalk', { silent: true }, function() {
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
   * @name stella
   * @api public
   */

  app.task('stella', { silent: true }, function() {
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
   * @name sugarcrm
   * @api public
   */

  app.task('sugarcrm', { silent: true }, function() {
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
   * @name swift
   * @api public
   */

  app.task('swift', { silent: true }, function() {
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
   * @name symfony
   * @api public
   */

  app.task('symfony', { silent: true }, function() {
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
   * @name symphonycms
   * @api public
   */

  app.task('symphonycms', { silent: true }, function() {
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
   * @name tex
   * @api public
   */

  app.task('tex', { silent: true }, function() {
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
   * @name terraform
   * @api public
   */

  app.task('terraform', { silent: true }, function() {
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
   * @name textpattern
   * @api public
   */

  app.task('textpattern', { silent: true }, function() {
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
   * @name turbogears2
   * @api public
   */

  app.task('turbogears2', { silent: true }, function() {
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
   * @name typo3
   * @api public
   */

  app.task('typo3', { silent: true }, function() {
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
   * @name umbraco
   * @api public
   */

  app.task('umbraco', { silent: true }, function() {
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
   * @name unity
   * @api public
   */

  app.task('unity', { silent: true }, function() {
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
   * @name unrealengine
   * @api public
   */

  app.task('unrealengine', { silent: true }, function() {
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
   * @name vvvv
   * @api public
   */

  app.task('vvvv', { silent: true }, function() {
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
   * @name visualstudio
   * @api public
   */

  app.task('visualstudio', { silent: true }, function() {
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
   * @name waf
   * @api public
   */

  app.task('waf', { silent: true }, function() {
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
   * @name wordpress
   * @api public
   */

  app.task('wordpress', { silent: true }, function() {
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
   * @name xojo
   * @api public
   */

  app.task('xojo', { silent: true }, function() {
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
   * @name yeoman
   * @api public
   */

  app.task('yeoman', { silent: true }, function() {
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
   * @name yii
   * @api public
   */

  app.task('yii', { silent: true }, function() {
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
   * @name zendframework
   * @api public
   */

  app.task('zendframework', { silent: true }, function() {
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
   * @name zephir
   * @api public
   */

  app.task('zephir', { silent: true }, function() {
    return file(app, '../templates/Zephir.gitignore');
  });

};

/**
 * Generate a file
 */

function file(app, name) {
  return app.src(name, { cwd: __dirname })
    .pipe(app.renderFile('*')).on('error', console.log)
    .pipe(app.conflicts(app.cwd))
    .pipe(app.dest(app.cwd));
}
