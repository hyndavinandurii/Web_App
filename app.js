// app.js
const express = require('express');
const app = express();
const port = 8080;

// Basic route that responds with "Hello, World!"
app.get('/', (req, res) => {
  res.send('Hello, World from GCP!');
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
