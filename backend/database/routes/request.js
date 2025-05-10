
// routes/request.js
const express = require('express');
const Request = require('../models/request');
const router = express.Router();

router.get('/', async (req, res) => {
  const requests = await Request.findAll();
  res.json(requests);
});

router.post('/', async (req, res) => {
  const request = await Request.create(req.body);
  res.json(request);
});

module.exports = router;