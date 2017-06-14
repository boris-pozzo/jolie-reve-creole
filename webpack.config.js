const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

process.traceDeprecation = true;

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    path.resolve(__dirname, 'client/index.js'),
    ],

  output: {
    path: path.resolve(__dirname, 'public/bundles'),
    filename: '[name].js',
    publicPath: '/public/bundles/',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({ debug: true }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
