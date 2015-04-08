var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: {
        // server: [
        //     'webpack-dev-server/client?http://0.0.0.0:3000',
        //     'webpack/hot/only-dev-server'
        // ],
        main: [
            './scripts/main'
        ]
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: '/scripts/',
        libraryTarget: 'umd'
    },
    externals: [
        // Every non-relative module is external
        /^[a-z\-0-9]+$/
    ],
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin()
        // new webpack.optimize.CommonsChunkPlugin('main.js')
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel-loader'],
            include: path.join(__dirname, '../scripts')
        }]
    }
};
