import fs from "fs";
import config from "../config/index.js";

export default function getStudents() {
  try {
    const data = fs.readFileSync(config.dataFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading students file:", error);
    return [];
  }
}