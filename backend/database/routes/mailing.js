// routes/mailing.js
const express = require('express');
const Mailing = require('../models/mailing');
const router = express.Router();

router.get('/', async (req, res) => {
  const mailEntries = await Mailing.findAll();
  res.json(mailEntries);
});

router.post('/', async (req, res) => {
  const mailEntry = await Mailing.create(req.body);
  res.json(mailEntry);
});

module.exports = router;
