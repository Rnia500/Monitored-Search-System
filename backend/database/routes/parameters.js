const express = require('express');
const Parameters = require('../models/parameters');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const parameters = await Parameters.findAll();
    res.json(parameters);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch parameters.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const parameter = await Parameters.create(req.body);
    res.json(parameter);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create parameter.' });
  }
});

module.exports = router;