import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-container'>
          {/* ----------logo-------------- */}
          <div className='logo'>
            <Link to={'/'}>
              <h1>SaifELHAM</h1>
              <small>PHOTOGRAPHY</small>
            </Link>
          </div>
          <p className='copyright'>Copyright &copy; 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
