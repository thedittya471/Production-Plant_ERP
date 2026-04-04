import { registerUser, loginUser } from "./auth.service.js";
import { ApiResponse } from "../../utils/apiResponse.js";

export const register = async (req, res) => {
  const user = await registerUser(req.body);

  return res
    .status(201)
    .json(new ApiResponse(201, user, "User created successfully"));
};

export const login = async (req, res) => {
  const data = await loginUser(req.body);

  return res.status(200).json(new ApiResponse(200, data, "Login successful"));
};
