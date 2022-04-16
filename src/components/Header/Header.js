import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
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
            {user?.email && <button>Log Out</button>}
            {!user?.email && <Link to={'/register'}>Register</Link>}
            {!user?.email && <Link to={'/login'}>Login</Link>}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
