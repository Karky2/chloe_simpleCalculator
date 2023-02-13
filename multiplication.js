const express = require('express');
const app = express();
const host = 'localhost'
const port = 7000

// Define the endpoint for the multiplication API
app.get('/multiply', function (req, res) {
  // Get the array of numbers from the query parameters
  var numbers = req.query.numbers;

  // Convert the numbers to an array of integers
  numbers = numbers.split(',').map(function (num) {
    return parseInt(num);
  });

  // Calculate the product of the numbers
  var product = numbers.reduce(function (acc, num) {
    return acc * num;
  }, 1);

  // Return the product as a response
  res.send({ product: product });
});

// Start the Express app
app.listen(7000,  () => {
  console.log(`API listening requests at http://${host}:${port}`);
});
