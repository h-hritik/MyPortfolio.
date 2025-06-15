import { AlertCircle, CheckCircle, Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Valid email is required';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSuccessMessage('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements - Reduced size on mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 sm:w-72 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-40 h-40 sm:w-72 sm:h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-40 h-40 sm:w-72 sm:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>
      
      {/* Floating Particles - Reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hidden sm:block absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-30 animate-ping"></div>
        <div className="hidden sm:block absolute top-3/4 right-1/3 w-1 h-1 bg-purple-300 rounded-full opacity-40 animate-ping animation-delay-1000"></div>
        <div className="hidden sm:block absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-30 animate-ping animation-delay-3000"></div>
      </div>

      <section className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header - Adjusted for mobile */}
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
                Let's Connect
              </h2>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>
            </div>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              Ready to bring your vision to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Form - Full width on mobile */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-white/20 shadow-xl sm:shadow-2xl">
                <div className="flex items-center mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                    <Send className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Send a Message</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label className="block text-gray-200 font-medium text-xs sm:text-sm uppercase tracking-wide">
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          className={`w-full px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/5 border-2 ${
                            formErrors.name ? 'border-red-400' : 'border-white/20'
                          } focus:border-purple-400 focus:outline-none text-white placeholder-gray-400 transition-all duration-300 backdrop-blur-sm`}
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                        />
                        {formErrors.name && (
                          <p className="text-red-400 text-xs sm:text-sm mt-1 sm:mt-2 flex items-center">
                            <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                            {formErrors.name}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-gray-200 font-medium text-xs sm:text-sm uppercase tracking-wide">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          className={`w-full px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/5 border-2 ${
                            formErrors.email ? 'border-red-400' : 'border-white/20'
                          } focus:border-purple-400 focus:outline-none text-white placeholder-gray-400 transition-all duration-300 backdrop-blur-sm`}
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                        />
                        {formErrors.email && (
                          <p className="text-red-400 text-xs sm:text-sm mt-1 sm:mt-2 flex items-center">
                            <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                            {formErrors.email}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-gray-200 font-medium text-xs sm:text-sm uppercase tracking-wide">
                      Your Message
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        className={`w-full px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/5 border-2 ${
                          formErrors.message ? 'border-red-400' : 'border-white/20'
                        } focus:border-purple-400 focus:outline-none text-white placeholder-gray-400 transition-all duration-300 backdrop-blur-sm resize-none`}
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, ideas, or just say hello..."
                      ></textarea>
                      {formErrors.message && (
                        <p className="text-red-400 text-xs sm:text-sm mt-1 sm:mt-2 flex items-center">
                          <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          {formErrors.message}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className={`w-full py-3 sm:py-4 px-6 sm:px-8 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl sm:hover:shadow-2xl transform hover:scale-[1.02] sm:hover:scale-105 flex items-center justify-center ${
                      loading ? 'opacity-75 cursor-not-allowed scale-100' : ''
                    }`}
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="text-sm sm:text-base">Sending Message...</span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        <span className="text-sm sm:text-base">Send Message</span>
                      </div>
                    )}
                  </button>
                </form>
                
                {successMessage && (
                  <div className="mt-4 sm:mt-6 bg-green-500/20 border border-green-400/30 text-green-300 px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl flex items-start backdrop-blur-sm text-sm sm:text-base">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span>{successMessage}</span>
                  </div>
                )}
                
                {errorMessage && (
                  <div className="mt-4 sm:mt-6 bg-red-500/20 border border-red-400/30 text-red-300 px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl flex items-start backdrop-blur-sm text-sm sm:text-base">
                    <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Contact Information - Stacked on mobile */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {/* Contact Details Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 shadow-xl sm:shadow-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  Get in Touch
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="group cursor-pointer">
                    <div className="flex items-start p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-white/5 transition-all duration-300">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                        <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Email</h4>
                        <a href="mailto:hrithikm247@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-xs sm:text-sm">
                          hrithikm247@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group cursor-pointer">
                    <div className="flex items-start p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-white/5 transition-all duration-300">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                        <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Phone</h4>
                        <a href="tel:+919324544634" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm">
                          +91 9324544634
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group cursor-pointer">
                    <div className="flex items-start p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-white/5 transition-all duration-300">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                        <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">LinkedIn</h4>
                        <a href="https://www.linkedin.com/in/hrithik-maurya-792995253/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-xs sm:text-sm">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group cursor-pointer">
                    <div className="flex items-start p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-white/5 transition-all duration-300">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-pink-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Location</h4>
                        <span className="text-gray-300 text-xs sm:text-sm">Mumbai, Maharashtra, IN</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 shadow-xl sm:shadow-2xl">
                <h4 className="font-semibold text-white mb-4 sm:mb-6 text-center text-sm sm:text-base">Follow Me</h4>
                <div className="flex justify-center space-x-3 sm:space-x-4">
                  <a href="https://github.com/h-hritik" target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg sm:rounded-xl flex items-center justify-center hover:scale-105 sm:hover:scale-110 hover:shadow-md sm:hover:shadow-lg transition-all duration-300 group">
                    <Github className="h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg sm:rounded-xl flex items-center justify-center hover:scale-105 sm:hover:scale-110 hover:shadow-md sm:hover:shadow-lg transition-all duration-300 group">
                    <Instagram className="h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg sm:rounded-xl flex items-center justify-center hover:scale-105 sm:hover:scale-110 hover:shadow-md sm:hover:shadow-lg transition-all duration-300 group">
                    <Facebook className="h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                </div>
              </div>
              
              {/* Quick Response Card */}
              <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-purple-400/30 shadow-xl sm:shadow-2xl">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <CheckCircle className="h-5 w-5 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-white mb-1 sm:mb-2 text-sm sm:text-base">Quick Response</h4>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    I typically respond within 24 hours. For urgent inquiries, please call directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;