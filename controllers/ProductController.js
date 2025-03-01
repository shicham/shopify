const {getUri} = require("../utils/Utils")
const UserModel = require("../models/UserModel");
const axios = require("axios");
const SHOPIFY_API_KEY = process.env.SHOPIFY_API_KEY;
const ADMIN_API_TOKEN = process.env.ADMIN_API_TOKEN

// Fetch products from Shopify Storefront API
exports.fetchAllProducts = async (req, res) => {
    try {
      const response = await axios.get("https://mamkom.myshopify.com/admin/api/2025-01/products.json", {
        headers: { "X-Shopify-Access-Token": ADMIN_API_TOKEN},
      });
      res.json(response.data.products);
    } catch (error) {
        console.log("errorerror",error)
        return null;
    }
  };

  // Fetch products from Shopify Storefront API
exports.importAllProducts = async (req, res) => {
    try {
      const response = await axios.get("https://mamkom.myshopify.com/admin/api/2025-01/products.json", {
        headers: { "X-Shopify-Access-Token": ADMIN_API_TOKEN},
      });
      res.json(response.data.products);
    } catch (error) {
        console.log("errorerror",error)
        return null;
    }
  };

  exports.createUser = async (req, res) => {
    const { shop, userId, name, email } = req.body;
    try {
        const uri = getUri(req)
        console.log(uri)
        const user = new UserModel({ shop, userId, name, email, uri });
        await user.save();
        res.json(user);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "error.create.user" });
    }
};