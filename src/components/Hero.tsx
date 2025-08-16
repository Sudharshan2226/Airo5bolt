import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Award } from 'lucide-react';
import baffle from 'baffle';
import GradientText from './ui/GradientText';

import collegeLogo from './assets/sec.png';
import leoLogo from './assets/leo.png';
import zenistaLogo from './assets/leo.png';
import backgroundVideo from './assets/dragondone.mp4';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const HeroSection = () => {
  const targetDate: number = new Date("September 12, 2025 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

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
    const glitchEffect = baffle(".glitch-text", {
      characters: "▓▒░█ <>/[]{}".split(""),
      speed: 50,
    });

    glitchEffect.start().reveal(2000, 800);

    const interval = setInterval(() => {
      glitchEffect.start().reveal(2000, 800);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
      value: "ECE"
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
          filter: 'brightness(0.4) contrast(1.2)'
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
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Time-Travel Animated Background (overlay on video) */}
      <div className="absolute inset-0 z-20">
        {/* Parallax Grid */}
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(120, 119, 198, 0.3) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(120, 119, 198, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Time Ripples */}
        <div className="absolute inset-0">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-96 h-96 rounded-full border border-time-portal/20"
              style={{
                top: `${20 + i * 30}%`,
                left: `${10 + i * 40}%`,
              }}
              animate={{
                scale: [0, 2, 0],
                opacity: [0.3, 0.1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 2,
              }}
            />
          ))}
        </div>
        
        {/* Gradient Overlay */}
        <motion.div
          animate={{ 
            background: [
              'radial-gradient(circle at 20% 50%, hsl(276 100% 70% / 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, hsl(188 100% 60% / 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 20%, hsl(276 100% 70% / 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, hsl(188 100% 60% / 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-25">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-time-portal/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
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
          <div className="flex items-center justify-center md:gap-8 gap-2 mb-8 mt-24">
            <motion.img
              src={collegeLogo}
              alt="College Logo"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-3 border-time-portal/60 time-shadow"
              whileHover={{ scale: 1.1, rotate: 0 }}
              transition={{ duration: 0.8 }}
            />
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            className="text-sm md:text-4xl md:mt-10 font-semibold text-white text-center"            >
              Sri Sairam Engineering College
              <p className=" text-xs md:text-xl text-muted-foreground">
            Sai Leo Nagar, West Tambaram, Chennai – 600044
          </p>
            </motion.h2>
            
            <motion.img
              src={leoLogo}
              alt="leo Logo"
              className="w-20 h-30 md:w-24 md:h-24 rounded-full object-cover border-3 border-time-portal/60 time-shadow"
              whileHover={{ scale: 1.1, rotate: 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-muted-foreground mb-8 text-center"
          >
            Department of Electronics and Communication Engineering
            <span className=" text-xs md:text-xl text-muted-foreground block">
              Presents
            </span>
          </motion.p>
          
        </motion.div>

        {/* Event Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-1"
        >
          {/* Zenista Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="flex justify-center mb-8"
          >
            <motion.img
              src={zenistaLogo}
              alt="Zenista Logo"
              className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate={{
                filter: [
                  'drop-shadow(0 0 20px hsl(188 100% 60% / 0.6))',
                  'drop-shadow(0 0 30px hsl(276 100% 70% / 0.8))',
                  'drop-shadow(0 0 20px hsl(188 100% 60% / 0.6))'
                ]
              }}
              transition={{ 
                scale: { duration: 0.3 },
                rotate: { duration: 0.3 },
                filter: { duration: 3, repeat: Infinity }
              }}
            />
          </motion.div>
          
          <motion.h1
            className="glitch-text text-7xl md:text-8xl font-bold mb-4 tracking-wider"
            transition={{ duration: 3, repeat: Infinity }}
          >
            <GradientText 
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]} 
  animationSpeed={3} 
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
            className="text-2xl md:text-3xl text-time-glow mb-2"
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

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="grid grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto text-center"
          >
            <CountdownBlock value={timeLeft.days} label="Days" />
            <CountdownBlock value={timeLeft.hours} label="Hours" />
            <CountdownBlock value={timeLeft.minutes} label="Minutes" />
            <CountdownBlock value={timeLeft.seconds} label="Seconds" />
          </motion.div>
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
              className="bg-card/80 backdrop-blur-sm border border-time-portal/20 rounded-lg p-6 hover:border-time-portal/40 transition-all duration-300 time-warp"
            >
              <detail.icon className="text-time-portal mx-auto mb-3" size={28} />
              <p className="text-sm text-muted-foreground mb-1">{detail.label}</p>
              <p className="font-semibold text-foreground">{detail.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToEvents}
            className="time-gradient hover:scale-105 transform transition-all duration-300 text-lg px-8 py-6 time-shadow"
          >
            Explore Events
          </button>
          <button
            className="border-time-portal text-time-portal hover:bg-time-portal/10 hover:scale-105 transform transition-all duration-300 text-lg px-8 py-6"
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

interface CountdownBlockProps {
  value: number;
  label: string;
}

const CountdownBlock: React.FC<CountdownBlockProps> = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center text-center bg-black/50 backdrop-blur-sm border border-time-portal/30 rounded-lg p-4 hover:border-time-portal/50 transition-all duration-300">
    <span className="countdown font-mono text-3xl sm:text-5xl transition-transform duration-300 text-time-glow font-bold">
      <span
        style={{ "--value": value } as React.CSSProperties}
        aria-live="polite"
        aria-label={String(value)}
      >
        {value.toString().padStart(2, '0')}
      </span>
    </span>
    <span className="text-xs sm:text-sm text-gray-400 mt-2">{label}</span>
  </div>
);

export default HeroSection;