const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/hello', (req, res) => {
  res.send('Hello, World! This is Isameer3056, here is my simple Node.js App !! \n');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
