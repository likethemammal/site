const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const pixrem = require('pixrem')


const path = require('path')

const plugins = [
    new webpack.optimize.UglifyJsPlugin,
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    })
]

const css_loader = {
    loader: 'css-loader',
    options: {
        modules: true,
        localIdentName: '[name].[local]',
    },
}

const postcss_loader = {
    loader: 'postcss-loader',
    options: {
        plugins: function () {
            return [
                autoprefixer('last 10 versions', 'ie 10'),
                pixrem({
                    rootValue: 10,
                    replace: true,
                }),
            ]
        }
    }
}

const config = {

    context: path.resolve(__dirname, './src'),

    entry: {
        app: './index.js',
    },

    output: {
        filename: '[name].bundle.js',
        path:  path.resolve(__dirname, 'dist/'),
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    'babel-loader',
                    'source-map-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    css_loader,
                    postcss_loader,
                ],
            },
            {
                test: /\.less/,
                use: [
                    'style-loader',
                    css_loader,
                    postcss_loader,
                    'less-loader',
                ],
            },
            {
                test: /\.json$/,
                use: ["json-loader"],
                exclude: /(node_modules)/,
            },
            {
                test: /\.(svg)$/,
                use: ['raw-loader'],
                // exclude: /(node_modules)/,
            },
            {
                test: /\.(jpe?g|png|gif?)(\?[a-z0-9=&.]+)?$/,
                use: [
                    // {
                    //     loader: 'image-webpack-loader',
                    //     options: {
                    //         mozjpeg: {
                    //             progressive: true,
                    //             quality: 65
                    //         },
                    //         // optipng.enabled: false will disable optipng
                    //         optipng: {
                    //             enabled: false,
                    //         },
                    //         pngquant: {
                    //             quality: '65-90',
                    //             speed: 4
                    //         },
                    //         gifsicle: {
                    //             interlaced: false,
                    //         },
                    //         // the webp option will enable WEBP
                    //         webp: {
                    //             quality: 75
                    //         }
                    //     },
                    // },
                    "url-loader?mimetype=image/[ext]&limit=1000&name=[name].[ext]",
                    // 'base64-inline-loader?limit=10000&name=data:image/[ext];base64,[name]',
                ]
            },

        ]

    },
    plugins,
}

module.exports = config
