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
              <h2>
                I capture <span>Moments</span>
              </h2>
              <button className='btn'>Hire Me</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
