import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import StudentList from "./StudentList";
import { HOST } from "../constants/constants";

import { FcSearch } from "react-icons/fc";
import { MdCancel } from "react-icons/md";

const SearchBar = ({ onSelectStudent, prevStudents, setPrevStudents }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [studentsPerPage] = useState(10);

  useEffect(() => {
    if (query.length < 3) {
      setResults([]);
      setTotalPages(1);
      setCurrentPage(1);
      onSelectStudent(null);
      return;
    }

    const fetchStudents = async () => {
      const response = await fetch(
        `${HOST}/api/v1/students?search=${query}&page=${currentPage}&limit=${studentsPerPage}`
      );
      const data = await response.json();
      setResults(data.students);
      setTotalPages(Math.ceil(data.total / studentsPerPage));
    };

    const debounceTimeout = setTimeout(fetchStudents, 300);
    return () => clearTimeout(debounceTimeout);
  }, [query, currentPage, studentsPerPage, onSelectStudent]);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

  return (
    <div className="max-w-xl w-full rounded-lg">
      <div className="w-full p-3 flex items-center gap-2 bg-white focus:ring-2 focus:ring-blue-800 rounded-lg shadow-lg">
        <FcSearch className="text-xl shrink-0" />
        <input
          type="text"
          placeholder="Search for a student..."
          className="flex-1 min-w-0 text-lg outline-none text-gray-800 bg-none placeholder:text-gray-400"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query.length > 0 &&
          <MdCancel
            className="text-2xl text-red-700 hover:text-red-600 shrink-0 cursor-pointer"
            onClick={() => {
              setQuery("");
              setResults([]);
              onSelectStudent(null);
            }}
          />
        }
      </div>

      <StudentList results={results} query={query} onSelect={onSelectStudent}prevStudents={prevStudents} setPrevStudents={setPrevStudents} />

      {totalPages > 1 && (
        <div className="flex items-center gap-6 mt-6 bg-gray-200 w-fit mx-auto p-3 rounded-xl">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage <= 1}
            aria-label="Previous page"
            className="px-2 py-1 bg-amber-400 hover:bg-amber-500 text-white font-medium rounded-lg disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed transition duration-300 ease-in-out"
          >
            &lt;
          </button>

          <span className="font-semibold text-[14px] text-gray-600">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
            aria-label="Next page"
            className="px-2 py-1 bg-amber-400 hover:bg-amber-500 text-white font-medium rounded-lg disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed transition duration-300 ease-in-out"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  onSelectStudent: PropTypes.func.isRequired,
  setPrevStudents: PropTypes.func.isRequired,
};

export default SearchBar;
