const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const WebpackBar = require('webpackbar')

webpack({
    entry: {
        vendor: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux', 'axios']
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../public/static/js'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    performance: {
        hints: false
    },
    optimization: {
        minimize: true
    },
    plugins: [
        new WebpackBar({
            minimal: false,
            compiledIn: false
        }),
        new webpack.DllPlugin({
            path: path.resolve(__dirname, 'manifest.json'),
            name: '[name]_library',
            context: __dirname
        })
    ]
}).run((err, stats) => {
    if (err || stats.hasErrors()) {
        console.log(chalk.red('  Webpack compilation failed！\n'))
    } else {
        console.log(chalk.green('  Webpack compiled successfully！ See ./dll. \n'))
    }
})