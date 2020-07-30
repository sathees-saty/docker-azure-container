const config = require('./config');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('SATY Learning Docker CI  and CD Azure Version 2 !');
});

app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});