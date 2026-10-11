
import { useStudents } from "../context/StudentContext";

const students = [
  { id: 101, name: "Aarav Kumar" },
  { id: 102, name: "Priya Sharma" },
  { id: 103, name: "Rahul Verma" },
  { id: 104, name: "Ananya Patel" },
  { id: 105, name: "Arjun Reddy" },
  { id: 106, name: "Meera Nair" },
];

function StudentList() {
  const { favourites, addFavourite } = useStudents();

  return (
    <main className="container">
      <h1>Student List</h1>
      <p className="subtitle">
        Browse students and add your favourites.
      </p>

      <div className="student-grid">
        {students.map((student) => {
          const isFavourite = favourites.some(
            (item) => item.id === student.id
          );

          return (
            <div className="student-card" key={student.id}>
              <div className="avatar">
                {student.name.charAt(0)}
              </div>

              <h3>{student.name}</h3>
              <p>Student ID: {student.id}</p>

              <button
                onClick={() => addFavourite(student)}
                disabled={isFavourite}
                className={isFavourite ? "added" : ""}
              >
                {isFavourite
                  ? "Added to Favourites ✓"
                  : "Add to Favourite ♡"}
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default StudentList;
