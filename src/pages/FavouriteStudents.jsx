
import { useStudents } from "../context/StudentContext";

function FavouriteStudents() {
  const { favourites, removeFavourite } = useStudents();

  return (
    <main className="container">
      <h1>Favourite Students</h1>
      <p className="subtitle">
        Your personally selected students.
      </p>

      {favourites.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">♡</div>
          <h2>No favourite students added yet</h2>
          <p>
            Go to the Student List to add your favourites.
          </p>
        </div>
      ) : (
        <div className="student-grid">
          {favourites.map((student) => (
            <div className="student-card" key={student.id}>
              <div className="avatar">
                {student.name.charAt(0)}
              </div>

              <h3>{student.name}</h3>
              <p>Student ID: {student.id}</p>

              <button
                className="remove-button"
                onClick={() => removeFavourite(student.id)}
              >
                Remove Favourite
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default FavouriteStudents;
