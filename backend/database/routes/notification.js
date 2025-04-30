
// routes/notification.js
const express = require('express');
const Notification = require('../models/notification');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const notifications = await Notification.findAll();
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notifications.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const notification = await Notification.create(req.body);
    res.json(notification);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create notification.' });
  }
});

module.exports = router;
