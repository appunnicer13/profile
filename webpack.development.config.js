const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const webpack = require('webpack');

const config = Merge(CommonConfig, {
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 8080,
        host: 'localhost',
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',

    }
})


module.exports = config;