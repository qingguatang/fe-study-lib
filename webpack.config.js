const pathUtil = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const srcPath = pathUtil.join(__dirname, 'src');
const distPath = pathUtil.join(__dirname, 'dist');


/* eslint no-process-env: 0 */

const env = process.NODE_ENV;

module.exports = {
  entry: {
    lib: './src',
    demo: './demo'
  },


  output: {
    path: distPath,
    filename: '[name].js',
    chunkFilename: "[id]-[chunkhash].js",
    publicPath: '/dist/'
  },


  module: {
    rules: [
      {
        test: /\.less/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },


  plugins: [
    new UglifyJsPlugin()
  ],


  resolve: {
    alias: {
    }
  }
};

