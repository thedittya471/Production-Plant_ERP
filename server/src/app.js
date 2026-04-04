import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { env } from "./config/env.js";

const app = express();

app.use(
    cors({
        origin: env.CORS_ORIGIN,
        credentials: true,
    }),
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());


import authRoutes from "./modules/auth/auth.routes.js";

app.use("/api/v1/auth", authRoutes);

export { app };
