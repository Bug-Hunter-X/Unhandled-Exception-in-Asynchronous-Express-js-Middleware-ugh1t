const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      // Simulate a successful response
      res.send('Hello World!');
    } else {
      // Simulate an error - this will not be properly handled by default
      throw new Error('Something went wrong!');
    } 
  }, 1000);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});