import Joi from "joi";
import BaseDto from "../config/base.dto.js";

class RegisterDto extends BaseDto {
  static schema = Joi.object({
    username: Joi.string().trim().lowercase().min(2).max(50).required(),

    password: Joi.string().min(8).max(128).required().messages({
      "string.min": "Password must contain at least 6 characters",
    }),

    role: Joi.string().valid("admin", "manager", "assistant").required(),

    department: Joi.when("role", {
      is: "admin",
      then: Joi.optional(),
      otherwise: Joi.string().required().messages({
        "any.required": "Department is required for this role",
      }),
    }),
  });
}

export default RegisterDto;
