import React from 'react';
import DesignCarouselDesktop from '../components/DesignCarousel/DesignCarouselDesktop';
import DesignCarouselMobile from '../components/DesignCarousel/DesignCarouselMobile';

const desktopImages = [
  {
    id: 1, name: 'INDEX', url: '/images/desktop/cartermyers/carter-INDEX.jpg', height: '2854px',
  },
  {
    id: 2, name: 'SRP', url: '/images/desktop/cartermyers/carter-SRP.jpg', height: '2137px',
  },
  {
    id: 3, name: 'VDP', url: '/images/desktop/cartermyers/carter-VDP.jpg', height: '2918px',
  },
  {
    id: 4, name: 'COMMUNITY', url: '/images/desktop/cartermyers/carter-COMMUNITY.jpg', height: '4024px',
  },
  {
    id: 5, name: 'CAREERS', url: '/images/desktop/cartermyers/carter-CAREERS.jpg', height: '2008px',
  },
];

const mobileImages = [
  {
    id: 1, name: 'INDEX', url: '/images/mobile/cartermyers/carter-INDEX-mobile.jpg', height: '3734px', mobileHeight: '2435px',
  },
  {
    id: 2, name: 'SRP', url: '/images/mobile/cartermyers/carter-SRP-mobile.jpg', height: '3931px', mobileHeight: '2210px',
  },
  {
    id: 3, name: 'VDP', url: '/images/mobile/cartermyers/carter-VDP-mobile.jpg', height: '2605px', mobileHeight: '1695px',
  },
  {
    id: 4, name: 'COMMUNITY', url: '/images/mobile/cartermyers/carter-COMMUNITY-mobile.jpg', height: '6257px', mobileHeight: '4075px',
  },
  {
    id: 5, name: 'CAREER', url: '/images/mobile/cartermyers/carter-CAREER-mobile.jpg', height: '4156px', mobileHeight: '2710px',
  },
];

const Carter = () => (
  <div>
    <div className="body-content">
      <h1 className="fw-bold bg-gray px-5 py-4">Carter Myers Automotive</h1>
      <DesignCarouselDesktop images={desktopImages} />
      <DesignCarouselMobile images={mobileImages} />
    </div>
  </div>
);

export default Carter;
