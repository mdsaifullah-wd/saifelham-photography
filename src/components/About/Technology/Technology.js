import React from 'react';
import './Technology.css';

const Technology = ({ technology }) => {
  const { name, progress } = technology;
  return (
    <>
      <h4>{name}</h4>
      <div className='progress'>
        <div style={{ width: `${progress}%` }}></div>
      </div>
    </>
  );
};

export default Technology;
