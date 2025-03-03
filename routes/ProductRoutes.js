const express = require('express');
const router = express.Router();
const ProductController = require("../controllers/ProductController")

// fetch All Products
router.get("/v1/products", ProductController.fetchAllProducts);
router.get("/v1/products/import", ProductController.importAllProducts);


module.exports = router;