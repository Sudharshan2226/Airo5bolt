import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import GradientText from './ui/GradientText';

import zenistaLogo from './assets/leo.png';
// [USER ACTION REQUIRED]
// To add your own background video, place it in the `src/components/assets` folder
// and update the import path below to point to your new file.
// For example: import backgroundVideo from './assets/pandora-video.mp4';
import backgroundVideo from './assets/dragondone.mp4';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownBlockProps {
  value: number;
  label: string;
}

const CountdownBlock: React.FC<CountdownBlockProps> = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center text-center">
    <span className="countdown font-mono text-3xl sm:text-5xl transition-transform duration-300">
      <span
        style={{ "--value": value } as React.CSSProperties}
        aria-live="polite"
        aria-label={String(value)}
      >
        {value}
      </span>
    </span>
    <span className="text-xs sm:text-sm text-gray-400">{label}</span>
  </div>
);

const HeroSection = () => {
  const targetDate: number = new Date("sep 12, 2025 00:00:00").getTime();
  
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

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const eventDetails = [
    {
      icon: Calendar,
      label: "Date",
      value: "8th August 2025"
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
      value: "AI&DS"
    }
  ];

  const scrollToEvents = () => {
    document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ 
          filter: 'hue-rotate(240deg) brightness(0.4)'
        }}
        ref={(video) => {
          if (video) {
            video.playbackRate = 0.65;
          }
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Video Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Pandora Animated Background (overlay on video) */}
      <div className="absolute inset-0 z-20">
        {/* Parallax Grid */}
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(64, 255, 170, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(64, 121, 255, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Bioluminescent Pulses */}
        <div className="absolute inset-0">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-96 h-96 rounded-full border border-[#4079ff]/20"
              style={{
                top: `${20 + i * 30}%`,
                left: `${10 + i * 40}%`,
              }}
              animate={{
                scale: [0, 2, 0],
                opacity: [0.3, 0.1, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 2.5,
              }}
            />
          ))}
        </div>
        
        {/* Gradient Overlay */}
        <motion.div
          animate={{ 
            background: [
              'radial-gradient(circle at 20% 50%, rgba(64, 121, 255, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(64, 255, 170, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 20%, rgba(64, 121, 255, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(64, 255, 170, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
      </div>

      {/* Floating Woodsprites */}
      <div className="absolute inset-0 z-25">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#40ffaa]/70 rounded-full"
            style={{
              boxShadow: '0 0 10px #40ffaa, 0 0 20px #40ffaa, 0 0 30px #4079ff'
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              delay: Math.random() * 7,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* College Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-12 mt-8"
        >
          
          
        </motion.div>

        {/* Event Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-1"
        >

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="flex justify-center mb-8"
          >
            <motion.img
              src={zenistaLogo}
              alt="Airo Logo"
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate={{
                filter: [
                  'drop-shadow(0 0 20px #4079ff)',
                  'drop-shadow(0 0 30px #40ffaa)',
                  'drop-shadow(0 0 20px #4079ff)'
                ]
              }}
              transition={{ 
                scale: { duration: 0.3 },
                rotate: { duration: 0.3 },
                filter: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
              }}
            />
          </motion.div>
          
          <motion.h1
            className="text-9xl md:text-9xl font-bold mb-4 tracking-wider"
            transition={{ duration: 3, repeat: Infinity }}
          >
            <GradientText 
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#4079ff", "#40ffaa"]}
              animationSpeed={4} 
              showBorder={false} 
              className="font-avartar"
              style={{ fontFamily: "'AvartarWater', sans-serif" }}
            >
              Airo 5.O
            </GradientText>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-2xl md:text-3xl text-[#40ffaa] mb-2"
          >
            2025
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            National Level Technical Symposium
          </motion.p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mb-12"
        >
          <div className="grid grid-cols-4 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto text-center">
            <CountdownBlock value={timeLeft.days} label="Days" />
            <CountdownBlock value={timeLeft.hours} label="Hours" />
            <CountdownBlock value={timeLeft.minutes} label="Minutes" />
            <CountdownBlock value={timeLeft.seconds} label="Seconds" />
          </div>
        </motion.div>

        {/* Event Details Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {eventDetails.map((detail, index) => (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + index * 0.1, duration: 0.8 }}
              className="relative bg-black/60 backdrop-blur-md border border-[#4079ff]/30 rounded-lg p-6 hover:border-[#40ffaa]/50 hover:shadow-[0_0_20px_rgba(64,255,170,0.3)] transition-all duration-500 group overflow-hidden"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4079ff]/5 via-transparent to-[#40ffaa]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#4079ff]/20 via-[#40ffaa]/20 to-[#4079ff]/20 animate-pulse" />
              </div>
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <detail.icon 
                    className="text-[#40ffaa] mx-auto mb-3 drop-shadow-[0_0_10px_rgba(64,255,170,0.5)]" 
                    size={28} 
                  />
                </motion.div>
                <p className="text-sm text-gray-300 mb-1 font-medium">{detail.label}</p>
                <p className="font-bold text-white text-lg tracking-wide">{detail.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToEvents}
            className="bg-gradient-to-r from-[#4079ff] to-[#40ffaa] hover:scale-105 transform transition-all duration-300 text-lg px-8 py-6 shadow-[0_0_20px_#4079ff] animate-pulse"
          >
            Explore Events
          </button>
          <button
            onClick={scrollToEvents}
            className="border-[#4079ff] text-[#4079ff] hover:bg-[#4079ff]/10 hover:scale-105 transform transition-all duration-300 text-lg px-8 py-6"
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;