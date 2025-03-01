const express = require('express');
const router = express.Router();
const UserController = require("../controllers/UserController")
const ProductController = require("../controllers/ProductController")

// fetch All Products
router.get("/v1/products", ProductController.fetchAllProducts);


module.exports = router;