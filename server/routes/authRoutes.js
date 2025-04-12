const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authenticate = require('../middleware/authMiddleware');

router.post('/register', authController.register);

router.post('/login', authController.login);

router.post('/logout', authController.logout);

router.get('/profile', authenticate, (req, res) => {
  res.status(200).json({
    message: 'Protected profile',
    user: req.user
  });
});

module.exports = router;
