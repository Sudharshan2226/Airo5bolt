import React, { useEffect, useState } from "react";
import baffle from "baffle";
import dragon from "./assets/dragondone.mp4";
import brochure from "./assets/HackTronix1.0_Brochure.pdf";
import placeholderImage from "./assets/DRAGON.jpeg";
import { UiverseButton, GlowingButton } from "./Buttons";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}


const Hero: React.FC = () => {
  const targetDate: number = new Date("April 5, 2025 00:00:00").getTime();
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

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
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
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Glitch Effect Title */}
            <div className="mb-10">
              <h1 className="glitch-text font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
                HackTronix 1.0
              </h1>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              A 24-hour hackathon exploring the upside-down world of technology
            </p>

            {/* Countdown Timer (Row on Mobile) */}
            <div className="grid grid-cols-4 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto text-center">
              <CountdownBlock value={timeLeft.days} label="Days" />
              <CountdownBlock value={timeLeft.hours} label="Hours" />
              <CountdownBlock value={timeLeft.minutes} label="Minutes" />
              <CountdownBlock value={timeLeft.seconds} label="Seconds" />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

export default Hero;