const base = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const { default: merge } = require('webpack-merge');

module.exports = merge(base, {
    entry: {
        client: './src/entry/client.entry.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: resolve('./public/index.html'),
        }),
    ],
});
