const { taskModel } = require('../models');

const taskSchema = require('../schemas/task');
const errorGenerator = require('../utils/errorGenerator');

const createTask = async (title, description, status) => {
  const { error } = taskSchema.validate({ title, description, status });
  if (error) throw errorGenerator(400, error.message);

  const newTask = await taskModel.createTask(title, description, status);
  return newTask;
};

module.exports = {
  createTask,
};
