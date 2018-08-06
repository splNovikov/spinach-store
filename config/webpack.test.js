const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-source-map',
    resolve: {
        root: path.resolve('src'),
        modules: ['node_modules', 'src'],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: [/node_modules/, path.resolve('./dist')]
            },
            { test: /\.(css|scss|jpe?g|gif|png|svg|woff|woff2|ttf|eot)$/, loader: 'null' },
            { test: /\.json$/, loader: 'json' }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            '__ENV__': JSON.stringify('testing')
        }),
        new webpack.NoErrorsPlugin()
    ],
    // required for enzyme to work properly
    externals: {
        jsdom: 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
    }
};
