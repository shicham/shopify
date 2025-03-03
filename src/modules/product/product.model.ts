import mongoose, { Document, Model, Schema } from "mongoose";
import { ProductStatus, Precision, IProductDoc, IProductModel } from "../../types/shopify"
import paginate from "../../paginate/paginate";


const productSchema = new Schema<IProductDoc, IProductModel>({
  userId: { type: String, required: true, trim: true },
  productId: {
    type: String,
    required: true,
    trim: true,
  },
  title: { type: String, required: false, trim: true },
  description: { type: String, required: false, trim: true },
  handle: { type: String, required: false, trim: true },
  vendor: { type: String, required: false, trim: true },
  createdAt: { type: Date, required: false, trim: true },
  availablePublicationsCount: {
    count: { type: Number },
    precision: { type: String, enum: Object.values(Precision) }
  },
  status: { type: String, enum: Object.values(ProductStatus), required: false },
}, { timestamps: true });
productSchema.plugin(paginate);
const Product = mongoose.model<IProductDoc, IProductModel>("Product", productSchema);
export default Product;