// src/components/ui/ProjectCard.jsx
import React, { useState } from "react";

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const getProjectDetails = () => {
    switch (project.id) {
      case 1:
        return {
          features: [
            "Google Authentication & Firebase Integration",
            "Personalized event recommendations based on Google Calendar analysis",
            "Progress tracking with visual charts and statistics",
            "Dark/Light mode support with Material Design UI",
            "Real-time volunteer opportunity search and filtering",
            "Event registration and management system",
          ],
          challenges:
            "Implemented complex Google Calendar API integration to analyze user events and provide intelligent volunteer opportunity recommendations. Successfully integrated multiple APIs (Google Auth, Calendar, Firebase) while maintaining smooth UI performance and data synchronization.",
        };
      case 2:
        return {
          features: [
            "Serverless architecture with AWS Lambda and S3",
            "Scalable media tagging and file management",
            "Realtime S3 upload notifications with auto-tagging",
            "Cross-region object sync with Oracle Cloud",
            "Responsive React-based interface",
            //"CI/CD pipeline with GitHub Actions and Docker",
          ],
          challenges:
            "Implemented a fully serverless, event-driven architecture to handle real-time file uploads, metadata updates, and cross-cloud redundancy. Successfully integrated AWS and Oracle services while maintaining performance and cost-efficiency.",
        };
      case 3:
        return {
          features: [
            "Vue 3 single-page application with responsive layout",
            "Interactive health event listings and rating system",
            "Role-based dashboard design (in progress)",
            "Bootstrap 5 UI with dark/light mode support",
            "localStorage-based persistence for tips and ratings",
            "Designed for future email & calendar integration",
          ],
          challenges:
            "Focused on balancing simplicity with role-based flexibility. Built a lightweight rating system using Pinia and localStorage, while prototyping admin logic for upcoming features within tight academic timelines.",
        };
      case 4:
        return {
          features: [
            "AI-powered waste classification using OpenAI API",
            "Local council–specific disposal guidance",
            "Community billboard for item reuse & exchange",
            "Visual data dashboards powered by ECharts",
            "Interactive search guide and item tips",
            "Responsive React UI with Tailwind & Lucide Icons",
          ],
          challenges:
            "Coordinated a cross-functional team to build an integrated sustainability platform aligned with UN SDG 11. Tackled complex logic for council-specific bin rules, and implemented AI-powered classification while ensuring intuitive user flows.",
        };
      default:
        return {
          features: [
            "Responsive design and modern UI",
            "Real-time data processing",
            "User authentication and authorization",
          ],
          challenges:
            "Brief description of main challenges faced during development and how they were solved.",
        };
    }
  };

  const projectDetails = getProjectDetails();

  return (
    <div className="group relative transform transition-all duration-500 mb-6">
      <div
        className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 rounded-3xl blur-xl transition-all duration-300 group-hover:opacity-30`}
      ></div>

      <div className="relative bg-slate-800/70 backdrop-blur-xl rounded-3xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">

        {(project.id === 3 || project.id === 4) && (
            <div className="absolute top-4 right-4">
            <span className="px-4 py-1.5 text-sm font-bold bg-orange-500/90 text-white rounded-full shadow-lg">
                Ongoing
            </span>
            </div>
        )}

        <div className="p-8 cursor-pointer" onClick={toggleExpanded}>
          <div className="flex items-center justify-between flex-wrap">
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-4 mb-4">
                <h3 className="text-2xl font-bold text-white break-words">
                  {project.title}
                </h3>
                <div
                  className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                {project.description}
              </p>

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

            <div className="ml-8 flex-shrink-0 mt-4 sm:mt-0">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                {isExpanded ? "Hide Details" : "View Project"}
              </button>
            </div>
          </div>
        </div>

        {/* Expanded section */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            isExpanded ? "opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-8 pb-8 border-t border-slate-700/50">
            <div className="pt-6">
              {project.screenshots && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    App Preview
                  </h4>
                  <div className="flex justify-center">
                    <div className="flex gap-6 overflow-x-auto pb-2 px-2 snap-x">
                      {project.screenshots.map((screenshot, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center min-w-[220px] snap-center"
                        >
                          <img
                            src={screenshot}
                            alt={`Screenshot ${index + 1}`}
                            className="h-64 object-contain rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          <div className="hidden h-64 items-center justify-center text-center text-gray-400 border border-dashed border-slate-600 rounded-xl">
                            <div>
                              <div className="text-2xl mb-1">📱</div>
                              <p className="text-xs">Screenshot {index + 1}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Key Features
                  </h4>
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
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Challenges & Solutions
                  </h4>
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