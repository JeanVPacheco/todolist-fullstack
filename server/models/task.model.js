const connect = require('../db');

const createTask = async (userId, title, description, status) => {
  const conn = await connect();

  const newTask = await conn.collection('tasks')
    .insertOne({
      userId, title, description, status,
    });

  return newTask;
};

module.exports = {
  createTask,
};
