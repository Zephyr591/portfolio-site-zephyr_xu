// src/components/ui/FloatingTechIcons.jsx
import React from 'react';

const FloatingTechIcons = ({ scrollY = 0 }) => {
  const techIcons = [
    {
      emoji: '🐍',
      gradient: 'from-blue-500 to-yellow-500',
      position: { top: '20%', left: '10%' },
      animation: { delay: 0, speed: 0.01, offset: 0 }
    },
    {
      emoji: '⚛️',
      gradient: 'from-cyan-400 to-blue-500',
      position: { top: '25%', right: '15%' },
      animation: { delay: 1, speed: 0.012, offset: 1 }
    },
    {
      emoji: '☁️',
      gradient: 'from-orange-500 to-yellow-500',
      position: { top: '60%', left: '8%' },
      animation: { delay: 2, speed: 0.009, offset: 2 }
    },
    {
      emoji: '☕',
      gradient: 'from-red-600 to-orange-600',
      position: { top: '70%', right: '12%' },
      animation: { delay: 3, speed: 0.011, offset: 3 }
    },
    {
      emoji: '💚',
      gradient: 'from-green-500 to-emerald-500',
      position: { top: '40%', left: '85%' },
      animation: { delay: 4, speed: 0.008, offset: 4 }
    },
    {
      emoji: '🍃',
      gradient: 'from-green-600 to-green-700',
      position: { top: '50%', left: '15%' },
      animation: { delay: 5, speed: 0.013, offset: 5 }
    }
  ];

  const decorativeIcons = [
    {
      emoji: '💻',
      gradient: 'from-purple-500 to-pink-500',
      position: { top: '35%', left: '75%' },
      animation: { delay: 6, speed: 0.014, offset: 6 },
      size: 'w-8 h-8'
    },
    {
      emoji: '🚀',
      gradient: 'from-indigo-500 to-purple-500',
      position: { top: '80%', left: '70%' },
      animation: { delay: 7, speed: 0.006, offset: 7 },
      size: 'w-8 h-8'
    }
  ];

  const allIcons = [...techIcons, ...decorativeIcons];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {allIcons.map((icon, index) => (
        <div 
          key={index}
          className={`absolute ${icon.size || 'w-12 h-12'} bg-gradient-to-r ${icon.gradient} rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg hidden md:flex`}
          style={{
            ...icon.position,
            transform: `translateX(${Math.sin(scrollY * icon.animation.speed + icon.animation.offset) * 40}px) translateY(${Math.cos(scrollY * (icon.animation.speed + 0.002) + icon.animation.offset) * 30}px) rotateZ(${scrollY * 0.15}deg)`,
            animation: `float ${4 + icon.animation.delay * 0.3}s ease-in-out infinite ${icon.animation.delay * 0.5}s`
          }}
        >
          {icon.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingTechIcons;