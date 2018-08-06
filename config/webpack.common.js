const path = require('path');
const webpack = require('webpack');
const pkg = require('../package.json');  // loads npm config file

const _ = require('lodash');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const ENV = process.env.ENV || process.env.NODE_ENV;

const METADATA = {
    title: ENV === 'development' ? 'Spinach Store' : 'Шпинат',
    baseUrl: '/'
};

function getVendorEntry() {
    const dependencies = Object.keys(pkg.dependencies);

    // if we not exclude font-awesome we will receive "module is not found" error
    return _.xor(dependencies, ['font-awesome']);
}
module.exports = () => {
    return {
        entry: {
            'app': './src/app.js',
            'vendor': getVendorEntry()
        },
        resolve: {
            modules: [
                path.resolve(__dirname, '../src'),
                'node_modules'
            ],
            extensions: ['.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /(\.css|\.scss)$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    config: {
                                        path: './postcss.config.js'
                                    },
                                    sourceMap: 'inline'
                                }
                            },
                            'resolve-url-loader',
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true,
                                    includePaths: [path.resolve(__dirname, '../src/styles')]
                                }
                            }
                        ]
                    })
                },
                { test: /\.gif$/, use: 'url-loader?limit=10000&mimetype=image/gif' },
                { test: /\.jpg$/, use: 'url-loader?limit=10000&mimetype=image/jpg' },
                { test: /\.png$/, use: 'url-loader?limit=10000&mimetype=image/png' },
                { test: /\.svg/, use: 'url-loader?limit=26000&mimetype=image/svg+xml' },
                {
                    test: /\.(woff|woff2|ttf|eot|svg)$/,
                    use: 'url-loader?limit=1&name=assets/fonts/[name].[ext]?[hash]'
                }
            ]
        },
        plugins: [
            new CaseSensitivePathsPlugin(),
            new ExtractTextPlugin({
                filename: '[name].[contenthash:20].css',
                disable: ENV === 'development',
                allChunks: true
            }),
            new CopyWebpackPlugin([
                {
                    from: path.resolve(__dirname, '../src/assets'),
                    to: 'assets'
                }
            ]),
            new HtmlWebpackPlugin({
                template: path.resolve('./src/index.html'),
                chunksSortMode: 'dependency',
                metadata: METADATA
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: (module) => ( // remove all entry from node_modules
                    module.resource &&
                    module.resource.indexOf(path.resolve('node_modules')) === 0
                )
            })
        ]
    };
};
