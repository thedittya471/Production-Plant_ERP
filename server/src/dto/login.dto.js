import Joi from "joi";
import BaseDto from "../config/base.dto.js";

class LoginDto extends BaseDto {
  static schema = Joi.object({
    username: Joi.string()
      .trim()
      .lowercase()
      .min(8)
      .max(128)
      .required()
      .messages({
        "string.empty": "Username is required",
        "string.min": "Username must be at least 2 characters",
        "string.max": "Username must not exceed 50 characters",
      }),

    password: Joi.string().min(6).max(128).required().messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 6 characters",
    }),
  });
}

export default LoginDto;
