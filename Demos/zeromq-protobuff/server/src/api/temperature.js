const express = require('express');
const router = express.Router();
const influx = require('../../database/db');

router.get('/', (req, res) => {
  influx
    .query(` select * from temperatures `)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
