import React from 'react';
// import Zoom from 'react-reveal/Zoom';
import { Flip } from 'react-awesome-reveal';
import './HomeHero.css';

const HomeHero = () => (
  <div className="home-hero-wrapper d-flex flex-column flex-md-row px-5 pb-3">
    <div className="home-hero home-left-hero d-flex col-xs-12 col-md-6 pb-4 pb-md-0 pl-md-0 pr-3">
      <div className="content">
        <Flip triggerOnce="true">
          <p className="name">maybe it&apos;s DAVE MELINE</p>
        </Flip>
      </div>
    </div>
    <div className="home-hero home-right-hero d-flex col-md-6 col-xs-12">
      <div className="content">
        <div>
          <h1>I design and build things on the world wide web.</h1>
        </div>
        <ul className="d-flex justify-content-start align-items-center m-0 p-0">
          <li>
            <a href="https://www.linkedin.com/in/david-meline/" target="_blank" rel="noreferrer">
              <img src="/icons/linked-in.svg" className="filter-color" alt="Linked In Profile Link" title="Linked In" />
            </a>
          </li>
          <li className="mx-3" style={{ padding: '10px 0px' }}>
            <a href="https://github.com/dmelon199/my-site" target="_blank" rel="noreferrer">
              <img src="/icons/github.svg" className="filter-color" alt="GitHub Profile Link To Projects" title="GitHub" />
            </a>
          </li>
          <li>
            <a href="mailto: dmeline199@gmail.com" target="_blank" rel="noreferrer">
              <img src="/icons/email.svg" className="filter-color" alt="Link To Email Address" title="Email" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default HomeHero;
