const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello express');
});

app.listen(port, () => {
  console.log("I am listening on the port" + port);
});
