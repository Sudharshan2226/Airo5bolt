import React, { useEffect, useState, useCallback } from "react";
import baffle from "baffle";
import { motion } from "framer-motion";
import dragon from "./assets/dragondone.mp4";
import brochure from "./assets/HackTronix1.0_Brochure.pdf";
import placeholderImage from "./assets/DRAGON.jpeg";
import collegeLogo from "./assets/sec.png";
import leoLogo from "./assets/leo.png";
import zenistaLogo from "./assets/leo.png";
import { UiverseButton, GlowingButton } from "./Buttons";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Hero: React.FC = () => {
  const targetDate: number = new Date("April 29, 2025 00:00:00").getTime();

  const calculateTimeLeft = useCallback((): TimeLeft => {
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
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [videoLoaded, setVideoLoaded] = useState(false);

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
  }, [calculateTimeLeft]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-4">
      {/* Background Video */}
      {!videoLoaded && (
        <img
          src={placeholderImage}
          alt="Loading background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
        onLoadedData={() => setVideoLoaded(true)}
        onError={(e) => console.error("Video Error:", e)}
      >
        <source src={dragon} type="video/mp4" />
      </video>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center w-full flex flex-col justify-center min-h-screen py-8">
            {/* College Header - Made more compact */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6 md:mb-8"
            >
              <div className="flex items-center justify-center gap-2 md:gap-6 mb-4 md:mb-6">
                <motion.img
                  src={collegeLogo}
                  alt="College Logo"
                  className="w-12 h-12 md:w-20 md:h-20 rounded-full object-cover border-2 border-time-portal/60 flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 0 }}
                  transition={{ duration: 0.8 }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="flex-1 min-w-0"
                >
                  <h2 className="text-xs md:text-2xl lg:text-3xl font-semibold text-white leading-tight">
                    Sri Sairam Engineering College
                  </h2>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">
                    Sai Leo Nagar, West Tambaram, Chennai – 600044
                  </p>
                </motion.div>
                <motion.img
                  src={leoLogo}
                  alt="leo Logo"
                  className="w-12 h-12 md:w-20 md:h-20 rounded-full object-cover border-2 border-time-portal/60 flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 0 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xs md:text-base text-muted-foreground"
              >
                <p className="mb-1">Department of Electronics and Communication Engineering</p>
                <p className="text-xs md:text-sm">Presents</p>
              </motion.div>
            </motion.div>

            {/* Event Title - Made more compact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mb-6 md:mb-8 flex-shrink-0"
            >
              {/* Zenista Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.0 }}
                className="flex justify-center mb-4 md:mb-6"
              >
                <motion.img
                  src={zenistaLogo}
                  alt="Zenista Logo"
                  className="w-20 h-20 md:w-32 md:h-32 object-contain drop-shadow-2xl"
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
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-glow mb-2 md:mb-4 tracking-wider"
                animate={{
                  textShadow: [
                    '0 0 20px hsl(188 100% 60% / 0.6)',
                    '0 0 40px hsl(276 100% 70% / 0.8)',
                    '0 0 20px hsl(188 100% 60% / 0.6)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                AIRO 5.O
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-xl md:text-2xl lg:text-3xl text-time-glow mb-4 md:mb-6"
              >
                2025
              </motion.div>
            </motion.div>

            {/* Countdown Timer - Made more compact */}
            <div className="grid grid-cols-4 gap-2 md:gap-4 mb-6 md:mb-8 max-w-md md:max-w-2xl mx-auto">
              <CountdownBlock value={timeLeft.days} label="Days" />
              <CountdownBlock value={timeLeft.hours} label="Hours" />
              <CountdownBlock value={timeLeft.minutes} label="Minutes" />
              <CountdownBlock value={timeLeft.seconds} label="Seconds" />
            </div>

            {/* Buttons - Made more compact */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 flex-shrink-0">
              <GlowingButton text="Register Now" href="https://docs.google.com/forms/d/e/1FAIpQLSfG1mb6YvrWuT6T_5AWUj8lZ_CrInreJWsun6hGu89i2LBGfw/viewform?usp=dialog" />
              <UiverseButton text="Brochure" href={brochure} />
              <UiverseButton text="PPT_Template" href="https://docs.google.com/presentation/d/1nKZcI3bf1qQ3l2ifRkYlElMbTPchn-uXCpuAZXE7Sw4/edit?usp=sharing" />
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
  <div className="flex flex-col items-center justify-center text-center">
    <span className="countdown font-mono text-xl md:text-3xl lg:text-4xl transition-transform duration-300">
      <span
        style={{ "--value": value } as React.CSSProperties}
        aria-live="polite"
        aria-label={String(value)}
      >
        {value}
      </span>
    </span>
    <span className="text-xs md:text-sm text-gray-400">{label}</span>
  </div>
);

export default Hero;