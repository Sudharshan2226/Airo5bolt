import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Award } from 'lucide-react';
import GradientText from './ui/GradientText';

import collegeLogo from './assets/sec.png';
import leoLogo from './assets/leo.png';
import zenistaLogo from './assets/leo.png';
// [USER ACTION REQUIRED]
// To add your own background video, place it in the `src/components/assets` folder
// and update the import path below to point to your new file.
// For example: import backgroundVideo from './assets/pandora-video.mp4';
import backgroundVideo from './assets/dragondone.mp4';

const HeroSection = () => {
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
            backgroundImage: `linear-gradient(rgba(46, 103, 160, 0.3) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(46, 103, 160, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Bioluminescent Pulses */}
        <div className="absolute inset-0">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-96 h-96 rounded-full border border-[#5AACCF]/20"
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
              'radial-gradient(circle at 20% 50%, hsl(207 88% 55% / 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, hsl(160 88% 60% / 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 20%, hsl(207 88% 55% / 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, hsl(160 88% 60% / 0.1) 0%, transparent 50%)'
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
            className="absolute w-2 h-2 bg-[#EFFC93]/70 rounded-full"
            style={{
              boxShadow: '0 0 10px #EFFC93, 0 0 20px #EFFC93, 0 0 30px #80C271'
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
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate={{
                filter: [
                  'drop-shadow(0 0 20px #5AACCF)',
                  'drop-shadow(0 0 30px #80C271)',
                  'drop-shadow(0 0 20px #5AACCF)'
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
            className="text-7xl md:text-8xl font-bold mb-4 tracking-wider"
            transition={{ duration: 3, repeat: Infinity }}
          >
            <GradientText 
              colors={["#5AACCF", "#EFFC93", "#80C271", "#5AACCF"]} 
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
            className="text-2xl md:text-3xl text-[#EFFC93] mb-2"
            style={{ textShadow: '0 0 10px #EFFC93' }}
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

        {/* Event Details Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {eventDetails.map((detail, index) => (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.8 }}
              className="bg-card/80 backdrop-blur-sm border border-[#5AACCF]/20 rounded-lg p-6 hover:border-[#5AACCF]/40 transition-all duration-300"
            >
              <detail.icon className="text-[#5AACCF] mx-auto mb-3" size={28} />
              <p className="text-sm text-muted-foreground mb-1">{detail.label}</p>
              <p className="font-semibold text-foreground">{detail.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToEvents}
            className="bg-gradient-to-r from-[#5AACCF] to-[#80C271] hover:scale-105 transform transition-all duration-300 text-lg px-8 py-6 shadow-[0_0_20px_#5AACCF]"
          >
            Explore Events
          </button>
          <button
            onClick={scrollToEvents}
            className="border-[#5AACCF] text-[#5AACCF] hover:bg-[#5AACCF]/10 hover:scale-105 transform transition-all duration-300 text-lg px-8 py-6"
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;