'use strict';

let path = require('path');

module.exports = {
    entry: {
        main: path.resolve('./src/app.js')
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve('./public')
    },

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
