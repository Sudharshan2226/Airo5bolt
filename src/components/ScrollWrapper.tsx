import React, { useEffect, ReactNode } from 'react';

interface ScrollWrapperProps {
  children: ReactNode;
}

const ScrollWrapper: React.FC<ScrollWrapperProps> = ({ children }) => {
  useEffect(() => {
    // Load external CSS files in exact order
    const cssFiles = [
      '/normalize.css',
      '/components-v1.2.css', 
      '/style-v1.2.css',
      '/loconative-scroll.min.css'
    ];

    cssFiles.forEach(file => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = file;
      document.head.appendChild(link);
    });

    // Load external scripts in exact order
    const scripts = [
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/TextPlugin.min.js',
      '/SplitText.min.js',
      'https://unpkg.com/@vimeo/player@2.18.0/dist/player.min.js',
      'https://unpkg.com/@barba/core',
      'https://cdn.jsdelivr.net/npm/vanilla-lazyload@17.8.3/dist/lazyload.min.js',
      'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js',
      'https://code.jquery.com/jquery-3.7.1.min.js',
      '/loconative-scroll.min.js',
      '/index.js'
    ];

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    // Load scripts sequentially
    scripts.reduce((promise: Promise<void>, src: string) => {
      return promise.then(() => loadScript(src));
    }, Promise.resolve());

    // Cleanup function
    return () => {
      // Remove added stylesheets and scripts if needed
    };
  }, []);

  return (
    <>
      {/* Page Transition Elements - EXACT from original */}
      <div className="transition-container" data-transition-status="loading">
        <div className="transition-screen">
          <div className="transition-screen-inner"></div>
        </div>
        <div className="transition-screen-duplicate">
          <div className="transition-screen-duplicate-inner"></div>
        </div>
        <div className="transition-words">
          <span data-transition-word-status="active">Loading</span>
        </div>
      </div>

      {/* Custom Cursor - EXACT from original */}
      <div className="custom-cursor" data-cursor-init="false" data-cursor-bubble="not-active" data-cursor-gif="not-active" data-cursor-background="primary" data-cursor-status-move="not-active" data-cursor-status-drag="not-active">
        <div className="cursor-bubble">
          <div className="cursor-before"></div>
          <div className="cursor-background"></div>
          <span className="cursor-text">View</span>
          <span className="cursor-text-drag">Drag</span>
        </div>
        <div className="cursor-drag-dot left"></div>
        <div className="cursor-drag-dot right"></div>
        <div className="cursor-gif">
          <div className="cursor-before"></div>
        </div>
      </div>

      <div data-barba="wrapper">
        <main className="main" data-barba="container" data-barba-namespace="home">
          <div className="fixed-background dark"><div className="texture"></div></div>
          
          <div className="main-wrap" data-scroll-container>
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default ScrollWrapper;
