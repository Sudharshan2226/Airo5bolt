import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Users, Award } from 'lucide-react';
import GradientText from './ui/GradientText';

import collegeLogo from './assets/sec.png';
import leoLogo from './assets/leo.png';
import zenistaLogo from './assets/leo.png';
import backgroundVideo from './assets/dragondone.mp4';
import placeholderImage from './assets/DRAGON.jpeg';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const HeroSection = () => {
  const targetDate: number = new Date("September 12, 2025 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [videoLoaded, setVideoLoaded] = useState(false);

  function calculateTimeLeft(): TimeLeft {
    const now: number = new Date().getTime();
    const difference: number = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const eventDetails = [
    {
      icon: Calendar,
      label: "Date",
      value: "12th September 2025"
    },
    {
      icon: MapPin,
      label: "Venue",
      value: "Sri Sairam Engineering College"
    },
    {
      icon: Users,
      label: "Level",
      value: "National Level"
    },
    {
      icon: Award,
      label: "Department",
      value: "AI & DS"
    }
  ];

  const scrollToEvents = () => {
    document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen h-auto overflow-hidden pt-20">
      {/* Background Video with Placeholder */}
      {!videoLoaded && (
        <img
          src={placeholderImage}
          alt="Loading background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}
      <video
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ 
          filter: 'brightness(0.4) contrast(1.2)'
        }}
        onLoadedData={() => setVideoLoaded(true)}
        onError={(e) => console.error("Video Error:", e)}
        ref={(video) => {
          if (video) {
            video.playbackRate = 0.65;
          }
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 w-full py-8 sm:py-12 md:py-16 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto space-y-8 sm:space-y-12 md:space-y-16">
            
            {/* College Header */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <div className="flex items-center justify-center md:gap-12 gap-4 mb-6 sm:mb-8">
                <img
                  src={collegeLogo}
                  alt="College Logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full object-cover border-2 border-white/20 shadow-lg"
                />
                <div className="text-center">
                  <h2 className="text-sm sm:text-lg md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    Sri Sairam Engineering College
                  </h2>
                  <p className="text-xs sm:text-sm md:text-lg text-white/70 mt-1 md:mt-2 font-medium">
                    Sai Leo Nagar, West Tambaram, Chennai – 600044
                  </p>
                </div>
                <img
                  src={leoLogo}
                  alt="leo Logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full object-cover border-2 border-white/20 shadow-lg"
                />
              </div>
              
              <div className="text-center mb-6 sm:mb-8">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-semibold tracking-wide">
                  DEPARTMENT OF ARTIFICIAL INTELLIGENCE AND DATA SCIENCE
                </p>
                <p className="text-base sm:text-lg md:text-xl text-white/70 mt-2 font-medium tracking-wider">
                  PRESENTS
                </p>
              </div>
            </div>

            {/* Event Title */}
            <div className="mb-10 sm:mb-12 md:mb-16">
              {/* Main Logo */}
              <div className="flex justify-center mb-8 sm:mb-10">
                <img
                  src={zenistaLogo}
                  alt="Zenista Logo"
                  className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 object-contain drop-shadow-2xl"
                />
              </div>
              
              {/* Main Title */}
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-widest">
                <GradientText 
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]} 
                  animationSpeed={3} 
                  showBorder={false} 
                  className="font-avartar"
                  style={{ fontFamily: "'AvartarWater', sans-serif" }}
                >
                  Airo 5.O
                </GradientText>
              </h1>
              
              {/* Year */}
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cyan-400 mb-4 font-bold tracking-wider">
                2025
              </div>
              
              {/* Subtitle */}
              <p className="text-xl sm:text-2xl md:text-3xl text-white/80 mb-6 sm:mb-8 font-medium tracking-wide">
                National Level Technical Symposium
              </p>
            </div>

            {/* Countdown Timer - Improved Style */}
            <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 max-w-3xl mx-auto text-center">
              <CountdownBlock value={timeLeft.days} label="Days" />
              <CountdownBlock value={timeLeft.hours} label="Hours" />
              <CountdownBlock value={timeLeft.minutes} label="Minutes" />
              <CountdownBlock value={timeLeft.seconds} label="Seconds" />
            </div>

            {/* Event Details Grid - Enhanced */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-5xl mx-auto">
              {eventDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-6 hover:border-cyan-400/50 hover:bg-black/30 transition-all duration-300 hover:scale-105"
                >
                  <detail.icon className="text-cyan-400 mx-auto mb-3" size={32} />
                  <p className="text-xs md:text-sm text-white/60 mb-2 font-medium uppercase tracking-wider">{detail.label}</p>
                  <p className="font-bold text-white text-sm md:text-base leading-tight">{detail.value}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Enhanced */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <button
                onClick={scrollToEvents}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold text-lg px-8 py-4 rounded-xl hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Explore Events
              </button>
              <button
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold text-lg px-8 py-4 rounded-xl hover:scale-105 transform transition-all duration-300 backdrop-blur-sm"
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface CountdownBlockProps {
  value: number;
  label: string;
}

const CountdownBlock: React.FC<CountdownBlockProps> = ({ value, label }) => (
  <div className="bg-black/30 backdrop-blur-md border border-white/20 rounded-xl p-4 md:p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
    <div className="text-center">
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-400 mb-2 font-mono tracking-wider">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-xs sm:text-sm md:text-base text-white/70 font-medium uppercase tracking-widest">
        {label}
      </div>
    </div>
  </div>
);

export default HeroSection;