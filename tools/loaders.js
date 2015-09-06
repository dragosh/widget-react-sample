const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const scssLoaders = [
  'css-loader?sourceMap',
  'sass-loader?sourceMap&includePaths[]=' + path.resolve(__dirname, './src'),
  'postcss-loader'
];

module.exports = [{
    // JS
    test: /\.js$/,
    exclude: /node_modules/,
    loaders: ['babel-loader'],
}, {
    test: /\.jsx?$/,
    loaders: ['babel-loader'],
    include: path.join(__dirname, '../scripts')
},{
    // CSS
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('css-loader?sourceMap!postcss-loader')
}, {
    // SCSS
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style-loader', scssLoaders.join('!') )
},{
    // Handlebars {
    test: /\.hbs\.html$/,
    loader: 'handlebars-loader'
}, {
    test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=application/font-woff'
}, {
    test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=application/font-woff'
}, {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=application/octet-stream'
}, {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file'
}, {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=image/svg+xml'
},{
    // Images
    test: /\.(png|jpg)$/,
    loader: 'url?limit=25000'
}]
// LESS @ todo
