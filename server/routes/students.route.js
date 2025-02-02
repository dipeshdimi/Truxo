import { Router } from "express";
import { searchStudents } from "../controllers/student.controller.js";
import validateQuery from "../middlewares/validateQuery.js";

const studentRoutes = Router();

studentRoutes.route("/").get(validateQuery, searchStudents);

export default studentRoutes;