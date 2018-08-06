const path = require('path');
const webpack = require('webpack');

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const WebpackMd5Hash = require('webpack-md5-hash');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const HEROKU_BUILD = process.env.HEROKU || false;
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const API_BASE_URL = process.env.API_BASE_URL || '';

const METADATA = webpackMerge(commonConfig().metadata, {
  ENV,
  API_ROOT: '/api'
});

module.exports = webpackMerge(commonConfig(), {
  devtool: HEROKU_BUILD ? false : 'nosources-source-map',
  output: {
    publicPath: '/',
    path: path.resolve('./dist'),
    filename: '[name].[hash].js',
    sourceMapFilename: '[name].[hash].map',
    chunkFilename: '[id].[chunkhash].chunk.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        options: {
          failOnError: true,
          emitError: true
        },
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
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      '__ENV__': JSON.stringify(METADATA.ENV),
      '__DEVTOOLS__': false,
      '__API_ROOT__': METADATA.API_ROOT,
      '__API_BASE_URL__': JSON.stringify(API_BASE_URL),
      'process.env': {
        NODE_ENV: JSON.stringify(METADATA.ENV)
      }
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, '../src/assets/images/spinach-logo.png'),
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      // https://webpack.js.org/guides/migrating/#uglifyjsplugin-sourcemap
      sourceMap: true,
      beautify: false,
      mangle: { 'screw_ie8': true, 'keep_fnames': true },
      compress: { 'screw_ie8': true, 'warnings': true },
      comments: false
    })
  ]
});
