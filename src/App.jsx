// src/App.jsx
import React, { useState, useEffect } from 'react';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section Components
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';

// Styles
import './styles/globals.css';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="font-sans text-gray-100 relative overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        
        {/* 3D Floating Elements - Static positions with animations */}
        <div className="absolute top-20 left-20 w-20 h-20 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg transform rotate-45 animate-pulse"></div>
        </div>
        
        <div className="absolute top-1/2 right-32 w-16 h-16 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-spin-slow"></div>
        </div>
        
        <div className="absolute bottom-32 left-1/4 w-12 h-12 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-blue-400 to-indigo-500" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
        </div>
      </div>

      {/* Main Content */}
      <main>
        <HeroSection scrollY={scrollY} />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}