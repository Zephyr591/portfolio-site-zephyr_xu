// src/components/sections/AboutSection.jsx
import React from 'react';
import Lottie from 'lottie-react';
import { personalInfo } from '../../data/projectsData';

// 这些动画文件需要下载并放在 src/animations/ 文件夹中
import developerAnimation from '../../animations/developer.json';
import codingAnimation from '../../animations/coding.json';
import globeAnimation from '../../animations/globe.json';
import educationAnimation from '../../animations/education.json';
import rocketAnimation from '../../animations/rocket.json';
import emailAnimation from '../../animations/email.json';

const AboutSection = () => {
  return (
    <section className="relative z-10 py-20 px-6" id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          <span className="text-white">About </span>
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
        </h2>
        
        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          
          {/* About Me Card */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="mb-6 flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Lottie 
                  animationData={developerAnimation} 
                  style={{ width: 48, height: 48 }}
                  loop={true}
                />
              </div>
              <h3 className="text-2xl font-bold text-white">About Me</h3>
            </div>
            <p className="text-white font-semibold mb-2">
              Hello, I am {personalInfo.name}, you also can call me Zephyr.
            </p>
            {}
            <p className="text-gray-400 text-sm">
              Currently completing Master of IT at Monash University. Previously worked at a top-five securities firm in China, bringing unique perspective combining finance expertise with technical skills.
            </p>
          </div>

          {/* Tech Stack Card */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="mb-6 flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Lottie 
                  animationData={codingAnimation} 
                  style={{ width: 48, height: 48 }}
                  loop={true}
                />
              </div>
              <h3 className="text-2xl font-bold text-white">Tech Stack</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Skilled in Java, Python, and full-stack web development with Vue.js. Experienced with cloud infrastructure (AWS, Oracle Cloud) and modern DevOps practices.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Java', 'Python', 'Vue.js', 'AWS', 'Docker', 'PostgreSQL', 'Kotlin'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="mb-6 flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Lottie 
                  animationData={globeAnimation} 
                  style={{ width: 48, height: 48 }}
                  loop={true}
                />
              </div>
              <h3 className="text-2xl font-bold text-white">Location</h3>
            </div>
            <p className="text-white font-semibold mb-2">
              Based in {personalInfo.location}
            </p>
            <p className="text-gray-400 text-sm mb-3">
              Open to remote opportunities and willing to relocate globally for the right opportunity.
            </p>
            <div className="mt-4 flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Open to work</span>
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="mb-6 flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Lottie 
                  animationData={educationAnimation} 
                  style={{ width: 48, height: 48 }}
                  loop={true}
                />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="font-semibold text-white">Monash University</p>
                <p className="text-sm text-gray-400">Master of Information Technology (2024-2025)</p>
              </div>
              <div>
                <p className="font-semibold text-white">Huaqiao University</p>
                <p className="text-sm text-gray-400">Bachelor of Economics (Investment) (2016-2020)</p>
              </div>
            </div>
          </div>

          {/* Journey & Passion Card */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="mb-6 flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Lottie 
                  animationData={rocketAnimation} 
                  style={{ width: 48, height: 48 }}
                  loop={true}
                />
              </div>
              <h3 className="text-2xl font-bold text-white">My Journey</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              My transition from finance to technology was driven by a desire to build tools that make financial systems more reliable and accessible. 
              I'm passionate about connecting technical expertise with real-world business needs and solving complex problems through innovative solutions.
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="mb-6 flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Lottie 
                  animationData={emailAnimation} 
                  style={{ width: 48, height: 48 }}
                  loop={true}
                />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Contact me 
                <span className="inline-flex items-center ml-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </span>
              </h3>
            </div>
            <div className="space-y-3">
              <a 
                href="mailto:xusc591@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-sm">📧</span>
                </div>
                <span>xusc591@gmail.com</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/sicheng-xu-25a33333a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-sm">💼</span>
                </div>
                <span>LinkedIn Profile</span>
              </a>
              <a 
                href="https://github.com/Zephyr591"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-sm">💻</span>
                </div>
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;