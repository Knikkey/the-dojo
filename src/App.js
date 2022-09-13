import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Create from "./pages/create/Create";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Projects from "./pages/projects/Projects";
import Signup from "./pages/signup/Signup";
import OnlineUsers from "./components/OnlineUsers";

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={user ? <Dashboard /> : <Navigate to="/login/" />}
              />
              <Route
                path="/login"
                element={user ? <Login /> : <Navigate to="/" />}
              />

              <Route
                path="/signup"
                element={user ? <Navigate to="/" /> : <Signup />}
              />

              <Route
                path="/create"
                element={user ? <Create /> : <Navigate to="/login/" />}
              />

              <Route
                path="/projects/:id"
                element={user ? <Projects /> : <Navigate to="/login/" />}
              />
            </Routes>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
