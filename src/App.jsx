import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Login from "./component/Login";



export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("adminToken") || "");

  if (!token) {
    // Show login if no token
    return (
      <div className="bg-gray-50 min-h-screen">
        <ToastContainer />
        <Login />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      <Navbar  />
      <hr />
      <div className="flex w-full">
        <Sidebar />
        <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
          <Routes>
            <Route path="/" element={<Navigate to="/add" replace />} />
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
