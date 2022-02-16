const connect = require('../db');

const findAllTasks = async () => {
  const conn = await connect();

  const tasks = await conn.collection('tasks')
    .find({}).toArray();
  return tasks;
};

const createTask = async (title, description, status) => {
  const conn = await connect();

  const newTask = await conn.collection('tasks')
    .insertOne({
      title, description, status,
    });

  return newTask;
};

module.exports = {
  createTask,
  findAllTasks,
};
