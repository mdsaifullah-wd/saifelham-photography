import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='navbar'>
          <div className='logo'>
            <Link to={'/'}>
              <h1>SaifElham</h1>
              <small>PHOTOGRAPHY</small>
            </Link>
          </div>
          <nav className='nav-container'>
            <Link to={'/'}>Home</Link>
            <Link to={'/blogs'}>Blogs</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/register'}>Register</Link>
            <Link to={'/login'}>Login</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
