import { ArrowRight, Code, Github, Home, Linkedin, Mail, Phone, Twitter, User } from 'lucide-react';
import React from 'react';
import Image5 from "../images/expense.png";
import Image from '../images/pass03.jpg';
import Image3 from "../images/textconverter.png";
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md fixed w-full top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-bold text-xl text-blue-600">HM</span>
            <span className="font-medium text-gray-800 ml-2">Hritik Maurya</span>
          </div>
          
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              <li><a href="/home" className="text-gray-800 hover:text-blue-600 font-medium transition duration-300">Home</a></li>
              <li><a href="/about" className="text-gray-800 hover:text-blue-600 font-medium transition duration-300">About</a></li>
              <li><a href="/projects" className="text-gray-800 hover:text-blue-600 font-medium transition duration-300">Projects</a></li>
              <li><a href="/contact" className="text-gray-800 hover:text-blue-600 font-medium transition duration-300">Contact</a></li>
            </ul>
          </nav>
          
          <div className="md:hidden">
            <button className="p-2 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                Welcome to My <span className="text-blue-600">Portfolio</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Hi, I'm Hritik Maurya, a passionate developer creating innovative solutions. Explore my work and get to know more about me!
              </p>
              <div className="flex space-x-4">
                <a href="/projects" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300 flex items-center">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="/contact" className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition duration-300 flex items-center">
                  Contact Me <Mail className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-600 rounded-full overflow-hidden shadow-xl">
                  <img 
                    src={Image} 
                    alt="Hritik Maurya" 
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'top' }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Code className="text-blue-600 h-5 w-5" />
                    <span className="font-bold text-gray-800">Web Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/5 mb-10 md:mb-0">
              <div className="relative">
                <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                  <img src="/about.jpg" alt="About Me" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-blue-600 w-32 h-32 rounded-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="font-bold text-2xl">2+</div>
                    <div className="text-sm">Years of Experience</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5 md:pl-16">
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">About Me</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                A Passionate Web Developer
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                I am a dedicated web developer with expertise in React, JavaScript, and backend technologies. I enjoy building innovative and
                user-friendly applications that solve real-world problems.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                When I am not coding, I enjoy learning new technologies and improving my skills. I believe in writing clean, efficient code and creating
                seamless user experiences.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-2">
                  <ChevronRight className="text-blue-600 h-5 w-5" />
                  <span className="text-gray-700">React.js</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ChevronRight className="text-blue-600 h-5 w-5" />
                  <span className="text-gray-700">JavaScript</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ChevronRight className="text-blue-600 h-5 w-5" />
                  <span className="text-gray-700">Node.js</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ChevronRight className="text-blue-600 h-5 w-5" />
                  <span className="text-gray-700">MongoDB</span>
                </div>
              </div>
              
              <a href="/projects" className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg shadow-md hover:bg-gray-900 transition duration-300 inline-flex items-center">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block p-2 px-6 bg-indigo-50 rounded-full mb-4">
              <div className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <span className="text-indigo-800 font-semibold text-sm">Portfolio Showcase</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Projects
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-400 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-lg mx-auto">
              A collection of web applications and software solutions I've developed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
         
            
            {/* Project Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 opacity-20"></div>
                <img src={Image3} alt="Text Converter" className="w-full h-full object-cover transition duration-700 transform hover:scale-105" />
                <div className="absolute top-4 left-4 p-2 rounded-lg bg-white shadow-md">
                  <Code className="w-6 h-6 text-gradient bg-gradient-to-r from-purple-400 to-pink-600" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Text Converter</h3>
                <p className="text-gray-600 mb-4">A versatile text transformation tool with multiple formatting options and real-time preview.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-medium">React</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-medium">Tailwind</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-medium">JavaScript</span>
                </div>
                <a href="https://text-converter-rouge.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-purple-600 font-medium hover:text-purple-800 transition duration-300 flex items-center">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            
            {/* Project Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-600 opacity-20"></div>
                <img src={Image5} alt="Expense Tracker" className="w-full h-full object-cover transition duration-700 transform hover:scale-105" />
                <div className="absolute top-4 left-4 p-2 rounded-lg bg-white shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gradient bg-gradient-to-r from-orange-400 to-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Expense Tracker</h3>
                <p className="text-gray-600 mb-4">A comprehensive expense management application with analytics and budget tracking features.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-medium">React</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-medium">Node.js</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-medium">MongoDB</span>
                </div>
                <a href="https://expense-tracker-h5tm-qbdk6xr4c-hritik-mauryas-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-medium hover:text-orange-800 transition duration-300 flex items-center">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold mb-4 relative inline-block">
                About Me
                <span className="absolute -bottom-1 left-0 w-16 h-1 bg-blue-600"></span>
              </h3>
              <p className="text-gray-300 mb-6">
                Hi, I'm Hritik Maurya, a passionate web developer dedicated to building user-friendly and innovative applications. Let's connect and collaborate!
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/h-hritik/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition duration-300">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/hrithik-maurya-792995253/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition duration-300">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://x.com/MauryaHrit18109" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition duration-300">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 relative inline-block">
                Quick Links
                <span className="absolute -bottom-1 left-0 w-16 h-1 bg-blue-600"></span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/home" className="text-gray-300 hover:text-white transition duration-300 flex items-center">
                    <Home className="h-4 w-4 mr-2" /> Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white transition duration-300 flex items-center">
                    <User className="h-4 w-4 mr-2" /> About
                  </a>
                </li>
                <li>
                  <a href="/projects" className="text-gray-300 hover:text-white transition duration-300 flex items-center">
                    <Code className="h-4 w-4 mr-2" /> Projects
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-white transition duration-300 flex items-center">
                    <Mail className="h-4 w-4 mr-2" /> Contact
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 relative inline-block">
                Contact Info
                <span className="absolute -bottom-1 left-0 w-16 h-1 bg-blue-600"></span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-1 text-blue-400" />
                  <span className="text-gray-300">hrithikm247@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-1 text-blue-400" />
                  <span className="text-gray-300">+91 9324544634</span>
                </li>
                <li className="flex items-start">
                  <Linkedin className="h-5 w-5 mr-3 mt-1 text-blue-400" />
                  <span className="text-gray-300">linkedin.com/in/hrithik-maurya-792995253</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 Hritik Maurya. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a href="/" className="text-gray-400 hover:text-white transition duration-300 mx-2">Privacy Policy</a>
              <a href="/" className="text-gray-400 hover:text-white transition duration-300 mx-2">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;