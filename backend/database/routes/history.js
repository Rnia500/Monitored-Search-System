// routes/history.js
const express = require('express');
const History = require('../models/history');
const router = express.Router();

router.get('/', async (req, res) => {
  const historyEntries = await History.findAll();
  res.json(historyEntries);
});

router.post('/', async (req, res) => {
  const historyEntry = await History.create(req.body);
  res.json(historyEntry);
});

module.exports = router;