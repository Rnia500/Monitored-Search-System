
// routes/register.js
const express = require('express');
const Register = require('../models/report');
const router = express.Router();

router.get('/', async (req, res) => {
  const registers = await Register.findAll();
  res.json(registers);
});

router.post('/', async (req, res) => {
  const register = await Register.create(req.body);
  res.json(register);
});

module.exports = router;