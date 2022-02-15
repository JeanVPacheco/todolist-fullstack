const connect = require('../db');

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
};
