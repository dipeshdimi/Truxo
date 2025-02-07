import PropTypes from "prop-types";

const StudentList = ({ results, query, onSelect, prevStudents, setPrevStudents }) => {
  const highlightMatch = (name) => {
    const parts = name.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="text-yellow-400 font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    results.length > 0 && (
      <ul className="mt-3 bg-white border border-gray-300 rounded-lg shadow-lg divide-y divide-gray-200">
        {results.map((student) => (
          <li
            key={student.rollNumber}
            className="p-3 text-gray-800 hover:bg-blue-500 hover:text-white cursor-pointer transition-all duration-300 select-none"
            onClick={() => {
              onSelect(student);
              const tempPrev = prevStudents;
              console.log(prevStudents)
              tempPrev.push(student);
              setPrevStudents(tempPrev);
            }}
          >
            {highlightMatch(student.name)}
          </li>
        ))}
      </ul>
    )
  );
};

StudentList.propTypes = {
  results: PropTypes.array.isRequired,
  query: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  prevStudents: PropTypes.array.isRequired,
  setPrevStudents: PropTypes.func.isRequired,
};

export default StudentList;
