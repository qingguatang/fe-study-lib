const pathUtil = require('path');

const srcPath = pathUtil.join(__dirname, 'src');
const distPath = pathUtil.join(__dirname, 'dist');


/* eslint no-process-env: 0 */

const env = process.NODE_ENV;

module.exports = {
  entry: {
    p1: './src/p1',
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
  ],


  resolve: {
    alias: {
    }
  }
};

