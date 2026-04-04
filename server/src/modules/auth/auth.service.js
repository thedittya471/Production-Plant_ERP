import { User } from "../../models/user.model.js";
import { ApiError } from "../../utils/apiError.js";

export const registerUser = async (data) => {
  const { username, password, role, department } = data;

  if (role !== "admin" && !department) {
    throw new ApiError(400, "Department is required");
  }

  // 1️⃣ Check if user exists
  const existingUser = await User.findOne({
    username: username.toLowerCase(),
  });

  if (existingUser) {
    throw new ApiError(400, "User already exists");
  }

  // 2️⃣ Create user
  let user;
  try {
    user = await User.create({
      username: username.toLowerCase(),
      password,
      role,
      department: role === "admin" ? null : department,
    });
  } catch (err) {
    if (err.code === 11000) {
      throw new ApiError(400, "Username already exists");
    }
    throw err;
  }

  const createdUser = user.toObject();
  delete createdUser.password;
  return createdUser;
};
