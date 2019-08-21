const path = require('path');
const webpack = require('webpack');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

module.exports = {
	mode: 'development',
	entry: './src/js/app.js',

	output: {
		filename: 'js/app.js',
		path: path.resolve(__dirname, 'build')
	},

	plugins: [new webpack.ProgressPlugin(), new HtmlWebpackPlugin({
		template: "src/html/index.html",
		inject: false
	})],

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
							["@babel/plugin-transform-runtime",{
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

	resolve: {
		extensions: ['*', '.js', '.jsx']
	},

	// optimization: {
	// 	splitChunks: {
	// 		cacheGroups: {
	// 			vendors: {
	// 				priority: -10,
	// 				test: /[\\/]node_modules[\\/]/
	// 			}
	// 		},

	// 		chunks: 'async',
	// 		minChunks: 1,
	// 		minSize: 30000,
	// 		name: true
	// 	}
	// },

	node: {
		fs: 'empty'
	},

	devServer: {
		open: false,
		contentBase: './build'
	}
};
