import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const backendUrl = "http://localhost:4000";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    console.log("LOGIN BUTTON CLICKED");

    const response = await axios.post(
      backendUrl + "/api/user/admin-login",
      { email, password }
    );

    console.log("SERVER RESPONSE:", response.data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("adminToken", response.data.token);
      console.log("TOKEN SAVED");
    } else {
      toast.error(response.data.message);
    }

  } catch (error) {
    console.log("ERROR:", error.response?.data || error.message);
    toast.error("Login failed");
  }
};



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Admin Panel</h2>

        <div className="mb-4">
          <label className="block text-sm mb-1">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@gmail.com"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
