# JavaScript module generator

[![Build Status](https://secure.travis-ci.org/necolas/generator-jsmodule.png?branch=master)](http://travis-ci.org/necolas/generator-jsmodule)

A [Yeoman](http://yeoman.io/) generator for JavaScript modules.


## Installation

Install [Node.js](http://nodejs.org/) (which comes with npm).

Then globally install the generator.

```
npm install -g generator-jsmodule
```

Make a new directory, and `cd` into it:

```
mkdir mymodule && cd $_
```

Now scaffold out a JS module using the `yo` command (and optionally passing a
name for your module):

```
yo jsmodule <module-name>
```

All your dependencies will automatically be installed unless you include the
`--skip-install` option.


## Generators

Available generators (to be run in the root directory).

* `jsmodule <module-name>` (aka `jsmodule:app`)
* `jsmodule:browser <module-name>`

N.B. You should replace the placeholder GitHub username in the Travis CI
build-status paths at the top of the generated README.

### jsmodule:app

Generates the boilerplate you need for a simple Node.js module.

Example:

```
yo jsmodule mymodule
```

Produces:

```
.
├── node_modules
│   ├── chai
│   └── mocha
├── test
│   └── test.js
├── .gitignore
├── .jshintrc
├── .travis.yml
├── CHANGELOG.md
├── LICENSE.md
├── README.md
├── mymodule.js
└── package.json
```

### jsmodule:browser

Generates the boilerplate you need for a simple client-side JavaScript module.

It setups the [Karma](http://karma-runner.github.io/) test runner to run unit
tests in the browser. Unit tests rely on the
[Mocha](http://visionmedia.github.io/mocha/) test framework and the
[Chai](http://chaijs.com/) assertion library.

Example:

```
yo jsmodule:browser mymodule
```

Produces:

```
.
├── bower_components
│   └── chai
├── node_modules
│   └── karma
├── test
│   └── test.js
├── .gitignore
├── .jshintrc
├── .travis.yml
├── CHANGELOG.md
├── LICENSE.md
├── README.md
├── bower.json
├── karma.conf.js
├── mymodule.js
└── package.json
```


## Running your module's tests

The client-side JS package uses a local installation of Karma to run the unit
tests. You can easily autowatch your tests during development:

```
karma start
```

Or run the unit tests in CI with:

```
npm test
```

For further information about configuring Karma, please refer to the [Karma
website](http://karma-runner.github.io/).
