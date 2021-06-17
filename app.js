const express = require('express');
const app = express();
const productRoutes = require('./api/routes/product');
app.use('/product', productRoutes);
const orderRoutes = require('./api/routes/product');
app.use('/order', orderRoutes);

module.exports = app;