// frontend/src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Profile from "./pages/Profile";

function App(){
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </>
  );
}
export default App;
