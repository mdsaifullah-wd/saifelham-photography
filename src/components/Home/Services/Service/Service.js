import React from 'react';
import './Service.css';

const Service = ({ service }) => {
  const { serviceName, img, description, price } = service;
  return (
    <div>
      <div className='service-img'>
        <img src={img} alt='' />
      </div>
      <h3>{serviceName}</h3>
      <p>{description}</p>
      <p className='service-price'>$ {price}</p>
      <button className='btn btn-checkout'>Checkout</button>
    </div>
  );
};

export default Service;
