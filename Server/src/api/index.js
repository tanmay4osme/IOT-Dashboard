/** @format */

const express = require('express');

const emojis = require('./emojis');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);

module.exports = router;
