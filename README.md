# Angular JS 1.5 - ES6 Module Unit testing and Karma Integration testing seed by [@tomastrajan](https://twitter.com/tomastrajan) [![Build Status](https://travis-ci.org/tomastrajan/angular-js-es6-testing-example.svg?branch=master)](https://travis-ci.org/tomastrajan/angular-js-es6-testing-example)

Great seed for enterprise projects with heavy focus on unit and integration testing.

This repository contains two releases:

1. `1.4.0` - for Angular JS 1.4 and lower (uses [Component Pattern for Angular JS](https://medium.com/@tomastrajan/component-paradigm-cf32e94ba78b))
2. `1.5.0` - for Angular JS 1.5 and above which supports native `.component(name, options)` API

## Info

* original blog post describing [Proper testing of Angular JS 1.X applications with ES6 modules](https://medium.com/@tomastrajan/proper-testing-of-angular-js-applications-with-es6-modules-8cf31113873f)
* [demo project](http://tomastrajan.github.io/angular-js-es6-testing-example/) with examples of mocha unit & karma integration tests
* [presentation](http://slides.com/tomastrajan/angularjs-unit-testing-with-es6-modules) about the concepts used in this repository
* [video](https://www.youtube.com/watch?v=JTkEsu-cEzc) from Angular JS Meetup Zurich


![Components](/src/asset/image/testing.png?raw=true "Proper testing of Angular JS 1.X applications with ES6 modules")

## Getting started

1. Clone repository `git clone https://github.com/tomastrajan/angular-js-es6-testing-example.git`
2. Enter project directory `cd angular-js-es6-testing-example`
3. Install dependencies `npm i` or `npm install`

## Scripts

All scripts are run with `npm run [script]`, for example: `npm run test`.

* `start` - start development server, try it by opening `http://localhost:8081/webpack-dev-server/index.html`

* `build` - create dev build, check `build` directory
* `dist` - create production build, check `dist` directory

* `server_build` - serve content from `build` directory
* `server_dist` - serve content from `dist` directory

* `lint` - lint code (with ESLint)
* `mocha` - run all unit tests (with Mocha)
* `watch` - run and watch all unit tests (with Mocha)
* `karma` - run all integration tests (with Karma / Jasmine)
* `test` - lint code and run all tests (with Mocha and Karma)

* `ci` - for Travis CI

# Tests

For more detailed info about tests check the original [blog post](https://medium.com/@tomastrajan/proper-testing-of-angular-js-applications-with-es6-modules-8cf31113873f).


* `*.test.js` - mocha unit tests
* `*.integration.test.js` - mocha integration tests (manual)
* `*.spec.js` - karma integration tests (spin up Angular JS app context)
