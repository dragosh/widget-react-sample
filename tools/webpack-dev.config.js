const webpack = require('webpack');
const merge = require('deepmerge')
const baseConfig = require('./webpack.config');

const config = merge(baseConfig , {
    entry: {
        server: [
            'webpack-dev-server/client?http://0.0.0.0:3000',
            'webpack/hot/only-dev-server'
        ]
    }
});
config.plugins.push(new webpack.HotModuleReplacementPlugin())
module.exports = config;
