const express = require('express');
const { append } = require('express/lib/response');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
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
router.get('/filter', (req, res) => {
  res.send('filtering');
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json(
    {
      id,
      name: "Tofu",
      price: 10,
    }
  )
})

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'updated',
    data: body,
    id,
  });
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'deleted',
    id,
  });
})

module.exports = router;
