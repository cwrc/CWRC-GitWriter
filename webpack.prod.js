const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: false,
  performance: { hints: 'warning' },
  output: { pathinfo: false },
  optimization: {
    namedModules: false,
    namedChunks: false,
    nodeEnv: 'production',
    flagIncludedChunks: true,
    occurrenceOrder: true,
    sideEffects: true,
    usedExports: true,
    concatenateModules: true,
    noEmitOnErrors: true,
    checkWasmTypes: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true, //default
        parallel: true, // default
        sourceMap: true, //use sourceMapDevToolPlugin
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          //Copy pre-compiled woerker
          context: 'node_modules/cwrc-worker-validator/build/dist/',
          from: 'cwrc.worker.js',
          to: 'js/cwrc.worker.js',
          toType: 'file',
        },
      ],
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    // new webpack.optimize.ModuleConcatenationPlugin(),
    // new webpack.NoEmitOnErrorsPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: 'js/app.js.map',
      module: true,
      columns: true,
      noSources: false,
      namespace: '',
      exclude: [/jquery/, /tinymce.js/, /bootstrap/, /react/, /openseadragon/, /moment/],
    }),
  ],
});
