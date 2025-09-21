// src/components/ui/SkillBar.jsx
import React from 'react';

const SkillBar = ({ skill, level, index }) => {
  return (
    <div className="group relative">
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
        <div className="flex items-center justify-between">
          <span className="text-white font-semibold">{skill}</span>
          <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000 delay-300"
              style={{ width: `${level}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;