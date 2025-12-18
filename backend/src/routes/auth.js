const express = require('express');
const router = express.Router();
const { signup, login } = require('../services/authService');

// Signup
router.post('/signup', async (req, res) => {
  try {
    const user = await signup(req.body);
    res.status(201).json({ user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  const result = await login(req.body);
  if (!result) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  res.json(result);
});

module.exports = router;
