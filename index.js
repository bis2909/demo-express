require('module-alias/register');
const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();
app.disable("x-powered-by");
app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// connect to database
const db = require("@app/models");
db.sequelize.sync();

// importing api v1 route
require('./app/routes/')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).send({error: 'Not found!'});
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
