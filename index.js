const express = require('express');
const app = express();

const PORT = 8080;
const HOST = '0.0.0.0'

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://${HOST}:${PORT}`)
});
