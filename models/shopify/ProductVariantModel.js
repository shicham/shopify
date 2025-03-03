const mongoose = require("mongoose");
const ProductModel = require("./ProductModel");

// Define User Schema & Model
const variantSchema = new mongoose.Schema({
  id: String,
  title: String,
  price: Schema.Types.Decimal128,
  position: Number,
  inventory_policy: String,
  compare_at_price: Schema.Types.Decimal128,
  option1: String,
  option2: String,
  option3: String,
  published_at: String,
  taxable: Boolean,
  barcode: String,
  fulfillment_service: String,
  grams: String,
  inventory_management: String,
  requires_shipping: Boolean,
  sku: String,
  weight: String,
  weight_unit: String,
  inventory_item_id: String,
  inventory_quantity: Number,
  old_inventory_quantity: Number,
  admin_graphql_api_id: String,
  image_id: String,
  product: { type: mongoose.Types.ObjectId, ref: "Product" }
},
  { versionKey: '__v' },
  {
    timestamps: {
      created_at: 'created_at',
      updated_at: 'updated_at'
    }
  }
);
productSchema.set('timestamps', true);
const ProductVariantModel = mongoose.model("ProductVariant", variantSchema);
module.exports = ProductVariantModel