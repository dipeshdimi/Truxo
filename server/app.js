import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import config from "./config/index.js";

dotenv.config({
  path: "./.env",
});

const app = express();

app.use(
  cors({
    origin: config.corsOrigin,
  })
);

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Routes import
import studentsRouter from "./routes/students.route.js";

// Routes declaration
app.use("/api/v1/students", studentsRouter);

export { app };
