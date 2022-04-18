import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
  const navigate = useNavigate();
  const { serviceName, img, description, price } = service;
  return (
    <div className='service-card'>
      <div className='service-img'>
        <img src={img} alt='' />
      </div>
      <h3 className='service-title'>{serviceName}</h3>
      <p className='service-description'>{description}</p>
      <p className='service-price'>$ {price}</p>
      <button
        onClick={() => navigate('/checkout')}
        className='btn btn-primary btn-medium'>
        Checkout
      </button>
    </div>
  );
};

export default Service;
