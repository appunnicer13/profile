const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['react']
                }
            }
        },{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        },{
            test: /\.css$/,
            use: ['to-string-loader', 'css-loader']
        },{
            test: /\.(jpg|png|gif)$/,
            use: 'file-loader'
        },{
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['polyfills', 'vendor'].reverse()
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            chunksSortMode: 'dependency'
        })
    ]
};

module.exports = config;