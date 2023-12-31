import React from 'react';
import DesignCarouselDesktop from '../components/DesignCarousel/DesignCarouselDesktop';
import DesignCarouselMobile from '../components/DesignCarousel/DesignCarouselMobile';

const desktopImages = [
  {
    id: 1, name: 'INDEX', url: '/images/desktop/avondale/avondale-INDEX.jpg', height: '3208px',
  },
  {
    id: 2, name: 'GETTING-STARTED', url: '/images/desktop/avondale/avondale-GETTING-STARTED.jpg', height: '2059px',
  },
  {
    id: 3, name: 'MEMBERS', url: '/images/desktop/avondale/avondale-MEMBERS.jpg', height: '2660px',
  },
  {
    id: 4, name: 'HOW-IT-WORKS', url: '/images/desktop/avondale/avondale-HOW-IT-WORKS.jpg', height: '2941px',
  },
  {
    id: 5, name: 'PLUS', url: '/images/desktop/avondale/avondale-PLUS.jpg', height: '3246px',
  },
  {
    id: 6, name: 'PREMIUM', url: '/images/desktop/avondale/avondale-PREMIUM.jpg', height: '3476px',
  },
  {
    id: 7, name: 'PRIME', url: '/images/desktop/avondale/avondale-PRIME.jpg', height: '2940px',
  },
];

const mobileImages = [
  {
    id: 1, name: 'INDEX', url: '/images/mobile/avondale/avondale-INDEX-mobile.jpg', height: '4791px', mobileHeight: '3120px',
  },
  {
    id: 2, name: 'GETTING-STARTED', url: '/images/mobile/avondale/avondale-GETTING-STARTED-mobile.jpg', height: '3554px', mobileHeight: '2325px',
  },
  {
    id: 3, name: 'MEMBERS', url: '/images/mobile/avondale/avondale-MEMBERS-STORIES-mobile.jpg', height: '5436px', mobileHeight: '3545px',
  },
  {
    id: 4, name: 'HOW-IT-WORKS', url: '/images/mobile/avondale/avondale-HOW-IT-WORKS-mobile.jpg', height: '4850px', mobileHeight: '3165px',
  },
  {
    id: 5, name: 'PLUS', url: '/images/mobile/avondale/avondale-PLUS-mobile.jpg', height: '4486px', mobileHeight: '2925px',
  },
  {
    id: 6, name: 'PREMIUM', url: '/images/mobile/avondale/avondale-PREMIUM-mobile.jpg', height: '4683px', mobileHeight: '3050px',
  },
  {
    id: 7, name: 'PRIME', url: '/images/mobile/avondale/avondale-PRIME-mobile.jpg', height: '4177px', mobileHeight: '2720px',
  },
];

const Avondale = () => (
  <div>
    <div className="body-content">
      <h1 className="fw-bold bg-gray px-5 py-4">Avondale Select</h1>
      <DesignCarouselDesktop images={desktopImages} />
      <DesignCarouselMobile images={mobileImages} />
    </div>
  </div>
);

export default Avondale;
