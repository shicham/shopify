const Shopify = require('shopify-api-node');
const shopify = new Shopify({
    shopName: process.env.SHOPIFY_STORE_URL,
    apiKey: process.env.SHOPIFY_API_KEY,
    password: process.env.ADMIN_API_TOKEN
  });
export default shopify
