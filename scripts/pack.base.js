const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: 4 });
const theme = require('../src/helper/theme');

const pkg = require('../package');
const env = process.env.NODE_ENV;
const __DEV__ = env === 'development';
const __PROD__ = env === 'production';

/**
 * webpack 配置
 * https://webpack.js.org/configuration/#options
 */
const baseConfig = {
    target: 'web',

    entry: path.join(__dirname, '../src/index.js'),

    output: {
        path: path.join(__dirname, '../build'),
        filename: '[name].js'
    },

    resolve: {
        alias: {
            'public': path.join(__dirname, '../public'),
            '@': path.join(__dirname, '../src')
        }
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: [
                    path.join(__dirname, '../src')
                ],
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            // 这里需要在less的配置规则里打开javascriptEnabled
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            // 这里需要在less的配置规则里打开javascriptEnabled
                            javascriptEnabled: true
                        }
                    }

                ]
            },
            {
                test: /\.(bmp|gif|jpg|jpeg|png|svg)$/,
                exclude: /node_modules/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(eot|otf|ttf|woff|woff2|svg)$/,
                exclude: /node_modules/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(env)
            },
            __DEV__,
            __PROD__
        }),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            env: env,
            systemVersion: pkg.version
        }),
        new HappyPack({
            id: 'babel',
            loaders: ['babel-loader'],
            threadPool: happyThreadPool
        }),
        new HappyPack({
            id: 'less',
            loaders: [`css-loader!less-loader?{"modifyVars": ${JSON.stringify(theme)}}`],
            threadPool: happyThreadPool
        })
    ]
};

module.exports = baseConfig;
