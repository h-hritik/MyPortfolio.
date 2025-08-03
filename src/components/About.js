import { Award, BookOpen, Calendar, Code, Download, Heart, Mail, MapPin, Phone, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import resume from '../documents/resumeUpdated.pdf';
import img from '../images/pass02.JPG';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [animatedStats, setAnimatedStats] = useState({ projects: 0, experience: 0, skills: 0 });

  useEffect(() => {
    setIsVisible(true);
    
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
  }, []);

  const skills = [
    { name: 'React', level: 60, color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', level: 75, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Node.js', level: 75, color: 'from-green-500 to-green-600' },
    { name: 'SQL', level: 90, color: 'from-purple-500 to-purple-600' },
    { name: 'MongoDB', level: 65, color: 'from-emerald-500 to-emerald-600' },
    { name: 'Next.js', level: 50, color: 'from-gray-700 to-gray-800' },
    { name: 'UI/UX Design', level: 70, color: 'from-pink-500 to-pink-600' },
    { name: 'C++', level: 82, color: 'from-orange-500 to-orange-600' }
    //{ name: 'C', level: 80, color: 'from-yellow-500 to-yellow-600' }
  ];

  const SkillBar = ({ skill }) => {
    const [width, setWidth] = useState(0);
    
    useEffect(() => {
      const timer = setTimeout(() => setWidth(skill.level), 1000);
      return () => clearTimeout(timer);
    }, [skill.level]);

    return (
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
          <span className="text-sm text-gray-500">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
            style={{ width: `${width}%` }}
          />
        </div>
      </div>
    );
  };

  const TabButton = ({ tab, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
        activeTab === tab
          ? 'bg-blue-600 text-white shadow-lg transform scale-105'
          : 'bg-white text-gray-600 hover:bg-gray-50 hover:shadow'
      }`}
    >
      <Icon className="w-4 h-4 mr-2" />
      {label}
    </button>
  );

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-16">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Profile Image Side */}
                  <div className="lg:w-2/5 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10">
                      <div className="w-72 h-72 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gray-200 flex items-center justify-center">
                        {img ? (
                          <img src={img} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                          <div className="text-6xl text-gray-400">H</div>
                        )}
                      </div>
                      <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-yellow-400 opacity-80 animate-bounce"></div>
                      <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-blue-300 opacity-80 animate-bounce animation-delay-1000"></div>
                      <div className="absolute top-1/2 -right-6 w-8 h-8 rounded-full bg-pink-300 opacity-80 animate-bounce animation-delay-2000"></div>
                    </div>
                  </div>
                  
                  {/* Text Content Side */}
                  <div className="lg:w-3/5 p-8 lg:p-12">
                    <div className="mb-8">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mr-4 shadow-lg">
                          <User className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
                            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Hritik</span>
                          </h1>
                          <p className="text-xl text-gray-600">Full Stack Developer & SQL Expert</p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        I'm passionate about creating innovative web solutions and optimizing database performance. 
                        With expertise in modern web technologies and database management, I deliver high-quality, 
                        scalable applications that drive business success.
                      </p>
                      
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Currently working as a SQL Developer, I love exploring cutting-edge technologies and 
                        building efficient, user-centric digital experiences. Let's collaborate to bring your 
                        ideas to life!
                      </p>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">{animatedStats.projects}+</div>
                        <div className="text-gray-600">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600">{animatedStats.experience}+</div>
                        <div className="text-gray-600">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-pink-600">{animatedStats.skills}+</div>
                        <div className="text-gray-600">Technologies</div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <a 
                        href={resume} 
                        download="Hritik_Maurya_Resume.pdf"
                        className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download Resume
                      </a>
                    
                      <button 
                        onClick={() => window.location.href = 'mailto:your.email@example.com'}
                        className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Get In Touch
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <TabButton tab="overview" label="Overview" icon={User} />
            <TabButton tab="experience" label="Experience" icon={Code} />
            <TabButton tab="skills" label="Skills" icon={Award} />
            <TabButton tab="achievements" label="Achievements" icon={BookOpen} />
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div id="overview-content" className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Personal Info */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Personal Info</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>Mumbai, Maharashtra</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        <span>Available on request</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        <span>Available on request</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Education */}
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center mb-4">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Education</h3>
                    <p className="text-gray-600">
                      Bachelor's degree in Computer Science with specialization in web technologies, 
                      database management, and software development.
                    </p>
                  </div>
                  
                  {/* Interests */}
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mb-4">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Interests</h3>
                    <p className="text-gray-600">
                      Web development, database optimization, UI/UX design, emerging technologies, 
                      and continuous learning in the tech field.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <div id="experience-content" className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Professional Experience</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
                </div>
                
                <div className="space-y-8">
                  {/* UNI Design JEWELLERY PRIVATE LTD */}
                  <div className="relative">
                    <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-500 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ml-12">
                      <div className="absolute -left-2 top-8 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">INTERNSHIP - SQL Developer</h3>
                          <p className="text-lg text-gray-600 font-medium">UNI Design JEWELLERY PRIVATE LTD</p>
                        </div>
                        <div className="flex items-center text-blue-600 font-semibold">
                          <Calendar className="w-4 h-4 mr-2" />
                          05/2025 – Present | seepz Andheri(E), mumbai
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Working as an SQL Developer at Uni Design Jewellery Pvt. Ltd.</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Gaining hands-on experience in writing and optimizing SQL queries and stored procedures.</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Involved in report design and creation to support business decision-making.</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Collaborating with cross-functional teams for data analysis and reporting needs.</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Adapting quickly to new tools and continuously improving database skills.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* TechMandala Solutions */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ml-12">
                      <div className="absolute -left-2 top-8 w-4 h-4 bg-gradient-to-br from-green-500 to-blue-500 rounded-full"></div>
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">Full Stack Developer</h3>
                          <p className="text-lg text-gray-600 font-medium">TechMandala Solutions LLP</p>
                        </div>
                        <div className="flex items-center text-green-600 font-semibold">
                          <Calendar className="w-4 h-4 mr-2" />
                          04/2025 – 04/2025
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Contributed to full-stack development using MERN stack</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Gained hands-on experience in Node.js, React.js, MongoDB, Express.js</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Prodigy Info Tech */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ml-12">
                      <div className="absolute -left-2 top-8 w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">Full Stack Developer</h3>
                          <p className="text-lg text-gray-600 font-medium">Prodigy Info Tech</p>
                        </div>
                        <div className="flex items-center text-purple-600 font-semibold">
                          <Calendar className="w-4 h-4 mr-2" />
                          03/2025 – 04/2025
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Contributed to full-stack development using the MERN stack and Next.js</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Gained hands-on experience in Node.js, React.js, MongoDB, Express.js, and Next.js</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div id="skills-content" className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Technical Skills</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    {skills.slice(0, 4).map((skill, index) => (
                      <SkillBar key={index} skill={skill} />
                    ))}
                  </div>
                  <div className="space-y-6">
                    {skills.slice(4).map((skill, index) => (
                      <SkillBar key={index + 4} skill={skill} />
                    ))}
                  </div>
                </div>
                
                {/* Skill Tags */}
                <div className="mt-12">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">Technologies & Tools</h3>
                  <div className="flex flex-wrap gap-3">
                    {['React', 'JavaScript', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'MSSQL', 'Tailwind CSS', 'Github', 'UI/UX Design', 'Responsive Design', 'J2EE', 'REST APIs','C++'].map((tech, index) => (
                      <span key={index} className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div id="achievements-content" className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Achievements & Recognition</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  

                  <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center mb-6">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Top 10 % in Coding Contest</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Ranked among the 500 participants in a highly competitive coding challenge. 
                      Showcased problem-solving skills .
                    </p>
                  </div>

                

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center mb-6">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Ready to bring your ideas to life? I'm always excited to work on new projects and challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:your.email@example.com" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Mail className="w-5 h-5 mr-2" />
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;