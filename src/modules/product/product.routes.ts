import express, { Request, Response, NextFunction } from "express";
import catchAsync from "../../utils/catchAsync";
import { queryUsers } from "./product.service";
import Product from "./product.model";

const router = express.Router();

// API Key Middleware
const authenticate = (req: Request, res: Response, next: NextFunction): void => {
  const userApiKey = req.headers["x-api-key"];
  if (!userApiKey || userApiKey !== process.env.API_KEY) {
     res.status(401).json({ error: "Unauthorized: Invalid API Key" });
     return;
  }
  next();
};
router.get("/", authenticate, async (req: Request, res: Response) => {
  res.json("products");
});


// Get Product
router.get("/product/:userId", authenticate, async (req, res) => {
  const { userId } = req.params;
  const product = await Product.find({ userId });
  res.json(product);
});

// Add to Product
router.post("/product", authenticate, async (req: Request, res: Response): Promise<void> => {
  const { userId, productId, title, image, price } = req.body;

  const exists = await Product.findOne({ userId, productId });
  if (exists) {
    res.status(400).json({ message: "Item already in product" });
    return;
  }

  const newItem = new Product({ userId, productId, title, image, price });
  await newItem.save();
  res.status(201).json(newItem);
});

// Remove from Product
router.delete("/product/:userId/:productId", authenticate, async (req, res) => {
  const { userId, productId } = req.params;
  await Product.findOneAndDelete({ userId, productId });
  res.status(204).send();
});

export default router;
