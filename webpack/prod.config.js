const path = require('path');
const webpack = require('webpack');
const publicPath = (process.env.KPI_PREFIX === '/' ? '' : (process.env.KPI_PREFIX || '')) + '/static/compiled/';
const WebpackCommon = require('./webpack.common');

module.exports = WebpackCommon({
    context: __dirname,
    mode: 'production',
    entry: {
        main: '../frontend/src/index.js',
        // tests: path.resolve(__dirname, '../test/index.js')
    },

    output: {
        path: path.resolve('./frontend/compiled/'),
        publicPath: publicPath,
        filename: "[name]-[hash].js",
    },

    stats: {
        all: false,
        maxModules: 0,
        errors: true,
        errorDetails: true
    }
});