const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack-dev.config');
const path = require('path');


new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    noInfo: true,
    hot: false,
    inline: true,
    stats: { colors: true },
    historyApiFallback: true,
    proxy: {
        //"*": "http://localhost:3030" //for api
    }
}).listen(3000, '0.0.0.0', function (err, result) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:3000');
});
