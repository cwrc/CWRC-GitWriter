const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    // devtool: 'inline-cheap-module-source-map',
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
        removeAvailableModules: false
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.NamedChunksPlugin(),
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') }),
        new webpack.EvalSourceMapDevToolPlugin({
            module: true,
            columns: true,
            exclude: [/jquery/, /tinymce.js/, /bootstrap/, /react/, /openseadragon/, /moment/]
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        port: 3000,
        host: 'localhost',
    }
});
