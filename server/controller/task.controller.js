const { taskService } = require('../services');

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
};
