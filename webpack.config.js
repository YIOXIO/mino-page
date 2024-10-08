const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        registration: './src/registration.js',
        registration_foiv: './src/registration-foiv.js',
        yaMap: './src/yaMap.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js', // Для генерации уникальных имена файлов
        publicPath: ''
    },

    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, './dist'),
        compress: true,
        port: 8080,

        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules'
            },
            {
                test: /\.(png|avif|webp|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                },
                    'postcss-loader'
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'programm.html',
            template: './src/programm.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'form.html',
            template: './src/form.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'previous-events.html',
            template: './src/previous-events.html'
        }),

        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ]
};

