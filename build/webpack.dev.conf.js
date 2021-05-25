const webpack = require('webpack')
const merge = require('webpack-merge')
const { PublicPath, OutputPath } = require('./config')
const baseWebpackConfig = require('./webpack.base.conf')

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: OutputPath,
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