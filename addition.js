const express = require('express');
const app = express();
const host = 'localhost';
const port = '7000';

// The firsr step is defining the route of carrying out multiplication
app.get('/adding', (req, res) => {
  // The second step os getting the array of numbers in query paramaters 
  let digits = req.query.digits;

  if (!digits) {
// Thi error means that if no number is provided it will throw an error
    return res.status(400).send({ error: 'No numbers provided' });
  }
 //  Here we calculate the product of numbers using the reduce function and also we use map()  where it calls a function once for each element in an array.
 // the map(number) helps also to convert each sub-string into a number
  digits = digits.split(',').map(Number);
  let sum = digits.reduce((a, b) => a + b, 0);

  // We then send the response of the product to the server using res.send
  res.send({ sum });
});

app.listen(port, () => {
  console.log(`API listening request at 'http://${host}:${port}'`);
});



