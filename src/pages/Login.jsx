import React, { useState } from 'react';
import axios from "axios";

const Login = () => {
  
  const [currentState, setCurrentState] = useState('Login');
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [name, setName] = useState("");

const onSubmitHandler = async (event) => {
  event.preventDefault();

  const backendUrl = "http://localhost:4000";

  if (currentState === "Login") {
    const res = await axios.post(backendUrl + "/api/user/login", { email, password });
    console.log("LOGIN RESPONSE:", res.data);
  } 
  else {
    const res = await axios.post(backendUrl + "/api/user/register", { name, email, password });
    console.log("REGISTER RESPONSE:", res.data);
  }
};


  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      
      {currentState === 'Login' ? '' : (
        <input 
  type="text" 
  onChange={(e)=>setName(e.target.value)}
  className='w-full px-3 py-2 border border-gray-800' 
/>

      )}

     <input 
  type="email" 
  onChange={(e)=>setEmail(e.target.value)}
  className='w-full px-3 py-2 border border-gray-800' 
/>

      <input 
  type="password" 
  onChange={(e)=>setPassword(e.target.value)}
  className='w-full px-3 py-2 border border-gray-800' 
/>


      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password?</p>
        {
          currentState === 'Login'
            ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
            : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
      </div>

      <button className='bg-black text-white font-light px-8 py-2 mt-4'>
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;