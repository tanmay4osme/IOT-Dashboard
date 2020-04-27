const express = require('@feathersjs/express');
const influx =  require('../database/influx/index');
const router = express.Router();

router.get('/', (req, res) => {
  influx
    .query('SELECT COUNT(*) from light ')
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
