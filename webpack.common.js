const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require('webpackbar');

module.exports = {
	entry: {
		app: ['./src/js/app.js'],
	},
	mode: 'none', // all mode defaults for dev and prod and set in the respective configs
	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname, 'build'),
		publicPath: './',
	},
	plugins: [
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		new CopyWebpackPlugin({
			patterns: [{
				//copy config.json
				context: 'config/',
				from: '*',
				to: 'config',
			},
			{
				//copy images for GitWriter (favicon)
				context: 'src/img',
				from: '*',
				to: 'img',
			},
			{
				//copy images from Writer-Base
				context: 'node_modules/cwrc-writer-base/src/img',
				from: '*',
				to: 'img',
			},
			{
				//Copy pre-compiled CSS required by tinyMCE
				context: 'node_modules/cwrc-writer-base/src/css/tinymce/',
				from: '*.css',
				to: 'css/tinymce',
			},
			{
				//Copy pre-compiled CSS to stylize the editor (must be recompiled after each change)
				context: 'node_modules/cwrc-writer-base/src/css/build/',
				from: 'editor.css',
				to: 'css/editor.css',
				toType: 'file',
			}],
		}),
		new HtmlWebpackPlugin({
			template: 'src/html/index.html',
			inject: 'body',
		}),
		new MiniCssExtractPlugin({
			filename: '/css/[name].css',
			chunkFilename: '/css/[id].css',
		}),
    // new ThreadsPlugin(),
    new WebpackBar({ color: '#0099ff' }),
  ],
  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        use: [
          { loader: 'worker-loader' },
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
				test: /\.(js|jsx)$/,
				use: [{
					loader: 'babel-loader',
					options: {
						sourceType: 'unambiguous',
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: [
							'@babel/plugin-proposal-private-methods',
							'@babel/plugin-proposal-class-properties', [
								'@babel/plugin-transform-runtime', {
									absoluteRuntime: false,
									corejs: false,
									helpers: false,
									regenerator: true,
									useESModules: false,
								},
							],
						],
					},
				}],
			},
			{
				test: /\.(le|c)ss$/,
				use: [{
					loader: MiniCssExtractPlugin.loader,
					options: {
						// you can specify a publicPath here
						// by default it uses publicPath in webpackOptions.output
						publicPath: '../',
						esModule: true,
						hmr: process.env.NODE_ENV === 'development', //allows to use this plugin in DEV
					},
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
				}],
			},
			{
				test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
				enforce: 'pre', // preload the jshint loader
				use: [{
					loader: 'url-loader',
					options: {
						query: { limit: 25000 },
					},
				}],
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				enforce: 'pre', // preload the jshint loader
				// exclude: /node_modules/, // exclude any and all files in the node_modules folder
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'img',
					},
				},
				{
					loader: 'image-webpack-loader',
					options: { disable: true /* webpack@2.x and newer */ },
				}],
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader',
				options: {
					removeSVGTagAttrs: false
				}
			},
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
	resolve: {
		extensions: ['*', '.js', '.jsx'],
		symlinks: false,
	},
	node: { fs: 'empty' },
};
