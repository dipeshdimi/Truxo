import getStudents from "../utils/readStudents.js";

export function searchStudentsService(query, page = 1, limit = 10) {
  const students = getStudents();

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(query.toLowerCase())
  );

  const total = filteredStudents.length;
  const startIndex = (page - 1) * limit;
  const paginatedStudents = filteredStudents.slice(
    startIndex,
    startIndex + parseInt(limit)
  );

  return { students: paginatedStudents, total };
}
