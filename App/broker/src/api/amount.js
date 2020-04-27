const express = require('express');

const router = express.Router();
const influx = require('../database/index');

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
