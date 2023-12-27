/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();

const productDAO = require('./../models/productDAO');

router.post('/checkProduct', async (req, res, next) => {
  const productName = req.body.name;

  productDAO.checkProduct(productName, (resp) => {
    res.json(resp);
  });
});

router.post('/addProduct', async (req, res, next) => {
  const productData = req.body;

  productDAO.addProduct(productData, (resp) => {
    res.json(resp);
  });
});

router.delete('/deleteProduct/:product_id', async (req, res, next) => {
  const productId = req.params.product_id;

  productDAO.deleteProduct(productId, (resp) => {
    res.json(resp);
  });
});

router.get('/getProductList', async (req, res, next) => {
  const query = req.query;

  productDAO.getProductList(query, (resp) => {
    res.json(resp);
  });
});

module.exports = router;