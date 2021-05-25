const path = require('path')
const { StaticPath } = require('./config')

exports.assetsPath = (_path) => path.posix.join(StaticPath, _path)

exports.resolve = (__path) => path.resolve(__dirname, __path)