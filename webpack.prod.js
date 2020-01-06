const webpack = require('webpack');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: false,
    performance: {
        hints: 'warning'
    },
    output: {
        pathinfo: false
    },
    optimization: {
        namedModules: false,
        namedChunks: false,
        nodeEnv: 'production',
        flagIncludedChunks: true,
        occurrenceOrder: true,
        sideEffects: true,
        usedExports: true,
        concatenateModules: true,
        noEmitOnErrors: true,
        checkWasmTypes: true,
        minimize: true,
        minimizer: [new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: false//true
        })]
    },
    plugins: [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
        // ,
        // new webpack.SourceMapDevToolPlugin({
        //     filename: 'js/app.js.map',
        //     module: true,
        //     columns: true,
        //     noSources: false,
        //     namespace: '',
        //     exclude: [/jquery/, /tinymce.js/, /bootstrap/, /react/, /openseadragon/, /moment/]
        // })
    ]
});
