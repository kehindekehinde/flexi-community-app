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

function App() {
  return <div className="App"><Register />
  </div>;
}

export default App;

// <Router>
//         <AuthProvider>
//           <Routes>
//               <Route eaxct path="/" element={<PrivateRoute />}>
//                 <Route exact path="/Home" element={<Home />} />
//               </Route>
//             <Route path="/register" Component={Register} />
//             <Route path="/login" Component={Login} />
//           </Routes>
//         </AuthProvider>
//       </Router>
