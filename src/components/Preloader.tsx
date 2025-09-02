import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import "./styles/Preloader.css"; 
import preloader from './assets/WhatsApp Video 2025-09-01 at 20.42.47_bcb8a0ce.mp4'
// import logo from './assets/leo.png'

interface PreloaderProps {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  minLoadTime: number;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading, setIsLoading, minLoadTime }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setIsLoading(false);
    }, minLoadTime); 

    return () => clearTimeout(timer);
  }, [minLoadTime, setIsLoading]);

  if (!isVisible || !isLoading) return null;

  return (
    <div className="preloaderBg">
      {/* Background Video */}
      <div className="video-container">
        <video autoPlay muted loop>
          <source src={preloader} type="video/mp4" />
        </video>
      </div>

      {/* Preloader Logo */}
      <div className="preloader flex items-center justify-center pb-5">
        {/* <img className="rounded-full w-25 h-25" src={logo} alt="Logo"/> */}
      </div>

      {/* Spinning Loader */}
      {/* <div className="preloader2"></div> */}

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