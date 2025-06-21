// import { Target } from 'lucide-react';
// import React, {useState} from 'react'
// import supabase from "../helper/supabaseClient";
// import {Link} from "react-router-dom";

// function Register() {
//   const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

// const handleSubmit = async (event) =>{

//   event.preventDefault();
//   setMessage("");

//   const {data, error} = await supabase.auth.signUp({
//     email:email,
//     password: password,
//   });

//   if (error){
//     setMessage(error.message);
//     return;
//   }

//   if(data){
//     setMessage("User account created");
//   }

//   setEmail("");
//   setPassword("");
// };

//   return (
//     <div>
//       <h2>
//         Register
//       </h2>
//       <br></br>
//     {message && <span>{message}</span>}
//     <form onSubmit={handleSubmit}>
//       <input 
//       onChange={(e) => setEmail(e.target.value)}
//       value={email}
//       type="email" placeholder='email' required/>

//       <input
//       onChange={(e => setPassword(e.target.value))}
//       value={password}
//        type='password' placeholder='password' required />
//       <button type='submit'> Create Account</button>
//     </form>
//     <span>Already have an account?</span>
//     <Link to="/login">Log in.</Link>
//     </div>
//   );
// }

// export default Register


// ----------------------------


import { Mail, Lock } from 'lucide-react';
import React, { useState } from 'react';
import supabase from '../helper/supabaseClient';
import { Link } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    if (data) {
      setMessage('User account created');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-100 to-blue-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-teal-800 mb-4">
          Create Your Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Track your medications with ease
        </p>

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
            Create Account
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-teal-700 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
