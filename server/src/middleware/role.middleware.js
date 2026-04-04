import { ApiError } from "../utils/apiError.js";

export const allowRoles = (...allowedRoles) => {
  return (req, res, next) => {
    // 1️⃣ Check if user exists (protect must run first)
    if (!req.user) {
      throw new ApiError(401, "Unauthorized");
    }

    // 2️⃣ Check role
    if (!allowedRoles.includes(req.user.role)) {
      throw new ApiError(403, "Forbidden: Access denied");
    }

    next();
  };
};