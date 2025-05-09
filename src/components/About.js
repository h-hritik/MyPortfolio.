import React, { useEffect, useState } from 'react';
import res2 from "../documents/Hritik-Maurya-FlowCV-Resume-20250424 (1).pdf";
import Image from "../images/pass02.JPG";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-16">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
          <defs>
            <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-blue-500" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 relative inline-block">
              About Me
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-500 transform scale-x-100"></div>
            </h1>
          </div>
          
          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Profile Image Side */}
              <div className="md:w-2/5 bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full border-4 border-white shadow-lg overflow-hidden">
                    <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                      <img src={Image} alt="profile" className='w-auto h-full object-cover' />
                    </div>
                  </div>
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-yellow-400 opacity-70"></div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-blue-300 opacity-70"></div>
                </div>
              </div>
              
              {/* Text Content Side */}
              <div className="md:w-3/5 p-8 md:p-12">
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800">Hi, I'm Hritik</h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 italic mb-6 leading-relaxed">
                    I'm passionate about web development and enjoy creating intuitive and dynamic web experiences.
                  </p>
                  
                  <p className="text-lg text-gray-600 italic leading-relaxed">
                    I love to explore the latest web technologies and continuously improve my skills to deliver high-quality projects. Let's build something amazing together!
                  </p>
                </div>
                
                {/* Skills Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">My Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">JavaScript</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Next.js</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Node.js</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">CSS/SCSS</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">MongoDB</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">MySQL</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">UI/UX Design</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Responsive Design</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">J2EE</span>
                  </div>
                </div>
                
                {/* Download Resume Button */}
                <div className="mt-8">
                  <a 
                    href={res2}
                    download 
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Experience Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center relative">
              Professional Experience
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500"></div>
            </h2>

            <div className="space-y-8">
              {/* TechMandala Solutions */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">TechMandala Solutions LLP</h3>
                  <span className="text-blue-600 font-medium">04/2025 – Present</span>
                </div>
                <div className="pl-2 border-l-4 border-blue-500">
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Contributed to full-stack development using MERN stack</li>
                    <li>Gained hands-on experience in Node.js, React.js, MongoDB, Express.js</li>
                    <li>Developed and maintained RESTful APIs</li>
                    <li>Collaborated with team members using Git version control</li>
                  </ul>
                </div>
              </div>

              {/* Prodigy Info Tech */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">Prodigy Info Tech</h3>
                  <span className="text-blue-600 font-medium">03/2025 – 04/2025</span>
                </div>
                <div className="pl-2 border-l-4 border-blue-500">
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Contributed to full-stack development using MERN stack and Next.js</li>
                    <li>Gained hands-on experience in Node.js, React.js, MongoDB, Express.js, and Next.js</li>
                    <li>Implemented server-side rendering for improved performance</li>
                  </ul>
                </div>
              </div>

              {/* Training Program */}
              {/* <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">3 Month Training Program - SPTC Company</h3>
                  <span className="text-blue-600 font-medium">10/2024 – 12/2024</span>
                </div>
                <div className="pl-2 border-l-4 border-blue-500">
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Focused on front-end development, SQL Queries, and C programs</li>
                    <li>Completed daily assignments and projects to strengthen skills</li>
                    <li>Built responsive web interfaces with HTML, CSS, and JavaScript</li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center relative">
              Achievements
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500"></div>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Winner of IT Quiz Competition</h3>
                </div>
                <p className="text-gray-600 pl-14">Demonstrated extensive knowledge in information technology concepts and current trends.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Top % in Coding Contest</h3>
                </div>
                <p className="text-gray-600 pl-14">Ranked among the top participants in a competitive coding challenge against numerous competitors.</p>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Education */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Education</h3>
              <p className="text-gray-600">
                Bachelor's degree in Computer Science with focus on web technologies and software development.
              </p>
            </div>
            
            {/* Interests */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Interests</h3>
              <p className="text-gray-600">
                Web development, UI/UX design, emerging technologies, and continuous learning.
              </p>
            </div>
            
            {/* Contact */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Contact</h3>
              <p className="text-gray-600">
                Available for opportunities and collaborations. Feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;