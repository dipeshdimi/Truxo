import { searchStudentsService } from "../services/student.service.js";

export function searchStudents(req, res) {
  const { search, page = 1, limit = 10 } = req.query;

  if (!search || search.length < 3) {
    return res
      .status(400)
      .json({ error: "Search query must be at least 3 characters long." });
  }

  const { students, total } = searchStudentsService(search, page, limit);

  res.json({ students, total });
}
