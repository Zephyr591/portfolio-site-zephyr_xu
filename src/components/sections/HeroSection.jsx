// src/components/sections/HeroSection.jsx
import React from 'react';
import IsometricDesk from '../3d/IsometricDesk';
import FloatingTechIcons from '../ui/FloatingTechIcons';
import { personalInfo } from '../../data/projectsData';

const HeroSection = ({ scrollY }) => {
  const handleScrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      className="relative z-10 h-screen flex flex-col justify-center items-center text-center pt-20"
    >
      <div className="relative z-20 max-w-6xl mx-auto px-6">
        
        {/* 3D Isometric Workspace */}
        <div className="mb-12 relative">
          <IsometricDesk />
        </div>

        {/* Floating Hello World */}
        <div 
          className="absolute text-yellow-400 font-bold text-xl md:text-2xl select-none"
          style={{
            top: '15%',
            right: '5%',
            animation: 'float 3s ease-in-out infinite'
          }}
        >
          Hello World!
        </div>

        {/* Floating Tech Stack Icons */}
        <FloatingTechIcons scrollY={scrollY} />

        {/* Text Content */}
        <div className="space-y-6">
          <p className="text-xl md:text-2xl lg:text-3xl text-blue-300 font-medium">
            Hi mate, I am {personalInfo.preferredName} 👨‍💻
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="text-white">Welcome to</span>
            <br className="md:hidden" />
            <span className="text-white md:inline"> </span>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {personalInfo.preferredName}'s Portfolio
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.title} | {personalInfo.subtitle}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-12">
          <button 
            onClick={() => handleScrollToSection('work')}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl text-white font-bold transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30"
          >
            <span className="relative z-10">View My Work</span>
          </button>
          <button 
            onClick={() => handleScrollToSection('contact')}
            className="px-8 py-4 border-2 border-blue-500 rounded-xl text-blue-400 font-bold hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;