import React, { useEffect, useState } from 'react';
import './About.css';
import Technology from './Technology/Technology';

const About = () => {
  // Technologies State
  const [technologies, setTechnologies] = useState([]);

  // Load Technologies Data
  useEffect(() => {
    fetch('technologies.json')
      .then((res) => res.json())
      .then((data) => setTechnologies(data));
  }, []);

  return (
    <section className='about'>
      <div className='container'>
        <h2 className='section-title'>About Me</h2>
        <div className='bottom-line'></div>
        <p className='about-subtitle'>
          Let me tell you a little about myself and what my goal is...
        </p>
        <div className='about-me'>
          <div className='my-image'>
            <img
              src='https://scontent.fspd5-1.fna.fbcdn.net/v/t39.30808-6/273221424_1880437049011064_5320489334875873907_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=u4aTc83X2icAX-pnSRk&_nc_ht=scontent.fspd5-1.fna&oh=00_AT89YxgcENSzJTi9QEr6PNwUO-EbQJWuoIGYI9ED2tXKyQ&oe=62604AF8'
              alt=''
            />
          </div>
          <div className='about-text'>
            <h2 className='my-name'>Saif Elham</h2>
            <p className='my-designation'>Front End Web Developer</p>
            <p className='my-goal'>
              Hello everybody! My name is Saif Elham. I have been learning Web
              Developing for six months, and I'm very passionate and dedicated
              to my work. My immediate goal is to get a job as a front end
              developer. To achieve this, I am currently focusing on front end
              technologies. And I will learn some basic backend technologies
              too. After getting a job I will focus on learning backend
              technologies properly so that I can be a full stack web developer.
              I want to acquired the skills and knowledge necessary to make
              myself as a full stack web developer in the next two years.
            </p>
            <button className='btn btn-primary btn-medium'>Downlod CV</button>
          </div>
        </div>
      </div>

      <div className='technical-skills'>
        <div className='container'>
          <h2 className='section-title'>Technical Skills</h2>
          <div className='bottom-line bottom-line-light'></div>
          {technologies.map((technology, index) => (
            <Technology key={index} technology={technology}></Technology>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
