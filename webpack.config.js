const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'Builder', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'wwwroot/js'),
        filename: 'Builder.bundle.js',
        publicPath: 'http://localhost:9000/static/'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    devServer: {
        port: 9000,
        compress: true,
        open: false,
        headers: { 'Access-Control-Allow-Origin': '*' }
    },
}