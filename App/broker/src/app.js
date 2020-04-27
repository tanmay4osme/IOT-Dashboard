const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const influx = require('./database/index.js');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');
const light = require('./api/light');
const amount = require('./api/amount');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

influx
  .getDatabaseNames()
  .then((names) => {
    if (!names.includes('logs')) {
      return influx.createDatabase('logs');
    }
  })
  .then(() => {
    console.log('Database exists');
  })
  .catch((err) => {
    console.log(`Error creating influx database - ${err}`);
  });

app.use('/api/v1', api);
app.use('/api/v1/light', light);
app.use('/api/v1/amount', amount);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
