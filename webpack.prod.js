const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: { pathinfo: false },
  optimization: {
    checkWasmTypes: true,
    concatenateModules: true,
    emitOnErrors: false,
    flagIncludedChunks: true,
    nodeEnv: 'production',
    sideEffects: true,
    usedExports: true,
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  performance: { hints: 'warning' },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    // new webpack.SourceMapDevToolPlugin({
    //   exclude: ['js/vendor.js'],
    //   filename: 'js/[name].js.map',
    // }),
  ],












});
