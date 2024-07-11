const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    'mode': 'development',
    output: {
        filename: '[contenthash].[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,

    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
        new webpack.ProgressPlugin()
    ],
};