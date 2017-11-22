import autoprefixer from 'autoprefixer'
import pixrem from 'pixrem'

import path from 'path'

const plugins = [

]

const config = {

    context: path.resolve(__dirname, './src'),

    entry: {
        app: './app.js',
    },

    output: {
        filename: '[name].bundle.js',
        path:  path.resolve(__dirname, 'dist/'),
        // publicPath: '/public',
    },

    // devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                }],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name].[local]'
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    autoprefixer('last 10 versions', 'ie 10'),
                                    pixrem({
                                        rootValue: 10,
                                    }),
                                ]
                            }
                        }
                    },
                ],
            },
            {
                test: /\.(svg)$/,
                use: ['raw-loader']
            }
        ]

    },
    plugins,
}

module.exports = config
