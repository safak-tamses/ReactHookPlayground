const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: ['file-loader'],
            },
        ],
    },
    plugins: [
        new Dotenv({
            path: `./env/${process.env.NODE_ENV}.env`,
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    devServer: {
        static: './dist',
        port: 3000,
        historyApiFallback: true,
    },
    mode: 'development',
};
