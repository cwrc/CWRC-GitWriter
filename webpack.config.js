const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let config = {
	entry: './src/js/app.js',

	output: {
		filename: 'js/app.js',
		path: path.resolve(__dirname, 'build')
	},

	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: "src/html/index.html",
			inject: false
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

	resolve: {
		extensions: ['*', '.js', '.jsx'],
		symlinks: false
	},

	// optimization: {
	// 	minimizer: [
	// 		new UglifyJsPlugin({
	// 			uglifyOptions: {
	// 				output: {
	// 					comments: false
	// 				}
	// 			}
	// 		})
	// 	]
	// },

	node: {
		fs: 'empty'
	},

	devServer: {
		open: false,
		contentBase: './build'
	}
};

module.exports = (env, argv) => {
	if (process.env.NODE_ENV === 'development') {
		config.devtool = 'eval-source-map';
	}

	if (process.env.NODE_ENV === 'production') {
		config.devtool = 'source-map';
	}

	return config;
};
