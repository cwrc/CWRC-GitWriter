const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

module.exports = {
	entry: {
        app: [
            './src/js/app.js'
        ]
    },

	mode: 'none', // all mode defaults for dev and prod and set in the respective configs

	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname, 'build'),
		publicPath: './',
    },
    
    plugins: [
		new webpack.ProgressPlugin(),
		new CleanWebpackPlugin({
			cleanStaleWebpackAssets: false
		}),
		new CopyWebpackPlugin([
			{
				context: 'node_modules/cwrc-writer-base/build/css/',
				from: '**/*',
				to: 'css'
			},{
				context: 'node_modules/cwrc-writer-base/src/img/',
				from: '**/*',
				to: 'img'
			},{
				context: 'node_modules/cwrc-git-dialogs/src/css/',
				from: 'bootstrap.css',
				to: 'css'
			},{
				context: 'node_modules/bootstrap/fonts/',
				from: '*',
				to: 'fonts'
			},{
				context: 'config/',
				from: '*',
				to: 'config'
			},
			{
				context: 'src/img',
				from: '*',
				to: 'img'
			}
		]),
		new HtmlWebpackPlugin({
			template: 'src/html/index.html',
			inject: 'body'
		}),
		new HtmlWebpackExternalsPlugin({
			externals: [{
				module: 'rdflib',
				global: '$rdf',
				entry: {
					path: 'rdflib.min.js',
					cwpPatternConfig: {
						context: path.resolve(__dirname, 'node_modules/cwrc-writer-base/src/lib')
					}
				}
			}],
			outputPath: 'js'
		})
	],
    
    module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: [{
					loader: 'babel-loader',
					options: {
						sourceType: 'unambiguous',
						presets: [
							'@babel/preset-env',
							'@babel/preset-react'
						],
						plugins: [
							'@babel/plugin-proposal-class-properties',
							['@babel/plugin-transform-runtime', {
								'absoluteRuntime': false,
								'corejs': false,
								'helpers': false,
								'regenerator': true,
								'useESModules': false
							}]
						]
					}
				}]
			}
		]
	},

	optimization: {
		splitChunks: {
            cacheGroups: {
                commons: {
					// don't include cwrc or entity lookup modules in vendor bundle
                    test: /[\\/]node_modules[\\/](?!.*(cwrc|entity\-lookup))/,
                    name: 'vendor',
                    chunks: 'initial'
                }
            }
        }
	},

	resolve: {
		extensions: ['*', '.js', '.jsx'],
		symlinks: false
	},

	node: {
		fs: 'empty'
	}
};
