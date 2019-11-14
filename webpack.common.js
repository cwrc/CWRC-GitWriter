const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/js/app.js',

	mode: 'none', // all mode defaults for dev and prod and set in the respective configs

	output: {
		filename: 'js/[name].[contenthash].js',
		path: path.resolve(__dirname, 'build')
    },
    
    plugins: [
		new webpack.ProgressPlugin(),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin([{
			context: 'node_modules/cwrc-writer-base/build/js/',
			from: '**/*',
			to: 'js',
			flatten: true
		},{
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
		}]),
		new HtmlWebpackPlugin({
			template: "src/html/index.html",
			inject: "body"
		})
	],
    
    module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: [{
					loader: 'babel-loader',
					options: {
						sourceType: "unambiguous",
						presets: [
							"@babel/preset-env",
							"@babel/preset-react"
						],
						plugins: [
							"@babel/plugin-proposal-class-properties",
							["@babel/plugin-transform-runtime", {
								"absoluteRuntime": false,
								"corejs": false,
								"helpers": false,
								"regenerator": true,
								"useESModules": false
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
                    name: "vendor",
                    chunks: "initial"
                }
            }
        }
	},

	externals: {
		rdflib: '$rdf'
	},

	resolve: {
		extensions: ['*', '.js', '.jsx'],
		symlinks: false
	},

	node: {
		fs: 'empty'
	}
};
