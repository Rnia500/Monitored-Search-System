const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Adjust if needed

// Define routes for User-related actions
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/:id', userController.getUserById);

// Export the router
module.exports = router;
