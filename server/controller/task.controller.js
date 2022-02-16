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
    const tasks = await taskService.createTask(title, description, status);
    return res.status(200).json({ tasks });
  } catch (e) {
    return next(e);
  }
};

const editById = async (req, res, next) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  const newTask = {
    id, title, description, status,
  };

  try {
    const tasks = await taskService.editById(newTask);
    return res.status(200).json({ tasks });
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  createTask,
  findAllTasks,
  editById,
};
