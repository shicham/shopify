const { getUri } = require("../utils/Utils")
const UserModel = require("../models/UserModel");
const axios = require("axios");
const SHOPIFY_API_KEY = process.env.SHOPIFY_API_KEY;
const ADMIN_API_TOKEN = process.env.ADMIN_API_TOKEN

// Fetch products from Shopify Storefront API
exports.fetchAllProducts = async (req, res) => {
    try {
        const response = await axios.get("https://mamkom.myshopify.com/admin/api/2025-01/products.json", {
            headers: { "X-Shopify-Access-Token": ADMIN_API_TOKEN },
        });
        res.json(response.data.products);
    } catch (error) {
        console.log("errorerror", error)
        return null;
    }
};

// Fetch products from Shopify Storefront API
exports.importAllProducts = async (req, res) => {
    try {
        const response = await axios.get("https://mamkom.myshopify.com/admin/api/2025-01/products.json", {
            headers: { "X-Shopify-Access-Token": ADMIN_API_TOKEN },
        });
        let ret = {};
        //user.set({ email: 'NEW@gmail.com' });
        response.data.products.forEach((e) => {
            for (const [key, value] of Object.entries(e)) {
                if (typeof value === 'string') {
                    ret[e] = value;
                    console.log(`${key}: ${value}`);
                }else if (typeof value === 'object'){
                    console.log(`${key}: ${value}`);
                }
            }
            console.log("================")
        })
        
        
        res.json(response);
    } catch (error) {
        console.log("errorerror", error)
        return null;
    }
};