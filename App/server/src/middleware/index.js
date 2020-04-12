const download = require('./download');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.use('/logs/download', download());
};
