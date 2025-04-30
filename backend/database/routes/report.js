const express = require('express');
const Report = require('../models/report');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const reports = await Report.findAll();
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reports.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const report = await Report.create(req.body);
    res.json(report);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create report.' });
  }
});

module.exports = router;