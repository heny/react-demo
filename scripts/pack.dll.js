const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        vendor: [
            'antd',
            '@rematch/core',
            '@rematch/loading',
            'axios',
            'connected-react-router',
            'history',
            'moment',
            'prop-types',
            'lodash',
            'js-cookie',
            'react',
            'react-dom',
            'react-loadable',
            'react-redux',
            'react-router-dom',
            'redux',
            'classnames'
        ]
    },
    output: {
        path: path.join(__dirname, '../dll'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]_library',
            path: path.join(__dirname, '../dll', '[name]-manifest.json')
        })
    ]
};
