import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const MapLocation: React.FC = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const mapRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  const handleMapLoad = () => {
    setIsMapLoaded(true);
  };

  return (
    <section 
      ref={containerRef}
      id="location" 
      className="w-full py-24 bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 text-white">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-medium tracking-tight mb-6"
          >
            Find Us Here
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg text-gray-300"
          >
            Visit us at <span className="font-medium">Sri Sairam Engineering College</span>, 
            the venue for <span className="font-medium">AIRO 5.O</span>. 
            Navigate using the interactive map below.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          {!isMapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mb-4"></div>
                <p className="text-gray-300">Loading map...</p>
              </div>
            </div>
          )}
          
          <div className="relative lg:flex items-stretch overflow-hidden">
            <div className="lg:w-1/3 bg-black p-8 lg:p-10 z-10 text-white">
              <h3 className="text-xl font-medium mb-2">Address</h3>
              <p className="text-gray-400">
                Sri Sairam Engineering College<br />
                West Tambaram, Chennai - 600044<br />
                Tamil Nadu, India
              </p>
              
              <div className="mt-6">
                <a
                  href="https://maps.google.com/?q=Sri+Sairam+Engineering+College+Chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 px-4 rounded-lg bg-white text-black font-medium transition-all hover:bg-gray-300"
                >
                  Get Directions
                </a>
              </div>
            </div>
            
            <div className="lg:w-2/3 h-[500px] lg:h-auto relative">
              <iframe 
                ref={mapRef}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.181780386284!2d80.05483217484118!3d12.960217087354076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f596c7fb72c9%3A0x8e7a30529f9ef227!2sSri%20Sairam%20Engineering%20College!5e0!3m2!1sen!2sin!4v1742156150816!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={handleMapLoad}
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapLocation;
