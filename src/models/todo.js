const { ObjectId } = require('bson');
const connection = require('./connection');

const TODO = 'todo';

const getAll = async () => {
  const db = await connection();
  const todoArray = await db.collection(TODO).find().toArray();
  return todoArray;
};

const create = async (todo) => {
  const { task, status } = todo;
  const db = await connection(); 
  const result = await db.collection(TODO).insertOne({ task, status });
  return result;
};

const update = (todo) => {
  const { id, task, status } = todo;
  const db = await connection();
  const result = await db.collection(TODO)
    .updateOne({ _id: ObjectId(id) }, { $set: { task, status } });
  return result;
};

module.exports = {
  getAll,
  create,
  update,
};
