import express from "express";
import { register, login } from "./auth.controller.js";
import RegisterDto from "../../dto/register.dto.js";
import LoginDto from "../../dto/login.dto.js";
import validate from "../../middleware/validate.middleware.js";
import { allowRoles } from "../../middleware/role.middleware.js";
import { protect } from "../../middleware/auth.middleware.js";

const router = express.Router();

// 🔐 REGISTER USER
router.route("/register").post(
  validate(RegisterDto), // DTO validation
  protect,
  allowRoles("admin"),
  register, // controller
);

router.route("/login").post(validate(LoginDto), login);

export default router;
