import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

const Header: React.FC = () => {
  const [isDark, setIsDark] = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProgramDropdownOpen, setIsProgramDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setIsProgramDropdownOpen(false);
    }
  };

  const programItems = [
    { href: '#program', label: 'Four-Tier Structure' },
    { href: '#core-elements', label: 'Core Elements' },
    { href: '#community', label: 'Community & Networking' },
    { href: '#track-record', label: 'Track Record' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-black/95 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-black dark:text-white" />
            <span className="text-2xl font-bold text-black dark:text-white">
              LAUNCH COUTURE
            </span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('#home')}
              className="text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            >
              Home
            </button>
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsProgramDropdownOpen(true)}
              onMouseLeave={() => setIsProgramDropdownOpen(false)}
            >
              <button
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              >
                <span>Program</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProgramDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                isProgramDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="w-64 bg-white dark:bg-black rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 overflow-hidden">
                  {programItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('#mission')}
              className="text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection('#industry')}
              className="text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            >
              Industry
            </button>

            <button
              onClick={() => scrollToSection('#haute-vine')}
              className="text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            >
              Haute & Vine
            </button>

            <button
              onClick={() => scrollToSection('#apply')}
              className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200"
            >
              Apply
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-white" />
              ) : (
                <Moon className="h-5 w-5 text-black" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-black dark:text-white" />
              ) : (
                <Menu className="h-6 w-6 text-black dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-2 pt-4">
              <button
                onClick={() => scrollToSection('#home')}
                className="text-left py-2 text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('#mission')}
                className="text-left py-2 text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('#industry')}
                className="text-left py-2 text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              >
                Industry
              </button>
              <button
                onClick={() => scrollToSection('#program')}
                className="text-left py-2 text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              >
                Four-Tier Program
              </button>
              <button
                onClick={() => scrollToSection('#core-elements')}
                className="text-left py-2 text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              >
                Core Elements
              </button>
              <button
                onClick={() => scrollToSection('#community')}
                className="text-left py-2 text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              >
                Community & Networking
              </button>
              <button
                onClick={() => scrollToSection('#track-record')}
                className="text-left py-2 text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              >
                Track Record
              </button>
              <button
                onClick={() => scrollToSection('#haute-vine')}
                className="text-left py-2 text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              >
                Haute & Vine
              </button>
              <button
                onClick={() => scrollToSection('#apply')}
                className="text-left py-2 text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              >
                Apply
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;