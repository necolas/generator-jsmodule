/*global describe:true, beforeEach:true, it:true */

var assert = require('assert');
var helpers = require('yeoman-generator').test;
var path = require('path');

describe('Generator test', function () {
  var jsmodule;

  beforeEach(function (cb) {
    helpers.testDirectory(path.join(__dirname, './tmp'), function (err) {
      if (err) cb(err);
      cb();
    });
  });

  describe('jsmodule:app', function () {
    var jsmoduleBrowser;

    beforeEach(function (cb) {
      var deps = ['../../lib/generators/app'];
      jsmodule = helpers.createGenerator('jsmodule:app', deps, ['myComponent']);
      jsmodule.options['skip-install'] = true;
      cb();
    });

    it('runs sucessfully', function () {
      jsmodule.run();
    });

    it('creates expected files', function (cb) {
      var expected = [
        // dotfiles
        '.gitignore',
        '.jshintrc',
        '.travis.yml',
        // config files
        'package.json',
        // docs
        'CHANGELOG.md',
        'LICENSE.md',
        'README.md',
        // component
        'myComponent.js',
        // test
        'test/test.js'
      ];

      jsmodule.run([], function() {
        helpers.assertFiles(expected);
        cb();
      });
    });
  });

  describe('jsmodule:browser', function () {
    var jsmoduleBrowser;

    beforeEach(function (cb) {
      var deps = ['../../lib/generators/browser'];
      jsmoduleBrowser = helpers.createGenerator('jsmodule:browser', deps, ['myComponent']);
      jsmoduleBrowser.options['skip-install'] = true;
      cb();
    });

    it('runs sucessfully', function () {
      jsmoduleBrowser.run();
    });

    it('creates expected files', function (cb) {
      var expected = [
        // dotfiles
        '.gitignore',
        '.jshintrc',
        '.travis.yml',
        // config files
        'bower.json',
        'karma.conf.js',
        'package.json',
        // docs
        'CHANGELOG.md',
        'LICENSE.md',
        'README.md',
        // component
        'myComponent.js',
        // test
        'test/test.js'
      ];

      jsmoduleBrowser.run([], function() {
        helpers.assertFiles(expected);
        cb();
      });
    });
  });
});
