const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');


const app = express();

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
