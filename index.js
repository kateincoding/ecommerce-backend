const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json());
// accept from wherever origin -> if the api is public
// app.use(cors());

// only accepted some origins
const whitelist = ['http://localhost:8080', 'https://myapp.com'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('not permited'));
    }
  }
}
app.use(cors(options));

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

/* using middleware */
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log("I am listening on the port" + port);
});
