var minimist = require('minimist');
var connect = require('connect');
var serveStatic = require('serve-static');


var PORT = 8080;
var TARGET_PATH_MAPPING = {
    BUILD: './build',
    DIST: './dist'
};

var TARGET = minimist(process.argv.slice(2)).TARGET || 'BUILD';

connect()
    .use(serveStatic(TARGET_PATH_MAPPING[TARGET]))
    .listen(PORT);

console.log('Created server for: ' + TARGET + ', listening on port ' + PORT);