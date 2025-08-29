import React, { useEffect } from 'react';
import spider from "./assets/Untitled design.mp4";
import './PrimaryHero.scoped.css';
const PrimaryHero: React.FC = () => {
  useEffect(() => {
    // Load the original styleguide CSS that includes all fonts and styles
    // but scope it to this component only
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/styleguide-v1.2.css';
    link.id = 'primary-hero-styleguide';
    document.head.appendChild(link);

    // Cleanup function to remove the CSS when component unmounts
    return () => {
      const existingLink = document.getElementById('primary-hero-styleguide');
      if (existingLink) {
        existingLink.remove();
      }
    };
  }, []);

  return (
    <div className="primaryHeroWrapper">
      <header className="section default-header full-height all-devices home-header" data-theme-section="dark" data-scroll-section data-vimeo-status-both-loaded="false">
        <div className="single-vimeo-background" id="vimeo-background-index-custom-1" data-scroll data-scroll-speed="-4" data-scroll-position="top" data-vimeo-background-target data-vimeo-status-sync="false" data-vimeo-status-activated="false" data-vimeo-status-loaded="false" data-vimeo-status-muted="true" style={{ }}>
          <iframe src="https://player.vimeo.com/video/1113604043?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1" width="640" height="360" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <picture className="overlay vimeo-overlay-placeholder placeholder-desktop">
            <source type="image/webp" data-srcset="https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-400x-q72.webp 400w, https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-540x-q72.webp 540w, https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-720x-q72.webp 720w, https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-1080x-q72.webp 1080w, https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-1440x-q72.webp 1440w, https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-1920x-q72.webp 1920w"/>
            <img alt="" className="lazy" src="https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-192x-q72.jpg" data-src="https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-1920x-q72.jpg" data-srcset="https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-400x-q72.jpg 400w, https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-540x-q72.jpg 540w, https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-720x-q72.jpg 720w, https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-1080x-q72.jpg 1080w, https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-1440x-q72.jpg 1440w, https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-1920x-q72.jpg 1920w" width="1920" height="1080"/>
          </picture>
          <div className="overlay vimeo-overlay-placeholder placeholder-mobile video-box">
            <video src={spider} autoPlay loop muted playsInline></video>
          </div>
        </div>
        <div className="overlay overlay-dark"></div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="split-chars animate-h1 desktop">AIRO 5.O</h1>
              <h1 className="split-chars animate-h1 mobile">AIRO 5.O</h1>
            </div>
          </div>
        </div>
        <div className="shape-polygon">
          <div className="shape-polygon-inner">
            <div className="single-vimeo-background" id="vimeo-background-index-custom-2" data-scroll data-scroll-speed="-4" data-scroll-position="top" data-vimeo-background-target data-vimeo-status-sync="false" data-vimeo-status-activated="false" data-vimeo-status-loaded="false" data-vimeo-status-muted="true" style={{ }}>
              <iframe src="https://player.vimeo.com/video/1113604043?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1" width="640" height="360" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
              <picture className="overlay vimeo-overlay-placeholder placeholder-desktop">
                <source type="image/webp" data-srcset="https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-400x-q72.webp 400w, https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-540x-q72.webp 540w, https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-720x-q72.webp 720w, https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-1080x-q72.webp 1080w, https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-1440x-q72.webp 1440w, https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-1920x-q72.webp 1920w"/>
                <img alt="" className="lazy" src="https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-192x-q72.jpg" data-src="https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-1920x-q72.jpg" data-srcset="https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-400x-q72.jpg 400w, https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-540x-q72.jpg 540w, https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-720x-q72.jpg 720w, https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-1080x-q72.jpg 1080w, https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-1440x-q72.jpg 1440w, https://aanstekelijk.nl/media/pages/home/4926f33bdb-1677769965/header-video-00-00-00-00-still001-1920x-q72.jpg 1920w" width="1920" height="1080"/>
              </picture>
              <div className="overlay vimeo-overlay-placeholder placeholder-mobile video-box">
                <video autoPlay muted playsInline loop>
                  <source src={spider} type="video/mp4"/>
                </video>
              </div>
            </div>
            <div className="overlay overlay-dark"></div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h1 className="split-chars animate-h1 desktop">AIRO 5.O</h1>
                  <h1 className="split-chars animate-h1 mobile">AIRO 5.O</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay overlay-scroll" data-anchor-target="#section-intro" data-cursor-bubble-text="Scroll" data-cursor-bubble-color="primary"></div>
        <div className="bottom-links" data-scroll>
          <div className="btn btn-link" data-button-status>
            <div className="btn-click" data-anchor-target="#section-intro">
              <div className="btn-content">
                <span>Scroll Down</span>
              </div>
              <div className="btn-line">
                <div className="btn-line-item" data-line-status="active">
                  <svg width="132" height="5" viewBox="0 0 132 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 2.89091C19.9425 2.89091 38.7471 0.740209 57.6912 1.02619C81.9375 1.3922 107.049 6.48833 131 2.455" stroke="#CE1B1B" strokeWidth="2" strokeLinecap="round"></path>
                  </svg>
                </div>
                <div className="btn-line-item" data-line-status="">
                  <svg width="135" height="5" viewBox="0 0 135 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M134 2.34581C110.524 3.61768 86.9065 1.6685 63.3919 2.39566C51.1632 2.77382 39.6174 4.61181 27.3033 3.79132C18.3941 3.19769 9.97867 1 1 1" stroke="#CE1B1B" strokeWidth="2" strokeLinecap="round"></path>
                  </svg>
                </div>
                <div className="btn-line-item" data-line-status="">
                  <svg width="132" height="6" viewBox="0 0 132 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5C2.82682 4.9188 4.62167 4.31551 6.399 3.94961C13.4187 2.50446 20.6319 1.77026 27.783 1.30982C37.3154 0.696054 46.8967 0.940951 56.3185 2.52606C61.559 3.4077 66.84 3.9771 72.1763 3.70083C77.118 3.445 81.7816 1.75886 86.6773 1.32364C91.7109 0.876164 96.6096 0.938948 101.56 2.01468C106.226 3.02873 110.462 4.87567 115.34 4.7374C119.22 4.62744 123.162 3.30804 126.873 2.26346C128.2 1.89004 129.615 1.01958 131 1.01958" stroke="#CE1B1B" strokeWidth="2" strokeLinecap="round"></path>
                  </svg>
                </div>
                <div className="btn-line-item" data-line-status="">
                  <svg width="133" height="7" viewBox="0 0 133 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 6.00004C13.8411 5.65915 26.1307 4.05664 38.4948 3.72227C59.9788 3.14126 81.6683 5.17836 103.099 3.38893C108.421 2.94454 113.818 2.00004 119.158 2.00004C120.87 2.00004 122.872 1.36997 124.43 1.52782C127.492 1.83797 128.804 3.00004 131.5 3.00004" stroke="#CE1B1B" strokeWidth="2" strokeLinecap="round"></path>
                  </svg>
                </div>
                <div className="btn-line-item" data-line-status="">
                  <svg width="132" height="6" viewBox="0 0 132 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1C43.8806 5.55649 87.3778 5.96789 131 3.50575" stroke="#CE1B1B" strokeWidth="2" strokeLinecap="round"></path>
                  </svg>
                </div>
                <div className="btn-line-item" data-line-status="">
                  <svg width="131" height="8" viewBox="0 0 131 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7C4.5751 6.87455 8.08097 6.30384 11.6235 5.87179C24.5768 4.29203 37.5833 3.24092 50.6327 2.58974C77.0517 1.27141 103.545 1 130 1" stroke="#CE1B1B" strokeWidth="2" strokeLinecap="round"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="btn btn-link" data-button-status>
            <a href="#section-intro" className="btn-click" data-transition-text="Explore">
              <div className="btn-content">
                <span>Explore Event</span>
              </div>
              <div className="btn-line">
                <div className="btn-line-item" data-line-status="active">
                  <svg width="133" height="7" viewBox="0 0 133 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 6.00004C13.8411 5.65915 26.1307 4.05664 38.4948 3.72227C59.9788 3.14126 81.6683 5.17836 103.099 3.38893C108.421 2.94454 113.818 2.00004 119.158 2.00004C120.87 2.00004 122.872 1.36997 124.43 1.52782C127.492 1.83797 128.804 3.00004 131.5 3.00004" stroke="#CE1B1B" strokeWidth="2" strokeLinecap="round"></path>
                  </svg>
                </div>
                <div className="btn-line-item" data-line-status="">
                  <svg width="132" height="6" viewBox="0 0 132 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1C43.8806 5.55649 87.3778 5.96789 131 3.50575" stroke="#CE1B1B" strokeWidth="2" strokeLinecap="round"></path>
                  </svg>
                </div>
                <div className="btn-line-item" data-line-status="">
                  <svg width="135" height="5" viewBox="0 0 135 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M134 2.34581C110.524 3.61768 86.9065 1.6685 63.3919 2.39566C51.1632 2.77382 39.6174 4.61181 27.3033 3.79132C18.3941 3.19769 9.97867 1 1 1" stroke="#CE1B1B" strokeWidth="2" strokeLinecap="round"></path>
                  </svg>
                </div>
                <div className="btn-line-item" data-line-status="">
                  <svg width="131" height="8" viewBox="0 0 131 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7C4.5751 6.87455 8.08097 6.30384 11.6235 5.87179C24.5768 4.29203 37.5833 3.24092 50.6327 2.58974C77.0517 1.27141 103.545 1 130 1" stroke="#CE1B1B" strokeWidth="2" strokeLinecap="round"></path>
                  </svg>
                </div>
                <div className="btn-line-item" data-line-status="">
                  <svg width="132" height="6" viewBox="0 0 132 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5C2.82682 4.9188 4.62167 4.31551 6.399 3.94961C13.4187 2.50446 20.6319 1.77026 27.783 1.30982C37.3154 0.696054 46.8967 0.940951 56.3185 2.52606C61.559 3.4077 66.84 3.9771 72.1763 3.70083C77.118 3.445 81.7816 1.75886 86.6773 1.32364C91.7109 0.876164 96.6096 0.938948 101.56 2.01468C106.226 3.02873 110.462 4.87567 115.34 4.7374C119.22 4.62744 123.162 3.30804 126.873 2.26346C128.2 1.89004 129.615 1.01958 131 1.01958" stroke="#CE1B1B" strokeWidth="2" strokeLinecap="round"></path>
                  </svg>
                </div>
                <div className="btn-line-item" data-line-status="">
                  <svg width="132" height="5" viewBox="0 0 132 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 2.89091C19.9425 2.89091 38.7471 0.740209 57.6912 1.02619C81.9375 1.3922 107.049 6.48833 131 2.455" stroke="#CE1B1B" strokeWidth="2" strokeLinecap="round"></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </header>
      
      {/* Target section from index.html - EXACT copy */}
      <section className="section section-intro section-intro-home" id="section-intro" data-theme-section="dark" data-scroll-section>
        <div className="container">
          <div className="row split">
            <div className="col">
              <h3><span data-cursor-gif-target="file://P3ZdDG3Y6gHE4VQQ">Welcome to AIRO 5.O</span></h3>
            </div>
          </div>
          <div className="row split">
            <div className="col">
              <div className="draw-line" data-scroll data-svg-path-length>
                <svg width="233" height="121" viewBox="0 0 233 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1C24.1778 10.741 47.0701 20.9782 69.1085 33.1274C92.4583 45.9995 115.893 61.3548 132.06 83.0048C137.065 89.7066 142.941 98.5964 142.819 107.411C142.742 112.934 135.615 117.475 131.082 118.815C123.229 121.138 113.118 119.82 105.652 116.818C99.8574 114.489 89.8256 108.254 89.8256 100.977C89.8256 88.2399 117.102 86.4402 124.369 85.6229C160.566 81.5519 197.278 87.3847 232 97.3822" stroke="#CE1B1B" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div className="col">
              <div className="col-row">
                <h4> The Power of Ideas, The Spirit of Innovation! AIRO 5.0 marks the 5th edition of the National-Level Tech Fest organized by the Department of Artificial Intelligence and Data Science. This vibrant fest is a celebration of technology, creativity, and collaboration, bringing together students from across the country to showcase their skills and imagination.</h4>
              </div>
              <div className="col-row styled-content">
                <p>We never make a boring Symposium. Ever. Promise.</p>
              </div>
              <div className="col-row">
                <div className="btn btn-primary" data-button-status>
                  <a href="#description" className="btn-click" data-transition-text="Learn more">
                    <div className="btn-content">
                      <span>Learn More</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrimaryHero;
