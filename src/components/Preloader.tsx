import React, { useEffect, useState } from "react";
import "./styles/Preloader.css"; 
import preloader from './assets/AIROCOMINGSOONFINAL.mp4'
// import logo from './assets/leo.png'

const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="preloaderBg">
      {/* Background Video */}
      <div className="video-container">
        <video autoPlay muted loop>
          <source src={preloader} type="video/mp4" />
        </video>
      </div>


      {/* Loading Text Animation */}
      <div className="spinner">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </div>
  );
};

export default Preloader;
