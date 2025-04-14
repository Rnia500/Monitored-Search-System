
// routes/cargo.js
const express = require('express');
const Cargo = require('../models/cargo');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const cargo = await Cargo.findAll();
    res.json(cargo);
  }
  catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const cargoItem = await Cargo.create(req.body);
    res.json(cargoItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
