// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
//import './styles.css';  // Import the CSS file

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/reset-password">Reset Password</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
