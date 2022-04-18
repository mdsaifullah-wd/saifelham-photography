import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <section className='banner'>
      <div className='banner-overlay'>
        <div className='container'>
          <div className='banner-text'>
            <div>
              <h2>Hi, I am a Photographer</h2>
              <h3>
                Want to capture your <span className='bold'>Moments</span>?
              </h3>
              <button className='btn btn-transparent btn-large'>Hire Me</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
