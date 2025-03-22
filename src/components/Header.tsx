import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from './assets/logo.png'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black/80 backdrop-blur-sm sticky top-0 z-50 border-b border-red-900/30">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <div className="flex items-center gap-4">
        {/* College logo placeholder */}
        <div className="w-[72px] h-12 rounded-full flex items-center justify-center overflow-hidden">
          <img src={logo} alt="College Logo" className="w-full h-full object-cover object-center" />
        </div>
        <h1 className="text-xl md:text-2xl font-bold">
          <a href="/" className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
            Hacktronix 1.0
          </a>
        </h1>
      </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-red-900/30">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <NavLinks mobile setIsMenuOpen={setIsMenuOpen} />
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  setIsMenuOpen?: (value: boolean) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ mobile = false, setIsMenuOpen }) => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Domain', href: '/Domain' },
    { name: 'Timeline', href: '/#timeline' },
    { name: 'Team', href: '/Team' },
    { name: 'Guidelines', href: '/Guidelines' },
    { name: 'Results', href: '/Results' },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`${mobile
            ? 'block py-2 px-4 hover:bg-red-900/20 rounded transition-colors'
            : 'text-gray-300 hover:text-white transition-colors relative group'
            }`}
          onClick={() => mobile && setIsMenuOpen && setIsMenuOpen(false)} 
        >
          {link.name}
          {!mobile && (
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
          )}
        </a>
      ))}
    </>
  );
};

export default Header;
