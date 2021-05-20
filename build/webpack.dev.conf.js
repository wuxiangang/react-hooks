const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const { resolve } = require('./utils')
const { PublicPath } = require('./config')

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: resolve('../dist'),
        host: 'localhost',
        overlay: true,
        hot: true,
        inline: true,
        compress: true,
        port: 9000,
        publicPath: PublicPath
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});