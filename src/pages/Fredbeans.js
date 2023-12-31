import React from 'react';
import DesignCarouselDesktop from '../components/DesignCarousel/DesignCarouselDesktop';
import DesignCarouselMobile from '../components/DesignCarousel/DesignCarouselMobile';

const desktopImages = [
  {
    id: 1, name: 'INDEX', url: '/images/desktop/fredbeans/fredbeans-INDEX.jpg', height: '4162px',
  },
  {
    id: 2, name: 'INDEX2', url: '/images/desktop/fredbeans/fredbeans-INDEX-2.jpg', height: '3956px',
  },
  {
    id: 3, name: 'SRP', url: '/images/desktop/fredbeans/fredbeans-SRP.jpg', height: '3322px',
  },
  {
    id: 4, name: 'VDP', url: '/images/desktop/fredbeans/fredbeans-VDP.jpg', height: '3332px',
  },
  {
    id: 5, name: 'SERVICE', url: '/images/desktop/fredbeans/fredbeans-SERVICE.jpg', height: '3344px',
  },
  {
    id: 6, name: 'CAREERS', url: '/images/desktop/fredbeans/fredbeans-CAREERS.jpg', height: '3195px',
  },
];

const mobileImages = [
  {
    id: 1, name: 'INDEX', url: '/images/mobile/fredbeans/fredbeans-INDEX-mobile.jpg', height: '7989px', mobileHeight: '5210px',
  },
  {
    id: 2, name: 'INDEX2', url: '/images/mobile/fredbeans/fredbeans-INDEX-2-mobile.jpg', height: '5323px', mobileHeight: '3470px',
  },
  {
    id: 3, name: 'SRP', url: '/images/mobile/fredbeans/fredbeans-SRP-mobile.jpg', height: '4343px', mobileHeight: '2830px',
  },
  {
    id: 4, name: 'VDP', url: '/images/mobile/fredbeans/fredbeans-VDP-mobile.jpg', height: '2727px', mobileHeight: '1775px',
  },
  {
    id: 5, name: 'SERVICE', url: '/images/mobile/fredbeans/fredbeans-SERVICE-mobile.jpg', height: '4150px', mobileHeight: '2705px',
  },
  {
    id: 6, name: 'CAREERS', url: '/images/mobile/fredbeans/fredbeans-CAREERS-mobile.jpg', height: '3649px', mobileHeight: '2380px',
  },
];

const Fredbeans = () => (
  <div>
    <div className="body-content">
      <h1 className="fw-bold bg-gray px-5 py-4">Fred Beans Family of Dealerships</h1>
      <DesignCarouselDesktop images={desktopImages} />
      <DesignCarouselMobile images={mobileImages} />
    </div>
  </div>
);

export default Fredbeans;
