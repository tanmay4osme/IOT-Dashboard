const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page, render view welcome.ejs
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
// stay on logout page
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

module.exports = router;
