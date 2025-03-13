
// routes/cargo.js
const express = require('express');
const Cargo = require('../models/cargo');
const router = express.Router();

router.get('/', async (req, res) => {
  const cargo = await Cargo.findAll();
  res.json(cargo);
});

router.post('/', async (req, res) => {
  const cargoItem = await Cargo.create(req.body);
  res.json(cargoItem);
});

module.exports = router;
