const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello express');
});


app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json(
    {
      categoryId,
      productId,
      name: "Tofu",
      price: 10,
    }
  )
})

routerApi(app);

app.listen(port, () => {
  console.log("I am listening on the port" + port);
});
