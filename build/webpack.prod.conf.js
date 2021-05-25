'use strict'
const merge = require('webpack-merge')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const { assetsPath } = require('./utils')
const { IsGziped, GzipExtensions } = require('./config')
const baseWebpackConfig = require('./webpack.base.conf')

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    devtool: false,
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        unused: true,
                        drop_debugger: true,
                        drop_console: true
                    }
                },
                parallel: true
            })
        ],
        sideEffects: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: "initial",
                    test: /[\\/]node_modules[\\/]/, // 路径在 node_modules 目录下的都作为公共部分
                    name: "vendor", // 使用 vendor 入口作为公共部分
                    enforce: true,
                },
            },
        },
    },
    plugins: [
        new OptimizeCSSPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: assetsPath(`/css/[name].[chunkhash:8].css`)
        })
    ]
})

if (IsGziped) {
    const CompressionWebpackPlugin = require('compression-webpack-plugin')
    webpackConfig.plugins.push(
        new CompressionWebpackPlugin({
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(' +
                GzipExtensions.join('|') +
                ')$'
            ),
            minRatio: 0.8
        })
    )
}

module.exports = webpackConfig