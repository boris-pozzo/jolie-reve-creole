const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
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

app.use(webpackDevMiddleware(compiler, {noInfo: false, publicPath: webpackConfig.output.publicPath}));
app.use(webpackHotMiddleware(compiler));
/* eslint-enable import/no-extraneous-dependencies */

// Enable CORS from client-side
app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/public', express.static(path.join(__dirname, '../public')));

app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});



app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});