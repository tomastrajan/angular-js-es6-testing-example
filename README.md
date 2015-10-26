# Angular JS ES6 Module Testing Example

* original blog post describing [Proper testing of Angular JS 1.X applications with ES6 modules](https://medium.com/@tomastrajan/proper-testing-of-angular-js-applications-with-es6-modules-8cf31113873f)
* [demo project](http://tomastrajan.github.io/angular-js-es6-testing-example/) with examples of mocha unit & karma integration tests


![Components](/src/asset/image/testing.png?raw=true "Proper testing of Angular JS 1.X applications with ES6 modules")

## Getting started

1. Clone repository `git clone https://github.com/tomastrajan/angular-js-es6-testing-example.git`
2. Enter project directory `cd angular-js-es6-testing-example`
3. Install dependencies `npm install`

## Scripts

All scripts are run with `npm run [script]`, for example: `npm run test`.

* `start` - start development server, try it by opening `http://localhost:8081/webpack-dev-server/index.html`

* `build` - create dev build, check `build` directory
* `dist` - create production build, check `dist` directory

* `server_build` - serve content from `build` directory
* `server_dist` - serve content from `dist` directory

* `test` - run all unit tests (with Mocha)
* `karma` - run all integration tests (with Karma / Jasmine)
