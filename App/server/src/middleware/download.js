const path = require('path');

module.exports = () => {
  return function download(req, res) {
    res.download(path.join(__dirname, '../../logs/logging.log'));
  };
};
