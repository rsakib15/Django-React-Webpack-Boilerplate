const path = require('path');
const webpack = require('webpack');
const WebpackCommon = require('./webpack.common');

module.exports = WebpackCommon({
    mode: 'development',
    entry: path.resolve(__dirname, '../frontend/index.js'),
    output: {
        library: 'tests',
        path: path.resolve(__dirname, '..frontend/test/compiled/'),
        filename: 'app.js'
    },
    stats: {
        all: false,
        maxModules: 0,
        errors: true,
        errorDetails: true
    }
});