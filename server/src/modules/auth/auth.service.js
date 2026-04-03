import { registerUser } from "./auth.service.js";
import { ApiResponse } from "../../utils/apiResponse.js";

export const register = async (req, res, next) => {
  try {
    const user = await registerUser(req.body);

    return res
      .status(201)
      .json(new ApiResponse(201, user, "User created successfully"));
  } catch (error) {
    next(error);
  }
};