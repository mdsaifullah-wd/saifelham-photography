import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css';

const Services = () => {
  // Services State
  const [services, setServices] = useState([]);

  // Load Services Data
  useEffect(() => {
    fetch('services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className='services'>
      <div className='container'>
        <h2 className='section-title'>My Services</h2>
        <div className='bottom-line'></div>
        <div className='services-container'>
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
