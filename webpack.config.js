const path = require('path');
// Добавляем возможность формировать файлы помимо js (теперь
// можно например генерить css файлы)
const ExtractTextPlagin = require('extract-text-webpack-plugin');
// подстановка js и css файлов в html документ
const HtmlPlagin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/index.jsx')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[chunkhash].js',
    },
    // подстановка расширений
    resolve: {
        extensions: ['.tsx', '.js', '.jsx', '.ts'],
        // прописывание алиасов на пути
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            containers: path.resolve(__dirname, 'src/containers'),
        }
    },
    // правила - с которыми wp обрабатывает те или иные файлы
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                // Исключаем сборку файлов из node_modules
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlagin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader'],
                }),
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new ExtractTextPlagin({
            filename: 'main.[chunkhash].css',
            disable: false,
            allChunks: true,
        }),
        new HtmlPlagin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        //compress:true,
        port: 8080,
        historyApiFallback: true, // для роутинга понадобится
    }
}