import { Award, BookOpen, ChevronRight, FolderOpen, Home, Mail, Menu, User, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Navigation links data
  const navLinks = [
    { path: '/', name: 'Home', icon: <Home className="w-4 h-4" /> },
    { path: '/About', name: 'About', icon: <User className="w-4 h-4" /> },
    { path: '/Education', name: 'Education', icon: <BookOpen className="w-4 h-4" /> },
    { path: '/Projects', name: 'Projects', icon: <FolderOpen className="w-4 h-4" /> },
    { path: '/Certification', name: 'Certifications', icon: <Award className="w-4 h-4" /> },
    { path: '/Contact', name: 'Contact', icon: <Mail className="w-4 h-4" /> }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 bg-gray-900 shadow-lg' 
          : 'py-4 bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
          >
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mr-3 shadow-md">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <div>
              <span className="font-bold text-xl text-white">Hritik</span>
              <span className="text-gray-300 hidden sm:inline">.Portfolio</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  px-4 py-2 mx-1 rounded-lg transition-all duration-300 flex items-center
                  ${location.pathname === link.path
                    ? 'bg-indigo-600 text-white font-medium'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }
                `}
              >
                <span className="mr-1.5">{link.icon}</span>
                {link.name}
                {location.pathname === link.path && (
                  <div className="ml-1 h-1.5 w-1.5 rounded-full bg-white"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-200 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`
            lg:hidden fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out
            ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
          style={{ top: '60px' }}
        >
          <div className="flex flex-col h-full pt-8 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  py-4 px-4 mb-2 rounded-lg flex items-center justify-between transition-all
                  ${location.pathname === link.path
                    ? 'bg-indigo-600/20 border-l-4 border-indigo-600 text-white font-medium'
                    : 'text-gray-300 border-l-4 border-transparent'
                  }
                `}
              >
                <div className="flex items-center">
                  <span className="mr-3">{link.icon}</span>
                  <span className="text-lg">{link.name}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </Link>
            ))}
            
            <div className="mt-auto mb-8 px-4 py-6 bg-gradient-to-r from-gray-800 to-gray-800/50 rounded-lg">
              <div className="flex flex-col items-center text-center">
                <p className="text-gray-400 mb-3">Need a developer for your project?</p>
                <Link
                  to="/Contact"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg transition-all hover:shadow-lg"
                >
                  Get in Touch
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress indicator for scrolling */}
      {scrolled && (
        <div className="h-0.5 bg-gray-800 w-full absolute bottom-0 left-0">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
            style={{ 
              width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` 
            }}
          ></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;