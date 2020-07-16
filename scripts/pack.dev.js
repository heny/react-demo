const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const baseConfig = require('./pack.base');

const devConfig = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        host: '0.0.0.0',
        port: '8888',
        proxy: [
            {
                context: [],
                target: '',
                changeOrigin: true,
                secure: false
            }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            manifest: require(path.join(__dirname, '../dll', 'vendor-manifest.json'))
        }),
        new AddAssetHtmlPlugin({
            filepath: require.resolve('../dll/vendor.dll.js'),
            includeSourcemap: false
        })
    ]
});

module.exports = devConfig;
