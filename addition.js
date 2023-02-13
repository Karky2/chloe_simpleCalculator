const express = require('express');
const app = express();
const host = 'localhost';
const port = '7000';

app.get('/add', (req, res) => {
  let numbers = req.query.numbers;
  if (!numbers) {
    return res.status(400).send({ error: 'No numbers provided' });
  }

  numbers = numbers.split(',').map(Number);
  let sum = numbers.reduce((a, b) => a + b, 0);

  res.send({ sum });
});

app.listen(port, () => {
  console.log(`API listening request at 'http://${host}:${port}'`);
});



