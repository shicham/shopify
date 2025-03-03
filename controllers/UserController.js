const { getUri } = require("../utils/Utils")
const UserModel = require("../models/UserModel");
const axios = require("axios");
const SHOPIFY_API_KEY = process.env.SHOPIFY_API_KEY;
const ADMIN_API_TOKEN = process.env.ADMIN_API_TOKEN
// Create a new User
exports.createUser = async (req, res) => {
    const { shop, userId, name, email } = req.body;
    try {
        const uri = getUri(req)
        const user = new UserModel({ shop, userId, name, email, uri });
        
        await user.save();
        res.json(user);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "error.create.user" });
    }
};

exports.fetchAllUser = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "error.findAll.user" });
    }
};

exports.home = async (req, res) => {
    try {
        res.json("home");
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "error.findAll.user" });
    }
};