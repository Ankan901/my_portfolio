import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import profilePhoto from '../assets/1000134044.png';

const Hero = () => {
  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectsClick = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 animate-gradient bg-[length:400%_400%]"></div>
      
      {/* Animated Particles Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-4 inline-block lg:inline-block">
                <span className="px-4 py-2 rounded-full bg-purple-600/20 text-purple-400 text-sm font-medium">
                  Data Analyst · Developer · Problem Solver
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
                <span className="text-white">Hi, I'm</span>
                <br />
                <span className="gradient-text">Ankan Karmakar</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-4">
                Data Analyst & Power Platform Developer
              </p>
              
              <p className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10">
                Transforming Data into Actionable Insights & Scalable Applications
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={handleProjectsClick}
                  className="group px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium flex items-center justify-center gap-2 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  View Projects
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={handleContactClick}
                  className="px-8 py-3 rounded-lg border border-purple-500/50 text-white font-medium hover:bg-purple-600/20 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Me
                </button>
              </div>

              <div className="flex justify-center lg:justify-start gap-6 mt-12">
                <a
                  href="https://www.linkedin.com/in/ankan901/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/Ankan901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative group">
              {/* Animated gradient ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              {/* Photo container with glass morphism */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full glass-card p-2">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20">
                  <img 
                    src={profilePhoto} 
                    alt="Ankan Karmakar - Data Analyst & Power Platform Developer" 
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                </div>
              </div>
              
              {/* Decorative floating elements */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-purple-600 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition duration-500"></div>
              <div className="absolute -top-2 -left-2 w-20 h-20 bg-blue-600 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition duration-500"></div>
              
              {/* Status badge */}
              <div className="absolute bottom-4 right-4 bg-green-500 rounded-full p-1.5 border-2 border-black">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;