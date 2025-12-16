const knex = require('knex')(require('../../knexfile').development);

async function createTask(userId, data) {
  const [task] = await knex('tasks')
    .insert({ ...data, user_id: userId })
    .returning('*');
  return task;
}

async function getTasks(userId) {
  return knex('tasks').where({ user_id: userId });
}

async function updateTask(userId, taskId, data) {
  const [task] = await knex('tasks')
    .where({ id: taskId, user_id: userId })
    .update(data)
    .returning('*');
  return task;
}

async function deleteTask(userId, taskId) {
  return knex('tasks')
    .where({ id: taskId, user_id: userId })
    .del();
}

module.exports = { createTask, getTasks, updateTask, deleteTask };
