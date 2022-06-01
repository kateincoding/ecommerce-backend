const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello express');
});

app.get('/products', (req, res) => {
  res.json({
    name: "Tofu",
    price: 10,
  })
})

app.listen(port, () => {
  console.log("I am listening on the port" + port);
});
