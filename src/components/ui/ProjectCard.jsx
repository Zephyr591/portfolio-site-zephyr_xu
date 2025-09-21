// src/components/ui/ProjectCard.jsx
import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="group relative transform transition-all duration-500 mb-6">
      <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 rounded-3xl blur-xl transition-all duration-300 group-hover:opacity-30`}></div>
      
      <div className="relative bg-slate-800/70 backdrop-blur-xl rounded-3xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
        
        {/* Main Project Info - Always Visible */}
        <div 
          className="p-8 cursor-pointer"
          onClick={toggleExpanded}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-gray-300 border border-slate-600/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="ml-8 flex-shrink-0">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                {isExpanded ? 'Hide Details' : 'View Project'}
              </button>
            </div>
          </div>
        </div>

        {/* Expanded Content - Project Screenshots/Details */}
        <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-8 pb-8 border-t border-slate-700/50">
            <div className="pt-6">
              {/* Project Screenshots Placeholder */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-700/30 rounded-xl h-48 flex items-center justify-center border border-slate-600/30">
                  <div className="text-center text-gray-400">
                    <div className="text-4xl mb-2">🖼️</div>
                    <p>Project Screenshot 1</p>
                  </div>
                </div>
                <div className="bg-slate-700/30 rounded-xl h-48 flex items-center justify-center border border-slate-600/30">
                  <div className="text-center text-gray-400">
                    <div className="text-4xl mb-2">📱</div>
                    <p>Project Screenshot 2</p>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
                  <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                    <li>Feature 1 - Responsive design and modern UI</li>
                    <li>Feature 2 - Real-time data processing</li>
                    <li>Feature 3 - User authentication and authorization</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Challenges & Solutions</h4>
                  <p className="text-gray-300 text-sm">
                    Brief description of main challenges faced during development and how they were solved.
                  </p>
                </div>

                <div className="flex space-x-4 pt-4">
                  <a
                    href={project.projectUrl}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-center"
                  >
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="flex-1 border border-blue-500 text-blue-400 py-3 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 text-center"
                  >
                    Case Study
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;