const express = require('express');
const router = express.Router();
const authController = require('../Controllers/AuthController');
const { validateToken } = require('../MiddleWares/ValidateToken');

// Login route
router.post('/login',  authController.login);

// Profile route
router.get('/profile',validateToken, authController.profile);

// Logout route
router.get('/logout',validateToken, authController.logout);

module.exports = router;
