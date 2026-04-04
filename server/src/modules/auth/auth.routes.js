import express from "express";
import { register, login } from "./auth.controller.js";
import RegisterDto from "../../dto/register.dto.js";
import LoginDto from "../../dto/login.dto.js";
import validate from "../../middleware/validate.middleware.js";

const router = express.Router();

// 🔐 REGISTER USER
router.route("/register").post(
  validate(RegisterDto), // DTO validation
  register, // controller
);

router.route("/login").post(validate(LoginDto), login);

export default router;
