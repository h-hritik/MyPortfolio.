import { Award, BookOpen, Building, Calendar, ChevronRight, GraduationCap } from 'lucide-react';
import React, { useEffect, useState } from 'react';

function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  
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
    
    const section = document.getElementById('education');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Education data
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Information Technology (BSC IT)",
      institution: "Mumbai University",
      college: "S.M. Shetty College (Powai)",
      website: "https://mu.ac.in/",
      period: "2021 - 2024",
      description: "Achieved a solid foundation in information technology and programming concepts, focusing on software development, database management, and network architecture.",
      achievement: "CGPI: 6.33",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-blue-400 to-indigo-600",
      lightColor: "bg-blue-50",
      borderColor: "border-blue-400",
      iconBg: "bg-blue-100"
    },
    {
      id: 2,
      degree: "Science",
      institution: "IDUBS College",
      college: "",
      website: null,
      period: "2019 - 2021",
      description: "Studied science and mathematics with a keen interest in technology, laying the groundwork for advanced studies in information technology.",
      achievement: "Result: 69%",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-purple-400 to-purple-600",
      lightColor: "bg-purple-50",
      borderColor: "border-purple-400",
      iconBg: "bg-purple-100"
    },
    {
      id: 3,
      degree: "High School",
      institution: "Saraswati English High School",
      college: "",
      website: null,
      period: "Until 2019",
      description: "Developed an interest in technology through science and mathematics, participating in various science exhibitions and technical projects.",
      achievement: "Result: 67%",
      icon: <Building className="w-8 h-8" />,
      color: "from-green-400 to-green-600",
      lightColor: "bg-green-50",
      borderColor: "border-green-400",
      iconBg: "bg-green-100"
    }
  ];

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block p-2 px-6 bg-indigo-50 rounded-full mb-4">
            <div className="flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-indigo-600 mr-2" />
              <span className="text-indigo-800 font-semibold text-sm">Academic Background</span>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education Journey</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-400 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building a strong foundation through formal education and continuous learning
          </p>
        </div>

        <div className="relative">
          {/* Timeline bar */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-300 to-blue-300 transform -translate-x-1/2 rounded-full"></div>
          
          {educationData.map((edu, index) => (
            <div 
              key={edu.id}
              className={`
                mb-12 lg:mb-0 relative
                ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}
              `}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveCard(edu.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Timeline dot */}
              <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-28 z-10">
                <div className={`
                  w-6 h-6 rounded-full border-4 border-white shadow-md
                  bg-gradient-to-r ${edu.color}
                `}></div>
              </div>

              <div className={`
                lg:w-5/12 
                ${index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8 lg:mt-64'}
              `}>
                <div className={`
                  rounded-xl overflow-hidden border-2 ${edu.borderColor}
                  transition-all duration-500 hover:shadow-xl
                  ${activeCard === edu.id ? 'shadow-lg transform scale-102' : 'shadow-md'}
                  ${edu.lightColor}
                `}>
                  <div className="p-1">
                    <div className={`h-2 w-full bg-gradient-to-r ${edu.color} rounded-t-lg`}></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg ${edu.iconBg} shadow-sm`}>
                        <div className="text-indigo-600">
                          {edu.icon}
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm font-medium">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mt-2 mb-1">
                      {edu.degree}
                    </h3>
                    
                    <div className="mb-4">
                      {edu.website ? (
                        <a 
                          href={edu.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:underline inline-flex items-center"
                        >
                          {edu.institution}
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </a>
                      ) : (
                        <span className="text-gray-700 font-medium">{edu.institution}</span>
                      )}
                      
                      {edu.college && (
                        <span className="text-gray-600 ml-1">
                          , {edu.college}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm">
                      {edu.description}
                    </p>
                    
                    <div className="flex items-center mt-4 px-4 py-2 bg-white rounded-lg shadow-sm">
                      <Award className="w-5 h-5 text-indigo-500 mr-2" />
                      <span className="text-gray-700 font-medium">{edu.achievement}</span>
                    </div>
                  </div>
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

        .scale-102 {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
}

export default Education;