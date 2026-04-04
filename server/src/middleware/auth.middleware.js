import { User } from "../models/user.model.js";
import { verifyToken } from "../utils/jwt.js";

export const protect = async (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    throw new ApiError(401, "Unauthorized");
  }

  const decoded = verifyToken(token);

  const user = await User.findById(decoded.id);

  if (!user || !user.isActive) {
    throw new ApiError(401, "User no longer exists");
  }

  req.user = decoded;

  next();
};