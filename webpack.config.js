const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    devtool: 'source-map',
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /.js[x]?$/,
            exclude: /node_modules/,
            include: /src/,
            use: {
                loader: 'babel-loader',
                options: { presets: ['react'] }
            }
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader'] })
        },
        {
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
            loaders: 'file-loader'
        }]
    },
    plugins: [
        new ExtractTextPlugin("app.css")
    ]
}