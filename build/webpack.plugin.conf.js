const path = require('path')
const webpack = require('webpack')
const WebpackBar = require('webpackbar')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const IncludeAssetsPlugin = require('html-webpack-tags-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const { Eslint } = require('./config')

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
        inject: 'body'
    }),
    new IncludeAssetsPlugin({
        tags: [`static/js/vendor.dll.js`],
        append: false,
    }),
    // copy custom static assets
    new CopyWebpackPlugin([{
        from: path.resolve(__dirname, '../public/static'),
        to: 'static',
        ignore: ['.*']
    }]),
    ...(Eslint ? [
        new ESLintPlugin({
            fix: true,
            extensions: ['ts', 'json', 'tsx'],
            exclude: '/node_modules/'
        })
    ] : [])
]