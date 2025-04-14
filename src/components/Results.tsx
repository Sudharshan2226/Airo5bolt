import { useState, useEffect } from 'react';
import { User, School, Flame } from 'lucide-react';
import Papa from 'papaparse';

type Team = {
  teamName: string;
  members: string;
  college: string;
};

const Results = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [animateCards, setAnimateCards] = useState(false);
  const [teams, setTeams] = useState<Team[]>([]);
  const teams2 = [
    {
      teamName2: "AI Dreamer 2.O",
      members2: "Darshana P",
      college2: "EGS Pillay Engineering College",
    },
    {
      teamName2: "Virtual Vistara",
      members2: "SANTHOSH KUMAR M R",
      college2: "Knowledge Institute of Technology",
    },
    {
      teamName2: "TEAM BLACK",
      members2: "SHARUKHESH S",
      college2: "SRI ESHWAR COLLEGE OF ENGINEERING",
    },
    {
      teamName2: "Soil2Software",
      members2: "ANTRU SUBIL A",
      college2: "Sri Eshwar College of Engineering",
    },
    {
      teamName2: "Vision Seekers",
      members2: "Ricky S",
      college2: "St. Joseph's College of Engineering",
    },
    {
      teamName2: "Code Puffets",
      members2: "Anu Subiksha H G",
      college2: "Ramco Institute of Technology",
    },
    {
      teamName2: "GHOSTOPS",
      members2: "AKUTHOTA SUSHANTH",
      college2: "TAKSHASHILA UNIVERSITY",
    },
    {
      teamName2: "NEURAL RESQ",
      members2: "Dharshan B",
      college2: "Anand Institute of Higher Technology",
    },
  ];

  useEffect(() => {
    // Load and parse the CSV file
    fetch('/Hacktronix1.0_Finalist - Sheet5 (1).csv')
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result: Papa.ParseResult<{ Teamname: string; TeamLeadname: string; College: string }>) => {
            const parsedTeams = result.data.map((row) => ({
              teamName: row.Teamname,
              members: row.TeamLeadname,
              college: row.College,
            }));
            setTeams(parsedTeams);
          },
        });
      });

    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Trigger card animations after content loads
    const animationTimer = setTimeout(() => {
      setAnimateCards(true);
    }, 1200);

    return () => {
      clearTimeout(timer);
      clearTimeout(animationTimer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="flex flex-col items-center">
          <div className="relative">
            <Flame className="w-16 h-16 text-red-500 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500 to-red-500 blur-xl opacity-30 animate-pulse"></div>
          </div>
          <p className="mt-4 text-xl font-semibold text-red-500">The Dragon is Awakening...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4 md:px-8 lg:px-16 bg-black text-white relative overflow-hidden">
      {/* Dragon-themed background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-red-900/20 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-red-900/20 to-transparent"></div>
      
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Header section with dragon theme */}
        <div className="text-center mb-16 relative">
          <Flame className="w-16 h-16 text-red-500 mx-auto mb-4 animate-bounce" />
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 uppercase tracking-wider">
            Dragon's Results
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto"></div>
        </div>
        
        {/* Results grid with enhanced cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {teams.map((team, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700 rounded-xl p-6 md:p-8 
                shadow-[0_0_15px_rgba(255,165,0,0.1)] transition-all duration-700 
                backdrop-blur-sm relative overflow-hidden
                ${animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                hover:shadow-[0_0_25px_rgba(255,165,0,0.2)] hover:-translate-y-1`}
              style={{ transitionDelay: `${150 * index}ms` }}
            >
              
              {/* Team info */}
              <div className="flex flex-col h-full">
                <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
                  {team.teamName}
                </h2>
                
                <div className="flex-grow space-y-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-5 h-5 text-orange-300" />
                    <p className="text-lg text-orange-300">
                      <span className="font-medium text-white/80">Team:</span> {team.members}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <School className="w-5 h-5 text-orange-300" />
                    <p className="text-base text-orange-300/80">
                      <span className="font-medium text-white/80">College:</span> {team.college}
                    </p>
                  </div>
                </div>
                
                {/* Dragon's fire effect at the bottom */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent mt-4"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-orange-500/10 rounded-full"></div>
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-red-500/10 rounded-full"></div>
            </div>
          ))}
        </div>
        
        {/* Second Results grid with teams2 */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 uppercase tracking-wider text-center">
            waiting list
          </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {teams2.map((team, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700 rounded-xl p-6 md:p-8 
                shadow-[0_0_15px_rgba(255,165,0,0.1)] transition-all duration-700 
                backdrop-blur-sm relative overflow-hidden
                ${animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                hover:shadow-[0_0_25px_rgba(255,165,0,0.2)] hover:-translate-y-1`}
              style={{ transitionDelay: `${150 * index}ms` }}
            >
              {/* Team info */}
              <div className="flex flex-col h-full">
                <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
                  {team.teamName2}
                </h2>
                
                <div className="flex-grow space-y-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-5 h-5 text-orange-300" />
                    <p className="text-lg text-orange-300">
                      <span className="font-medium text-white/80">Team:</span> {team.members2}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <School className="w-5 h-5 text-orange-300" />
                    <p className="text-base text-orange-300/80">
                      <span className="font-medium text-white/80">College:</span> {team.college2}
                    </p>
                  </div>
                </div>
                
                {/* Dragon's fire effect at the bottom */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent mt-4"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-orange-500/10 rounded-full"></div>
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-red-500/10 rounded-full"></div>
            </div>
          ))}
        </div>
        
        {/* Footer section */}
        <div className="mt-16 text-center">
          <p className="text-orange-400/80 text-lg">
            <span className="font-semibold">🏆 Congratulations on progressing to the second round!
            Please check your email for the next steps, event details, and instructions to join. We look forward to your participation! </span>
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default Results;
