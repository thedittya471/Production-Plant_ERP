import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || 8000,

  MONGODB_URI: process.env.MONGODB_URI,

  TOKEN_SECRET: process.env.TOKEN_SECRET,
  TOKEN_EXPIRY: process.env.TOKEN_EXPIRY || "1d",

  CORS_ORIGIN: process.env.CORS_ORIGIN,
};
