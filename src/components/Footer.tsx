import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import sponsor from './assets/sponsor.jpg'

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    if (path.startsWith('/#')) {
      // Handle anchor links
      const hash = path.substring(1); // Remove the leading '/'
      navigate('/' + hash);
    } else {
      // Handle regular navigation
      navigate(path);
    }
  };

  return (
    <footer className="backdrop-blur-sm border-t border-chart-2/20 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white font-avartar tracking-wider">AIRO 5.O</h3>
              <p className="text-gray-400 mb-4">
                A 24-hour hackathon exploring the upside-down world of technology.
              </p>
              <div className="flex gap-4">
                <SocialIcon icon={<Twitter size={18} />} />
                <SocialIcon icon={<Instagram size={18} />} />
                <SocialIcon icon={<Linkedin size={18} />} />
                <SocialIcon icon={<Github size={18} />} />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
              <div className="flex gap-8">
                <div>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <button onClick={() => handleNavigation("/")} className="hover:text-chart-2 transition-colors text-left">
                        Home
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleNavigation("/domain")} className="hover:text-chart-2 transition-colors text-left">
                        Domains
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleNavigation("/#timeline")} className="hover:text-chart-2 transition-colors text-left">
                        Timeline
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleNavigation("/guidelines")} className="hover:text-chart-2 transition-colors text-left">
                        Guidelines
                      </button>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <button onClick={() => handleNavigation("/#events")} className="hover:text-chart-2 transition-colors text-left">
                        Events
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleNavigation("/team")} className="hover:text-chart-2 transition-colors text-left">
                        Team
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleNavigation("/results")} className="hover:text-chart-2 transition-colors text-left">
                        Result
                      </button>
                    </li>                    
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Sponsors</h3>
              <div className="grid grid-cols-3 gap-4">
                <SponsorLogo name="RM Group Of Compnies" />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
            <p>© 2025 AIRO 5.O | Sri Sairam Engineering College</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => (
  <a
    href="#"
    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-chart-2 hover:text-white transition-all"
  >
    {icon}
  </a>
);

interface SponsorLogoProps {
  name: string;
}

const SponsorLogo: React.FC<SponsorLogoProps> = ({ name }) => (
  <div className="flex items-center space-x-4">
    <img
      src={sponsor}
      alt="sponsorlogo"
      className="bg-gray-800/50 rounded flex items-center justify-center h-20 w-32"
    />
    <p>{name}</p>
  </div>

);

export default Footer;
