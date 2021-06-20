process.traceDeprecation = true;
var path = require("path");
var webpack = require('webpack');
const WebpackCommon = require('./webpack.common');
var BundleTracker = require('webpack-bundle-tracker');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var publicDomain = 'localhost';
var publicPath = 'http://' + publicDomain + ':3000/static/compiled/';
const StyleLintPlugin = require('stylelint-webpack-plugin');



module.exports = WebpackCommon({
    mode: 'development',
    entry: {
        main: ['./frontend/src/index.js'],
        // tests: path.resolve(__dirname, '../test/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../frontend/compiled/'),
        publicPath: publicPath,
        filename: '[name]-[hash].js'
    },
    devServer: {
        publicPath: publicPath,
        disableHostCheck: true,
        hot: true,
        headers: {'Access-Control-Allow-Origin': '*'},
        port: 3000,
        host: '0.0.0.0',
        clientLogLevel: 'none' // disables linter warnings appearing in DevTools
    },
     plugins: [
        new BundleTracker({path: __dirname, filename: '../webpack-stats.json'}),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
     ]
});

// module.exports = {
//     context: __dirname,
//     mode: 'development',
//     entry: '../frontend/src/index.js',
//     output: {
//         path: path.resolve('./frontend/compiled/'),
//         filename: "[name]-[hash].js",
//     },
//     plugins: [
//         new BundleTracker({path: __dirname, filename: '../webpack-stats.json'})
//     ],
//     optimization: {
//         minimizer: [
//             new UglifyJsPlugin({
//                 cache: true,
//                 parallel: true,
//                 uglifyOptions: {
//                     compress: false,
//                     ecma: 6,
//                     mangle: true
//                 },
//                 sourceMap: true
//             }),
//             new OptimizeCSSAssetsPlugin({})
//         ]
//     },
//      devServer: {
//         publicPath: publicPath,
//         disableHostCheck: true,
//         hot: true,
//         headers: {'Access-Control-Allow-Origin': '*'},
//         port: 3000,
//         host: '0.0.0.0',
//         clientLogLevel: 'none' // disables linter warnings appearing in DevTools
//       },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: ['babel-loader']
//             },
//             {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader']
//             },
//             {
//                 test: /\.scss$/,
//                 use: ['style-loader', 'css-loader', 'sass-loader']
//             },
//             {
//                 test: /\.(png|jpg|gif|ttf|eot|svg|woff(2)?)$/,
//                 use: {
//                     loader: 'file-loader',
//                     options: {
//                         name: '[name].[ext]'
//                     }
//                 }
//             }
//         ]
//     },
//     resolve: {
//         extensions: ['.jsx', '.js', '.es6', '.coffee'],
//         alias: {
//             //app: path.join(__dirname, '../frontend/src'),
//             //js: path.join(__dirname, '../frontend/src/index'),
//             app: path.join(__dirname, '../app'),
//             js: path.join(__dirname, '../frontend/src/'),
//             // utils: path.join(__dirname, '../jsapp/js/utils'),
//             // test: path.join(__dirname, '../test'),
//             Components: path.resolve(__dirname, '../frontend/src/components/'),
//             Containers: path.resolve(__dirname, '../frontend/src/containers/'),
//             Assets: path.resolve(__dirname, '../frontend/src/assets/'),
//             Util: path.resolve(__dirname, '../frontend/src/util/'),
//             Routes: path.resolve(__dirname, '../frontend/src/routes/'),
//             Constants: path.resolve(__dirname, '../frontend/src/constants/'),
//             Redux: path.resolve(__dirname, '../frontend/src/redux/'),
//             Data: path.resolve(__dirname, '../frontend/src/data/')
//         }
//     },
//     stats: {
//         all: false,
//         maxModules: 0,
//         errors: true,
//         errorDetails: true
//     }
// };