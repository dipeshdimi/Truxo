import { searchStudentsService } from "../services/student.service.js";

export function searchStudents(req, res) {
  const { search, page = 1, limit = 10 } = req.query;
  
  const { students, total } = searchStudentsService(search, page, limit);

  res.json({ students, total });
}
