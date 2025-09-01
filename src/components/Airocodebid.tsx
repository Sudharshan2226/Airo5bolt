import { useState, useEffect } from 'react';
import { MapPin, ExternalLink, ChevronRight, X } from 'lucide-react';
import './AiroHackathon.css';

const Airocodebid = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  // const [showGuestList, setShowGuestList] = useState(false);

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
  const generateAvatar = (name: string, size: number = 32, extraClasses: string = '') => {
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
        className={`w-${size === 32 ? '8' : size === 40 ? '10' : '12'} h-${size === 32 ? '8' : size === 40 ? '10' : '12'} rounded-full bg-gradient-to-br ${colors[colorIndex]} flex items-center justify-center text-white font-semibold text-sm ${extraClasses}`}
      >
        {initials}
      </div>
    );
  };



  // Hosts data
  const hosts = [
    { name: "Hariharan M", twitter: "https://www.linkedin.com/in/hariharan-m-b9691a290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "SAHANA S", twitter: "https://www.linkedin.com/in/s-sahana-55b70a2b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Monicka sri S", twitter: "http://www.linkedin.com/in/monicka-sri-s-12597a2a4" },
    { name: "Dinesh K", twitter: "https://www.linkedin.com/in/k-dinesh-1696b32b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "KISHORE S", twitter: "https://www.linkedin.com/in/kishore-s-506b22342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative airo-page">
      {/* Matrix Background Video Effect */}
      <div className="fixed inset-0 z-0 hackathon-matrix-bg" />

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-4 backdrop-blur-sm bg-gray-900/80 border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
            <span className="text-xl font-bold">AIRO</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <div className="text-sm text-gray-400">{formatTime(currentTime)}</div>
          <a href="#" className="text-sm hover:text-blue-400 transition-colors">Explore Events</a>
          <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors">
            Register
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
            <a href="#" className="block text-sm hover:text-blue-400 transition-colors">Explore Events</a>
            <button className="w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors">
              Register
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Cover Image */}
          <div className="lg:col-span-1">
            {/* <div className="relative">
              <img
                src="/events/gwen.jpg"
                alt=""
                className="absolute top-4 left-0 w-full h-full object-cover rounded-2xl blur-2xl opacity-50"
              />
              <div className="relative aspect-square rounded-2xl overflow-hidden airo-cover-image">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="/events/gwen.jpg"
                    alt="AIRO 5.0 Code & Bid"
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>
              </div>
            </div> */}

            {/* Desktop Sidebar Cards */}
            <div className="hidden lg:block space-y-6 mt-8">
              

              {/* Event Co-ordinator Card */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-sm font-medium text-gray-400 mb-4">Event Co-ordinator</h3>
                <div className="space-y-3">
                  {hosts.map((host, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      {generateAvatar(host.name)}
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-white truncate">{host.name}</p>
                      </div>
                      {host.twitter && (
                        <a 
                          href={`${host.twitter}`} 
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

              

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors">
                  Contact the Host
                </button>
              </div>

              {/* Category Tag */}
              <div className="flex justify-center">
                <span className="inline-flex items-center px-3 py-1 bg-cyan-600/20 text-cyan-400 rounded-full text-sm">
                  <span className="mr-2">#</span>
                  Code & Bid
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
                  src="/logo.png"
                  alt="AIRO 5.0" 
                  className="w-6 h-6 rounded"
                />
                <span className="text-gray-400 text-sm">AIRO 5.0</span>
                <ChevronRight size={16} className="text-gray-400" />
              </div>
              
              <h1 className="text-5xl font-bold text-white mb-6">AIRO 5.0 | Glitch in the Multiverse</h1>
              
              {/* Event Meta Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg">
                    <div className="text-center">
                      <div className="text-xs text-gray-400">Sep</div>
                      <div className="text-sm font-bold text-white">12</div>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-white">Friday, September 12</p>
                    <p className="text-gray-400 text-sm">11:00 AM - 12:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Status */}
            <div className="glass-card rounded-xl p-6 mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-cyan-700 rounded-full">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-white">Registration Open</h2>
              </div>
              <p className="text-gray-400 mb-4">
                Join us for an exciting coding challenge! Code. Crack. Conquer.
              </p>
              <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdeBrwoBe8SRqmSKmn_ZfgM-knDBt43IhbEaN0JMoSlwaFQyA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block"
              >
              <button className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300">
                Register Now
              </button>
              </a>
            </div>

            {/* About Event */}
            <div className="glass-card rounded-xl p-6 mb-8">
              <h2 className="text-sm font-medium text-gray-400 mb-6 border-b border-gray-700 pb-2">About Event</h2>
              
              <div className="prose prose-invert max-w-none">
                <h1 className="text-2xl font-bold text-white mb-4">💻 AIRO 5.0 | Code & Bid</h1>
                
                <p className="text-gray-300 mb-4">
                  <strong>Code. Crack. Conquer.</strong>
                </p>
                
                <p className="text-gray-300 mb-6">
                  Join us for an exciting coding challenge as part of AIRO 5.0! This unique 1.5-hour competition combines strategic thinking with programming skills. Teams will bid on problem difficulty levels, explain challenges to teammates, and collaborate to solve coding problems. Test your communication skills, coding prowess, and teamwork in this innovative format.
                </p>

                <hr className="border-gray-700 my-6" />

                <h2 className="text-xl font-bold text-white mb-4">📋 Event Highlights</h2>
                <ul className="text-gray-300 space-y-1 mb-6">
                  <li>• <strong>Duration:</strong> 1.5 Hours</li>
                  <li>• <strong>Team Size:</strong> 2 members per team</li>
                  <li>• <strong>Problem Statement:</strong> Revealed on the spot</li>
                  <li>• <strong>Mode:</strong> Round 1 – Online Quiz, Round 2 – On-campus Coding</li>
                  <li>• <strong>Programming Languages:</strong> C, C++, Python, Java</li>
                </ul>

                <hr className="border-gray-700 my-6" />

                <h2 className="text-xl font-bold text-white mb-4">⏰ Chain of Events (11:00 AM – 12:30 PM | 1.5 Hours)</h2>
                <div className="space-y-4 mb-6">
                  <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-blue-400 mb-2">11:00 – 11:15 → Question Selection</h3>
                    <p className="text-gray-300 mb-2">Each team receives 3 levels of questions in cards:</p>
                    <ul className="text-gray-300 space-y-1 ml-4 mb-2">
                      <li>• <span className="text-green-400">Easy = 1 credit</span></li>
                      <li>• <span className="text-yellow-400">Medium = 2 credits</span></li>
                      <li>• <span className="text-red-400">Hard = 3 credits</span></li>
                    </ul>
                    <p className="text-gray-300">Teams must select questions totaling <strong>6 credits</strong>.</p>
                    <p className="text-orange-400 text-sm mt-2"><strong>Note:</strong> A maximum of 3 questions can be chosen from the Easy level.</p>
                  </div>

                  <div className="bg-purple-900/20 border border-purple-700/30 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-purple-400 mb-2">11:15 – 11:45 → Question Explanation</h3>
                    <p className="text-gray-300">One teammate explains the chosen question <strong>without showing the card</strong> to the other teammate, who must start coding based only on the explanation.</p>
                  </div>

                  <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-green-400 mb-2">11:45 – 12:20 → Collaborative Coding</h3>
                    <p className="text-gray-300">Both teammates can now work together to complete the solution.</p>
                  </div>

                  <div className="bg-orange-900/20 border border-orange-700/30 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-orange-400 mb-2">12:20 – 12:30 → Final Evaluation</h3>
                    <p className="text-gray-300">Judges will conclude the scoring process, and teams will be dismissed for lunch.</p>
                  </div>
                </div>

                <hr className="border-gray-700 my-6" />

                <h2 className="text-xl font-bold text-white mb-4">🏆 Evaluation Criteria</h2>
                <ul className="text-gray-300 space-y-1 mb-6">
                  <li>• All solutions will be back tested with hidden test cases on <strong>HackerEarth</strong></li>
                  <li>• Final judgment will be made by the panel of judges</li>
                  <li>• Finishing the solution within the given time while meeting requirements</li>
                </ul>

                <hr className="border-gray-700 my-6" />

                <h2 className="text-xl font-bold text-white mb-4">📝 Rules & Guidelines</h2>
                <ul className="text-gray-300 space-y-1 mb-6">
                  <li>✔ Participants must use <strong>IDLE or offline compilers only</strong></li>
                  <li>✔ <strong>No internet usage</strong> is allowed during the event</li>
                  <li>✔ <strong>Teamwork and originality</strong> are essential</li>
                  <li>✔ Teams must strategically choose questions to total exactly 6 credits</li>
                  <li>✔ Communication skills are crucial during the explanation phase</li>
                </ul>

                <hr className="border-gray-700 my-6" />

                <h2 className="text-xl font-bold text-white mb-4">🎁 Prize Distribution</h2>
                <p className="text-gray-300 mb-4">
                  After lunch, all participants will gather at Apple Hall where winners will be announced and prizes distributed.
                </p>
                <ul className="text-gray-300 space-y-1 mb-6">
                  <li>• Cash prizes for top 3 teams</li>
                  <li>• Certificates for all participants</li>
                  <li>• Special recognition for best team communication</li>
                  <li>• Networking opportunities with coding professionals</li>
                </ul>

                <hr className="border-gray-700 my-6" />

                <h2 className="text-xl font-bold text-white mb-4">🏫 About AIRO 5.0</h2>
                <p className="text-gray-300 mb-6">
                  <strong>AIRO </strong> is the flagship technical event of Sri Sairam Engineering College. Now in its 5th edition, AIRO brings together students, researchers, and industry professionals to explore the latest innovations in AI, technology, and design. Join us in shaping the future of technology through innovation and collaboration.
                </p>

                <hr className="border-gray-700 my-6" />

                <h2 className="text-xl font-bold text-white mb-4">📞 Contact Information</h2>
                <p className="text-gray-300 mb-4">For any queries or support:</p>
                <ul className="text-gray-300 space-y-1">
                  <li>📧 Email: <a href="mailto:airo@sairam.edu.in" className="text-blue-400 hover:underline">airo@sairam.edu.in</a></li>
                  <li>📱 Phone: +91 98765 43210</li>
                  <li>🌐 Website: <a href="#" className="text-blue-400 hover:underline">www.sairam.edu.in/airo</a></li>
                </ul>
              </div>
            </div>

            {/* Location */}
            <div className="glass-card rounded-xl p-6 mb-8">
              <h2 className="text-sm font-medium text-gray-400 mb-6 border-b border-gray-700 pb-2">Location</h2>
              
              <div className="relative rounded-xl overflow-hidden">
                <div className="lg:flex items-stretch overflow-hidden">
                  <div className="lg:w-1/3 bg-gray-800/50 p-6 z-10 text-white">
                    <h3 className="text-lg font-medium mb-3 text-cyan-400">Venue Details</h3>
                    <div className="space-y-2 text-gray-300">
                      <p className="font-medium">Sri Sairam Engineering College</p>
                      <p className="text-sm text-gray-400">
                        West Tambaram, Chennai - 600044<br />
                        Tamil Nadu, India
                      </p>
                    </div>
                    
                    <div className="mt-6">
                      <a
                        href="https://maps.google.com/?q=Sri+Sairam+Engineering+College+Chennai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full py-3 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium transition-all duration-300"
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        Get Directions
                      </a>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3 h-[400px] lg:h-auto relative">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.181780386284!2d80.05483217484118!3d12.960217087354076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f596c7fb72c9%3A0x8e7a30529f9ef227!2sSri%20Sairam%20Engineering%20College!5e0!3m2!1sen!2sin!4v1742156150816!5m2!1sen!2sin" 
                      className="absolute inset-0 w-full h-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Sidebar Cards */}
            <div className="lg:hidden space-y-6">
              
              
              {/* Event Co-ordinator Card */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-sm font-medium text-gray-400 mb-4">Event Co-ordinator</h3>
                <div className="space-y-3">
                  {hosts.map((host, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      {generateAvatar(host.name)}
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-white truncate">{host.name}</p>
                      </div>
                      {host.twitter && (
                        <a 
                          href={`${host.twitter}`} 
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

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors">
                  Contact the Host
                </button>
              </div>

              {/* Category Tag */}
              <div className="flex justify-center">
                <span className="inline-flex items-center px-3 py-1 bg-cyan-600/20 text-cyan-400 rounded-full text-sm">
                  <span className="mr-2">#</span>
                  Code & Bid
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
                <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
                <span className="text-xl font-bold">AIRO</span>
              </div>
              <div className="hidden md:flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Events</a>
                <a href="#" className="hover:text-white transition-colors">About</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="mailto:airo@sairam.edu.in" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              Code. Crack. Conquer at AIRO 5.0 – Code & Bid Challenge!
            </p>
          </div>
        </div>
      </footer>

      {/* Guest List Modal */}
    </div>
  );
};

export default Airocodebid;
