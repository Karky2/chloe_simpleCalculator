const express = require('express');
const app = express();
const host = 'localhost'
const port = 7000

// The firsr step is defining the route of carrying out multiplication
app.get('/multiplying',  (req, res) => {
  
  // The second step of getting the array of numbers in query paramaters and do the operation
  var numbers = req.query.numbers;
  if(!numbers){
      return res.status(400).send({ error : 'There were no numbers given'})

  }
  numbers = numbers.split(',').map(Number);
  let product = numbers.reduce((a, b) => a * b, 1);

 // We then send the response of the product to the server using res.send
  res.send({ product: product });
});

// Here we start our server in order for the API to listen to request
app.listen(7000,  () => {
  console.log(`API listening requests at http://${host}:${port}`);
});
