const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const ThreadsPlugin = require('threads-plugin');

const common = require('./webpack.common.js');

module.exports = (env) => {
  const workerConfig = env.WORKER_DEV === 'true' ? useThreadPlugin() : copyPrecompiledWorker();

  return merge(common, workerConfig, {
    watch: true,
    stats: { errorDetails: false },
    devtool: false,
    cache: true,
    performance: { hints: false },
    output: { pathinfo: true },
    optimization: {
      namedModules: true,
      namedChunks: true,
      nodeEnv: 'development',
      flagIncludedChunks: false,
      occurrenceOrder: false,
      sideEffects: false,
      usedExports: false,
      concatenateModules: false,
      noEmitOnErrors: false,
      checkWasmTypes: false,
      minimize: false,
      removeAvailableModules: false,
    },
    plugins: [
      new webpack.NamedChunksPlugin(),
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') }),
      new webpack.EvalSourceMapDevToolPlugin({
        module: true,
        columns: true,
        exclude: [
          // /jquery/,
          // /tinymce.js/,
          // /bootstrap/,
          /react/,
          /openseadragon/,
          /moment/,
        ],
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      port: 3000,
      host: 'localhost',
    },
  });
};

const useThreadPlugin = () => ({
  plugins: [new ThreadsPlugin()],
});

const copyPrecompiledWorker = () => ({
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          // context: 'node_modules/cwrc-worker-validator/build/dist/',
          context: 'node_modules/cwrc-writer-base/node_modules/cwrc-worker-validator/build/dist/',
          from: 'cwrc.worker.js',
          to: 'js/cwrc.worker.js',
          toType: 'file',
        },
      ],
    }),
  ],
});
