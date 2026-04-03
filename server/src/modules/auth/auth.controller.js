import { User } from "../../models/user.model.js";
import { ApiError } from "../../utils/apiError.js";

export const registerUser = async (req, res) => {
  const { username, password, role, department } = req.body;

  // 1️⃣ Check if user already exists
  const existingUser = await User.findOne({ username });

  if (existingUser) {
    throw new ApiError(400, "User already exists");
  }

  // 2️⃣ Create user
  const user = await User.create({
    username,
    password,
    role,
    department: role === "admin" ? null : department,
  });

  // 3️⃣ Remove password from response
  const createdUser = await User.findById(user._id).select("-password");

  if (!createdUser) {
    throw new ApiError(500, "Failed to create user");
  }

  return createdUser;
};
