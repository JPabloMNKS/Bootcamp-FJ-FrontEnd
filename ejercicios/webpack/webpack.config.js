const path = require('path');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    // entry: {
    //     app: './src/index.js'
    // },
    output: {
        filename: 'main.js',
        // filename: '[name].js',
        path: path.join(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    }


}