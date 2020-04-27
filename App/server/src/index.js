/* eslint-disable no-console */
const logger = require('./logger');
const app = require('./app');
//const port = app.get('port');
const SERVER_PORT = process.env.SERVER_PORT || 80
const server = app.listen(SERVER_PORT);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () =>
  logger.info(
    'Feathers application started on http://%s:%d',
    app.get('host'),
    SERVER_PORT
  )
);
