import { useState } from "react";
import SearchBar from "./components/SearchBar";
import StudentModal from "./components/StudentModal";
import { PiStudentFill } from "react-icons/pi";
import './App.css';

const App = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center md:p-12 p-6 App">
      <h1 className="sm:text-4xl text-3xl font-bold mb-6 flex items-center gap-2 border-b-4 border-blue-950 w-fit">
        <PiStudentFill className="text-blue-950"/>
        <span className="text-blue-950">Student Finder</span>
      </h1>
      <SearchBar onSelectStudent={setSelectedStudent} />
      {selectedStudent && <StudentModal student={selectedStudent} onClose={() => setSelectedStudent(null)} />}
    </div>
  );
};

export default App;
