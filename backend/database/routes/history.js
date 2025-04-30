// routes/history.js
const express = require('express');
const History = require('../models/history');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const history = await History.findAll();
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch history.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const historyItem = await History.create(req.body);
    res.json(historyItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create history item.' });
  }
});

module.exports = router;