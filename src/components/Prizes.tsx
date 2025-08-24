import React, { useState, useEffect } from "react";
import { Code, Palette, TrendingUp, Video, Bot, MessageSquare, Terminal, ChevronLeft, ChevronRight } from "lucide-react";

import GradientText from './ui/GradientText';
import CardFlip from './ui/card-flip';

// Types for Carousel API
interface CarouselApi {
  scrollSnapList: () => number[];
  selectedScrollSnap: () => number;
  on: (event: string, callback: () => void) => void;
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
      on: (_event: string, _callback: () => void) => {
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

const Prizes = () => {
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

  const eventsData = [
    {
      id: 1,
      name: "Coding Event",
      description: "Battle through algorithmic challenges and showcase your programming prowess in our intense coding marathon.",
      teamSize: "1-2 members",
      mode: "Online",
      prize: "₹5,000",
      icon: Code,
      color: "blue",
      difficulty: "Advanced",
      duration: "6 hours"
    },
    {
      id: 2,
      name: "UI/UX Hackathon",
      description: "Design revolutionary user experiences that push the boundaries of digital interaction and visual storytelling.",
      teamSize: "2-4 members",
      mode: "Hybrid",
      prize: "₹5,000",
      icon: Palette,
      color: "teal",
      difficulty: "Intermediate",
      duration: "4 hours"
    },
    {
      id: 3,
      name: "Pitchfest",
      description: "Transform your groundbreaking ideas into compelling presentations that captivate investors and industry leaders.",
      teamSize: "3-5 members",
      mode: "Offline",
      prize: "₹5,000",
      icon: TrendingUp,
      color: "green",
      difficulty: "Expert",
      duration: "3 days"
    },
    {
      id: 4,
      name: "AI Video Generation",
      description: "Harness the power of artificial intelligence to create mind-bending visual narratives and cinematic experiences.",
      teamSize: "2-3 members",
      mode: "Online",
      prize: "₹5,000",
      icon: Video,
      color: "purple",
      difficulty: "Advanced",
      duration: "4 hours"
    },
    {
      id: 5,
      name: "AI Chatbot",
      description: "Engineer intelligent conversational agents that understand, learn, and interact with human-like sophistication.",
      teamSize: "2-4 members",
      mode: "Online",
      prize: "₹5,000",
      icon: Bot,
      color: "cyan",
      difficulty: "Advanced",
      duration: "8 hours"
    },
    {
      id: 6,
      name: "Debate Championship",
      description: "Engage in intellectual warfare where words are weapons and logic is your shield in this battle of minds.",
      teamSize: "1 member",
      mode: "Offline",
      prize: "₹5,000",
      icon: MessageSquare,
      color: "yellow",
      difficulty: "Intermediate",
      duration: "2 hours"
    },
    {
      id: 7,
      name: "Linux Workshop",
      description: "Master the art of open-source wizardry and become a command-line ninja in this intensive Linux bootcamp.",
      teamSize: "Individual",
      mode: "Offline",
      prize: "₹5,000",
      icon: Terminal,
      color: "emerald",
      difficulty: "Beginner",
      duration: "6 hours"
    }
  ];

  const handleReadMore = (eventId: number) => {
    console.log(`Navigate to event ${eventId} details`);
  };

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; border: string }> = {
      blue: { bg: 'bg-blue-500', text: 'text-blue-400', border: 'border-blue-500/30' },
      teal: { bg: 'bg-teal-500', text: 'text-teal-400', border: 'border-teal-500/30' },
      green: { bg: 'bg-green-500', text: 'text-green-400', border: 'border-green-500/30' },
      purple: { bg: 'bg-purple-500', text: 'text-purple-400', border: 'border-purple-500/30' },
      cyan: { bg: 'bg-cyan-500', text: 'text-cyan-400', border: 'border-cyan-500/30' },
      yellow: { bg: 'bg-yellow-500', text: 'text-yellow-400', border: 'border-yellow-500/30' },
      emerald: { bg: 'bg-emerald-500', text: 'text-emerald-400', border: 'border-emerald-500/30' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="prizes" className="py-20 bg-gray-950 text-white relative overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with Main Gradient */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 tracking-tight">
            <GradientText
              colors={["#60a5fa", "#3b82f6"]}
              className="font-avartar"
              style={{ fontFamily: "'AvartarWater', sans-serif" }}
            >
              Epic Events
            </GradientText>
          </h2>
          <div className="w-32 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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
                  subtitle={`${event.prize} Prize Pool`}
                  description={event.description}
                  features={[
                    `Team Size: ${event.teamSize}`,
                    `Duration: ${event.duration}`,
                    `Mode: ${event.mode}`,
                    `Difficulty: ${event.difficulty}`
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
              {eventsData.map((event) => {
                const Icon = event.icon;
                const colors = getColorClasses(event.color);
                
                return (
                  <CarouselItem key={event.id} className="px-4">
                    <div className="rounded-3xl h-full w-full overflow-hidden bg-gray-900/50 backdrop-blur-xl border border-gray-700 shadow-xl">
                      {/* Icon Section */}
                      <div className="relative p-6">
                        <div className={`inline-flex p-4 rounded-2xl ${colors.bg} mb-4`}>
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
                          <div className="bg-gray-800/50 rounded-xl p-3 backdrop-blur-sm border border-gray-700">
                            <div className="text-gray-400 text-xs mb-1">Team Size</div>
                            <div className="text-white font-bold text-sm">{event.teamSize}</div>
                          </div>
                          <div className="bg-gray-800/50 rounded-xl p-3 backdrop-blur-sm border border-gray-700">
                            <div className="text-gray-400 text-xs mb-1">Duration</div>
                            <div className="text-white font-bold text-sm">{event.duration}</div>
                          </div>
                        </div>

                        {/* Mode & Prize */}
                        <div className="flex justify-end items-center mb-6">
                          <div className="text-right">
                            <div className="text-gray-400 text-xs">Prize Pool</div>
                            <div className={`text-lg font-black ${colors.text}`}>
                              {event.prize}
                            </div>
                          </div>
                        </div>

                        {/* Button */}
                        <button
                          onClick={() => handleReadMore(event.id)}
                          className={`w-full ${colors.bg} hover:opacity-90 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300`}
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
              className="bg-gray-800/80 hover:bg-gray-700/80 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-full transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => api?.scrollNext()}
              disabled={!api?.canScrollNext()}
              className="bg-gray-800/80 hover:bg-gray-700/80 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-full transition-colors"
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
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current - 1 ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Prizes;