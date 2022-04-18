import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import CustomLink from './CustomLink/CustomLink';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
const Header = () => {
  // useState
  const [sidebar, setSidebar] = useState(false);
  const location = useLocation();

  // Auth State
  const [user] = useAuthState(auth);

  // Toggle Sidebar State
  const toggleSidebar = () => setSidebar(!sidebar);
  // Login button handler

  return (
    <header className='header'>
      <div className='container'>
        <div className='navbar'>
          {/* ----------logo-------------- */}
          <div className='logo'>
            <Link to={'/'}>
              <h1>SaifELHAM</h1>
              <small>PHOTOGRAPHY</small>
            </Link>
          </div>

          {/* ----------bar icon-------------- */}
          <div className='bars' onClick={toggleSidebar}>
            <FaBars />
          </div>

          {/* ----------nav menu-------------- */}
          <nav className={`nav-menu ${sidebar && 'show'}`}>
            <span className='cross' onClick={toggleSidebar}>
              <ImCross />
            </span>

            {/* -----nav CustomLinks------ */}
            <CustomLink to={'/'} onClick={toggleSidebar}>
              Home
            </CustomLink>
            <CustomLink to={'/blogs'} onClick={toggleSidebar}>
              Blogs
            </CustomLink>
            <CustomLink to={'/about'} onClick={toggleSidebar}>
              About
            </CustomLink>

            {user?.email ? (
              <button
                onClick={() => {
                  signOut(auth);
                  toggleSidebar();
                }}
                className='highlight'>
                Log Out
              </button>
            ) : (
              <>
                <CustomLink to={'/register'} onClick={toggleSidebar}>
                  Register
                </CustomLink>
                <CustomLink
                  to={'/login'}
                  className={location.pathname === '/login' ? '' : 'highlight'}
                  onClick={toggleSidebar}>
                  Login
                </CustomLink>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
