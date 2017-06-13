const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const app = express();
const port = 3000;
/**
 * Hot reload configuration
 */

/* eslint-disable import/no-extraneous-dependencies */
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: webpackConfig.output.publicPath}));
app.use(webpackHotMiddleware(compiler));
/* eslint-enable import/no-extraneous-dependencies */

app.use(express.static('./dist'));

app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});



app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});