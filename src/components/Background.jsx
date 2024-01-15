import React, { useEffect, useState } from 'react';
import './Background.css';
import getWindowSize from './Viewport';

const backgroundImageList = ['background1', 'background3'];

// const getWindowSize = (width, height) => {
//   if (width >= 1025 || (width >= 768 && width <= 1024 && width > height)) {
//     return "desktop";
//   } else if (width >= 768 && width <= 1024 && height > width) {
//     return "tablet";
//   } else if ((width >= 1 && width <= 480) || (width >= 481 && width <= 767)) {
//     return "mobile";
//   }
// };

function Background() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [backgroundSize, setBackgroundSize] = useState(getWindowSize(viewportWidth, viewportHeight));
  const [image, setImage] = useState("");
  const [imageIndex, setImageIndex] = useState(0);

  // window resize handler
  const handleResize = () => {
    setViewportWidth(window.innerWidth);
    setViewportHeight(window.innerHeight);
    setBackgroundSize(getWindowSize(window.innerWidth, window.innerHeight));
  };

  // Setup values and listeners
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Choose next image index
  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % backgroundImageList.length);
  };

  // Change background every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    // console.log("Background " + imageIndex + " of size " + backgroundSize);
    setImage(`src/assets/backgrounds/${backgroundImageList[imageIndex]}-${backgroundSize}.jpg`);
  }, [imageIndex, backgroundSize]);

  const backgroundStyle = {
    backgroundImage: `url(${image})`,
    position: 'absolute',
    top: 0,
    left: 0,
    minHeight: '100vh',
    minWidth: '100vw',
  };

  return (
    <div style={backgroundStyle} className="background-container" />
  );
}

export default Background;
