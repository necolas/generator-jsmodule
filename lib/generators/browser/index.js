/**
 * Module dependencies.
 */

var fs = require('fs');
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

/**
 * Module exports.
 */

module.exports = Generator;

/**
 * Generator constructor.
 *
 * @api public
 */

function Generator() {
  yeoman.generators.Base.apply(this, arguments);

  this.argument('componentName', { type: String, required: false });
  this.componentName = this.componentName || path.basename(process.cwd());
  this.componentFileName = this.componentName;

  if (this.componentName.slice(-3) !== '.js') {
    this.componentFileName = this.componentName + '.js';
  }

  this.sourceRoot(path.join(__dirname, '../../templates/browser'));

  this.on('end', function () {
    this.installDependencies({ skipInstall: this.options['skip-install'] });
  });
}

util.inherits(Generator, yeoman.generators.Base);

/**
 * Generate the standard project files
 *
 * Copy over basic files that don't require any app-specific data.
 * Other files are templates that require app-specific data.
 *
 * @api public
 */

Generator.prototype.projectFiles = function projectFiles() {
  // dotfiles
  this.copy('gitignore', '.gitignore');
  this.copy('../common/jshintrc', '.jshintrc');
  this.copy('travis.yml', '.travis.yml');
  // config files
  this.template('bower.json');
  this.template('karma.conf.js', 'karma.conf.js');
  this.template('package.json');
  // docs
  this.template('../common/CHANGELOG.md', 'CHANGELOG.md');
  this.template('../common/LICENSE.md', 'LICENSE.md');
  this.template('README.md');
  // component
  this.template('index.js', this.componentFileName);
  // test
  this.template('test.js', 'test/test.js');
};

Generator.name = "jsmoduleBrowser";
