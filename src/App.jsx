import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
<<<<<<< HEAD
import { Routes, Route, Navigate } from "react-router-dom";
=======
import { Routes, Route } from "react-router-dom";
>>>>>>> 8553561618dafbddb124b40f857f9f9aa1bff7a2
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Login from "./component/Login";
<<<<<<< HEAD


=======
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
>>>>>>> 8553561618dafbddb124b40f857f9f9aa1bff7a2

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("adminToken") || "");
<<<<<<< HEAD

  if (!token) {
    // Show login if no token
    return (
      <div className="bg-gray-50 min-h-screen">
        <ToastContainer />
        <Login />
      </div>
    );
  }
=======
>>>>>>> 8553561618dafbddb124b40f857f9f9aa1bff7a2

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
<<<<<<< HEAD
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
=======
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <hr />

          <div className="flex w-full">
            <Sidebar />

            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/add" element={<Add token={token}/>} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/orders" element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
>>>>>>> 8553561618dafbddb124b40f857f9f9aa1bff7a2
    </div>
  );
};

export default App;
