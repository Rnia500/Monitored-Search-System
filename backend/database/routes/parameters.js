// routes/parameter.js
const express = require('express');
const Parameter = require('../models/parameter');
const router = express.Router();

router.get('/', async (req, res) => {
  const parameters = await Parameter.findAll();
  res.json(parameters);
});

router.post('/', async (req, res) => {
  const parameter = await Parameter.create(req.body);
  res.json(parameter);
});

module.exports = router;
