import React from 'react';
import DesignCarouselDesktop from '../components/DesignCarousel/DesignCarouselDesktop';
import DesignCarouselMobile from '../components/DesignCarousel/DesignCarouselMobile';

const desktopImages = [
  {
    id: 1, name: 'INDEX', url: '/images/desktop/lithia/lithia-index.jpg', height: '3152px',
  },
  {
    id: 2, name: 'INDEX2', url: '/images/desktop/lithia/lithia-index-2.jpg', height: '2833px',
  },
  {
    id: 3, name: 'SRP', url: '/images/desktop/lithia/lithia-srp.jpg', height: '3102px',
  },
  {
    id: 4, name: 'VDP', url: '/images/desktop/lithia/lithia-vdp.jpg', height: '2574px',
  },
];

const mobileImages = [
  {
    id: 1, name: 'INDEX', url: '/images/mobile//lithia/lithia-INDEX-mobile-1.jpg', height: '6674px', mobileHeight: '4355px',
  },
  {
    id: 2, name: 'INDEX', url: '/images/mobile//lithia/lithia-INDEX-mobile-2.jpg', height: '5992px', mobileHeight: '3905px',
  },
  {
    id: 3, name: 'SRP', url: '/images/mobile//lithia/lithia-SRP-mobile.jpg', height: '5481px', mobileHeight: '3570px',
  },
  {
    id: 4, name: 'VDP', url: '/images/mobile//lithia/lithia-VDP-mobile.jpg', height: '2635px', mobileHeight: '1715px',
  },
];

const Lithia = () => (
  <div>
    <div className="body-content">
      <h1 className="fw-bold bg-gray px-5 py-4">Lithia Motors</h1>
      <DesignCarouselDesktop images={desktopImages} />
      <DesignCarouselMobile images={mobileImages} />
    </div>
  </div>
);

export default Lithia;
