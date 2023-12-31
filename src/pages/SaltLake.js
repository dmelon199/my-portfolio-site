import React from 'react';
import DesignCarouselDesktop from '../components/DesignCarousel/DesignCarouselDesktop';
import DesignCarouselMobile from '../components/DesignCarousel/DesignCarouselMobile';

const desktopImages = [
  {
    id: 1, name: 'INDEX', url: '/images/desktop/saltlake/saltlake-INDEX.jpg', height: '2572px',
  },
  {
    id: 1, name: 'INDEX2', url: '/images/desktop/saltlake/saltlake-INDEX-2.jpg', height: '2406px',
  },
  {
    id: 3, name: 'SRP', url: '/images/desktop/saltlake/saltlake-SRP.jpg', height: '1806px',
  },
  {
    id: 4, name: 'VDP', url: '/images/desktop/saltlake/saltlake-VDP.jpg', height: '2182px',
  },
  {
    id: 5, name: 'SHOWROOM', url: '/images/desktop/saltlake/saltlake-SHOWROOM.jpg', height: '1295px',
  },
  {
    id: 6, name: 'SERVICE', url: '/images/desktop/saltlake/saltlake-SERVICE.jpg', height: '2540px',
  },
];

const mobileImages = [
  {
    id: 1, name: 'INDEX', url: '/images/mobile/saltlake/saltlake-INDEX-mobile.jpg', height: '4354px', mobileHeight: '2840px',
  },
  {
    id: 1, name: 'INDEX2', url: '/images/mobile/saltlake/saltlake-INDEX-mobile-2.jpg', height: '3893px', mobileHeight: '2540px',
  },
  {
    id: 3, name: 'SRP', url: '/images/mobile/saltlake/saltlake-SRP-mobile.jpg', height: '3725px', mobileHeight: '2425px',
  },
  {
    id: 4, name: 'VDP', url: '/images/mobile/saltlake/saltlake-VDP-mobile.jpg', height: '2226px', mobileHeight: '1305px',
  },
  {
    id: 5, name: 'SHOWROOM', url: '/images/mobile/saltlake/saltlake-SHOWROOM-mobile.jpg', height: '1495px', mobileHeight: '970px',
  },
  {
    id: 6, name: 'SERVICE', url: '/images/mobile/saltlake/saltlake-SERVICE-mobile.jpg', height: '4753px', mobileHeight: '3100px',
  },
];

const SaltLake = () => (
  <div>
    <div className="body-content">
      <h1 className="fw-bold bg-gray px-5 py-4">Salt Lake City Motorcars</h1>
      <DesignCarouselDesktop images={desktopImages} />
      <DesignCarouselMobile images={mobileImages} />
    </div>
  </div>
);

export default SaltLake;
