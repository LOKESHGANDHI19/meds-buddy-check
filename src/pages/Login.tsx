// import { Target } from 'lucide-react';
// import React, {useState} from 'react'
// import supabase from "../helper/supabaseClient";
// import {Link, useNavigate} from "react-router-dom";

// function Login() {

//   const navigate = useNavigate();
// const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

// const handleSubmit = async (event) =>{

//   event.preventDefault();
//   setMessage("");

//   const {data, error} = await supabase.auth.signInWithPassword({
//     email:email,
//     password: password,
//   });

//   if (error){
//     setMessage(error.message);
//     return;
//   }

//   if(data){
//     navigate("/index");
//     return null;
//   }

// };

//   return (
//     <div>
//           <h2>
//             Login
//           </h2>
//           <br></br>
//         {message && <span>{message}</span>}
//         <form onSubmit={handleSubmit}>
//           <input 
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//           type="email" placeholder='email' required/>
    
//           <input
//           onChange={(e => setPassword(e.target.value))}
//           value={password}
//            type='password' placeholder='password' required />
//           <button type='submit'> Log in</button>
//         </form>
//         <span>Don't have an account?</span>
//         <Link to="/register"> Register.</Link>
//         </div>
//   )
// }

// export default Login



// ----------------------------------


import { Mail, Lock } from 'lucide-react';
import React, { useState } from 'react';
import supabase from '../helper/supabaseClient';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    if (data) {
      navigate('/index');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-teal-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-teal-800 mb-4">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6">Log in to track your medications</p>

        {message && (
          <div className="mb-4 text-sm text-center text-red-600">{message}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 text-gray-400" size={20} />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
              required
              className="w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-2.5 text-gray-400" size={20} />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              required
              className="w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg transition"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?{' '}
          <Link to="/register" className="text-teal-700 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
