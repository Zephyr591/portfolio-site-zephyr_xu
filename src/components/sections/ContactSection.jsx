// src/components/sections/ContactSection.jsx
import React from 'react';
import { contactData } from '../../data/projectsData';

const ContactSection = () => {
  return (
    <section className="relative z-10 py-20 px-6" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-8">
          <span className="text-white">Let's Create Something </span>
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Amazing</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let's connect and explore the possibilities together.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          {contactData.map((contact) => (
            <a
              key={contact.text}
              href={contact.href}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl text-white font-bold transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30"
              target={contact.href.startsWith('http') ? '_blank' : '_self'}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>{contact.icon}</span>
                <span>{contact.text}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;