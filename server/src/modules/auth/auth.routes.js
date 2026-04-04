import express from "express";
import { register } from "./auth.controller.js";
import RegisterDto from "../../dto/register.dto.js"
import validate from "../../middleware/validate.middleware.js";

const router = express.Router();

// 🔐 REGISTER USER
router.route("/register").post(
  validate(RegisterDto), // DTO validation
  register, // controller
);

export default router;
