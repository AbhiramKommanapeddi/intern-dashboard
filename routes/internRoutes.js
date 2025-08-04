const express = require('express');
const router = express.Router();
const data = require('../data/interns.json');

router.get('/intern', (req, res) => {
  res.json(data.intern);
});

router.get('/leaderboard', (req, res) => {
  res.json(data.leaderboard);
});

module.exports = router;
