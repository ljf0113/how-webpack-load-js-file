const path = require('path');
const webpack = require('webpack');
//用于插入html模板
const HtmlWebpackPlugin = require('html-webpack-plugin');
//清除输出目录，免得每次手动删除
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: path.join(__dirname, 'index.js'),
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'js/[name].[chunkhash:4].js'
  },
  module: {},
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    })
  ]
};