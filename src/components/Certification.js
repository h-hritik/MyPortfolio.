import { Award, Code, Database, Download, FileCode } from 'lucide-react';
import React, { useEffect, useState } from 'react';

function Certification() {
  const [isVisible, setIsVisible] = useState(false);
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
    
    const section = document.getElementById('certifications');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Certificate data
  const certifications = [
    {
      id: 1,
      title: "JavaScript",
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-400",
      hoverColor: "hover:shadow-yellow-200",
      icon: <FileCode className="w-12 h-12 text-yellow-500" />,
      description: "Advanced JavaScript concepts including ES6+, DOM manipulation, and asynchronous programming.",
      url: "https://simpli-web.app.link/e/BuUL4FR4OOb",
      issuer: "Simplilearn",
      date: "2023"
    },
    {
      id: 2,
      title: "React",
      color: "from-blue-400 to-cyan-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-400",
      hoverColor: "hover:shadow-blue-200",
      icon: <Code className="w-12 h-12 text-blue-500" />,
      description: "Component architecture, React hooks, state management, and modern React application development.",
      url: "https://simpli-web.app.link/e/1VN9VAG4OOb",
      issuer: "Simplilearn",
      date: "2023"
    },
    {
      id: 3,
      title: "C++",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-400",
      hoverColor: "hover:shadow-purple-200",
      icon: <Code className="w-12 h-12 text-purple-500" />,
      description: "Object-oriented programming principles, memory management, data structures, and algorithms in C++.",
      url: "https://simpli-web.app.link/e/jxZLVKL4OOb",
      issuer: "Simplilearn",
      date: "2022"
    },
    {
      id: 4,
      title: "MySQL",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-400",
      hoverColor: "hover:shadow-green-200",
      icon: <Database className="w-12 h-12 text-green-500" />,
      description: "Database design, SQL queries, optimization techniques, and database administration fundamentals.",
      url: "https://simpli-web.app.link/e/3CBQgmI4OOb",
      issuer: "Simplilearn",
      date: "2022"
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block p-2 px-6 bg-blue-50 rounded-full mb-4">
            <div className="flex items-center justify-center">
              <Award className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-800 font-semibold text-sm">Professional Development</span>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Certifications</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Industry-recognized credentials validating expertise across key technologies and development platforms
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id}
              className={`${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(cert.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`
                h-full rounded-xl overflow-hidden border-2 ${cert.borderColor} 
                transition-all duration-500 ${cert.hoverColor}
                ${hoveredCard === cert.id ? 'shadow-2xl scale-105' : 'shadow-lg'}
                ${cert.bgColor}
              `}>
                <div className="p-1">
                  <div className={`h-3 w-full bg-gradient-to-r ${cert.color} rounded-t-lg`}></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-lg bg-white shadow-md">
                      {cert.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-500">{cert.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Issued by <span className="font-medium">{cert.issuer}</span>
                  </p>
                  <p className="text-gray-600 text-sm mb-6">
                    {cert.description}
                  </p>
                  <a 
                    href={cert.url}
                    className={`
                      inline-flex items-center justify-center w-full py-3 px-4 
                      rounded-lg text-white font-medium transition-all duration-300
                      bg-gradient-to-r ${cert.color} 
                      hover:opacity-90 hover:shadow-md
                    `}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
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
      `}</style>
    </section>
  );
}

export default Certification;