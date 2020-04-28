const express = require('express');

const router = express.Router();
const { dataDB }  = require('../../database/index');

router.get('/', (req, res) => {
  dataDB
    .query('select * from temperatures')
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log('err', err);
    });
});

module.exports = router;
