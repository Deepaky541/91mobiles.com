import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className='nav'>
      <Link to="/"><button>Home</button></Link>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/signup"><button>Sign Up</button></Link>
    </div>
  );
}
