
// routes/report.js
const express = require('express');
const Report = require('../models/report');
const router = express.Router();

router.get('/', async (req, res) => {
  const reports = await Report.findAll();
  res.json(reports);
});

router.post('/', async (req, res) => {
  const report = await Report.create(req.body);
  res.json(report);
});

module.exports = router;