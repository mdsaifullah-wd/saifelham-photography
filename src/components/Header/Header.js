import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <header className='header container'>
      <div className='logo'>
        <h1>SaifElham</h1>
        <small>PHOTOGRAPHY</small>
      </div>
      <nav className='nav-container'>
        <Link to={'/'}>Home</Link>
        <Link to={'/blogs'}>Blogs</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/register'}>Register</Link>
        <Link to={'/login'}>Login</Link>
      </nav>
    </header>
  );
};

export default Header;
