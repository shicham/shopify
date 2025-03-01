const express = require('express');
const router = express.Router();
const UserController = require("../controllers/UserController")

// Create User
router.post("/v1/users", UserController.createUser);

// fetch All Users
router.get("/v1/users", UserController.fetchAllUser);

module.exports = router;