// src/components/ui/ProjectCard.jsx
import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const getProjectDetails = () => {
    if (project.id === 1) {
      return {
        features: [
          "Google Authentication & Firebase Integration",
          "Personalized event recommendations based on Google Calendar analysis",
          "Progress tracking with visual charts and statistics",
          "Dark/Light mode support with Material Design UI",
          "Real-time volunteer opportunity search and filtering",
          "Event registration and management system"
        ],
        challenges: "Implemented complex Google Calendar API integration to analyze user events and provide intelligent volunteer opportunity recommendations. Successfully integrated multiple APIs (Google Auth, Calendar, Firebase) while maintaining smooth UI performance and data synchronization."
      };
    }

    return {
      features: [
        "Responsive design and modern UI",
        "Real-time data processing",
        "User authentication and authorization"
      ],
      challenges: "Brief description of main challenges faced during development and how they were solved."
    };
  };

  const projectDetails = getProjectDetails();

  return (
    <div className="group relative transform transition-all duration-500 mb-6">
      <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 rounded-3xl blur-xl transition-all duration-300 group-hover:opacity-30`}></div>

      <div className="relative bg-slate-800/70 backdrop-blur-xl rounded-3xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">

        {/* Main Project Info */}
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

        {/* Expanded Content */}
        <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-8 pb-8 border-t border-slate-700/50">
            <div className="pt-6">

              {/* Project Screenshots */}
              {project.screenshots && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">App Screenshots</h4>
                  <div className="flex justify-center">
                    <div className="flex gap-6 overflow-x-auto pb-2 px-2">
                      {(() => {
                        const captions = ["Login Page", "Home Page", "Dashboard", "Dark Mode"];
                        return project.screenshots.map((screenshot, index) => (
                          <div key={index} className="flex flex-col items-center min-w-[220px]">
                            <img 
                              src={screenshot} 
                              alt={captions[index] || `Screenshot ${index + 1}`}
                              className="w-full h-96 object-contain rounded-xl transition-transform duration-300 hover:scale-105"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            <div className="hidden h-96 items-center justify-center text-center text-gray-400">
                              <div>
                                <div className="text-2xl mb-1">📱</div>
                                <p className="text-xs">{captions[index] || `Screenshot ${index + 1}`}</p>
                              </div>
                            </div>
                            <p className="text-sm text-gray-400 mt-3 text-center tracking-wide">
                              {captions[index] || `Screenshot ${index + 1}`}
                            </p>
                          </div>
                        ));
                      })()}
                    </div>
                  </div>
                </div>
              )}

              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    {projectDetails.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Challenges & Solutions</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {projectDetails.challenges}
                  </p>
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