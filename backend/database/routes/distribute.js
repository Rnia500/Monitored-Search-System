
// routes/distribution.js
const express = require('express');
const Distribution = require('../models/distribution');
const router = express.Router();

router.get('/', async (req, res) => {
  const distributions = await Distribution.findAll();
  res.json(distributions);
});

router.post('/', async (req, res) => {
  const register = await Distribution.create(req.body);
  res.json(distribution);
});

module.exports = router;