import React, { useState } from "react";
import { Code, Palette, TrendingUp, Video, Bot, MessageSquare, Terminal } from "lucide-react";
import GradientText from './ui/GradientText';
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
const Prizes: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const eventsData = [
    {
      id: 1,
      name: "Coding Event",
      description: "Battle through algorithmic challenges and showcase your programming prowess in our intense coding marathon.",
      teamSize: "1-2 members",
      mode: "Online",
      prize: "₹15,000",
      icon: Code,
      gradient: "from-cyan-500 via-blue-500 to-purple-500",
      bgPattern: "coding",
      difficulty: "Advanced",
      duration: "6 hours"
    },
    {
      id: 2,
      name: "UI/UX Hackathon",
      description: "Design revolutionary user experiences that push the boundaries of digital interaction and visual storytelling.",
      teamSize: "2-4 members",
      mode: "Hybrid",
      prize: "₹20,000",
      icon: Palette,
      gradient: "from-green-400 via-teal-500 to-blue-500",
      bgPattern: "design",
      difficulty: "Intermediate",
      duration: "48 hours"
    },
    {
      id: 3,
      name: "Pitchfest",
      description: "Transform your groundbreaking ideas into compelling presentations that captivate investors and industry leaders.",
      teamSize: "3-5 members",
      mode: "Offline",
      prize: "₹25,000",
      icon: TrendingUp,
      gradient: "from-yellow-400 via-green-500 to-teal-500",
      bgPattern: "business",
      difficulty: "Expert",
      duration: "3 days"
    },
    {
      id: 4,
      name: "AI Video Generation",
      description: "Harness the power of artificial intelligence to create mind-bending visual narratives and cinematic experiences.",
      teamSize: "2-3 members",
      mode: "Online",
      prize: "₹12,000",
      icon: Video,
      gradient: "from-blue-400 via-purple-500 to-indigo-500",
      bgPattern: "ai",
      difficulty: "Advanced",
      duration: "4 hours"
    },
    {
      id: 5,
      name: "AI Chatbot",
      description: "Engineer intelligent conversational agents that understand, learn, and interact with human-like sophistication.",
      teamSize: "2-4 members",
      mode: "Online",
      prize: "₹18,000",
      icon: Bot,
      gradient: "from-teal-400 via-cyan-500 to-blue-500",
      bgPattern: "bot",
      difficulty: "Advanced",
      duration: "8 hours"
    },
    {
      id: 6,
      name: "Debate Championship",
      description: "Engage in intellectual warfare where words are weapons and logic is your shield in this battle of minds.",
      teamSize: "1 member",
      mode: "Offline",
      prize: "₹8,000",
      icon: MessageSquare,
      gradient: "from-green-400 via-yellow-500 to-green-600",
      bgPattern: "debate",
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
      gradient: "from-blue-400 via-teal-500 to-green-500",
      bgPattern: "linux",
      difficulty: "Beginner",
      duration: "6 hours"
    }
  ];

  const handleReadMore = (eventId: number) => {
    console.log(`Navigate to event ${eventId} details`);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'Advanced': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Expert': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <section id="prizes" className="py-20 bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0b63f6]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#13e2da]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-[#0b63f6]/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Epic Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            <GradientText
              colors={["#0b63f6", "#13e2da", "#0b63f6"]}
              animationSpeed={4}
              showBorder={false}
              className="font-avartar"
              style={{ fontFamily: "'AvartarWater', sans-serif" }}
            >
              Epic Events
            </GradientText>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#0b63f6] to-[#13e2da] mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Where innovation meets competition. Choose your battlefield.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-8xl mx-auto">
          {eventsData.map((event, index) => {
            const Icon = event.icon;
            return (
              <div
                key={event.id}
                className="relative group block p-2 h-full w-full"
                onMouseEnter={() => setHoveredCard(event.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <AnimatePresence>
                  {hoveredCard === event.id && (
                    <motion.span
                      className="absolute inset-0 h-full w-full bg-gradient-to-br from-[#0b63f6]/20 to-[#13e2da]/20 block rounded-3xl"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>

                <div className={cn(
                  "rounded-3xl h-full w-full overflow-hidden bg-black/20 backdrop-blur-xl border border-[#0b63f6]/20 group-hover:border-[#0b63f6]/40 relative z-20 transition-all duration-700 transform hover:scale-105",
                  hoveredCard === event.id ? 'shadow-2xl shadow-[#0b63f6]/20' : 'shadow-xl'
                )}>
                  <div className="relative z-50">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    {/* Floating Icon */}
                    <div className="relative p-6">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${event.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Difficulty Badge */}
                      <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-bold border ${getDifficultyColor(event.difficulty)}`}>
                        {event.difficulty}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-6 pb-6">
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {event.name}
                      </h3>
                      
                      <p className="text-gray-300 text-sm mb-6 leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                        {event.description}
                      </p>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-800/50 rounded-xl p-3 backdrop-blur-sm border border-[#0b63f6]/20">
                          <div className="text-gray-400 text-xs mb-1">Team Size</div>
                          <div className="text-white font-bold text-sm">{event.teamSize}</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-xl p-3 backdrop-blur-sm border border-[#0b63f6]/20">
                          <div className="text-gray-400 text-xs mb-1">Duration</div>
                          <div className="text-white font-bold text-sm">{event.duration}</div>
                        </div>
                      </div>

                      {/* Mode & Prize */}
                      <div className="flex justify-between items-center mb-6">
                        <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                          event.mode === 'Online' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                          event.mode === 'Offline' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                          'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                        }`}>
                          {event.mode}
                        </span>
                        <div className="text-right">
                          <div className="text-gray-400 text-xs">Prize Pool</div>
                          <div className={`text-xl font-black bg-gradient-to-r ${event.gradient} bg-clip-text text-transparent`}>
                            {event.prize}
                          </div>
                        </div>
                      </div>

                      {/* Epic Button */}
                      <button
                        onClick={() => handleReadMore(event.id)}
                        className={`w-full relative overflow-hidden bg-gradient-to-r ${event.gradient} text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 group-hover:shadow-2xl transform group-hover:translate-y-[-2px] hover:scale-[1.02]`}
                      >
                        <span className="relative z-10">ENTER THE ARENA</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      </button>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${event.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-6">Ready to make your mark?</p>
          <div className="inline-flex px-8 py-3 bg-gradient-to-r from-[#0b63f6] to-[#13e2da] rounded-full text-white font-bold animate-pulse">
            Registration Opens Soon
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;