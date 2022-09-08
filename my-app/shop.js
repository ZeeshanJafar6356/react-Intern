const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const customers = require('./postgresql/customerRoutes');
const products = require('./postgresql/productRoutes');
const orders = require('./postgresql/orderRoutes');
const cors = require('cors');
app.use(cors());
app.use('/api', customers);
app.use('/api', products);
app.use('/api', orders);

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`App Started on port ${PORT}`);
  } else {
    console.log('Server Error');
  }
});
