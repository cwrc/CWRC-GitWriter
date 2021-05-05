import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from '../../webpack.dev.js';

export const devTools = (app) => {
  //webpack middleware and hot reload
  config.entry.app.unshift('webpack-hot-middleware/client?reload=true&timeout=1000'); //Auto-reloading when webpack detects any changes
  config.plugins.push(new webpack.HotModuleReplacementPlugin()); //Add HMR plugin
  const compiler = webpack(config);
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
      writeToDisk: true,
    })
  );

  // Enable "webpack-hot-middleware"
  app.use(webpackHotMiddleware(compiler));

  console.log('Dev Server is online!');
};
