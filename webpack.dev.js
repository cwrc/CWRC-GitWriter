const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  cache: true,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // host: 'localhost',
    // port: 3000,
  },
  devtool: false,
  output: {
    pathinfo: true,
    publicPath: '/',
  },
  optimization: {
    checkWasmTypes: false,
    concatenateModules: false,
    emitOnErrors: true,
    flagIncludedChunks: false,
    minimize: false,
    nodeEnv: 'development',
    removeAvailableModules: false,
    sideEffects: false,
    usedExports: false,
  },
  performance: { hints: false },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new webpack.EvalSourceMapDevToolPlugin({
      columns: true,
      exclude: [
        /bootstrap/,
        /jquery/,
        /moment/,
        /openseadragon/,
        /react/,
        /tinymce.js/,
      ],
      module: true,
    }),
  ],


});
