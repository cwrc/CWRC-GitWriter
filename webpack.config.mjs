import path from 'path';
import { fileURLToPath } from 'url';

import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { getPlugins } from './webpack_config/plugins.mjs';
import { getRules } from './webpack_config/module.rules.mjs';

const env = process.env.NODE_ENV;
const envWorker = process.env.WORKER_ENV;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mode = env === 'development' ? 'development' : 'production';
const watch = env === 'development' ? true : false;
const cache = env === 'development' ? true : false;
const devtool = env === 'development' ? 'inline-source-map' : 'source-map'; //'eval-source-map' (might be faster for dev)
const devServer =
  env === 'development'
    ? { contentBase: path.resolve(__dirname, 'dist') /* port: 3000, host: 'localhost' */ }
    : {};

const entry = {
  app: [path.resolve(__dirname, 'src', 'index.js')],
};

const output = {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name].js',
  publicPath: './',
  // libraryTarget: 'umd',
  globalObject: 'this', //* important for web workers,
  pathinfo: env === 'development' ? true : false,
};

const resolve = {
  alias: {
    '@src': path.resolve(__dirname, 'node_modules/cwrc-writer-base/src/'),
  },
  extensions: ['*', '.tsx', '.ts', '.js', '.jsx'],
  fallback: {
    buffer: false,
    events: false,
    fs: false,
    path: false,
    process: false,
    querystring: false,
    url: false,
  },
};

const optimization = {
  emitOnErrors: env === 'development' ? true : false,
  minimize: env === 'development' ? false : true,
  minimizer: env === 'development' ? [] : [new TerserPlugin(), new CssMinimizerPlugin()],
  sideEffects: env === 'development' ? false : true,
  usedExports: env === 'development' ? false : true,
  splitChunks: {
    cacheGroups: {
      commons: {
        // don't include cwrc or entity lookup modules in vendor bundle
        test: /[\\/]node_modules[\\/](?!.*(cwrc|entity-lookup))/,
        name: 'vendor',
        chunks: 'all',
      },
      styles: {
        name: 'styles',
        test: /\.css$/,
        chunks: 'all',
        enforce: true,
      },
    },
  },
};

const plugins = getPlugins({ dirname: __dirname, env, envWorker });
const rules = getRules({ env, envWorker });
const module = { rules };

const performance = { hints: env === 'development' ? false : 'warning' };

const debug = env === 'development' && false;
const stats = debug ? { children: true } : {};

const webpackConfig = {
  cache,
  devServer,
  devtool,
  entry,
  mode,
  module,
  optimization,
  output,
  performance,
  plugins,
  resolve,
  stats,
  watch,
};

export default webpackConfig;
