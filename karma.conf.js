var webpack = require('webpack');

module.exports = function(config) {
    config.set({
        browsers:   ['Chrome'],
        frameworks: ['jasmine'],
        reporters:  ['mocha'],

        logLevel: config.LOG_INFO,
        autoWatch: true,
        singleRun: false,
        colors: true,
        port: 9876,

        basePath: '',
        files: ['webpack.karma.context.js'],
        preprocessors: { 'webpack.karma.context.js': ['webpack'] },
        exclude: [],
        webpack: {
            devtool: 'eval',
            module: {
                loaders: [
                    {test: /\.js$/, loader: 'babel', exclude: /(\.test.js$|node_modules)/},
                    {test: /\.css$/, loader: 'style!css'},
                    {test: /\.tpl.html/, loader: 'html'},
                    {test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/, loader: 'url?limit=50000'}
                ]
            },
            plugins: [
                new webpack.ProvidePlugin({
                    'window.jQuery': 'jquery'
                })
            ]
        },
        webpackMiddleware: {
            noInfo: true
        }
    });
};