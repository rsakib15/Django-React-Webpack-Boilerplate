var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var merge = require('lodash.merge');

var defaultOptions = {
    module: {
        rules: [
            {
                test: /\.(js|jsx|es6)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif|ttf|eot|svg|woff(2)?)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            }
        ]
    },

    resolve: {
        extensions: ['.jsx', '.js', '.es6', '.coffee'],
        alias: {
            Components: path.resolve(__dirname, '../frontend/src/components/'),
            Containers: path.resolve(__dirname, '../frontend/src/containers/'),
            Assets: path.resolve(__dirname, '../frontend/assets/'),
            Util: path.resolve(__dirname, '../frontend/src/util/'),
            Routes: path.resolve(__dirname, '../frontend/src/routes/'),
            Constants: path.resolve(__dirname, '../frontend/src/constants/'),
            Redux: path.resolve(__dirname, '../frontend/src/redux/'),
            Data: path.resolve(__dirname, '../frontend/src/data/')
        }
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },

    plugins: [
        new BundleTracker({path: __dirname, filename: '../webpack-stats.json'})
    ],
};

module.exports = function (options) {
  options = merge(defaultOptions, options || {});
  return options;
};