const express = require('express');

const router = express.Router();
const influx = require('../database/index');

router.get('/', (req, res) => {
  influx
    .query('select * from temperatures')
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log('err', err);
    });
});

module.exports = router;
