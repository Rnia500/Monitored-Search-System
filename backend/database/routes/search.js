// routes/search.js
const express = require('express');
const Search = require('../models/search');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const results = await Search.findAll();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch search results.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const result = await Search.create(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create search result.' });
  }
});

module.exports = router;