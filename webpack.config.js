
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

    // devServer: {
    //     contentBase: path.resolve(__dirname, './src'),
    // },

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
                        options: { modules: true },
                    },
                ],
            },
        ]

    },
    plugins,
}

module.exports = config
