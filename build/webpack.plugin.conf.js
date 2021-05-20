const path = require('path')
const webpack = require('webpack')
const WebpackBar = require('webpackbar')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const IncludeAssetsPlugin = require('html-webpack-tags-plugin')

module.exports = [
    new WebpackBar({
        minimal: false,
        compiledIn: false
    }),
    new webpack.DllReferencePlugin({
        manifest: path.resolve(__dirname, 'manifest.json'),
        context: __dirname
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'public/index.html',
        inject: true
    }),
    new IncludeAssetsPlugin({
        tags: [`static/js/vendor.dll.js`],
        append: false
    }),
    // copy custom static assets
    new CopyWebpackPlugin([{
        from: path.resolve(__dirname, '../public/static'),
        to: 'static',
        ignore: ['.*']
    }])
]