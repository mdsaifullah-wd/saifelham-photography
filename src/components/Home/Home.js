import React from 'react';
import Banner from './Banner/Banner';
import './Home.css';
import Inspired from './Inspired/Inspired';
import Services from './Services/Services';

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Inspired></Inspired>
      <Services></Services>
    </>
  );
};

export default Home;
