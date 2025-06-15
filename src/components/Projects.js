import {
  ArrowRight,
  BookOpen,
  Calendar,
  ChevronDown,
  ChevronUp,
  Clipboard,
  Code,
  Database,
  ExternalLink,
  Eye,
  Folder,
  Github,
  Globe,
  Search,
  Server,
  Star,
  Youtube
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import news from '../images/React news.png';
import dental from '../images/bg15.jpg';
import expense from '../images/expense.png';
import urls from '../images/image.png';
import note from '../images/inotebook.png';
import meme from '../images/memes.png';
import text from '../images/textconverter.png';
// Mock images for demo

const Image = urls
const Image1 = note;
const Image2 = news; 
const Image3 =text;
const Image4 =dental;
const Image5 = expense;
const Image6 = meme;

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('projects');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsVisible(true);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
      imageAlt: "Dental Clinic System dashboard interface",
      shortDescription: "Comprehensive clinic management system for patient records, appointments, and billing.",
      fullDescription: "The Dental Clinic Management System (DCMS) is a complete solution for dental practices featuring patient management, appointment scheduling, treatment tracking, and billing. Built with Java (JSP/Servlets) for backend logic, MySQL for database management, and Bootstrap for responsive frontend design. Includes modules for inventory management, staff scheduling, and reporting.",
      projectUrl: "https://vzcwvq.csb.app/Loginhtml.html",
      githubUrl: "https://github.com/h-hritik/dental-clinic",
      videoUrl: null,
      technologies: ["Java", "JSP", "Servlets", "MySQL", "Bootstrap"],
      category: "Full Stack",
      status: "Completed",
      difficulty: "Advanced",
      featured: true,
      year: 2024,
      color: "from-blue-400 to-cyan-600",
      icon: <Server className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Text Converter",
      image: Image3,
      imageAlt: "Text manipulation application interface",
      shortDescription: "Web tool for text transformation including case conversion and styling.",
      fullDescription: "A lightweight React application that provides various text manipulation functions including uppercase/lowercase conversion, text coloring, copy-to-clipboard, and word/character counting. Features a clean, responsive interface with real-time preview of changes and the ability to download transformed text.",
      projectUrl: "https://text-converter-rouge.vercel.app/",
      githubUrl: "https://github.com/h-hritik/text-converter",
      videoUrl: null,
      technologies: ["React", "JavaScript", "CSS"],
      category: "Frontend",
      status: "Completed",
      difficulty: "Beginner",
      featured: false,
      year: 2023,
      color: "from-yellow-400 to-amber-600",
      icon: <Clipboard className="w-6 h-6" />
    },
    {
      id: 3,
      title: "React News App",
      image: Image2,
      imageAlt: "News aggregator application interface",
      shortDescription: "Real-time news aggregator with category filtering.",
      fullDescription: "News application that fetches current articles from multiple sources using NewsAPI. Features include category filtering (business, entertainment, health, science, sports, technology), search functionality, infinite scrolling, and bookmarking. Built with React hooks and styled with Bootstrap for responsive design.",
      projectUrl: "https://react-news-aihjjuth9-hritik-mauryas-projects.vercel.app/",
      githubUrl: "https://github.com/h-hritik/react-news",
      videoUrl: "https://youtu.be/3IhKph7uQsA",
      technologies: ["React", "RESTful APIs", "JavaScript", "Bootstrap"],
      category: "Frontend",
      status: "Completed",
      difficulty: "Intermediate",
      featured: true,
      year: 2024,
      color: "from-red-400 to-pink-600",
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: 4,
      title: "iNoteBook App",
      image: Image1,
      imageAlt: "Note-taking application interface",
      shortDescription: "Cloud-based note-taking application with CRUD operations.",
      fullDescription: "Full-stack note-taking application with user authentication (JWT), rich text editing, tagging system, and cloud synchronization. The MERN stack application features a responsive design, offline capabilities using service workers, and the ability to export notes in multiple formats. Includes search functionality and organizational folders.",
      projectUrl: "https://i-note-book-app-nine.vercel.app/",
      githubUrl: "https://github.com/h-hritik/inotebook",
      videoUrl: "https://youtu.be/CAA6FCr8zhk",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      category: "Full Stack",
      status: "Completed",
      difficulty: "Advanced",
      featured: true,
      year: 2024,
      color: "from-emerald-400 to-teal-600",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      id: 5,
      title: "ShortenURL App",
      image: Image,
      imageAlt: "URL shortening service interface",
      shortDescription: "URL shortening service with analytics.",
      fullDescription: "Complete URL shortening solution that converts long URLs into short, memorable links. Features include custom alias creation, click analytics, QR code generation, and link expiration settings. Built with Node.js/Express backend, MongoDB for data storage, and React for the frontend. Includes user accounts with dashboard for link management.",
      projectUrl: "https://text-converter-rouge.vercel.app/",
      githubUrl: "https://github.com/h-hritik/shortenurl",
      videoUrl: "https://youtu.be/P2CLQvy1pw8",
      technologies: ["Node.js", "Express", "MongoDB", "React"],
      category: "Full Stack",
      status: "Completed",
      difficulty: "Intermediate",
      featured: false,
      year: 2023,
      color: "from-purple-400 to-indigo-600",
      icon: <Database className="w-6 h-6" />
    },
    {
      id: 6,
      title: "ExpenseTracker App",
      image: Image5,
      imageAlt: "Personal finance tracker interface",
      shortDescription: "Comprehensive personal finance management tool.",
      fullDescription: "Full-featured expense tracking application with budgeting tools, spending analytics, and financial reporting. Features include multi-account support, recurring transactions, receipt scanning (via image upload), and data export. Visualizations powered by Chart.js provide insights into spending patterns. Built with MERN stack and secured with JWT authentication.",
      projectUrl: "https://expense-tracker-h5tm-qbdk6xr4c-hritik-mauryas-projects.vercel.app/",
      githubUrl: "https://github.com/h-hritik/expense-tracker",
      videoUrl: null,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
      category: "Full Stack",
      status: "Completed",
      difficulty: "Advanced",
      featured: true,
      year: 2024,
      color: "from-green-400 to-emerald-600",
      icon: <Database className="w-6 h-6" />
    },
    {
      id: 7,
      title: "Email Generator App",
      image: {},
      imageAlt: "Email template generator interface",
      shortDescription: "AI-assisted email composition tool with templates.",
      fullDescription: "Productivity application that helps users compose professional emails quickly. Features include template management, AI-powered content suggestions, tone adjustment, and email scheduling. The application integrates with popular email services and includes analytics for open/click rates. Built with React frontend and Node.js backend with MongoDB for template storage.",
      projectUrl: "https://email-generator-demo.vercel.app/",
      githubUrl: "https://github.com/h-hritik/email-generator",
      videoUrl: null,
      technologies: ["React", "Node.js", "Express", "MongoDB", "AI Integration"],
      category: "Full Stack",
      status: "In Progress",
      difficulty: "Advanced",
      featured: false,
      year: 2024,
      color: "from-orange-400 to-red-600",
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 8,
      title: "Memes Website",
      image: Image6,
      imageAlt: "Meme sharing platform interface",
      shortDescription: "Social platform for creating and sharing memes.",
      fullDescription: "Interactive meme generator and sharing platform with user accounts, upvoting/downvoting, and commenting system. Features include drag-and-drop meme creation, template library, trending section, and social sharing. Built with React for the frontend and Firebase for backend services including authentication and real-time database.",
      projectUrl: "https://memes-website-fwm38il8l-hritik-mauryas-projects.vercel.app/",
      githubUrl: "https://github.com/h-hritik/memes-website",
      videoUrl: null,
      technologies: ["React", "Firebase", "CSS"],
      category: "Frontend",
      status: "Completed",
      difficulty: "Beginner",
      featured: false,
      year: 2023,
      color: "from-pink-400 to-purple-600",
      icon: <Code className="w-6 h-6" />
    }
  ];

  // Filter and search logic
  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];
  
  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = selectedFilter === 'All' || project.category === selectedFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="py-8 sm:py-12 md:py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header Section */}
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block p-2 sm:p-3 px-4 sm:px-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full mb-4 sm:mb-6 border border-indigo-100">
            <div className="flex items-center justify-center">
              <Folder className="w-4 sm:w-5 h-4 sm:h-5 text-indigo-600 mr-2" />
              <span className="text-indigo-800 font-semibold text-xs sm:text-sm">Portfolio Showcase</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6">
            Featured Projects
          </h2>
          <div className="h-1 w-20 sm:w-24 md:w-32 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences through innovative web applications and software solutions
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100">
            <div className="text-xl sm:text-2xl font-bold text-indigo-600">{projectsData.length}</div>
            <div className="text-xs sm:text-sm text-gray-600">Projects</div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100">
            <div className="text-xl sm:text-2xl font-bold text-emerald-600">{projectsData.filter(p => p.status === 'Completed').length}</div>
            <div className="text-xs sm:text-sm text-gray-600">Completed</div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100">
            <div className="text-xl sm:text-2xl font-bold text-purple-600">{projectsData.filter(p => p.featured).length}</div>
            <div className="text-xs sm:text-sm text-gray-600">Featured</div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100">
            <div className="text-xl sm:text-2xl font-bold text-orange-600">{new Set(projectsData.flatMap(p => p.technologies)).size}</div>
            <div className="text-xs sm:text-sm text-gray-600">Technologies</div>
          </div>
        </div>

        {/* Controls Section */}
        <div className={`mb-6 sm:mb-8 md:mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full sm:w-64 md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/70 backdrop-blur-sm text-sm sm:text-base"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 justify-center sm:justify-end w-full sm:w-auto mt-2 sm:mt-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedFilter(category)}
                  className={`px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-lg sm:rounded-xl font-medium transition-all duration-300 text-xs sm:text-sm ${
                    selectedFilter === category
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md sm:shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-indigo-50 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-16'} group`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`
                rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 ease-out
                ${hoveredCard === project.id ? 'sm:transform sm:scale-105 shadow-lg sm:shadow-xl shadow-indigo-200/50' : 'shadow-md hover:shadow-lg'}
                bg-white border border-gray-100 hover:border-indigo-200
                ${project.featured ? 'ring-1 sm:ring-2 ring-indigo-100' : ''}
              `}>
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-semibold flex items-center">
                      <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" fill="currentColor" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Project Image */}
                <div className="relative overflow-hidden h-40 sm:h-48 md:h-56">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`}></div>
                  <img 
                    src={project.image} 
                    alt={project.imageAlt}
                    className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105 sm:group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Icons */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-3 sm:translate-y-4 group-hover:translate-y-0">
                    <div className="flex space-x-1 sm:space-x-2">
                      <div className="p-1.5 sm:p-2 bg-white/90 backdrop-blur-sm rounded-md sm:rounded-lg">
                        <div className={`bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                          {React.cloneElement(project.icon, { className: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Status and Year */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex gap-1 sm:gap-2">
                    <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full text-[10px] sm:text-xs font-medium flex items-center">
                      <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                      {project.year}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-6">
                  {/* Category and Difficulty */}
                  <div className="flex justify-between items-center mb-2 sm:mb-4">
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                    <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
                      {project.difficulty}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                    {expandedProject === project.id ? project.fullDescription : project.shortDescription}
                  </p>
                  
                  {project.shortDescription !== project.fullDescription && (
                    <button 
                      onClick={() => toggleReadMore(project.id)}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 text-xs sm:text-sm font-medium mb-3 sm:mb-4 group/btn"
                    >
                      {expandedProject === project.id ? (
                        <>Read Less <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover/btn:transform group-hover/btn:-translate-y-0.5 transition-transform" /></>
                      ) : (
                        <>Read More <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover/btn:transform group-hover/btn:translate-y-0.5 transition-transform" /></>
                      )}
                    </button>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 sm:px-3 py-0.5 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-medium rounded-md sm:rounded-lg transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <div className="flex gap-2 sm:gap-3">
                      <a 
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center py-2 sm:py-3 px-3 sm:px-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs sm:text-sm font-medium rounded-lg sm:rounded-xl transition-all hover:shadow-md hover:scale-[1.02] sm:hover:scale-105 group/btn"
                      >
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        View Live
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover/btn:translate-x-0.5 sm:group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                      
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 sm:p-3 border border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-800 rounded-lg sm:rounded-xl transition-all hover:scale-[1.02] sm:hover:scale-105"
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                    </div>

                    {project.videoUrl && (
                      <a 
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center py-1.5 sm:py-2 px-3 sm:px-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs sm:text-sm font-medium rounded-lg sm:rounded-xl transition-all hover:shadow-md hover:scale-[1.02] sm:hover:scale-105"
                      >
                        <Youtube className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Watch Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Search className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-1 sm:mb-2">No projects found</h3>
            <p className="text-gray-500 text-sm sm:text-base">Try adjusting your search or filter criteria</p>
          </div>
        )}
        
        {/* GitHub CTA */}
        <div className={`text-center mt-12 sm:mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
          <div className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Explore More Projects</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Discover additional projects, open-source contributions, and code experiments on my GitHub profile
            </p>
            <a 
              href="https://github.com/h-hritik/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center py-3 sm:py-4 px-6 sm:px-8 bg-white text-gray-900 font-semibold rounded-lg sm:rounded-xl transition-all hover:bg-gray-100 hover:scale-[1.02] sm:hover:scale-105 group"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              Visit GitHub
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-0.5 sm:group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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
          animation: fadeIn 0.8s ease forwards;
        }
        
        .animate-slide-up {
          animation: slideUp 0.6s ease forwards;
        }
        
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
        }
      `}</style>
    </section>
  );
}

export default Projects;