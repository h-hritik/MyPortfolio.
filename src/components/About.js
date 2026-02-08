import { Award, BookOpen, Calendar, Code, Download, ExternalLink, Heart, Mail, MapPin, Phone, Sparkles, User } from 'lucide-react';
import { useEffect, useState } from 'react';

// Using cloud-hosted image from ImgBB
const img = 'https://i.ibb.co/dsXsDYkd/pass02.jpg';

// Using cloud-hosted resume
const resume = 'https://i.ibb.co/TMCWhczF/Resume2026update.png';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [animatedStats, setAnimatedStats] = useState({ projects: 0, experience: 0, skills: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [openResumeModal, setOpenResumeModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Animate stats
    const animateStats = () => {
      const targets = { projects: 15, experience: 1, skills: 10 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      
      let current = { projects: 0, experience: 0, skills: 0 };
      
      const timer = setInterval(() => {
        current.projects = Math.min(current.projects + targets.projects / steps, targets.projects);
        current.experience = Math.min(current.experience + targets.experience / steps, targets.experience);
        current.skills = Math.min(current.skills + targets.skills / steps, targets.skills);
        
        setAnimatedStats({
          projects: Math.floor(current.projects),
          experience: Math.floor(current.experience),
          skills: Math.floor(current.skills)
        });
        
        if (current.projects >= targets.projects && 
            current.experience >= targets.experience && 
            current.skills >= targets.skills) {
          clearInterval(timer);
        }
      }, stepTime);
    };
    
    setTimeout(animateStats, 500);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'MsSQL', level: 80, color: '#2563eb', category: 'Database' },
    { name: 'JavaScript', level: 65, color: '#eab308', category: 'Language' },
    { name: 'Node.js', level: 65, color: '#16a34a', category: 'Backend' },
    { name: 'React', level: 60, color: '#0ea5e9', category: 'Frontend' },
    { name: 'MongoDB', level: 50, color: '#059669', category: 'Database' },
    { name: 'C++', level: 60, color: '#dc2626', category: 'Language' },
   // { name: 'Next.js', level: 50, color: '#000000', category: 'Framework' },
    { name: 'UI/UX Design', level: 50, color: '#ec4899', category: 'Design' },
    {name: 'Excel',level: 50, color: '#ec4899'}, {name: 'Power BI',level: 50, color: '#ec4899'}
    ,
  ];



  const SkillBar = ({ skill }) => {
    const [width, setWidth] = useState(0);
    
    useEffect(() => {
      const timer = setTimeout(() => setWidth(skill.level), 1000);
      return () => clearTimeout(timer);
    }, [skill.level]);

    return (
      <div className="group mb-6 p-4 rounded-xl bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-md">
        <div className="flex justify-between items-center mb-3">
          <div>
            <span className="text-base font-semibold text-gray-900">{skill.name}</span>
            <span className="ml-2 text-xs text-gray-500 uppercase tracking-wide">{skill.category}</span>
          </div>
          <span className="text-sm font-bold text-gray-700">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div 
            className="h-full rounded-full transition-all duration-1000 ease-out relative"
            style={{ 
              width: `${width}%`,
              backgroundColor: skill.color
            }}
          >
            <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
          </div>
        </div>
      </div>
    );
  };

  const TabButton = ({ tab, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`flex items-center px-4 sm:px-6 py-3 rounded-full transition-all duration-300 text-sm sm:text-base font-medium whitespace-nowrap ${
        activeTab === tab
          ? 'bg-gray-900 text-white shadow-lg'
          : 'bg-white text-gray-600 hover:bg-gray-100 hover:shadow-md border border-gray-200'
      }`}
    >
      <Icon className="w-4 h-4 mr-2" />
      {label}
    </button>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 sm:w-64 sm:h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute top-40 right-10 w-32 h-32 sm:w-64 sm:h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-32 h-32 sm:w-64 sm:h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-4000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-6xl mx-auto">
              {/* Modern Card Layout */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Left Side - Profile Image */}
                  <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 p-8 sm:p-10 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl border-4 border-white/20 shadow-2xl overflow-hidden bg-gray-700 mx-auto mb-6 transform hover:scale-105 transition-transform duration-500">
                        {img ? (
                          <img src={img} alt="Hritik Maurya" className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-6xl text-gray-400 font-bold">HM</div>
                        )}
                      </div>
                      
                      <div className="space-y-2 text-white">
                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Hritik Maurya</h1>
                        <p className="text-lg sm:text-xl text-gray-300 font-light">MSQL Developer</p>
                        <p className="text-base text-gray-400">Mern Stack developer</p>
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center gap-4 mt-6">
                        <a href="https://github.com/h-hritik" target="_blank" rel="noopener noreferrer" 
                           className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110">
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                        <a href="https://linkedin.com/in/hrithik-maurya-792995253" target="_blank" rel="noopener noreferrer"
                           className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110">
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Side - Content */}
                  <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10">
                    <div className="flex items-start gap-3 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gray-900 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                          Building Digital Excellence
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                          I'm passionate about creating innovative web solutions and optimizing database performance. 
                          With expertise in modern web technologies and database management, I deliver high-quality, 
                          scalable applications that drive business success.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                      <p className="text-base text-gray-700 leading-relaxed">
                        Currently working as a <span className="font-semibold text-gray-900">SQL Developer at Uni Design Jewellery</span>, 
                        I love exploring cutting-edge technologies and building efficient, user-centric digital experiences.
                      </p>
                    </div>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="text-center bg-blue-50 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                        <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">{animatedStats.projects}+</div>
                        <div className="text-xs sm:text-sm text-gray-600 font-medium">Projects</div>
                      </div>
                      <div className="text-center bg-purple-50 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                        <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-1">{animatedStats.experience}+</div>
                        <div className="text-xs sm:text-sm text-gray-600 font-medium">Year Exp</div>
                      </div>
                      <div className="text-center bg-pink-50 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                        <div className="text-3xl sm:text-4xl font-bold text-pink-600 mb-1">{animatedStats.skills}+</div>
                        <div className="text-xs sm:text-sm text-gray-600 font-medium">Tech Stack</div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button 
                        onClick={() => setOpenResumeModal(true)}
                        className="flex items-center justify-center px-6 py-3.5 bg-gray-900 text-white font-semibold rounded-xl shadow-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                      >
                        <User className="w-5 h-5 mr-2" />
                        View Resume
                      </button>
                    
                      <a 
                        href={resume}
                        download="Hritik_Maurya_Resume.png"
                        className="flex items-center justify-center px-6 py-3.5 bg-white text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-2 border-gray-900"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download Resume
                      </a>

                      <a 
                        href="mailto:hrithikm247@gmail.com"
                        className="flex items-center justify-center px-6 py-3.5 bg-white text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-2 border-gray-200"
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Get In Touch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            <TabButton tab="overview" label="Overview" icon={User} />
            <TabButton tab="experience" label="Experience" icon={Code} />
            <TabButton tab="skills" label="Skills" icon={Award} />
            <TabButton tab="achievements" label="Achievements" icon={BookOpen} />
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">About Me</h2>
                  <div className="w-16 h-1 bg-gray-900 mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Personal Info */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-4">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Info</h3>
                    <div className="space-y-2.5 text-gray-700">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 flex-shrink-0 text-blue-600" />
                        <span className="text-sm">Bhandup, Mumbai, India</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 flex-shrink-0 text-blue-600" />
                        <span className="text-sm">09324544634</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 flex-shrink-0 text-blue-600" />
                        <span className="text-sm break-all">hrithikm247@gmail.com</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Education */}
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mb-4">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Education</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-2">
                      <span className="font-semibold block mb-1">B.Sc. Information Technology</span>
                      SM Shetty Degree College
                    </p>
                    <p className="text-gray-600 text-xs">
                      Mumbai University | 2021-2024
                    </p>
                  </div>
                  
                  {/* Interests */}
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
                    <div className="w-12 h-12 rounded-xl bg-pink-600 flex items-center justify-center mb-4">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Interests & Hobbies</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      Database optimization, Full-stack development, UI/UX design
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Chess', 'Cricket', 'Cycling', 'Cooking'].map((hobby, i) => (
                        <span key={i} className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700">
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Languages */}
                <div className="mt-8 bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Languages</h3>
                  <div className="flex flex-wrap gap-3">
                    {['English', 'Hindi', 'Marathi'].map((lang, i) => (
                      <span key={i} className="px-4 py-2 bg-white rounded-xl text-sm font-medium text-gray-700 shadow-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <div className="space-y-8">
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Professional Journey</h2>
                  <div className="w-16 h-1 bg-gray-900 mx-auto rounded-full"></div>
                </div>
                
                <div className="space-y-6">
                  {/* Current Position */}
                  <div className="relative pl-8 sm:pl-12">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                    <div className="absolute left-0 top-2 w-4 h-4 bg-blue-600 rounded-full -translate-x-1.5 ring-4 ring-white"></div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                        <div className="flex-1">
                          <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-3">
                            CURRENT POSITION
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">SQL Developer</h3>
                          <p className="text-base sm:text-lg text-gray-700 font-medium mt-1">Uni Design Jewellery Pvt. Ltd.</p>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 bg-white px-3 py-2 rounded-lg">
                          <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span>May 2025 – Present</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-4">SEEPZ, Andheri (E), Mumbai</p>
                      
                      <div className="bg-white rounded-xl p-5 border border-blue-100">
                        <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Managing jewellery business data on MS SQL Server including sales, inventory, and vendor information</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Writing and optimizing complex SQL queries, joins, and stored procedures for business operations</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Creating comprehensive MIS and analytical reports for business tracking and decision-making</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Supporting data validation, analysis, and database migration projects</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Collaborating with cross-functional teams to deliver actionable insights</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Training Program */}
                  <div className="relative pl-8 sm:pl-12">
                    <div className="absolute left-0 top-2 w-4 h-4 bg-purple-600 rounded-full -translate-x-1.5 ring-4 ring-white"></div>
                    
                    <div className="bg-gradient-to-br from-purple-50 to-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Web Development Training</h3>
                          <p className="text-base sm:text-lg text-gray-700 font-medium mt-1">SPTC Company</p>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 bg-white px-3 py-2 rounded-lg">
                          <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span>Oct 2024 – Dec 2024</span>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl p-5 border border-purple-100">
                        <p className="text-sm sm:text-base text-gray-700">
                          Intensive 3-month training program focused on front-end development, SQL queries, and C programming 
                          with daily assignments and hands-on projects.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Internships */}
                  <div className="relative pl-8 sm:pl-12">
                    <div className="absolute left-0 top-2 w-4 h-4 bg-green-600 rounded-full -translate-x-1.5 ring-4 ring-white"></div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-green-100">
                      <div className="space-y-6">
                        {/* TechMandala */}
                        <div>
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                            <div>
                              <h3 className="text-lg sm:text-xl font-bold text-gray-900">Full Stack Developer Intern</h3>
                              <p className="text-base text-gray-700 font-medium">TechMandala Solutions LLP</p>
                            </div>
                            <div className="flex items-center text-sm text-gray-600 bg-white px-3 py-2 rounded-lg">
                              <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                              <span>April 2025</span>
                            </div>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700 ml-4">
                            <li className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              <span>Contributed to full-stack development using MERN stack</span>
                            </li>
                            <li className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              <span>Gained hands-on experience in Node.js, React.js, MongoDB, and Express.js</span>
                            </li>
                          </ul>
                        </div>

                        <div className="border-t border-green-200 pt-6">
                          {/* Prodigy Info Tech */}
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                            <div>
                              <h3 className="text-lg sm:text-xl font-bold text-gray-900">Full Stack Developer Intern</h3>
                              <p className="text-base text-gray-700 font-medium">Prodigy Info Tech</p>
                            </div>
                            <div className="flex items-center text-sm text-gray-600 bg-white px-3 py-2 rounded-lg">
                              <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                              <span>Mar – Apr 2025</span>
                            </div>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700 ml-4">
                            <li className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              <span>Worked on MERN stack projects using React, Node.js, MongoDB, and Express</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div className="space-y-8">
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Technical Expertise</h2>
                  <div className="w-16 h-1 bg-gray-900 mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {skills.slice(0, 4).map((skill, index) => (
                      <SkillBar key={index} skill={skill} />
                    ))}
                  </div>
                  <div className="space-y-4">
                    {skills.slice(4).map((skill, index) => (
                      <SkillBar key={index + 4} skill={skill} />
                    ))}
                  </div>
                </div>
                
                {/* Skill Categories */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-2xl">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Databases</h3>
                    <div className="flex flex-wrap gap-2">
                      {['MS SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB'].map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 bg-white text-gray-700 rounded-lg text-sm font-medium shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-2xl">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'].map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 bg-white text-gray-700 rounded-lg text-sm font-medium shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-2xl">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Backend & Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'Express.js', 'Git', 'GitHub', 'Postman', 'REST APIs'].map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 bg-white text-gray-700 rounded-lg text-sm font-medium shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="mt-8 bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Professional Certifications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { name: 'JavaScript', date: 'July 2024' },
                      { name: 'React', date: 'July 2024' },
                      { name: 'MySQL', date: '2024' },
                      { name: 'C++', date: '2024' }
                    ].map((cert, i) => (
                      <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                        <p className="font-semibold text-gray-900">{cert.name} Certification</p>
                        <p className="text-sm text-gray-600">Simplilearn • {cert.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div className="space-y-8">
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Achievements & Recognition</h2>
                  <div className="w-16 h-1 bg-gray-900 mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-yellow-200">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-6">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">IT Quiz Champion</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Winner of the IT Quiz competition, demonstrating strong technical knowledge and 
                      problem-solving abilities across various computer science topics.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-green-200">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-6">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Top 10% Coder</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Ranked among the top 10% of 500+ participants in a highly competitive coding contest, 
                      showcasing advanced problem-solving and algorithmic skills.
                    </p>
                  </div>
                </div>

                {/* Projects Showcase */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Featured Projects</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">iNoteBook</h4>
                      <p className="text-sm text-gray-600 mb-4">Full-stack note-keeping application with user authentication and real-time updates</p>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'Node.js', 'MongoDB'].map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-purple-400 transition-all duration-300 hover:shadow-lg">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">React News</h4>
                      <p className="text-sm text-gray-600 mb-4">Dynamic news website displaying articles from various categories using APIs</p>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'APIs', 'JavaScript'].map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              I'm always excited to collaborate on innovative projects and tackle new challenges. 
              Let's turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:hrithikm247@gmail.com" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Mail className="w-5 h-5 mr-2" />
                Start a Conversation
              </a>
              <button
                onClick={() => setOpenResumeModal(true)}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                <User className="w-5 h-5 mr-2" />
                View Resume
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {openResumeModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl p-4 sm:p-6 max-w-4xl w-full relative my-8 shadow-2xl">
            <button
              className="absolute top-2 right-2 sm:top-4 sm:right-4 w-10 h-10 flex items-center justify-center bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 text-xl font-bold shadow-lg z-10"
              onClick={() => setOpenResumeModal(false)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="mt-8 sm:mt-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Resume - Hritik Maurya</h3>
              <div className="border-2 border-gray-200 rounded-xl overflow-hidden">
                <img
                  src={resume}
                  alt="Hritik Maurya Resume"
                  className="w-full h-auto"
                />
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href={resume}
                  download="Hritik_Maurya_Resume.png"
                  className="flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl shadow-lg hover:bg-gray-800 transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
                <button
                  onClick={() => setOpenResumeModal(false)}
                  className="flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-900 hover:bg-gray-50 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;