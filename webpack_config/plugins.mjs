import path from 'path';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import WebpackBar from 'webpackbar';
import { getPatterns } from './plugin.copyFiles.Patterns.mjs';

let dirname = '';
let env = 'production';
let envWorker = 'production';

export const getPlugins = ({ dirname: _dirname, env: _env, envWorker: _envWorker }) => {
  dirname = _dirname;
  env = _env;
  envWorker = _envWorker;

  const plugins = [
    cleanWebpackPlugin,
    copyWebpackPlugin(),
    definePlugin(),
    htmlWebpackPlugin,
    miniCssExtractPlugin,
    providePlugin,
    webpackBarPlugin(),
  ];

  return plugins;
};

const cleanWebpackPlugin = new CleanWebpackPlugin({ cleanStaleWebpackAssets: false });

const copyWebpackPlugin = () => {
  const patterns = getPatterns({ dirname, env, envWorker });
  return new CopyWebpackPlugin({ patterns });
};

const definePlugin = () => {
  return new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(env),
    WORKER_ENV: JSON.stringify(envWorker),
  });
};

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.resolve(dirname, 'src', 'index.html'),
  favicon: path.resolve(dirname, 'src', 'assets', 'favicon-32x32.png'),
});

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: 'css/[name].css',
  chunkFilename: 'css/[id].css',
});

const providePlugin = new webpack.ProvidePlugin({
  process: 'process/browser',
});

const webpackBarPlugin = () => {
  const color =
    env === 'production' ? '#9ccc65' : envWorker === 'production' ? '#64b5f6' : '#7e57c2';
  return new WebpackBar({ color });
};
