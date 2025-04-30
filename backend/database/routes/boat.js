const express = require('express');
const Boat = require('../models/boat');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const boats = await Boat.findAll();
    res.json(boats);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch boats.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const boat = await Boat.create(req.body);
    res.json(boat);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create boat.' });
  }
});

module.exports = router;