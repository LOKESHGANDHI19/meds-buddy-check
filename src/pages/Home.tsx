import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>

    </div>
  )
}

export default Home