const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const lessOptions = require('./config/theme')
const plugins = require('./webpack.plugin.conf')
const { resolve, assetsPath } = require('./utils')
const { PublicPath, OutputPath } = require('./config')

const styleLoaders = ['css-loader',
    {
        loader: 'postcss-loader',
        options: {
            postcssOptions: {
                plugins: ['autoprefixer']
            }
        }
    },
    {
        loader: 'less-loader',
        options: {
            lessOptions
        }
    }
]

styleLoaders.unshift(
    process.env.NODE_ENV === 'production' ?
    MiniCssExtractPlugin.loader : 'style-loader'
)

module.exports = {
    entry: resolve('../src/index.tsx'),
    output: {
        publicPath: PublicPath,
        path: OutputPath,
        filename: assetsPath(`/js/[name].[chunkhash:8].js`),
        chunkFilename: assetsPath(`/js/[id].[chunkhash:8].js`)
    },
    resolve: {
        alias: {
            '@': resolve('../src')
        },
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json']
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                include: [resolve('../src')],
                exclude: /node_modules/,
                use: ['babel-loader', {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                        compilerOptions: {
                            module: 'es2015'
                        }
                    }
                }]
            },
            {
                test: /\.less$/,
                use: styleLoaders
            }, {
                test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    esModule: false,
                    name: assetsPath('img/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    performance: {
        hints: false
    },
    target: "web",
    plugins
}