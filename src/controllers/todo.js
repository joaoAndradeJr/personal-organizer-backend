const todoModel = require('../models/todo');

const getAll = async (_req, res) => {
  const todo = await todoModel.getAll();
  res.status(200).json(todo);
};

const create = async (req, res) => {
  const { task } = req.body;
  const result = await todoModel.create({ task });
  res.status(201).json(result);
};

module.exports = {
  getAll,
  create,
};