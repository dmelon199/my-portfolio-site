import React from 'react';

/* COMPONENTS */
import HomeHero from '../components/HomeHero/HomeHero';
import MyProjectsCarousel from '../components/MyProjectsCarousel/MyProjectsCarousel';
import Proficiencies from '../components/Proficiencies/Proficiencies';
import MyResume from '../components/MyResume/MyResume';
import MyEducation from '../components/MyEducation/MyEducation';

const Home = () => (
  <div>
    <div className="body-page">
      <HomeHero />
      <div className="body-content">
        <MyProjectsCarousel />
        <Proficiencies />
        <MyResume />
        <MyEducation />
      </div>
    </div>
  </div>
);

export default Home;
