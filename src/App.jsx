
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import { StudentProvider } from "./context/StudentContext";
import StudentList from "./pages/StudentList";
import FavouriteStudents from "./pages/FavouriteStudents";

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <div className="app">
          <nav className="navbar">
            <Link to="/" className="brand">
              StudentHub
            </Link>

            <div className="nav-links">
              <Link to="/">Student List</Link>
              <Link to="/favourites">Favourites ♡</Link>
            </div>
          </nav>

          <Routes>
            <Route
              path="/"
              element={<StudentList />}
            />

            <Route
              path="/favourites"
              element={<FavouriteStudents />}
            />
          </Routes>

          <footer>
            Favourite Student List | React Assignment
          </footer>
        </div>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;
