import { registerUser, loginUser } from "./auth.service.js";
import { ApiResponse } from "../../utils/apiResponse.js";

export const register = async (req, res) => {
  const user = await registerUser(req.body);

  return res
    .status(201)
    .json(new ApiResponse(201, user, "User created successfully"));
};

export const login = async (req, res) => {
  const { token, user } = await loginUser(req.body);

  // 🍪 Cookie options (based on your setup)
  const options = {
    httpOnly: true,
    secure: false,      // ⚠️ set true in production (HTTPS)
    sameSite: "lax",    // good for localhost
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  };

  return res
    .status(200)
    .cookie("token", token, options)
    .json(
      new ApiResponse(200, { user }, "Login successful")
    );
};
