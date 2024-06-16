const express = require('express');
const passport = require('passport');
const { ensureAuthenticated } = require('../middleware/auth');
const { sendEmail, getCommunicationHistory } = require('../controllers/emailController');
const router = express.Router();

// Google OAuth authentication route
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google OAuth callback route
router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

// Logout route
router.get('/logout', (req, res) => {
  req.logout(err => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

// Get current authenticated user
router.get('/user', (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

// Send email route
router.post('/send-email', ensureAuthenticated, sendEmail);

// Get communication history route
router.get('/communication-history', ensureAuthenticated, getCommunicationHistory);

module.exports = router;
