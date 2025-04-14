const express = require('express');
const Mailing = require('../models/mailing');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const mails = await Mailing.findAll();
    res.json(mails);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch mails.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const mail = await Mailing.create(req.body);
    res.json(mail);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create mail.' });
  }
});

module.exports = router;