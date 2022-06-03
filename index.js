const express = require('express');
const faker = require('faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello express');
});

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
})

// los endpoint especifico van antes del dinamico
app.get('/products/filter', (req, res) => {
  res.send('filtering');
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json(
    {
      id,
      name: "Tofu",
      price: 10,
    }
  )
})


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

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset ) {
    res.json({
      limit,
      offset
    })
  } else {
    res.send('No params');
  }
})

app.listen(port, () => {
  console.log("I am listening on the port" + port);
});
