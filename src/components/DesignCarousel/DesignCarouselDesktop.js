import React, { useEffect, useRef, useState } from 'react';
// import Scroll from '../Scroll/Scroll';

import './DesignCarousel.css';
// eslint-disable-next-line react/prop-types
const DesignCarouselDesktop = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(1);
  const carouselItemsRef = useRef([]);
  const scrollToTop = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    if (images && images[0]) {
      carouselItemsRef.current = carouselItemsRef.current.slice(
        0,
        // eslint-disable-next-line react/prop-types
        images.length,
      );

      setSelectedImageIndex(0);
      setSelectedImage(images[0]);
    }
  }, [images]);

  const handleSelectedImageChange = (newIdx) => {
    // eslint-disable-next-line react/prop-types
    if (images && images.length > 0) {
      setSelectedImage(images[newIdx]);
      setSelectedImageIndex(newIdx);
      scrollToTop?.current?.scrollTo(0, 0);
      if (scrollRef?.current) {
        scrollRef?.current?.scrollIntoView({
          inline: 'nearest',
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div className="desktop-wrapper p-5">
      <h2 ref={scrollRef} className="pb-3">Desktop Mockups:</h2>
      <div className="desktop-skin">
        <div className="skin-overlay" style={{ backgroundImage: "url('/images/desktop.png')", backgroundSize: '100%', backgroundRepeat: 'no-repeat' }} />
        <div className="viewport">
          <div className="desktop_screen">
            <div ref={scrollToTop} className="scroll-wrap">
              <div className="selected-image-desktop" style={{ backgroundImage: `url(${selectedImage?.url})`, height: `${selectedImage?.height}`, backgroundPosition: 'center top' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="carousel desktop pt-5">
        <div className="carousel-images pb-3">
          {/* <Scroll /> */}
          {images
          // eslint-disable-next-line react/prop-types
            && images.map((desktopImages, idx) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
              <div
                onClick={() => handleSelectedImageChange(idx)}
                style={{ backgroundImage: `url(${desktopImages.url})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}
                key={desktopImages.id}
                className={`carousel-image desktop ${selectedImageIndex === idx && 'carousel-image-selected'}`}
                // eslint-disable-next-line no-return-assign
                ref={(el) => (carouselItemsRef.current[idx] = el)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DesignCarouselDesktop;
