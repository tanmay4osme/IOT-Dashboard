const download = require('./download');

module.exports = (app) => {
  app.use('/logs/download', download());
};
