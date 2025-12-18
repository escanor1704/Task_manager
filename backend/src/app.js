const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');

// middleware
app.use(cors());
app.use(express.json());

// health route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// routes
app.use('/api/auth', authRoutes);

app.use('/api/tasks', taskRoutes);

module.exports = app;
