import PropTypes from "prop-types";

const StudentModal = ({ student, onClose }) => {
  if (!student) return null;

  return (
    <div
      className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 pr-10 rounded-lg shadow-lg w-fit min-w-72 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-lg"
          onClick={onClose}
        >
          ✖
        </button>
        <h3 className="text-2xl font-bold text-blue-600">{student.name}</h3>
        <p className="text-gray-700 mt-2">
          <span className="font-semibold">Class:</span> {student.class}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Roll Number:</span> {student.rollNumber}
        </p>
      </div>
    </div>
  );
};

StudentModal.propTypes = {
  student: PropTypes.shape({
    name: PropTypes.string.isRequired,
    class: PropTypes.number.isRequired,
    rollNumber: PropTypes.number.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default StudentModal;
