const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

router.post('/login', (req, res) => {
  console.log('here:',req.body)
  const { username, password } = req.body;

  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    req.session.admin = true;  
    return res.json({ message: 'Login successful' });
  }

  res.status(401).json({ message: 'Invalid credentials' });
});

router.get('/isAuthenticated', (req, res) => {
  if (req.session.isAdmin) {
    res.status(200).send({ isAuthenticated: true });
  } else {
    res.status(401).send({ isAuthenticated: false });
  }
});

router.post('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        console.error('Error destroying session:', err);
        return res.status(500).send({ message: 'Logout failed' });
      } else {
        return res.status(200).send({ message: 'Logged out successfully' });
      }
    });
  } else {
    return res.status(400).send({ message: 'No session found' });
  }
});

module.exports = router;