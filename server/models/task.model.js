const { ObjectId } = require('mongodb');
const connect = require('../db');

const findAllTasks = async () => {
  const conn = await connect();

  const tasks = await conn.collection('tasks')
    .find({}).toArray();
  return tasks;
};

const createTask = async (newTask) => {
  const {
    title, description, status,
  } = newTask;
  console.log(newTask);
  const conn = await connect();
  console.log(newTask);

  const createdTask = await conn.collection('tasks')
    .insertOne({
      title, description, status,
    });

  return createdTask;
};

const editById = async (newTask) => {
  const {
    id, title, description, status,
  } = newTask;

  const conn = await connect();
  const task = await conn.collection('tasks')
    .updateOne(
      { _id: ObjectId(id) },
      { $set: { title, description, status } },
    );

  if (task.matchedCount === 0) return null;
  return {
    _id: id, title, description, status,
  };
};

const deleteById = async (id) => {
  const conn = await connect();
  await conn.collection('tasks')
    .deleteOne({ _id: ObjectId(id) });
};

module.exports = {
  createTask,
  findAllTasks,
  editById,
  deleteById,
};
