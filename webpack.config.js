var _ = require('lodash');
var minimist = require('minimist');
var chalk = require('chalk');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

var PARAMS_DEFAULT = {
    resolve: {
        extensions: ['', '.js', '.tpl.html']
    },
    entry: {
        main: './src/main.js',
        vendor: ['lodash', 'jquery', 'bootstrap', 'angular', 'angular-animate', 'angular-ui-bootstrap']
    },
    output: {
        filename: '[name].[chunkhash].js',
        sourceMapFilename: '[name].[chunkhash].map'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.optimize.DedupePlugin()
    ],
    devServer: {
        port: 8081
    },
    progress: true,
    colors: true
};
var PARAMS_PER_TARGET = {
    DEV: {
        debug: true,
        devtool: 'inline-source-map',
        output: {
            filename: '[name].js'
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
            new OpenBrowserWebpackPlugin({
                url: 'http://localhost:' + PARAMS_DEFAULT.devServer.port
            })
        ]
    },
    BUILD: {
        debug: true,
        output: {
            path: './build'
        },
        devtool: 'source-map',
        plugins: [
            new CleanWebpackPlugin(['build']),
            new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[chunkhash].js', Infinity)
        ]
    },
    DIST: {
        debug: false,
        output: {
            path: './dist',
            // TODO remove hack-fix when gh-pages work again
            publicPath: '/angular-js-es6-testing-example/'
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[chunkhash].js', Infinity),
            new webpack.optimize.UglifyJsPlugin({
                mangle: false
            })
        ]
    }
};
var TARGET = minimist(process.argv.slice(2)).TARGET || 'BUILD';
var params = _.merge(PARAMS_DEFAULT, PARAMS_PER_TARGET[TARGET], _mergeArraysCustomizer);

_printBuildInfo(params);

module.exports = {
    resolve: params.resolve,
    entry: params.entry,
    output: params.output,
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', exclude: /(\.test.js$|node_modules)/},
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.tpl.html/, loader: 'html'},
            {test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/, loader: 'url?limit=50000'}
        ]
    },
    plugins: params.plugins,
    devServer: params.devServer,
    debug: params.debug,
    devtool: params.devtool,
    progress: params.progress,
    colors: params.colors
};

function _printBuildInfo(params) {
    console.log('\nStarting ' + chalk.bold.green('"' + TARGET + '"') + ' build');
    if (TARGET === 'DEV') {
        console.log('Dev server: ' +
            chalk.bold.yellow('http://localhost:' + params.devServer.port + '/webpack-dev-server/index.html') + '\n\n');
    } else {
        console.log('\n\n');
    }
}

function _mergeArraysCustomizer(a, b) {
    if (_.isArray(a)) {
        return a.concat(b);
    }
}
