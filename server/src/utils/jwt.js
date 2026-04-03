import jwt from "jsonwebtoken";
import { ApiError } from "./apiError.js";

// 🔐 Generate Token
export const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
      department: user.department,
    },
    process.env.TOKEN_SECRET,
    {
      expiresIn: process.env.TOKEN_EXPIRY,
    }
  );
};

// 🔍 Verify Token
export const verifyToken = (token) => {
  try {
    if (!token){
        throw new ApiError(401, "Token missing")
    }
    return jwt.verify(token, process.env.TOKEN_SECRET);
  } catch (error) {
    throw new ApiError(401, "Invalid or expired token");
  }
};
