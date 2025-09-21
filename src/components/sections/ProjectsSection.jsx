// src/components/sections/ProjectsSection.jsx
import React from 'react';
import ProjectCard from '../ui/ProjectCard';
import { projectsData } from '../../data/projectsData';

const ProjectsSection = () => {
  return (
    <section className="relative z-10 py-20 px-6" id="work">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          <span className="text-white">Featured </span>
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;