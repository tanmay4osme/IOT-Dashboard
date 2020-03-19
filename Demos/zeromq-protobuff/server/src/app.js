// worker.js
const zmq = require('zeromq');
const sock = zmq.socket('pull');
const protobuf = require('protobufjs');
const influx = require('./database/db');

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares/middlewares');

// Bring in routers
const api = require('./api');
const temperature = require('./api/temperature');
const amount = require('./api/amount');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: 'OK',
  });
});

app.use('/api/v1', api);
app.use('/api/v1/temperature', temperature);
app.use('/api/v1/amount', amount);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = {
  app,
  influx,
  sock,
  protobuf,
};
