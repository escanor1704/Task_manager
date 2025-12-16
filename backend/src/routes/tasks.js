const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} = require('../services/taskService');

router.use(auth);

// Get all tasks
router.get('/', async (req, res) => {
  const tasks = await getTasks(req.user.id);
  res.json(tasks);
});

// Create task
router.post('/', async (req, res) => {
  const task = await createTask(req.user.id, req.body);
  res.status(201).json(task);
});

// Update task
router.patch('/:id', async (req, res) => {
  const task = await updateTask(req.user.id, req.params.id, req.body);
  res.json(task);
});

// Delete task
router.delete('/:id', async (req, res) => {
  await deleteTask(req.user.id, req.params.id);
  res.status(204).send();
});

// placeholder route
router.get('/', (req, res) => {
  res.json({ message: 'Tasks route works' });
});


module.exports = router;
