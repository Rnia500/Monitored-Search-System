// routes/search.js
const express = require('express');
const Search = require('../models/search');
const router = express.Router();

router.get('/', async (req, res) => {
  const searches = await Search.findAll();
  res.json(searches);
});

router.post('/', async (req, res) => {
  const search = await Search.create(req.body);
  res.json(search);
});

module.exports = router;