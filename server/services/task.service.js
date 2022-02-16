const { taskModel } = require('../models');

const taskSchema = require('../schemas/task');
const errorGenerator = require('../utils/errorGenerator');

const findAllTasks = async () => {
  const tasks = await taskModel.findAllTasks();
  return tasks;
};

const createTask = async (title, description, status) => {
  const { error } = taskSchema.validate({ title, description, status });
  if (error) throw errorGenerator(400, error.message);

  const newTask = await taskModel.createTask(title, description, status);
  return newTask;
};

const editById = async (newTask) => {
  const {
    title, description, status,
  } = newTask;

  const { error } = taskSchema.validate({ title, description, status });
  if (error) throw errorGenerator(400, error.message);

  const updatedTask = await taskModel.editById(newTask);
  return { updatedTask };
};

module.exports = {
  createTask,
  findAllTasks,
  editById,
};
