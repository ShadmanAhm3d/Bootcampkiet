const express = require("express");

const productRouter = express.Router();

productRouter
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.addProducts);

module.exports = productRouter;
