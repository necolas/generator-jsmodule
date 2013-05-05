# JavaScript module generator

[![Build Status](https://secure.travis-ci.org/necolas/generator-jsmodule.png?branch=master)](http://travis-ci.org/necolas/generator-jsmodule)

A JavaScript module generator for [Yeoman](http://yeoman.io/).


## Installation

Install [Node.js](http://nodejs.org/) (which comes with npm).

Then globally install [Bower](http://bower.io/), [Yo](http://yeoman.io/), and
this generator.

```
npm install -g bower yo generator-jsmodule
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
├── components
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

Run `npm test` to trigger the tests.

The client-side JS module uses a local installation of Karma. If you also
install Karma globally, then you can easily autowatch your tests during
development:

```
karma start
```

For further information about configuring Karma, please refer to the [Karma
website](http://karma-runner.github.io/).
