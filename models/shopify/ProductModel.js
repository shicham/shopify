const mongoose = require("mongoose");
// Define User Schema & Model
const productSchema = new mongoose.Schema({
    id: String,
    title: String,
    body_html: String,
    vendor: String,
    handle: String,
    template_suffix: String,
    published_scope: String,
    tags: String,
    status: String,
    admin_graphql_api_id: String
  },
  { versionKey: '__v' },
  { 
    timestamps: { 
      created_at: 'created_at', 
      updated_at: 'updated_at',
      published_at: 'published_at' 
    }
  }
);
productSchema.set('timestamps', true);
  const ProductModel = mongoose.model("Product", productSchema);
  module.exports = ProductModel