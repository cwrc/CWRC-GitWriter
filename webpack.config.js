const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
	config.devtool = false;
	const excludes = [/jquery/, /jquery-ui/, /openseadragon/, /moment/, /tinymce/, /bootstrap/, /react/, /react-bootstrap/];

	if (argv.mode === 'development') {
		// config.devtool = 'cheap-eval-source-map';
		config.plugins.push(new webpack.EvalSourceMapDevToolPlugin({
			module: true,
			columns: true,
			exclude: excludes
		}));
	}

	if (argv.mode === 'production') {
		// config.devtool = 'source-map';
		config.plugins.push(new webpack.SourceMapDevToolPlugin({
			filename: 'app.js.map',
			append: false,
			module: true,
			columns: true,
			noSources: false,
			namespace: '',
			exclude: excludes
		}));
	}

	return config;
};
