const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(cors());

const todoController = require('./src/controllers/todo');

app.get('/', todoController.getAll);

app.post('/', todoController.create);

app.listen(PORT, () => console.log(`API listening on port ${PORT}`));
