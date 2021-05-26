const path = require('path')

module.exports = {
    StaticPath: 'static',
    PublicPath: '/',
    OutputPath: path.resolve(__dirname, '../../dist'),
    // production
    IsGziped: false,
    GzipExtensions: ['js', 'css'],
    Eslint: true
}