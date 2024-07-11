const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    'mode': 'development',
    output: {
        filename: '[contenthash].[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
};