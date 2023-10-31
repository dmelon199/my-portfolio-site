import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import './DesignCarousel.css';
// eslint-disable-next-line react/prop-types
const DesignCarouselMobile = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState();
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
  // eslint-disable-next-line react/prop-types
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 600 });
    return isDesktop ? children : null;
  };
  // eslint-disable-next-line react/prop-types
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 600 });
    return isMobile ? children : null;
  };

  return (
    <div className="mobile-wrapper p-5 bg-gray">
      <h2 ref={scrollRef}>Mobile Mockups:</h2>
      <div className="mobile-skin">
        <div className="mobile-skin-overlay" style={{ backgroundImage: "url('/images/mobile.png')", backgroundSize: '100%', backgroundRepeat: 'no-repeat' }} />
        <div className="mobile-viewport">
          <div className="mobile_screen">
            <div ref={scrollToTop} className="mobile-scroll-wrap">
              <Desktop>
                <div
                  className="selected-image-mobile"
                  style={{
                    backgroundImage: `url(${selectedImage?.url})`, height: `${selectedImage?.height}`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center top',
                  }}
                />
              </Desktop>
              <Mobile>
                <div
                  className="selected-image-mobile"
                  style={{
                    backgroundImage: `url(${selectedImage?.url})`, height: `${selectedImage?.mobileHeight}`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center top',
                  }}
                />
              </Mobile>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel mobile pt-5">
        <div className="carousel-images pb-5">
          {images
            // eslint-disable-next-line react/prop-types
            && images.map((mobileImages, idx) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
              <div
                onClick={() => handleSelectedImageChange(idx)}
                style={{ backgroundImage: `url(${mobileImages.url})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}
                key={mobileImages.id}
                className={`carousel-image mobile ${selectedImageIndex === idx && 'carousel-image-selected'}`}
                // eslint-disable-next-line no-return-assign
                ref={(el) => (carouselItemsRef.current[idx] = el)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DesignCarouselMobile;
