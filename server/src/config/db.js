import mongoose from "mongoose";
import { env } from "./env.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${env.MONGODB_URI}production-plant-erp`,
    );
    console.log(
      `\n MongoDB connected !! DB Host : ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.log("MongoDB connection Failed :", error);
    process.exit(1);
  }
};

export default connectDB;
