const todoModel = require('../models/todo');

const getAll = async (_req, res) => {
  const todo = await todoModel.getAll();
  res.status(200).json(todo);
};

module.exports = {
  getAll,
};