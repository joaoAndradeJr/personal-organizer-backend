const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'welcome' });
});

app.listen(PORT, () => console.log(`API listening on port ${PORT}`));
