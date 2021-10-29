const connection = require('./connection');

const TODO = 'todo';

const getAll = async () => {
  const db = await connection();
  const todoArray = await db.collection(TODO).find().toArray();
  return todoArray;
};

module.exports = {
  getAll,
};
