
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(`${__dirname}/src/index.js`),
  output: {
    path: path.resolve(`${__dirname}/dist/`),
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      loader: 'vue-loader'
    }]
  }
};
