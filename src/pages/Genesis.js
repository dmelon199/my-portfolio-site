import React from 'react';
import DesignCarouselDesktop from '../components/DesignCarousel/DesignCarouselDesktop';
import DesignCarouselMobile from '../components/DesignCarousel/DesignCarouselMobile';

const desktopImages = [
  {
    id: 1, name: 'INDEX', url: '/images/desktop/genesis/genesis-INDEX.jpg', height: '1997px',
  },
];

const mobileImages = [
  {
    id: 1, name: 'INDEX', url: '/images/mobile/genesis/genesis-INDEX-mobile.jpg', height: '1056px', mobileHeight: '689px',
  },
];

const Genesis = () => (
  <div>
    <div className="body-content">
      <h1 className="fw-bold bg-gray px-5 py-4">Genesis Motors</h1>
      <DesignCarouselDesktop images={desktopImages} />
      <DesignCarouselMobile images={mobileImages} />
    </div>
  </div>
);

export default Genesis;
