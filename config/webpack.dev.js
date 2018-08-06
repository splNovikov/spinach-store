const path = require('path');
const webpack = require('webpack');
const argv = require('yargs').argv;

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const DEVTOOLS = argv.env ? argv.env.devTools === 'true' : false;
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 5000;
const API_BASE_URL = process.env.API_BASE_URL || '';

const METADATA = webpackMerge(commonConfig().metadata, {
    HOST,
    PORT,
    ENV,
    API_ROOT: '/api'
});

module.exports = webpackMerge(commonConfig(), {
    devtool: 'source-map',
    entry: {
        hmr: 'react-hot-loader/patch',
        hmrDevServer: 'webpack/hot/only-dev-server'
    },
    output: {
        publicPath: '/',
        path: path.resolve('./dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: [/node_modules/, path.resolve('./dist')]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/, path.resolve('./dist')]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            '__ENV__': JSON.stringify(METADATA.ENV),
            '__DEVTOOLS__': DEVTOOLS,
            '__API_ROOT__': METADATA.API_ROOT,
            '__API_BASE_URL__': JSON.stringify(API_BASE_URL),
            'process.env': {
                NODE_ENV: JSON.stringify(METADATA.ENV)
            }
        }),
        new BundleAnalyzerPlugin({
            'analyzerMode': 'static',
            'reportFilename': path.resolve('./stats/report.html'),
            'openAnalyzer': false
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    devServer: {
        contentBase: path.resolve('./src'),
        port: METADATA.PORT,
        host: METADATA.HOST,
        // It suppress error shown in console, so it has to be set to false.
        quiet: false,
        // It suppress everything except error, so it has to be set to false as well
        // to see success build.
        noInfo: false,
        hot: true,
        stats: {
            // Config for minimal console.log mess.
            assets: true,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false
        },
        publicPath: '/',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }
});
