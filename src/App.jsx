import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
<<<<<<< HEAD
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Search from "./components/Search";

 import { ToastContainer, toast } from 'react-toastify';
 
=======
import Login from "./component/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";



export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "$"

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("adminToken") || "");
  
>>>>>>> ea81e0d9a7c30f2fbc84a0c504a4f8399aa4df7b

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
<<<<<<< HEAD
      <Navbar />
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<Placeorder />} />
        <Route path="/orders" element={<Orders />} />
        


      </Routes>
      <Footer />
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
>>>>>>> ea81e0d9a7c30f2fbc84a0c504a4f8399aa4df7b
    </div>
  );
};

export default App;
