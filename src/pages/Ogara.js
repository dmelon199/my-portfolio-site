import React from 'react';
import DesignCarouselDesktop from '../components/DesignCarousel/DesignCarouselDesktop';
import DesignCarouselMobile from '../components/DesignCarousel/DesignCarouselMobile';

const desktopImages = [
  {
    id: 1, name: 'INDEX', url: '/images/desktop/ogara/ogara-INDEX.jpg', height: '2004px',
  },
  {
    id: 2, name: 'INDEX2', url: '/images/desktop/ogara/ogara-INDEX-2.jpg', height: '2509px',
  },
  {
    id: 3, name: 'INDEX3', url: '/images/desktop/ogara/ogara-INDEX-3.jpg', height: '3110px',
  },
  {
    id: 4, name: 'SRP', url: '/images/desktop/ogara/ogara-SRP.jpg', height: '2237px',
  },
  {
    id: 5, name: 'VDP', url: '/images/desktop/ogara/ogara-VDP.jpg', height: '2435px',
  },
  {
    id: 6, name: 'BRAND', url: '/images/desktop/ogara/ogara-BRAND.jpg', height: '1466px',
  },
  {
    id: 7, name: 'MODEL', url: '/images/desktop/ogara/ogara-MODEL.jpg', height: '3077px',
  },
];

const mobileImages = [
  {
    id: 1, name: 'INDEX', url: '/images/mobile/ogara/ogara-INDEX-mobile.jpg', height: '4560px', mobileHeight: '2995px',
  },
  {
    id: 2, name: 'INDEX2', url: '/images/mobile/ogara/ogara-INDEX-2-mobile.jpg', height: '3203px', mobileHeight: '2090px',
  },
  {
    id: 3, name: 'INDEX3', url: '/images/mobile/ogara/ogara-INDEX-3-mobile.jpg', height: '3817px', mobileHeight: '2490px',
  },
  {
    id: 4, name: 'SRP', url: '/images/mobile/ogara/ogara-SRP-mobile.jpg', height: '3667px', mobileHeight: '2390px',
  },
  {
    id: 5, name: 'VDP', url: '/images/mobile/ogara/ogara-VDP-mobile.jpg', height: '2280px', mobileHeight: '1485px',
  },
  {
    id: 6, name: 'BRAND', url: '/images/mobile/ogara/ogara-BRAND-mobile.jpg', height: '1861px', mobileHeight: '1215px',
  },
  {
    id: 7, name: 'MODEL', url: '/images/mobile/ogara/ogara-MODEL-mobile.jpg', height: '5072px', mobileHeight: '3305px',
  },
];

const Ogara = () => (
  <div>
    <div className="body-content">
      <h1 className="fw-bold bg-gray px-5 py-4">O&apos;Gara Coach</h1>
      <DesignCarouselDesktop images={desktopImages} />
      <DesignCarouselMobile images={mobileImages} />
    </div>
  </div>
);

export default Ogara;
