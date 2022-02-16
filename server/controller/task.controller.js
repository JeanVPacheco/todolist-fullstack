const { taskService } = require('../services');

const findAllTasks = async (req, res, next) => {
  try {
    const tasks = await taskService.findAllTasks();
    return res.status(200).json({ tasks });
  } catch (e) {
    return next(e);
  }
};

const createTask = async (req, res, next) => {
  const { title, description, status } = req.body;
  try {
    const newTask = await taskService.createTask(title, description, status);
    return res.status(200).json({ newTask });
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  createTask,
  findAllTasks,
};
