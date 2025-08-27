import { useState, useEffect } from 'react';
import { MapPin, ExternalLink, ChevronRight, X } from 'lucide-react';
import './Team1Hackathon.css';

const Team1HackathonPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showGuestList, setShowGuestList] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Kolkata',
      hour12: true
    }) + ' GMT+5:30';
  };

  // Function to generate avatar with initials
  const generateAvatar = (name: string, size: number = 32) => {
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    const colors = [
      'from-purple-500 to-pink-500',
      'from-blue-500 to-cyan-500',
      'from-green-500 to-teal-500',
      'from-yellow-500 to-orange-500',
      'from-red-500 to-pink-500',
      'from-indigo-500 to-purple-500'
    ];
    const colorIndex = name.length % colors.length;
    
    return (
      <div 
        className={`w-${size === 32 ? '8' : size === 40 ? '10' : '12'} h-${size === 32 ? '8' : size === 40 ? '10' : '12'} rounded-full bg-gradient-to-br ${colors[colorIndex]} flex items-center justify-center text-white font-semibold text-sm`}
      >
        {initials}
      </div>
    );
  };

  // Featured guests data
  const featuredGuests = [
    { name: "EMMANUEL RAMAMOORTHY" },
    { name: "Vishal Aakash" },
    { name: "Abishake" },
    { name: "VISHNU VAIBHAV" },
    { name: "Meenakshisundaram Dorairaju" },
    { name: "Nagipragalathan N" }
  ];

  // Hosts data
  const hosts = [
    {
      name: "Sarnavo saha Sardar",
      twitter: "0xSarnavo",
      bio: "Dev with a knack for Marketing | Building DApps while learning Core of Blockchain Development"
    },
    {
      name: "Vamsi",
      twitter: "vamsixeth"
    },
    {
      name: "Avalanche Team1",
      twitter: "AvaxTeam1"
    },
    {
      name: "Shriyash Pandey",
      twitter: "shriyashpandit"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Matrix Background Video Effect */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDMzNTI5IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz4KPC9zdmc+')] opacity-10"></div>
        <div className="absolute inset-0 bg-red-600/10 mix-blend-multiply"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-4 backdrop-blur-sm bg-gray-900/80 border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-gradient-to-br from-red-500 to-orange-500 rounded-full"></div>
            <span className="text-xl font-bold">Luma</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <div className="text-sm text-gray-400">{formatTime(currentTime)}</div>
          <a href="#" className="text-sm hover:text-red-400 transition-colors">Explore Events</a>
          <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors">
            Sign In
          </button>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <div className="space-y-1"><div className="w-6 h-0.5 bg-white"></div><div className="w-6 h-0.5 bg-white"></div><div className="w-6 h-0.5 bg-white"></div></div>}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 z-40 p-4">
          <div className="space-y-4">
            <a href="#" className="block text-sm hover:text-red-400 transition-colors">Explore Events</a>
            <button className="w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors">
              Sign In
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Cover Image */}
          <div className="lg:col-span-1">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-red-600 to-orange-600 p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl font-bold mb-4">Team1</h1>
                  <p className="text-xl mb-2">Hackathon</p>
                  <p className="text-lg">Chennai</p>
                  <div className="mt-6 bg-black/20 rounded-lg p-4">
                    <p className="text-sm">Aug 9-10, 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Sidebar Cards */}
            <div className="hidden lg:block space-y-6 mt-8">
              
              {/* Presented By Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src="/api/placeholder/40/40" 
                    alt="Avalanche Team1 India" 
                    className="w-10 h-10 rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="text-xs text-gray-400">Presented by</p>
                    <p className="font-medium text-white">Avalanche Team1 India</p>
                  </div>
                  <button className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors">
                    Subscribe
                  </button>
                </div>
                <div className="flex justify-center">
                  <a href="https://team1.network" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Hosted By Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-sm font-medium text-gray-400 mb-4">Hosted By</h3>
                <div className="space-y-3">
                  {hosts.map((host, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <img 
                        src={host.avatar} 
                        alt={host.name} 
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-white truncate">{host.name}</p>
                      </div>
                      {host.twitter && (
                        <a 
                          href={`https://twitter.com/${host.twitter}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Attendees Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-sm font-medium text-gray-400 mb-4">142 Went</h3>
                <button 
                  onClick={() => setShowGuestList(true)}
                  className="w-full text-left"
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex -space-x-2">
                      {featuredGuests.slice(0, 6).map((guest, index) => (
                        <img
                          key={index}
                          src={guest.avatar}
                          alt={guest.name}
                          className="w-8 h-8 rounded-full border-2 border-gray-800"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">
                    EMMANUEL RAMAMOORTHY, Vishal Aakash and 140 others
                  </p>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors">
                  Contact the Host
                </button>
                <button className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors">
                  Report Event
                </button>
              </div>

              {/* Category Tag */}
              <div className="flex justify-center">
                <span className="inline-flex items-center px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                  <span className="mr-2">#</span>
                  Crypto
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Event Details */}
          <div className="lg:col-span-2">
            
            {/* Event Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/api/placeholder/24/24" 
                  alt="Avalanche Team1 India" 
                  className="w-6 h-6 rounded"
                />
                <span className="text-gray-400 text-sm">Avalanche Team1 India</span>
                <ChevronRight size={16} className="text-gray-400" />
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-6">Team1 Hackathon: Chennai</h1>
              
              {/* Event Meta Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg">
                    <div className="text-center">
                      <div className="text-xs text-gray-400">Aug</div>
                      <div className="text-sm font-bold text-white">9</div>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-white">Saturday, August 9</p>
                    <p className="text-gray-400 text-sm">9:00 AM - Aug 10, 9:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg">
                    <MapPin size={20} className="text-gray-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Register to See Address</p>
                    <p className="text-gray-400 text-sm">Chennai, Tamil Nadu</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Status */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full">
                  <X size={16} className="text-gray-400" />
                </div>
                <h2 className="text-xl font-semibold text-white">Registration Closed</h2>
              </div>
              <p className="text-gray-400">
                This event is not currently taking registrations. You may contact the host or subscribe to receive updates.
              </p>
            </div>

            {/* About Event */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-8">
              <h2 className="text-sm font-medium text-gray-400 mb-6 border-b border-gray-700 pb-2">About Event</h2>
              
              <div className="prose prose-invert max-w-none">
                <h1 className="text-2xl font-bold text-white mb-4">🛠️ Team1 Hackathon India Tour 2025 🇮🇳</h1>
                
                <p className="text-gray-300 mb-4">
                  <strong>Build What Matters. Join the Movement.</strong>
                </p>
                
                <p className="text-gray-300 mb-6">
                  Team1 is bringing its flagship <strong>Web3 Hackathon series</strong> to <strong>7 cities across India</strong> this August and September! Whether you're a developer, designer, product thinker, or just curious about blockchain innovation, this is your chance to build, learn, and connect with the community pushing Avalanche adoption forward.
                </p>

                <hr className="border-gray-700 my-6" />

                <h2 className="text-xl font-bold text-white mb-4">📍 Hackathon Cities & Dates</h2>
                <p className="text-gray-300 mb-4">Join us in a city near you! Click to register:</p>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>🏙️ <strong>Chennai</strong> – Aug 9–10: <a href="#" className="text-red-400 hover:underline">Register</a></li>
                  <li>🏙️ <strong>Mumbai</strong> – Aug 16–17: <a href="#" className="text-red-400 hover:underline">Register</a></li>
                  <li>🏙️ <strong>Hyderabad</strong> – Aug 23–24: <a href="#" className="text-red-400 hover:underline">Register</a></li>
                  <li>🏙️ <strong>Bangalore</strong> – Aug 30–31: <a href="#" className="text-red-400 hover:underline">Register</a></li>
                  <li>🏙️ <strong>Pune</strong> – Sep 6–7: <a href="#" className="text-red-400 hover:underline">Register</a></li>
                  <li>🏙️ <strong>Kolkata</strong> – Sep 13–14: <a href="#" className="text-red-400 hover:underline">Register</a></li>
                  <li>🏙️ <strong>Delhi</strong> - Sep 20-21: <a href="#" className="text-red-400 hover:underline">Register</a></li>
                </ul>

                <hr className="border-gray-700 my-6" />

                <h2 className="text-xl font-bold text-white mb-4">🧩 What Can You Build?</h2>
                <p className="text-gray-300 mb-4">
                  There are <strong>no restrictions</strong> on what you build—as long as it solves a real-world need or serves a <strong>clear use case</strong>.<br />
                  Some suggested themes include:
                </p>
                <ul className="text-gray-300 space-y-1 mb-6">
                  <li>• Consumer apps</li>
                  <li>• Developer tooling</li>
                  <li>• DePIN & infra</li>
                  <li>• Interchain/AI integrations</li>
                  <li>• Any solution that can go from <strong>prototype ➝ MVP ➝ users</strong></li>
                </ul>

                <hr className="border-gray-700 my-6" />

                <h2 className="text-xl font-bold text-white mb-4">🚀 Already Have a Project? Apply to Pitch Directly</h2>
                <p className="text-gray-300 mb-4">
                  If you're already building and want to <strong>skip the hackathon</strong> and just <strong>pitch your existing project</strong>, apply here:<br />
                  👉 <a href="#" className="text-red-400 hover:underline">Apply to Pitch</a>
                </p>
                <p className="text-gray-300 mb-6">
                  📌 <strong>Selected projects</strong> will present on <strong>Day 2</strong> of the hackathon alongside the top 5 hackathon projects.<br />
                  🏆 <strong>Note</strong>: These teams are eligible <strong>only</strong> for the <strong>$7,000 national prize pool</strong> and <strong>will not</strong> be considered for local hackathon prizes.
                </p>

                <hr className="border-gray-700 my-6" />

                <h2 className="text-xl font-bold text-white mb-4">🏆 Prizes & Opportunities</h2>
                <p className="text-gray-300 mb-4">
                  💰 <strong>$3,000 prize pool</strong> at each city hackathon<br />
                  🎤 <strong>Top 5 projects</strong> from each city get:
                </p>
                <ul className="text-gray-300 space-y-1 mb-4">
                  <li>• A <strong>pitch opportunity</strong> at the national-level Team1 showcase</li>
                  <li>• Compete for a <strong>$7,000 national prize pool</strong></li>
                  <li>• <strong>Direct entry</strong> to Avalanche ecosystem grant programs</li>
                </ul>
                <p className="text-gray-300 mb-6">
                  🧪 All top submissions qualify for a <strong>Team1 Mini Grant Interview</strong> — up to <strong>$10,000</strong> in support to take your idea from prototype to production<br />
                  Apply here: <a href="#" className="text-red-400 hover:underline">Team1 Grants</a>
                </p>

                <hr className="border-gray-700 my-6" />

                <h2 className="text-xl font-bold text-white mb-4">🗓️ Hackathon Schedule (Chennai – Aug 9 & 10)</h2>
                
                <h3 className="text-lg font-bold text-white mb-2">Saturday, August 9</h3>
                <ul className="text-gray-300 space-y-1 mb-4">
                  <li>• 09:00 AM – Participant Entry</li>
                  <li>• 10:00 AM – Hacking Begins</li>
                  <li>• 12:00 PM – Workshop: Intro to Avalanche & Interchain Messaging (ICM)</li>
                  <li>• 01:30 PM – Lunch</li>
                  <li>• 07:00 PM – Workshop: Encrypted EVM Runtime Compiler (EERC)</li>
                  <li>• 09:00 PM – Dinner</li>
                </ul>

                <h3 className="text-lg font-bold text-white mb-2">Sunday, August 10</h3>
                <ul className="text-gray-300 space-y-1 mb-6">
                  <li>• 08:00 AM – Breakfast</li>
                  <li>• 01:30 PM – Lunch</li>
                  <li>• 03:00 PM – Hacking Ends & Project Submissions</li>
                  <li>• 05:00 PM – Judging & Final Pitching (including selected direct-pitch teams)</li>
                  <li>• 07:00 PM – Pitching Ends</li>
                  <li>• 08:00 PM – Networking with Participants & Team1</li>
                  <li>• 09:00 PM – Dinner & Closing Ceremony</li>
                </ul>

                <hr className="border-gray-700 my-6" />

                <h2 className="text-xl font-bold text-white mb-4">🌍 About Team1</h2>
                <p className="text-gray-300 mb-6">
                  <strong>Team1</strong> is a global collective of developers, creators, and builders driving Avalanche adoption across 50+ countries.<br />
                  We host hackathons, meetups, and workshops to empower grassroots innovation and bridge online and offline communities.<br />
                  Join the movement and help redefine what's possible with Web3.
                </p>

                <hr className="border-gray-700 my-6" />

                <h2 className="text-xl font-bold text-white mb-4">🔗 Stay Connected</h2>
                <p className="text-gray-300 mb-4">Follow us and join the community:</p>
                <ul className="text-gray-300 space-y-1">
                  <li>🐦 Twitter: <a href="https://x.com/AvaxTeam1" className="text-red-400 hover:underline" target="_blank" rel="noopener noreferrer">@AvaxTeam1</a></li>
                  <li>💬 Telegram: <a href="http://t.me/avalanche_hi" className="text-red-400 hover:underline" target="_blank" rel="noopener noreferrer">t.me/avalanche_hi</a></li>
                  <li>🛠️ Builders Chat: <a href="http://t.me/avalancheindiabuilders" className="text-red-400 hover:underline" target="_blank" rel="noopener noreferrer">t.me/avalancheindiabuilders</a></li>
                </ul>
              </div>
            </div>

            {/* Location */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-8">
              <h2 className="text-sm font-medium text-gray-400 mb-6 border-b border-gray-700 pb-2">Location</h2>
              
              <div className="mb-4">
                <p className="text-gray-300 mb-2">Please register to see the exact location of this event.</p>
                <p className="text-gray-400 text-sm">Chennai, Tamil Nadu</p>
              </div>
              
              <div className="rounded-lg overflow-hidden h-48 bg-gray-700 flex items-center justify-center">
                <p className="text-gray-400">Map View (Chennai, Tamil Nadu)</p>
              </div>
            </div>

            {/* Mobile Sidebar Cards */}
            <div className="lg:hidden space-y-6">
              
              {/* Presented By Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src="/api/placeholder/40/40" 
                    alt="Avalanche Team1 India" 
                    className="w-10 h-10 rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="text-xs text-gray-400">Presented by</p>
                    <p className="font-medium text-white">Avalanche Team1 India</p>
                  </div>
                  <button className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors">
                    Subscribe
                  </button>
                </div>
                <div className="flex justify-center">
                  <a href="https://team1.network" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Hosted By Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-sm font-medium text-gray-400 mb-4">Hosted By</h3>
                <div className="space-y-3">
                  {hosts.map((host, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <img 
                        src={host.avatar} 
                        alt={host.name} 
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-white truncate">{host.name}</p>
                      </div>
                      {host.twitter && (
                        <a 
                          href={`https://twitter.com/${host.twitter}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Attendees Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-sm font-medium text-gray-400 mb-4">142 Went</h3>
                <button 
                  onClick={() => setShowGuestList(true)}
                  className="w-full text-left"
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex -space-x-2">
                      {featuredGuests.slice(0, 6).map((guest, index) => (
                        <img
                          key={index}
                          src={guest.avatar}
                          alt={guest.name}
                          className="w-8 h-8 rounded-full border-2 border-gray-800"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">
                    EMMANUEL RAMAMOORTHY, Vishal Aakash and 140 others
                  </p>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors">
                  Contact the Host
                </button>
                <button className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors">
                  Report Event
                </button>
              </div>

              {/* Category Tag */}
              <div className="flex justify-center">
                <span className="inline-flex items-center px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                  <span className="mr-2">#</span>
                  Crypto
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900/50 backdrop-blur-sm border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-gradient-to-br from-red-500 to-orange-500 rounded-full"></div>
                <span className="text-xl font-bold">Luma</span>
              </div>
              <div className="hidden md:flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Discover</a>
                <a href="#" className="hover:text-white transition-colors">Pricing</a>
                <a href="#" className="hover:text-white transition-colors">Help</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="mailto:support@lu.ma" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://x.com/LumaHQ" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/luma_hq/" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Host your event with Luma ↗
            </a>
          </div>
        </div>
      </footer>

      {/* Guest List Modal */}
      {showGuestList && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Event Attendees</h3>
              <button 
                onClick={() => setShowGuestList(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-3">
              {featuredGuests.map((guest, index) => (
                <div key={index} className="flex items-center space-x-3">
                  {generateAvatar(guest.name, 40)}
                  <p className="font-medium text-white">{guest.name}</p>
                </div>
              ))}
              <div className="text-center py-4">
                <p className="text-gray-400 text-sm">and 136 others...</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team1HackathonPage;
