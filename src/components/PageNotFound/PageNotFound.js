import React from 'react';
import './PageNotFound.css';
import pageNotFound from '../../images/404.jpg';
const PageNotFound = () => {
  return (
    <section className='page-not-found'>
      <img src={pageNotFound} alt='' />
    </section>
  );
};

export default PageNotFound;
