import React from 'react';
import DesignCarouselDesktop from '../components/DesignCarousel/DesignCarouselDesktop';
import DesignCarouselMobile from '../components/DesignCarousel/DesignCarouselMobile';

const desktopImages = [
  {
    id: 1, name: 'INDEX', url: '/images/desktop/sunwise/sunwise-INDEX.jpg', height: '979px',
  },
  {
    id: 2, name: 'SERVICE', url: '/images/desktop/sunwise/sunwise-SERVICE.jpg', height: '979px',
  },
  {
    id: 3, name: 'SERVICE-DROPDOWN', url: '/images/desktop/sunwise/sunwise-SERVICE-dropdown.jpg', height: '979px',
  },
  {
    id: 4, name: 'SHOP', url: '/images/desktop/sunwise/sunwise-SHOP.jpg', height: '979px',
  },
  {
    id: 5, name: 'SHOP-DROPDOWN', url: '/images/desktop/sunwise/sunwise-SHOP-dropdown.jpg', height: '979px',
  },
];

const mobileImages = [
  {
    id: 1, name: 'INDEX', url: '/images/mobile/sunwise/sunwise-INDEX-mobile.jpg', height: '1007px', mobileHeight: '660px',
  },
  {
    id: 2, name: 'SERVICE', url: '/images/mobile/sunwise/sunwise-SERVICE-mobile.jpg', height: '840px', mobileHeight: '550px',
  },
  {
    id: 3, name: 'SERVICE-DROPDOWN', url: '/images/mobile/sunwise/sunwise-SERVICE-mobile-dropdown.jpg', height: '840px', mobileHeight: '550px',
  },
  {
    id: 4, name: 'SHOP', url: '/images/mobile/sunwise/sunwise-SHOP-mobile.jpg', height: '840px', mobileHeight: '550px',
  },
];

const Sunwise = () => (
  <div>
    <div className="body-content">
      <h1 className="fw-bold bg-gray px-5 py-4">Sunwise Automotive Group</h1>
      <DesignCarouselDesktop images={desktopImages} />
      <DesignCarouselMobile images={mobileImages} />
    </div>
  </div>
);

export default Sunwise;
