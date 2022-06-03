app.get('/products', (req, res) => {
  res.json([
    {
      name: "Tofu",
      price: 10,
    },
    {
      name: "Tofu",
      price: 10,
    }
    ]);
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
