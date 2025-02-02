import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT || 8000,
  corsOrigin: process.env.CORS_ORIGIN || "*",
  dataFilePath: process.env.DATA_FILE_PATH || "./data/students.json",
};

export default config;
