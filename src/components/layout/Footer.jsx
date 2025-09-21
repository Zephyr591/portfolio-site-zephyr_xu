// src/components/layout/Footer.jsx
import React from 'react';
import { personalInfo } from '../../data/projectsData';

const Footer = () => {
  return (
    <footer className="relative z-10 py-8 text-center border-t border-slate-700/50">
      <p className="text-gray-400">
        © 2025 {personalInfo.name}. Crafted with passion and creativity. 
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Built with React + TailwindCSS</span>
      </p>
    </footer>
  );
};

export default Footer;