var _ = require('lodash');
var chalk = require('chalk');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

var PARAMS_DEFAULT = {
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
            // https://github.com/angular/angular.js/blob/v1.5.9/src/Angular.js#L1821-L1823
            // http://blog.johnnyreilly.com/2016/05/the-mysterious-case-of-webpack-angular-and-jquery.html
            'window.jQuery': 'jquery',
            'jQuery': 'jquery'
        }),
        new webpack.optimize.DedupePlugin()
    ],
    devServer: {
        port: 8081
    }
};
var PARAMS_PER_TARGET = {
    DEV: {
        devtool: 'inline-source-map',
        output: {
            filename: '[name].js'
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'vendor.js'
            }),
            new OpenBrowserWebpackPlugin({
                url: 'http://localhost:' + PARAMS_DEFAULT.devServer.port
            })
        ]
    },
    BUILD: {
        output: {
            path: './build'
        },
        devtool: 'source-map',
        plugins: [
            new CleanWebpackPlugin(['build']),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'vendor.[chunkhash].js',
                minChunks: Infinity
            })
        ]
    },
    DIST: {
        output: {
            path: './dist',
            // TODO remove hack-fix when gh-pages work again
            publicPath: '/angular-js-es6-testing-example/'
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'vendor.[chunkhash].js',
                minChunks: Infinity
            }),
            new webpack.optimize.UglifyJsPlugin({
                mangle: false
            })
        ]
    }
};
var TARGET = process.env.NODE_ENV || 'BUILD';
var params = _.merge(PARAMS_DEFAULT, PARAMS_PER_TARGET[TARGET], _mergeArraysCustomizer);

_printBuildInfo(params);

module.exports = {
    resolve: params.resolve,
    entry: params.entry,
    output: params.output,
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /(\.test.js$|node_modules)/},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.tpl.html/, loader: 'html-loader'},
            {test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/, loader: 'url-loader?limit=50000'}
        ]
    },
    plugins: params.plugins,
    devServer: params.devServer,
    devtool: params.devtool
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
