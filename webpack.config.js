'use strict';

let path = require('path');
let OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve('./src/index.js')
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve('./public')
    },

    plugins: [
      new OpenBrowserPlugin({ url: 'http://localhost:9000' })
    ],

    devtool: '#cheap-source-map',

    devServer: {
      compress: true,
      port: 9000,
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }
      ]
    }
};
