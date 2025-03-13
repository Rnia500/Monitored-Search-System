
// routes/notification.js
const express = require('express');
const Notification = require('../models/notification');
const router = express.Router();

router.get('/', async (req, res) => {
  const notifications = await Notification.findAll();
  res.json(notifications);
});

router.post('/', async (req, res) => {
  const notification = await Notification.create(req.body);
  res.json(notification);
});

module.exports = router;
