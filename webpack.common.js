const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const babelLoaderExcludeNodeModulesExcept = require('babel-loader-exclude-node-modules-except');
// const ThreadsPlugin = require('threads-plugin');

module.exports = {
  mode: 'none', // all mode defaults for dev and prod and set in the respective configs
  entry: {
    app: [path.resolve(__dirname, 'src', 'index.js')],
    // worker: [path.resolve(__dirname, '..', 'cwrc-worker-validator', 'src', 'index.ts')],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    // libraryTarget: 'umd',
    globalObject: 'this', //* important for web workers
  },
  // stats: {
  //   children: true
  // },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
    },
    extensions: ['*', '.tsx', '.ts', '.js', '.jsx'],
    // symlinks: false,
    // // alias: {
    // //   process: 'process/browser',
    // // },
    fallback: {
      // assert: false,
      // assert: require.resolve('assert/'),
      buffer: false,
      // 'console-browserify': false,
      'console-browserify': require.resolve('console-browserify'),
      events: false,
      fs: false,
      path: false,
      // process: false,
      // // process: 'process/browser',
      querystring: false,
      // // stream: false,
      // stream: require.resolve('stream-browserify'),
      url: false,
    },
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new CopyWebpackPlugin({
      patterns: [
        {
          //copy config.json
          context: path.resolve(__dirname, 'config'),
          from: '*',
          to: 'config',
        },
        {
          //Copy pre-compiled CSS required by tinyMCE
          context: path.resolve(
            __dirname,
            'node_modules',
            'cwrc-writer-base',
            'src',
            'css',
            'tinymce'
          ),
          from: '*.css',
          to: 'css/tinymce',
        },
        {
          //Copy pre-compiled CSS to stylize the editor (must be recompiled after each change)
          context: path.resolve(
            __dirname,
            'node_modules',
            'cwrc-writer-base',
            'src',
            'css',
            'build'
          ),
          from: 'editor.css',
          to: 'css/editor.css',
          toType: 'file',
        },
        {
          context: path.resolve(
            __dirname,
            '..',
            'CWRC-Worker-Validator',
            'build',
            'dist'
          ),
          from: 'worker.js',
          to: 'worker.js',
          toType: 'file',
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      favicon: path.resolve(__dirname, 'src', 'assets', 'favicon-32x32.png'),
      inject: 'head',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
    // new ThreadsPlugin(),
    new WebpackBar({ color: '#0099ff' }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        // include: /node_modules\/cwrc-worker-validator/,
        // exclude: babelLoaderExcludeNodeModulesExcept([
        //   'cwrc-writer-base',
        //   'cwrc-worker-validator',
        // ]),
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                module: "esnext"
              }
            }
          },
        ]
      },
      // {
      //   //Only because `async` module doesn't comply with ESM: CWRC-GitWriter/node_modules/cwrc-writer-base/node_modules/async/dist
      //   test: /\.m?js/,
      //   resolve: { fullySpecified: false },
      // },
      {
        test: /\.(js|jsx)$/,
        //exclude `node_modules` except CWRC modules
        exclude: babelLoaderExcludeNodeModulesExcept([
          'cwrc-writer-base',
          'cwrc-git-dialogs',
          'cwrc-public-entity-dialogs',
          'dbpedia-entity-lookup',
          'geonames-entity-lookup',
          'getty-entity-lookup',
          'lgpn-entity-lookup',
          'viaf-entity-lookup',
          'wikidata-entity-lookup',
          // 'cwrc-worker-validator',
        ]),
        use: ['babel-loader']
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '../' }, // you can specify a publicPath here by default it uses publicPath in webpackOptions.output
          },
          { loader: 'css-loader' /* translates CSS into CommonJS*/ },
          {
            loader: 'less-loader', // compiles Less to CSS //more: https://itnext.io/webpack-and-less-a75e04aaf528
            options: {
              lessOptions: {
                relativeUrls: 'local', //https://github.com/webpack-contrib/less-loader/issues/109,
                globalVars: { parentId: '#cwrcWriterContainer' },
              },
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset',
        generator: {
          filename: 'fonts/[name][ext][query]',
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext][query]',
        },
      },
      {
        test: /\.svg/,
        type: 'asset/inline',
      },
      // {
      //   test: /\.svg$/,
      //   loader: 'svg-inline-loader',
      //   options: {
      //     removeSVGTagAttrs: false,
      //   },
      // },
    ],
  },
  optimization: {
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
  },
};
