import React, { useState, useEffect } from "react";
import { Code, Palette, TrendingUp, Video, Bot, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import gwen from './assets/events/gwen.jpg';
import CardFlip from './ui/card-flip';

// Import other event images if you have them
import webverse from './assets/events/miles.jpg';
import multiverse from './assets/events/peni.jpg';
import creativity from './assets/events/spiderpunk.jpg';
import spideybot from './assets/events/peni.jpg';
import ctf from './assets/events/image.png';

// Types for Carousel API
interface CarouselApi {
  scrollSnapList: () => number[];
  selectedScrollSnap: () => number;
  on: (event?: string, callback?: () => void) => void;
  scrollTo: (index: number) => void;
  canScrollNext: () => boolean;
  canScrollPrev: () => boolean;
  scrollNext: () => void;
  scrollPrev: () => void;
}

// Mock Carousel components (in real app, import from shadcn/ui)
const Carousel = ({ children, setApi, className }: { 
  children: React.ReactNode; 
  setApi?: (api: CarouselApi) => void; 
  className?: string; 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    const api: CarouselApi = {
      scrollSnapList: () => Array.from({ length: totalSlides }, (_, i) => i),
      selectedScrollSnap: () => currentSlide,
      on: () => {
        // Mock event listener
      },
      scrollTo: (index: number) => setCurrentSlide(index),
      canScrollNext: () => currentSlide < totalSlides - 1,
      canScrollPrev: () => currentSlide > 0,
      scrollNext: () => {
        if (currentSlide < totalSlides - 1) {
          setCurrentSlide(prev => prev + 1);
        }
      },
      scrollPrev: () => {
        if (currentSlide > 0) {
          setCurrentSlide(prev => prev - 1);
        }
      }
    };
    
    if (setApi) setApi(api);
  }, [currentSlide, totalSlides, setApi]);

  return (
    <div className={`relative ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === CarouselContent) {
          return React.cloneElement(child, { currentSlide, setTotalSlides } as any);
        }
        return child;
      })}
    </div>
  );
};

const CarouselContent = ({ children, currentSlide, setTotalSlides, className }: { 
  children: React.ReactNode; 
  currentSlide?: number; 
  setTotalSlides?: (count: number) => void; 
  className?: string; 
}) => {
  const slides = React.Children.toArray(children);
  
  useEffect(() => {
    if (setTotalSlides) {
      setTotalSlides(slides.length);
    }
  }, [slides.length, setTotalSlides]);

  return (
    <div className={`overflow-hidden ${className || ''}`}>
      <div 
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${(currentSlide || 0) * 100}%)` }}
      >
        {slides}
      </div>
    </div>
  );
};

const CarouselItem = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`flex-shrink-0 w-full ${className || ''}`}>
    {children}
  </div>
);

const Events = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Image mapping object
  const eventImages = {
    gwen: gwen,
    // Add more images as you import them
    webverse: webverse,
    multiverse: multiverse,
    creativity: creativity,
    spideybot: spideybot,
    ctf: ctf
  };

  const eventsData = [
    {
      id: 1,
      name: "Glitch in the Multiverse ",
      description: "Battle through algorithmic challenges and showcase your programming prowess in our intense coding marathon.",
      teamSize: "1-2 members",
      mode: "Online",
      prize: "₹5,000",
      icon: Code,
      image: eventImages.webverse, // Use the imported image
      color: "blue",
      difficulty: "Advanced",
      duration: "6 hours"
    },
    {
      id: 2,
      name: "Webverse Interface",
      description: "Design revolutionary user experiences that push the boundaries of digital interaction and visual storytelling.",
      teamSize: "2-4 members",
      mode: "Hybrid",
      prize: "₹5,000",
      icon: Palette,
      image: eventImages.gwen, // Use the imported image (or add specific image later)
      color: "teal",
      difficulty: "Intermediate",
      duration: "4 hours"
    },
    {
      id: 3,
      name: "Multiverse Pitch",
      description: "Transform your groundbreaking ideas into compelling presentations that captivate investors and industry leaders.",
      teamSize: "3-5 members",
      mode: "Offline",
      prize: "₹5,000",
      icon: TrendingUp,
      image: eventImages.gwen, // Use the imported image (or add specific image later)
      color: "green",
      difficulty: "Expert",
      duration: "3 days"
    },
    {
      id: 4,
      name: "Web of Creativity",
      description: "Harness the power of artificial intelligence to create mind-bending visual narratives and cinematic experiences.",
      teamSize: "2-3 members",
      mode: "Online",
      prize: "₹5,000",
      icon: Video,
      image: eventImages.creativity, // Use the imported image (or add specific image later)
      color: "purple",
      difficulty: "Advanced",
      duration: "4 hours"
    },
    {
      id: 5,
      name: "Spidey Bot",
      description: "Engineer intelligent conversational agents that understand, learn, and interact with human-like sophistication.",
      teamSize: "2-4 members",
      mode: "Online",
      prize: "₹5,000",
      icon: Bot,
      image: eventImages.spideybot, // Use the imported image (or add specific image later)
      color: "cyan",
      difficulty: "Advanced",
      duration: "8 hours"
    },
    {
      id: 6,
      name: "CTF: Across Dimensions",
      description: "Engage in intellectual warfare where words are weapons and logic is your shield in this battle of minds.",
      teamSize: "1 member",
      mode: "Offline",
      prize: "₹5,000",
      icon: MessageSquare,
      image: eventImages.ctf, // Use the imported image (or add specific image later)
      color: "yellow",
      difficulty: "Intermediate",
      duration: "2 hours"
    }
  ];

  const handleReadMore = (eventId: number) => {
    console.log(`Navigate to event ${eventId} details`);
  };

  return (
    <section id="prizes" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
             style={{ backgroundColor: 'rgba(139, 0, 0, 0.08)' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
             style={{ backgroundColor: 'rgba(106, 13, 173, 0.06)' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
             style={{ backgroundColor: 'rgba(0, 191, 255, 0.04)' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with Main Gradient */}
        <div className="text-center mb-16">
          <h2 className="font-black mb-6 tracking-tight flex items-center justify-center gap-4 md:gap-6 flex-wrap">
            {/* Epic - Inter Black */}
            <span 
              className="animate-fade-in-up"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(2.5rem, 7vw, 4rem)',
                background: 'linear-gradient(135deg, #8B0000 0%, #DC143C 50%, #FF1493 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animationDelay: '0.2s',
                animationFillMode: 'both'
              }}
            >
              Epic
            </span>
            
            {/* Events - Orbitron */}
            <span 
              className="animate-fade-in-up"
              style={{ 
                fontFamily: "'Orbitron', monospace",
                fontWeight: 700,
                fontSize: 'clamp(2.5rem, 7vw, 4rem)',
                background: 'linear-gradient(135deg, #00BFFF 0%, #6A0DAD 50%, #00FFFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animationDelay: '0.6s',
                animationFillMode: 'both',
                letterSpacing: '0.1em'
              }}
            >
              Events
            </span>
          </h2>
          <div className="w-32 h-1 mx-auto mb-6 rounded-full animate-fade-in" 
               style={{
                 background: 'linear-gradient(90deg, #8B0000 0%, #DC143C 100%)',
                 animationDelay: '1s',
                 animationFillMode: 'both'
               }}></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up"
             style={{
               animationDelay: '1.2s',
               animationFillMode: 'both'
             }}>
            Where innovation meets competition. Choose your battlefield.
          </p>
        </div>

        {/* Desktop Grid - Hidden on Mobile/Tablet */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-8xl mx-auto">
          {eventsData.map((event, index) => {
            return (
              <div
                key={event.id}
                className="flex items-center justify-center min-h-[500px]"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardFlip
                  title={event.name}
                  subtitle={event.prize}
                  description={event.description}
                  image={event.image}
                  features={[
                    `Team Size: ${event.teamSize}`,
                    `Duration: ${event.duration}`,
                    `Prize: ${event.prize}`
                  ]}
                />
              </div>
            );
          })}
        </div>

        {/* Mobile/Tablet Carousel - Visible on Mobile/Tablet Only */}
        <div className="lg:hidden">
          <Carousel setApi={setApi} className="w-full max-w-sm mx-auto md:max-w-2xl">
            <CarouselContent>
              {eventsData.map((event, index) => {
                const Icon = event.icon;
                
                return (
                  <CarouselItem key={event.id} className="px-4">
                    <div className="rounded-3xl h-full w-full overflow-hidden backdrop-blur-xl border shadow-xl"
                         style={{
                           backgroundColor: 'rgba(26, 26, 26, 0.8)',
                           borderColor: 'rgba(45, 45, 45, 0.7)',
                           boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(139, 0, 0, 0.1)'
                         }}>
                      {/* Icon Section */}
                      <div className="relative p-6">
                        <div className="inline-flex p-4 rounded-2xl mb-4"
                             style={{
                               background: index % 4 === 0 ? 'linear-gradient(135deg, #8B0000, #DC143C)' :
                                          index % 4 === 1 ? 'linear-gradient(135deg, #6A0DAD, #FF1493)' :
                                          index % 4 === 2 ? 'linear-gradient(135deg, #00BFFF, #00FFFF)' :
                                          'linear-gradient(135deg, #DC143C, #8B0000)',
                               boxShadow: '0 0 20px rgba(139, 0, 0, 0.3)'
                             }}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
        
                      </div>

                      {/* Content */}
                      <div className="px-6 pb-6">
                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                          {event.name}
                        </h3>
                        
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                          {event.description}
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="rounded-xl p-3 backdrop-blur-sm border"
                               style={{
                                 backgroundColor: 'rgba(26, 26, 26, 0.5)',
                                 borderColor: index % 3 === 0 ? 'rgba(139, 0, 0, 0.3)' :
                                             index % 3 === 1 ? 'rgba(106, 13, 173, 0.3)' :
                                             'rgba(0, 191, 255, 0.3)'
                               }}>
                            <div className="text-gray-400 text-xs mb-1">Team Size</div>
                            <div className="text-white font-bold text-sm">{event.teamSize}</div>
                          </div>
                          <div className="rounded-xl p-3 backdrop-blur-sm border"
                               style={{
                                 backgroundColor: 'rgba(26, 26, 26, 0.5)',
                                 borderColor: index % 3 === 0 ? 'rgba(139, 0, 0, 0.3)' :
                                             index % 3 === 1 ? 'rgba(106, 13, 173, 0.3)' :
                                             'rgba(0, 191, 255, 0.3)'
                               }}>
                            <div className="text-gray-400 text-xs mb-1">Duration</div>
                            <div className="text-white font-bold text-sm">{event.duration}</div>
                          </div>
                        </div>

                        {/* Mode & Prize */}
                        <div className="flex justify-end items-center mb-6">
                          <div className="text-right">
                            <div className="text-gray-400 text-xs">Prize Pool</div>
                            <div className="text-lg font-black"
                                 style={{
                                   color: index % 4 === 0 ? '#DC143C' :
                                          index % 4 === 1 ? '#FF1493' :
                                          index % 4 === 2 ? '#00BFFF' :
                                          '#00FFFF'
                                 }}>
                              {event.prize}
                            </div>
                          </div>
                        </div>

                        {/* Button */}
                        <button
                          onClick={() => handleReadMore(event.id)}
                          className="w-full text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 hover:opacity-90"
                          style={{
                            background: index % 4 === 0 ? 'linear-gradient(135deg, #8B0000, #DC143C)' :
                                       index % 4 === 1 ? 'linear-gradient(135deg, #6A0DAD, #FF1493)' :
                                       index % 4 === 2 ? 'linear-gradient(135deg, #00BFFF, #00FFFF)' :
                                       'linear-gradient(135deg, #DC143C, #8B0000)',
                            boxShadow: '0 4px 15px rgba(139, 0, 0, 0.3)'
                          }}
                        >
                          ENTER THE ARENA
                        </button>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>

          {/* Navigation Arrows - Below the cards */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <button
              onClick={() => api?.scrollPrev()}
              disabled={!api?.canScrollPrev()}
              className="disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-full transition-colors hover:opacity-80"
              style={{
                background: 'linear-gradient(135deg, #8B0000, #DC143C)',
                boxShadow: '0 4px 15px rgba(139, 0, 0, 0.3)'
              }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => api?.scrollNext()}
              disabled={!api?.canScrollNext()}
              className="disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-full transition-colors hover:opacity-80"
              style={{
                background: 'linear-gradient(135deg, #8B0000, #DC143C)',
                boxShadow: '0 4px 15px rgba(139, 0, 0, 0.3)'
              }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slide Counter */}
          <div className="flex justify-center items-center mt-4 space-x-2">
            <div className="text-sm text-gray-400">
              {current} of {count}
            </div>
            <div className="flex space-x-1">
              {Array.from({ length: count }, (_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className="w-2 h-2 rounded-full transition-colors"
                  style={{
                    backgroundColor: i === current - 1 ? '#DC143C' : '#2d2d2d'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Events;