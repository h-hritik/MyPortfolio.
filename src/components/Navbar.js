import {
  ArrowRight,
  Award,
  BookOpen,
  ChevronRight,
  Code,
  ExternalLink,
  FolderOpen,
  Home,
  Mail,
  Menu,
  User,
  X
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredLink, setHoveredLink] = useState(null);
  const navRef = useRef(null);
  
  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);
      
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? Math.min((scrollPosition / totalHeight) * 100, 100) : 0;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Navigation links data
  const navLinks = [
    { 
      path: '/', 
      name: 'Home', 
      icon: <Home className="w-4 h-4" />,
      description: 'Welcome page'
    },
    { 
      path: '/about', 
      name: 'About', 
      icon: <User className="w-4 h-4" />,
      description: 'My story'
    },
    { 
      path: '/education', 
      name: 'Education', 
      icon: <BookOpen className="w-4 h-4" />,
      description: 'Academic journey'
    },
    { 
      path: '/projects', 
      name: 'Projects', 
      icon: <FolderOpen className="w-4 h-4" />,
      description: 'My work'
    },
    { 
      path: '/certification', 
      name: 'Certifications', 
      icon: <Award className="w-4 h-4" />,
      description: 'Achievements'
    },
    { 
      path: '/contact', 
      name: 'Contact', 
      icon: <Mail className="w-4 h-4" />,
      description: 'Get in touch'
    }
  ];

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 bg-slate-900/90 backdrop-blur-md shadow-lg' 
          : 'py-4 bg-transparent'
      }`}
    >
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 h-0.5 w-full bg-slate-800/30">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-violet-600 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="group flex items-center focus:outline-none"
            aria-label="Home"
          >
            <div className="relative h-10 w-10 rounded-lg overflow-hidden mr-3 transition-all duration-300 group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600"></div>
              <div className="relative h-full w-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="font-bold text-lg sm:text-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">Hritik</span>
                <span className="text-blue-400 text-lg sm:text-xl font-light">.</span>
              </div>
              <div className="h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-in-out"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  group relative px-3 py-2 mx-1 rounded-lg transition-all duration-200 flex items-center overflow-hidden
                  ${location.pathname === link.path
                    ? 'text-white font-medium' 
                    : 'text-gray-300 hover:text-white'
                  }
                `}
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
                aria-current={location.pathname === link.path ? 'page' : undefined}
              >
                {location.pathname === link.path && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-lg"></div>
                )}
                
                <div 
                  className={`absolute inset-0 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-lg opacity-0 transition-opacity duration-200 ${
                    hoveredLink === index && location.pathname !== link.path ? 'opacity-100' : 'opacity-0'
                  }`}
                ></div>
                
                <div className="relative flex items-center z-10">
                  <span className="mr-2">{link.icon}</span>
                  <span>{link.name}</span>
                  
                  {location.pathname === link.path && (
                    <div className="ml-1.5 h-1.5 w-1.5 rounded-full bg-white/80"></div>
                  )}
                </div>
                
                <div 
                  className={`
                    absolute bottom-0 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-800 text-xs text-gray-300 rounded whitespace-nowrap
                    transition-all duration-200 pointer-events-none
                    ${hoveredLink === index ? 'opacity-100 translate-y-8' : 'opacity-0 translate-y-6'}
                  `}
                >
                  {link.description}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
                </div>
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="ml-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 flex items-center group"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden relative w-10 h-10 rounded-lg flex items-center justify-center text-gray-200 hover:bg-slate-800/50 focus:outline-none z-50 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <div className="relative">
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`
          lg:hidden fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-lg transition-all duration-300 ease-in-out overflow-hidden
          ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}
        `}
        style={{ top: scrolled ? '64px' : '80px' }}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col h-full pt-4 px-4 pb-8 overflow-y-auto">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  py-3 px-4 rounded-lg flex items-center justify-between transition-colors duration-200
                  ${location.pathname === link.path
                    ? 'bg-blue-900/30 text-white font-medium'
                    : 'text-gray-300 hover:bg-slate-800/50 active:bg-slate-800/70'
                  }
                `}
              >
                <div className="flex items-center">
                  <div className={`
                    mr-3 p-2 rounded-lg
                    ${location.pathname === link.path
                      ? 'bg-blue-500/20 text-blue-300'
                      : 'bg-slate-800/50 text-gray-400'
                    }
                  `}>
                    {link.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-medium">{link.name}</span>
                    <span className="text-xs text-gray-500">{link.description}</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </Link>
            ))}
          </div>
          
          {/* Mobile CTA section */}
          <div className="mt-auto pt-6">
            <div className="w-full h-px bg-slate-800 my-6"></div>
            
            <div className="px-4 py-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-3">
                  <Code className="w-5 h-5 text-blue-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">Need a developer?</h3>
                <p className="text-gray-400 mb-4 text-sm">Let's collaborate on your next project</p>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
                >
                  <span>Get in Touch</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
            
            {/* Social links */}
            <div className="flex justify-center mt-6 space-x-4">
              {[
                { name: 'github', icon: 'fab fa-github' },
                { name: 'linkedin', icon: 'fab fa-linkedin-in' },
                { name: 'twitter', icon: 'fab fa-twitter' },
                { name: 'instagram', icon: 'fab fa-instagram' }
              ].map((platform) => (
                <a
                  key={platform.name}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800/80 flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700 transition-colors duration-200"
                  aria-label={platform.name}
                >
                  <i className={platform.icon}></i>
                </a>
              ))}
            </div>
            
            {/* Copyright */}
            <div className="text-center mt-6 text-xs text-gray-500">
              © {new Date().getFullYear()} Hritik. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;