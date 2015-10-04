var _ = require('lodash');
var minimist = require('minimist');
var chalk = require('chalk');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var paramsDefault = {
    output: {
        path: './build',
        filename: '[name].[hash].js',
        sourceMapFilename: '[name].[hash].map'
    },
    server: {
        port: 8081
    }
};
var paramsPerTarget = {
    DEV: {
        debug: true,
        devtool: 'inline-source-map',
        output: {
            filename: '[name].js'
        }
    },
    BUILD: {
        debug: true,
        devtool: 'source-map',
        plugins: [
            new CleanWebpackPlugin(['build'])
        ]
    },
    DIST: {
        debug: false,
        output: {
            path: './dist'
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new webpack.optimize.UglifyJsPlugin({
                mangle: false
            })
        ]
    }
};
var TARGET = minimist(process.argv.slice(2)).TARGET || 'BUILD';
var params = _.merge(paramsDefault, paramsPerTarget[TARGET]);
printBuildInfo();

module.exports = {
    resolve: {
        extensions: ['', '.js', '.tpl.html']
    },
    entry: {
        main: './src/main.js'
    },
    output: {
        path: params.output.path,
        filename: params.output.filename,
        sourceMapFilename: params.output.sourceMapFilename
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel?optional[]=runtime&stage=1', exclude: /(\.test.js$|node_modules)/},
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.tpl.html/, loader: 'html'},
            {test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/, loader: 'url?limit=50000'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ].concat(params.plugins || []),
    devServer: {
        port: params.server.port
    },
    debug: params.debug,
    devtool: params.devtool,
    progress: true,
    colors: true
};

function printBuildInfo() {
    console.log('\nStarting ' + chalk.bold.green('"' + TARGET + '"') + ' build');
    if (TARGET === 'DEV') {
        console.log('Dev server: ' +
            chalk.bold.yellow('http://localhost:' + params.server.port + '/webpack-dev-server/index.html') + '\n\n');
    } else {
        console.log('\n\n');
    }
}
