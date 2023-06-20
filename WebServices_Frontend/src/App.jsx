import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import NavBar from "./components/NavBar";
import AddEmployee from "./pages/AddEmployee";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/navbar" element={<NavBar />} />
        <Route
          path="/addemployee"
          element={
            // <ProtectedRoute>
            <AddEmployee />
            // </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
