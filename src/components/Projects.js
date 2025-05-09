import { BookOpen, ChevronDown, ChevronUp, Clipboard, Code, Database, Eye, Folder, Globe, Server, Youtube } from 'lucide-react';
import React, { useEffect, useState } from 'react';

import Image4 from "../images/bg15.jpg";
import Immage5 from "../images/expense.png";
import Image from "../images/image.png";
import Image1 from "../images/inotebook.png";
import Image2 from "../images/React news.png";
import Image3 from "../images/textconverter.png";
function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    const section = document.getElementById('projects');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const toggleReadMore = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  // Project data
  const projectsData = [
    {
      id: 1,
      title: "Dental Clinic System",
      image: Image4,
      imageAlt: "Dental Clinic System dashboard",
      shortDescription: "The Dental Clinic Management System (DCMS) is a robust software solution crafted using J2EE for frontend design, Bootstrap for responsive layout, Java (servlet, JSP) for backend logic, and MySQL for database management...",
      fullDescription: "The Dental Clinic Management System (DCMS) is a robust software solution crafted using java for frontend design, Bootstrap for responsive layout, Java (servlet, JSP) for backend logic, and MySQL for database management, providing a comprehensive suite of tools to manage patient information, appointments, treatments, billing, and administrative tasks seamlessly, taking feedback within a unified platform.",
      projectUrl: "https://vzcwvq.csb.app/Loginhtml.html",
      videoUrl: null,
      technologies: ["HTML/CSS", "Bootstrap", "Java", "JSP", "MySQL"],
      color: "from-blue-400 to-cyan-600",
      icon: <Server className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Text Converter",
      image: Image3,
      imageAlt: "Text Converter application",
      shortDescription: "Text converter - we can perform operations on text like uppercase, lowercase, color change. The application is built in React.",
      fullDescription: "Text converter - we can perform operations on text like uppercase, lowercase, color change. The application is built in React with a focus on simplicity and functionality.",
      projectUrl: "https://text-converter-rouge.vercel.app/",
      videoUrl: null,
      technologies: ["React", "JavaScript", "CSS"],
      color: "from-yellow-400 to-amber-600",
      icon: <Clipboard className="w-6 h-6" />
    },
    {
      id: 3,
      title: "React News App",
      image: Image2,
      imageAlt: "React News application",
      shortDescription: "The website fetches news with the help of APIs, and you can choose multiple fields like science, entertainment, general, sports, etc. The application is built in React.",
      fullDescription: "The website fetches news with the help of APIs, and you can choose multiple fields like science, entertainment, general, sports, etc. The application is built in React with real-time data integration.",
      projectUrl: "https://react-news-aihjjuth9-hritik-mauryas-projects.vercel.app/",
      videoUrl: "https://youtu.be/3IhKph7uQsA",
      technologies: ["React", "RESTful APIs", "JavaScript", "Bootstrap"],
      color: "from-red-400 to-pink-600",
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: 4,
      title: "iNoteBook App",
      image: Image1,
      imageAlt: "iNoteBook application",
      shortDescription: "iNoteBook - It is a web app to store notes and perform CRUD operations on notes.",
      fullDescription: "iNoteBook - A full-stack web application to store notes and perform CRUD operations. Features user authentication, real-time updates, and responsive design for all devices.",
      projectUrl: "https://i-note-book-app-nine.vercel.app/",
      videoUrl: "https://youtu.be/CAA6FCr8zhk",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      color: "from-emerald-400 to-teal-600",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      id: 5,
      title: "ShortenURL App",
      image:Image,
      imageAlt: "ShortenURL application",
      shortDescription: "ShortenURL - An application that generates short URLs and stores them in a database.",
      fullDescription: "ShortenURL - A full-stack application that generates shortened URLs and stores them in a database for easy access and sharing. Includes analytics for link clicks and user engagement.",
      projectUrl: "https://text-converter-rouge.vercel.app/",
      videoUrl: "https://youtu.be/P2CLQvy1pw8",
      technologies: ["Node.js", "Express", "MongoDB", "React"],
      color: "from-purple-400 to-indigo-600",
      icon: <Database className="w-6 h-6" />
    },
    {
      id: 6,
      title: "ExpenseTracker App",
      image: Immage5,
      imageAlt: "ExpenseTracker application",
      shortDescription: "ExpenseTracker - A comprehensive expense management application to track and analyze personal finances.",
      fullDescription: "ExpenseTracker - A full-stack application that helps users manage their personal finances by tracking expenses, categorizing transactions, generating reports, and visualizing spending patterns through interactive charts.",
      projectUrl: "https://expense-tracker-h5tm-qbdk6xr4c-hritik-mauryas-projects.vercel.app/",
      videoUrl: "https://youtu.be/expense-tracker-demo",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
      color: "from-green-400 to-emerald-600",
      // icon: <PieChart className="w-6 h-6" />
    },
    {
      id: 7,
      title: "Email Generator App",
  //    image:, // You'll need to import a new image for this
      imageAlt: "Email Generator application",
      shortDescription: "Email Generator - A powerful tool that helps create professional emails with customizable templates and smart suggestions.",
      fullDescription: "Email Generator - A full-stack application that helps users create professional emails quickly using customizable templates, smart suggestions, and AI-powered content recommendations. Features include template management, email scheduling, and analytics tracking.",
      projectUrl: "https://email-generator-demo.vercel.app/",
      videoUrl: "https://youtu.be/email-generator-demo",
      technologies: ["React", "Node.js", "Express", "MongoDB", "AI Integration"],
      color: "from-orange-400 to-red-600",
      // icon: <MailIcon className="w-6 h-6" />
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block p-2 px-6 bg-indigo-50 rounded-full mb-4">
            <div className="flex items-center justify-center">
              <Folder className="w-5 h-5 text-indigo-600 mr-2" />
              <span className="text-indigo-800 font-semibold text-sm">Portfolio Showcase</span>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of web applications and software solutions I've developed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={project.id}
              className={`${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`
                rounded-xl overflow-hidden shadow-lg transition-all duration-500
                ${hoveredCard === project.id ? 'transform scale-102 shadow-xl' : ''}
                bg-white border border-gray-100
              `}>
                {/* Project Image with Overlay */}
                <div className="relative overflow-hidden h-48">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20`}></div>
                  <img 
                    src={project.image} 
                    alt={project.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                    style={{
                      transform: hoveredCard === project.id ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                  <div className="absolute top-4 left-4 p-2 rounded-lg bg-white shadow-md">
                    <div className={`text-gradient bg-gradient-to-r ${project.color}`}>
                      {project.icon}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {expandedProject === project.id ? project.fullDescription : project.shortDescription}
                  </p>
                  
                  {project.shortDescription !== project.fullDescription && (
                    <button 
                      onClick={() => toggleReadMore(project.id)}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-medium mb-4"
                    >
                      {expandedProject === project.id ? (
                        <>Read Less <ChevronUp className="w-4 h-4 ml-1" /></>
                      ) : (
                        <>Read More <ChevronDown className="w-4 h-4 ml-1" /></>
                      )}
                    </button>
                  )}
                  
                  <div className="flex flex-col sm:flex-row gap-3 mt-2">
                    <a 
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center py-2 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg transition-all hover:shadow-md hover:opacity-90"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                    
                    {project.videoUrl && (
                      <a 
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center py-2 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-lg transition-all hover:shadow-md hover:opacity-90"
                      >
                        <Youtube className="w-4 h-4 mr-2" />
                        Watch Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          <a 
            href="https://github.com/h-hritik/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center py-3 px-6 bg-gray-900 text-white font-medium rounded-lg transition-all hover:bg-gray-800"
          >
            <Code className="w-5 h-5 mr-2" />
            View More Projects on GitHub
          </a>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease forwards;
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease forwards;
        }
        
        .scale-102 {
          transform: scale(1.02);
        }
        
        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
      `}</style>
    </section>
  );
}

export default Projects;