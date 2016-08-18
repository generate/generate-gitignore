'use strict';

var file = require('./file');

module.exports = function(app) {

  /**
   * Generate a `.gitignore` file for Anjuta to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:anjuta
   * $ gen gitignore.global:anjuta --dest ./foo
   * ```
   * @name gitignore:global:anjuta
   * @api public
   */

  app.task('anjuta', ['gitignore-anjuta']);
  app.task('gitignore-anjuta', { silent: true }, function() {
    return file(app, '../templates/Global/Anjuta.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Archives to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:archives
   * $ gen gitignore.global:archives --dest ./foo
   * ```
   * @name gitignore:global:archives
   * @api public
   */

  app.task('archives', ['gitignore-archives']);
  app.task('gitignore-archives', { silent: true }, function() {
    return file(app, '../templates/Global/Archives.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Bazaar to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:bazaar
   * $ gen gitignore.global:bazaar --dest ./foo
   * ```
   * @name gitignore:global:bazaar
   * @api public
   */

  app.task('bazaar', ['gitignore-bazaar']);
  app.task('gitignore-bazaar', { silent: true }, function() {
    return file(app, '../templates/Global/Bazaar.gitignore');
  });

  /**
   * Generate a `.gitignore` file for BricxCC to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:bricxcc
   * $ gen gitignore.global:bricxcc --dest ./foo
   * ```
   * @name gitignore:global:bricxcc
   * @api public
   */

  app.task('bricxcc', ['gitignore-bricxcc']);
  app.task('gitignore-bricxcc', { silent: true }, function() {
    return file(app, '../templates/Global/BricxCC.gitignore');
  });

  /**
   * Generate a `.gitignore` file for CVS to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:cvs
   * $ gen gitignore.global:cvs --dest ./foo
   * ```
   * @name gitignore:global:cvs
   * @api public
   */

  app.task('cvs', ['gitignore-cvs']);
  app.task('gitignore-cvs', { silent: true }, function() {
    return file(app, '../templates/Global/CVS.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Calabash to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:calabash
   * $ gen gitignore.global:calabash --dest ./foo
   * ```
   * @name gitignore:global:calabash
   * @api public
   */

  app.task('calabash', ['gitignore-calabash']);
  app.task('gitignore-calabash', { silent: true }, function() {
    return file(app, '../templates/Global/Calabash.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Cloud9 to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:cloud9
   * $ gen gitignore.global:cloud9 --dest ./foo
   * ```
   * @name gitignore:global:cloud9
   * @api public
   */

  app.task('cloud9', ['gitignore-cloud9']);
  app.task('gitignore-cloud9', { silent: true }, function() {
    return file(app, '../templates/Global/Cloud9.gitignore');
  });

  /**
   * Generate a `.gitignore` file for CodeKit to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:codekit
   * $ gen gitignore.global:codekit --dest ./foo
   * ```
   * @name gitignore:global:codekit
   * @api public
   */

  app.task('codekit', ['gitignore-codekit']);
  app.task('gitignore-codekit', { silent: true }, function() {
    return file(app, '../templates/Global/CodeKit.gitignore');
  });

  /**
   * Generate a `.gitignore` file for DartEditor to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:darteditor
   * $ gen gitignore.global:darteditor --dest ./foo
   * ```
   * @name gitignore:global:darteditor
   * @api public
   */

  app.task('darteditor', ['gitignore-darteditor']);
  app.task('gitignore-darteditor', { silent: true }, function() {
    return file(app, '../templates/Global/DartEditor.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Dreamweaver to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:dreamweaver
   * $ gen gitignore.global:dreamweaver --dest ./foo
   * ```
   * @name gitignore:global:dreamweaver
   * @api public
   */

  app.task('dreamweaver', ['gitignore-dreamweaver']);
  app.task('gitignore-dreamweaver', { silent: true }, function() {
    return file(app, '../templates/Global/Dreamweaver.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Dropbox to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:dropbox
   * $ gen gitignore.global:dropbox --dest ./foo
   * ```
   * @name gitignore:global:dropbox
   * @api public
   */

  app.task('dropbox', ['gitignore-dropbox']);
  app.task('gitignore-dropbox', { silent: true }, function() {
    return file(app, '../templates/Global/Dropbox.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Eclipse to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:eclipse
   * $ gen gitignore.global:eclipse --dest ./foo
   * ```
   * @name gitignore:global:eclipse
   * @api public
   */

  app.task('eclipse', ['gitignore-eclipse']);
  app.task('gitignore-eclipse', { silent: true }, function() {
    return file(app, '../templates/Global/Eclipse.gitignore');
  });

  /**
   * Generate a `.gitignore` file for EiffelStudio to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:eiffelstudio
   * $ gen gitignore.global:eiffelstudio --dest ./foo
   * ```
   * @name gitignore:global:eiffelstudio
   * @api public
   */

  app.task('eiffelstudio', ['gitignore-eiffelstudio']);
  app.task('gitignore-eiffelstudio', { silent: true }, function() {
    return file(app, '../templates/Global/EiffelStudio.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Emacs to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:emacs
   * $ gen gitignore.global:emacs --dest ./foo
   * ```
   * @name gitignore:global:emacs
   * @api public
   */

  app.task('emacs', ['gitignore-emacs']);
  app.task('gitignore-emacs', { silent: true }, function() {
    return file(app, '../templates/Global/Emacs.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Ensime to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:ensime
   * $ gen gitignore.global:ensime --dest ./foo
   * ```
   * @name gitignore:global:ensime
   * @api public
   */

  app.task('ensime', ['gitignore-ensime']);
  app.task('gitignore-ensime', { silent: true }, function() {
    return file(app, '../templates/Global/Ensime.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Espresso to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:espresso
   * $ gen gitignore.global:espresso --dest ./foo
   * ```
   * @name gitignore:global:espresso
   * @api public
   */

  app.task('espresso', ['gitignore-espresso']);
  app.task('gitignore-espresso', { silent: true }, function() {
    return file(app, '../templates/Global/Espresso.gitignore');
  });

  /**
   * Generate a `.gitignore` file for FlexBuilder to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:flexbuilder
   * $ gen gitignore.global:flexbuilder --dest ./foo
   * ```
   * @name gitignore:global:flexbuilder
   * @api public
   */

  app.task('flexbuilder', ['gitignore-flexbuilder']);
  app.task('gitignore-flexbuilder', { silent: true }, function() {
    return file(app, '../templates/Global/FlexBuilder.gitignore');
  });

  /**
   * Generate a `.gitignore` file for GPG to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:gpg
   * $ gen gitignore.global:gpg --dest ./foo
   * ```
   * @name gitignore:global:gpg
   * @api public
   */

  app.task('gpg', ['gitignore-gpg']);
  app.task('gitignore-gpg', { silent: true }, function() {
    return file(app, '../templates/Global/GPG.gitignore');
  });

  /**
   * Generate a `.gitignore` file for IPythonNotebook to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:ipythonnotebook
   * $ gen gitignore.global:ipythonnotebook --dest ./foo
   * ```
   * @name gitignore:global:ipythonnotebook
   * @api public
   */

  app.task('ipythonnotebook', ['gitignore-ipythonnotebook']);
  app.task('gitignore-ipythonnotebook', { silent: true }, function() {
    return file(app, '../templates/Global/IPythonNotebook.gitignore');
  });

  /**
   * Generate a `.gitignore` file for JDeveloper to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:jdeveloper
   * $ gen gitignore.global:jdeveloper --dest ./foo
   * ```
   * @name gitignore:global:jdeveloper
   * @api public
   */

  app.task('jdeveloper', ['gitignore-jdeveloper']);
  app.task('gitignore-jdeveloper', { silent: true }, function() {
    return file(app, '../templates/Global/JDeveloper.gitignore');
  });

  /**
   * Generate a `.gitignore` file for JetBrains to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:jetbrains
   * $ gen gitignore.global:jetbrains --dest ./foo
   * ```
   * @name gitignore:global:jetbrains
   * @api public
   */

  app.task('jetbrains', ['gitignore-jetbrains']);
  app.task('gitignore-jetbrains', { silent: true }, function() {
    return file(app, '../templates/Global/JetBrains.gitignore');
  });

  /**
   * Generate a `.gitignore` file for KDevelop4 to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:kdevelop4
   * $ gen gitignore.global:kdevelop4 --dest ./foo
   * ```
   * @name gitignore:global:kdevelop4
   * @api public
   */

  app.task('kdevelop4', ['gitignore-kdevelop4']);
  app.task('gitignore-kdevelop4', { silent: true }, function() {
    return file(app, '../templates/Global/KDevelop4.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Kate to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:kate
   * $ gen gitignore.global:kate --dest ./foo
   * ```
   * @name gitignore:global:kate
   * @api public
   */

  app.task('kate', ['gitignore-kate']);
  app.task('gitignore-kate', { silent: true }, function() {
    return file(app, '../templates/Global/Kate.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Lazarus to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:lazarus
   * $ gen gitignore.global:lazarus --dest ./foo
   * ```
   * @name gitignore:global:lazarus
   * @api public
   */

  app.task('lazarus', ['gitignore-lazarus']);
  app.task('gitignore-lazarus', { silent: true }, function() {
    return file(app, '../templates/Global/Lazarus.gitignore');
  });

  /**
   * Generate a `.gitignore` file for LibreOffice to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:libreoffice
   * $ gen gitignore.global:libreoffice --dest ./foo
   * ```
   * @name gitignore:global:libreoffice
   * @api public
   */

  app.task('libreoffice', ['gitignore-libreoffice']);
  app.task('gitignore-libreoffice', { silent: true }, function() {
    return file(app, '../templates/Global/LibreOffice.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Linux to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:linux
   * $ gen gitignore.global:linux --dest ./foo
   * ```
   * @name gitignore:global:linux
   * @api public
   */

  app.task('linux', ['gitignore-linux']);
  app.task('gitignore-linux', { silent: true }, function() {
    return file(app, '../templates/Global/Linux.gitignore');
  });

  /**
   * Generate a `.gitignore` file for LyX to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:lyx
   * $ gen gitignore.global:lyx --dest ./foo
   * ```
   * @name gitignore:global:lyx
   * @api public
   */

  app.task('lyx', ['gitignore-lyx']);
  app.task('gitignore-lyx', { silent: true }, function() {
    return file(app, '../templates/Global/LyX.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Matlab to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:matlab
   * $ gen gitignore.global:matlab --dest ./foo
   * ```
   * @name gitignore:global:matlab
   * @api public
   */

  app.task('matlab', ['gitignore-matlab']);
  app.task('gitignore-matlab', { silent: true }, function() {
    return file(app, '../templates/Global/Matlab.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Mercurial to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:mercurial
   * $ gen gitignore.global:mercurial --dest ./foo
   * ```
   * @name gitignore:global:mercurial
   * @api public
   */

  app.task('mercurial', ['gitignore-mercurial']);
  app.task('gitignore-mercurial', { silent: true }, function() {
    return file(app, '../templates/Global/Mercurial.gitignore');
  });

  /**
   * Generate a `.gitignore` file for MicrosoftOffice to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:microsoftoffice
   * $ gen gitignore.global:microsoftoffice --dest ./foo
   * ```
   * @name gitignore:global:microsoftoffice
   * @api public
   */

  app.task('microsoftoffice', ['gitignore-microsoftoffice']);
  app.task('gitignore-microsoftoffice', { silent: true }, function() {
    return file(app, '../templates/Global/MicrosoftOffice.gitignore');
  });

  /**
   * Generate a `.gitignore` file for ModelSim to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:modelsim
   * $ gen gitignore.global:modelsim --dest ./foo
   * ```
   * @name gitignore:global:modelsim
   * @api public
   */

  app.task('modelsim', ['gitignore-modelsim']);
  app.task('gitignore-modelsim', { silent: true }, function() {
    return file(app, '../templates/Global/ModelSim.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Momentics to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:momentics
   * $ gen gitignore.global:momentics --dest ./foo
   * ```
   * @name gitignore:global:momentics
   * @api public
   */

  app.task('momentics', ['gitignore-momentics']);
  app.task('gitignore-momentics', { silent: true }, function() {
    return file(app, '../templates/Global/Momentics.gitignore');
  });

  /**
   * Generate a `.gitignore` file for MonoDevelop to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:monodevelop
   * $ gen gitignore.global:monodevelop --dest ./foo
   * ```
   * @name gitignore:global:monodevelop
   * @api public
   */

  app.task('monodevelop', ['gitignore-monodevelop']);
  app.task('gitignore-monodevelop', { silent: true }, function() {
    return file(app, '../templates/Global/MonoDevelop.gitignore');
  });

  /**
   * Generate a `.gitignore` file for NetBeans to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:netbeans
   * $ gen gitignore.global:netbeans --dest ./foo
   * ```
   * @name gitignore:global:netbeans
   * @api public
   */

  app.task('netbeans', ['gitignore-netbeans']);
  app.task('gitignore-netbeans', { silent: true }, function() {
    return file(app, '../templates/Global/NetBeans.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Ninja to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:ninja
   * $ gen gitignore.global:ninja --dest ./foo
   * ```
   * @name gitignore:global:ninja
   * @api public
   */

  app.task('ninja', ['gitignore-ninja']);
  app.task('gitignore-ninja', { silent: true }, function() {
    return file(app, '../templates/Global/Ninja.gitignore');
  });

  /**
   * Generate a `.gitignore` file for NotepadPP to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:notepadpp
   * $ gen gitignore.global:notepadpp --dest ./foo
   * ```
   * @name gitignore:global:notepadpp
   * @api public
   */

  app.task('notepadpp', ['gitignore-notepadpp']);
  app.task('gitignore-notepadpp', { silent: true }, function() {
    return file(app, '../templates/Global/NotepadPP.gitignore');
  });

  /**
   * Generate a `.gitignore` file for OSX to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:osx
   * $ gen gitignore.global:osx --dest ./foo
   * ```
   * @name gitignore:global:osx
   * @api public
   */

  app.task('osx', ['gitignore-osx']);
  app.task('gitignore-osx', { silent: true }, function() {
    return file(app, '../templates/Global/OSX.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Otto to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:otto
   * $ gen gitignore.global:otto --dest ./foo
   * ```
   * @name gitignore:global:otto
   * @api public
   */

  app.task('otto', ['gitignore-otto']);
  app.task('gitignore-otto', { silent: true }, function() {
    return file(app, '../templates/Global/Otto.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Redcar to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:redcar
   * $ gen gitignore.global:redcar --dest ./foo
   * ```
   * @name gitignore:global:redcar
   * @api public
   */

  app.task('redcar', ['gitignore-redcar']);
  app.task('gitignore-redcar', { silent: true }, function() {
    return file(app, '../templates/Global/Redcar.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Redis to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:redis
   * $ gen gitignore.global:redis --dest ./foo
   * ```
   * @name gitignore:global:redis
   * @api public
   */

  app.task('redis', ['gitignore-redis']);
  app.task('gitignore-redis', { silent: true }, function() {
    return file(app, '../templates/Global/Redis.gitignore');
  });

  /**
   * Generate a `.gitignore` file for SBT to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:sbt
   * $ gen gitignore.global:sbt --dest ./foo
   * ```
   * @name gitignore:global:sbt
   * @api public
   */

  app.task('sbt', ['gitignore-sbt']);
  app.task('gitignore-sbt', { silent: true }, function() {
    return file(app, '../templates/Global/SBT.gitignore');
  });

  /**
   * Generate a `.gitignore` file for SVN to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:svn
   * $ gen gitignore.global:svn --dest ./foo
   * ```
   * @name gitignore:global:svn
   * @api public
   */

  app.task('svn', ['gitignore-svn']);
  app.task('gitignore-svn', { silent: true }, function() {
    return file(app, '../templates/Global/SVN.gitignore');
  });

  /**
   * Generate a `.gitignore` file for SlickEdit to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:slickedit
   * $ gen gitignore.global:slickedit --dest ./foo
   * ```
   * @name gitignore:global:slickedit
   * @api public
   */

  app.task('slickedit', ['gitignore-slickedit']);
  app.task('gitignore-slickedit', { silent: true }, function() {
    return file(app, '../templates/Global/SlickEdit.gitignore');
  });

  /**
   * Generate a `.gitignore` file for SublimeText to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:sublimetext
   * $ gen gitignore.global:sublimetext --dest ./foo
   * ```
   * @name gitignore:global:sublimetext
   * @api public
   */

  app.task('sublimetext', ['gitignore-sublimetext']);
  app.task('gitignore-sublimetext', { silent: true }, function() {
    return file(app, '../templates/Global/SublimeText.gitignore');
  });

  /**
   * Generate a `.gitignore` file for SynopsysVCS to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:synopsysvcs
   * $ gen gitignore.global:synopsysvcs --dest ./foo
   * ```
   * @name gitignore:global:synopsysvcs
   * @api public
   */

  app.task('synopsysvcs', ['gitignore-synopsysvcs']);
  app.task('gitignore-synopsysvcs', { silent: true }, function() {
    return file(app, '../templates/Global/SynopsysVCS.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Tags to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:tags
   * $ gen gitignore.global:tags --dest ./foo
   * ```
   * @name gitignore:global:tags
   * @api public
   */

  app.task('tags', ['gitignore-tags']);
  app.task('gitignore-tags', { silent: true }, function() {
    return file(app, '../templates/Global/Tags.gitignore');
  });

  /**
   * Generate a `.gitignore` file for TextMate to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:textmate
   * $ gen gitignore.global:textmate --dest ./foo
   * ```
   * @name gitignore:global:textmate
   * @api public
   */

  app.task('textmate', ['gitignore-textmate']);
  app.task('gitignore-textmate', { silent: true }, function() {
    return file(app, '../templates/Global/TextMate.gitignore');
  });

  /**
   * Generate a `.gitignore` file for TortoiseGit to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:tortoisegit
   * $ gen gitignore.global:tortoisegit --dest ./foo
   * ```
   * @name gitignore:global:tortoisegit
   * @api public
   */

  app.task('tortoisegit', ['gitignore-tortoisegit']);
  app.task('gitignore-tortoisegit', { silent: true }, function() {
    return file(app, '../templates/Global/TortoiseGit.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Vagrant to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:vagrant
   * $ gen gitignore.global:vagrant --dest ./foo
   * ```
   * @name gitignore:global:vagrant
   * @api public
   */

  app.task('vagrant', ['gitignore-vagrant']);
  app.task('gitignore-vagrant', { silent: true }, function() {
    return file(app, '../templates/Global/Vagrant.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Vim to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:vim
   * $ gen gitignore.global:vim --dest ./foo
   * ```
   * @name gitignore:global:vim
   * @api public
   */

  app.task('vim', ['gitignore-vim']);
  app.task('gitignore-vim', { silent: true }, function() {
    return file(app, '../templates/Global/Vim.gitignore');
  });

  /**
   * Generate a `.gitignore` file for VirtualEnv to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:virtualenv
   * $ gen gitignore.global:virtualenv --dest ./foo
   * ```
   * @name gitignore:global:virtualenv
   * @api public
   */

  app.task('virtualenv', ['gitignore-virtualenv']);
  app.task('gitignore-virtualenv', { silent: true }, function() {
    return file(app, '../templates/Global/VirtualEnv.gitignore');
  });

  /**
   * Generate a `.gitignore` file for VisualStudioCode to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:visualstudiocode
   * $ gen gitignore.global:visualstudiocode --dest ./foo
   * ```
   * @name gitignore:global:visualstudiocode
   * @api public
   */

  app.task('visualstudiocode', ['gitignore-visualstudiocode']);
  app.task('gitignore-visualstudiocode', { silent: true }, function() {
    return file(app, '../templates/Global/VisualStudioCode.gitignore');
  });

  /**
   * Generate a `.gitignore` file for WebMethods to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:webmethods
   * $ gen gitignore.global:webmethods --dest ./foo
   * ```
   * @name gitignore:global:webmethods
   * @api public
   */

  app.task('webmethods', ['gitignore-webmethods']);
  app.task('gitignore-webmethods', { silent: true }, function() {
    return file(app, '../templates/Global/WebMethods.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Windows to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:windows
   * $ gen gitignore.global:windows --dest ./foo
   * ```
   * @name gitignore:global:windows
   * @api public
   */

  app.task('windows', ['gitignore-windows']);
  app.task('gitignore-windows', { silent: true }, function() {
    return file(app, '../templates/Global/Windows.gitignore');
  });

  /**
   * Generate a `.gitignore` file for Xcode to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:xcode
   * $ gen gitignore.global:xcode --dest ./foo
   * ```
   * @name gitignore:global:xcode
   * @api public
   */

  app.task('xcode', ['gitignore-xcode']);
  app.task('gitignore-xcode', { silent: true }, function() {
    return file(app, '../templates/Global/Xcode.gitignore');
  });

  /**
   * Generate a `.gitignore` file for XilinxISE to the current
   * working directory.
   *
   * ```sh
   * $ gen gitignore.global:xilinxise
   * $ gen gitignore.global:xilinxise --dest ./foo
   * ```
   * @name gitignore:global:xilinxise
   * @api public
   */

  app.task('xilinxise', ['gitignore-xilinxise']);
  app.task('gitignore-xilinxise', { silent: true }, function() {
    return file(app, '../templates/Global/XilinxISE.gitignore');
  });

};
