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
        overlay: {
            warnings: true,
            errors: true
        },
        hot: true,
        inline: true,
        compress: true,
        port: 9000,
        publicPath: PublicPath,
        stats: "errors-only"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});