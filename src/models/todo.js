const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const { DB_NAME, DB_URL } = process.env;

const TODO = 'todo';
const dbName = DB_NAME;
const url = DB_URL;

const client = new MongoClient(url);

const getAll = async () => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const col = db.collection(TODO);
    const result = await col.find().toArray();
    return result;
  } catch (err) {
    console.error(err.stack);
  }
  finally {
    client.close();
  }
};

const create = async (todo) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const col = db.collection(TODO);
    const result = await col.insertOne(todo);
    return result;
  } catch (err) {
    console.error(err.stack);
  }
  finally {
    client.close();
  }
};

const update = async (todo) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const col = db.collection(TODO);
    const result = await col.updateOne({ _id: ObjectId(id) }, { $set: todo });
    return result;
  } catch (err) {
    console.error(err.stack);
  }
  finally {
    client.close();
  }
};

const remove = async (id) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const col = db.collection(TODO);
    const result = await col.deleteOne({ _id: ObjectId(id) });
    return result;
  } catch (err) {
    console.error(err.stack);
  }
  finally {
    client.close();
  }
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};