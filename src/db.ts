import mongoose from "mongoose";
import config from "./config/config";


const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoose.url as string);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;