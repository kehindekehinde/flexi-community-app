import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Header from "./components/header/Header";
import Login from "./pages/login";
import "./App.css";
import PrivateRoute from "./pages/PrivateRoute";
import Register from "./pages/register/Register";
import { AuthProvider } from "./pages/contexts/Authcontext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { PostProvider } from "./pages/contexts/Postcontext";

const App = () => {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <PostProvider>
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route exact path="/dashboard" element={<Home />} />
              </Route>
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Login />} />
              <Route path="*" element={<Login />} />
            </Routes>
          </PostProvider>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
