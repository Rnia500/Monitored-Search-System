// routes/boat.js
const express = require('express');
const Boat = require('../models/Boat');
const router = express.Router();

router.get('/', async (req, res) => {
  const boats = await Boat.findAll();
  res.json(boats);
});

router.post('/', async (req, res) => {
  const boat = await Boat.create(req.body);
  res.json(boat);
});

module.exports = router;