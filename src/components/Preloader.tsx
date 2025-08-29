import React, { useEffect, useRef, useCallback } from 'react';

// Spider-Man: Into the Spider-Verse themed comic fonts
const GREETINGS = [
  { text: "AIRO 5.0", style: "comic-bold" },
  { text: "AIRO 5.0", style: "superhero-title" },
  { text: "AIRO 5.0", style: "comic-sans-bold" },
  { text: "AIRO 5.0", style: "impact-comic" },
  { text: "AIRO 5.0", style: "comic-outline" },
  { text: "AIRO 5.0", style: "retro-comic" },
  { text: "AIRO 5.0", style: "bulevar-regular" },
  { text: "AIRO 5.0", style: "migra" },
  { text: "AIRO 5.0", style: "general-sans" },
  { text: "AIRO 5.0", style: "bulevar-poster" },
  { text: "AIRO 5.0", style: "migra-capitals" },
  { text: "AIRO 5.0", style: "modern-serif" },
  { text: "AIRO 5.0", style: "display-bold" }
];

const ANIMATION_CONFIG = {
  wordDuration: 400,
  transitionDuration: 250,
  holdDuration: 400,
  exitDuration: 200,
  snapDuration: 100 // Duration for the snap effect
};

interface PreloaderProps {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  minLoadTime?: number;
  onComplete?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ 
  isLoading, 
  setIsLoading, 
  minLoadTime = 200,
  onComplete 
}) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const startTimeRef = useRef<number | null>(null);

  // Cleanup function to clear all timeouts
  const cleanup = useCallback(() => {
    timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    timeoutsRef.current = [];
  }, []);

  // Exit animation
  const exitLoader = useCallback(() => {
    const loader = loaderRef.current;
    if (!loader) return;

    loader.style.transition = `transform ${ANIMATION_CONFIG.exitDuration}ms cubic-bezier(0.76, 0, 0.24, 1), opacity ${ANIMATION_CONFIG.exitDuration}ms ease-out`;
    loader.style.transform = 'translateY(-100%)';
    loader.style.opacity = '0';

    const exitTimeout = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = '';
      onComplete?.();
    }, ANIMATION_CONFIG.exitDuration);

    timeoutsRef.current.push(exitTimeout);
  }, [setIsLoading, onComplete]);

  // Word animation with font style transitions
  const animateWords = useCallback(() => {
    if (wordsRef.current.length === 0) return;

    // Hide all words initially
    wordsRef.current.forEach((word, index) => {
      if (word) {
        word.style.opacity = index === 0 ? '1' : '0';
        word.style.transform = 'translateY(0) scale(1)';
        word.style.transition = `opacity ${ANIMATION_CONFIG.snapDuration}ms ease-out`;
        word.setAttribute('data-transition-word-status', index === 0 ? 'active' : 'not-active');
      }
    });

    let currentIndex = 0;

    const snapToNext = () => {
      if (currentIndex < GREETINGS.length - 1) {
        const currentWord = wordsRef.current[currentIndex];
        const nextWord = wordsRef.current[currentIndex + 1];

        // Snap current word out
        if (currentWord) {
          currentWord.style.opacity = '0';
          currentWord.setAttribute('data-transition-word-status', 'not-active');
        }

        // Snap next word in immediately
        if (nextWord) {
          nextWord.style.opacity = '1';
          nextWord.setAttribute('data-transition-word-status', 'active');
        }

        currentIndex++;

        const nextSnapTimeout = setTimeout(snapToNext, ANIMATION_CONFIG.wordDuration);
        timeoutsRef.current.push(nextSnapTimeout);
      } else {
        const elapsedTime = Date.now() - (startTimeRef.current || 0);
        const remainingTime = Math.max(0, minLoadTime - elapsedTime);

        const exitTimeout = setTimeout(() => {
          exitLoader();
        }, remainingTime + ANIMATION_CONFIG.holdDuration);

        timeoutsRef.current.push(exitTimeout);
      }
    };

    const startTimeout = setTimeout(snapToNext, ANIMATION_CONFIG.wordDuration);
    timeoutsRef.current.push(startTimeout);
  }, [exitLoader, minLoadTime]);

  useEffect(() => {
    if (!isLoading) return;

    startTimeRef.current = Date.now();
    document.body.style.overflow = 'hidden';

    const initTimeout = setTimeout(() => {
      animateWords();
    }, 150);
    timeoutsRef.current.push(initTimeout);

    return () => {
      cleanup();
      document.body.style.overflow = '';
    };
  }, [isLoading, animateWords, cleanup]);

  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  if (!isLoading) return null;

  return (
    <div 
      ref={loaderRef} 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/texture-dark.jpg')" }}
      role="dialog"
      aria-label="Loading content"
      aria-live="polite"
    >
      <div className="relative z-10 text-center max-w-lg mx-auto px-4">
        <div className="relative h-28 flex items-center justify-center mb-8">
          {GREETINGS.map((greeting, index) => (
            <div
              key={`${greeting.text}-${index}`}
              ref={(el) => {
                if (el) wordsRef.current[index] = el;
              }}
              className={`single-word ${greeting.style} absolute text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-wide will-change-transform whitespace-nowrap`}
              data-transition-word-status="not-active"
            > 
              <span>{greeting.text}</span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Luckiest+Guy&family=Russo+One&family=Fugaz+One&display=swap');

          /* === Comic Fonts (Spider-Verse style) === */
          .comic-bold {
            font-family: 'Bangers', cursive;
            font-weight: 400;
            text-transform: uppercase;
            text-shadow: 3px 3px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000;
            color: #fff !important;
          }

          .superhero-title {
            font-family: 'Luckiest Guy', cursive;
            font-weight: 400;
            text-transform: uppercase;
            text-shadow: 4px 4px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000;
            color: #fff !important;
          }

          .comic-sans-bold {
            font-family: 'Russo One', sans-serif;
            font-weight: 400;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            text-shadow: 2px 2px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000;
            color: #fff !important;
          }

          .impact-comic {
            font-family: 'Fugaz One', cursive;
            font-weight: 400;
            text-transform: uppercase;
            text-shadow: 3px 3px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000;
            color: #fff !important;
          }

          /* === Professional Fonts for contrast === */
          .bulevar-regular {
            font-family: 'Bulevar', sans-serif;
            font-weight: 400;
            text-shadow: 2px 2px 0px #000;
            color: #fff !important;
          }

          .general-sans {
            font-family: 'General Sans', sans-serif;
            font-weight: 500;
            letter-spacing: 0.02em;
            text-shadow: 1px 1px 0px #000;
            color: #fff !important;
          }

          /* === Other styles stay comic but with consistent outlines === */
          .comic-outline {
            font-family: 'Bangers', cursive;
            font-weight: 400;
            -webkit-text-stroke: 3px #000;
            color: #fff !important;
          }

          .retro-comic {
            font-family: 'Luckiest Guy', cursive;
            font-weight: 400;
            text-transform: uppercase;
            text-shadow: 3px 3px 0px #000, 0px 0px 15px #ffcc00;
            color: #fff !important;
          }

          .spidey-web {
            font-family: 'Creepster', cursive;
            font-weight: 400;
            text-transform: uppercase;
            text-shadow: 3px 3px 0px #000, 0px 0px 20px #ff073a;
            color: #fff !important;
          }

          .single-word {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .single-word[data-transition-word-status="active"] {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          .single-word[data-transition-word-status="not-active"] {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
        `
      }} />
    </div>
  );
};

export default Preloader;