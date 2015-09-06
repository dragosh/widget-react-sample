const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');
const loaders = require('./loaders');
const packageJSON = require('../package.json');
const PATHS  = {
    dist: path.join(__dirname, '../dist'),
    name: packageJSON.name
}

module.exports = {
    devtool: 'source-map',
    entry: {
        app: ['./src/index']
    },
    output: {
        path: PATHS.dist,
        filename: '[name].js',
        publicPath: '',
        libraryTarget: 'umd'
    },
    // externals: [
    //     // Every non-relative module is external
    //     /^[a-z\-0-9]+$/
    // ],
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin()
    ],
    eslint: {
        configFile: '.eslintrc'
    },
    resolve: {
        extensions: ['', '.js', '.scss', '.woff', '.woff2', '.png', '.jpg'],
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: loaders
    },
    postcss: [
        autoprefixer({ browsers: ['last 2 versions'] })
    ]
};
