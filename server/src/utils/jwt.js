import jwt from "jsonwebtoken";
import { ApiError } from "./apiError.js";
import { env } from "../config/env.js";

// 🔐 Generate Token
export const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
      department: user.department,
    },
    env.TOKEN_SECRET,
    {
      expiresIn: env.TOKEN_EXPIRY || "1d",
    },
  );
};

// 🔍 Verify Token
export const verifyToken = (token) => {
  try {
    if (!token) {
      throw new ApiError(401, "Token missing");
    }
    return jwt.verify(token, env.TOKEN_SECRET);
  } catch (error) {
    throw new ApiError(401, error.message || "Invalid or expired token");
  }
};
