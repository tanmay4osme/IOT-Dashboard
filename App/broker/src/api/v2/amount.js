const express = require('express');

const router = express.Router();
const {dataDB} = require('../../database/index');

router.get('/', (req, res) => {
  dataDB
    .query('SELECT COUNT(*) from temperatures ')
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
