const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const path = require('path');
const cors = require('cors');
const favicon = require('serve-favicon');
const compress = require('compression');
const bodyParser = require('body-parser');
const passport = require('passport');
const promisify = require('es6-promisify');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const compiler = webpack(webpackConfig);
const port = (process.env.PORT || 3000);

const app = express();

// config webpackdevmiddleware
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: webpackConfig.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use('/public', express.static(path.join(__dirname, '../public')));

app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

app.use(cors());
// app.use(favicon(path.join(__dirname, '../../public/favicon.ico')));
app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('dotenv').config({ path: 'variables.env' });
app.use(session({
  secret: process.env.SECRET,
  key: process.env.KEY,
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

mongoose.connect(process.env.DATABASE,{
  useMongoClient: true,
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});


app.listen(port, error => {
  if (error) throw error; 
  console.log(`Express running → PORT ${port}`);
});
