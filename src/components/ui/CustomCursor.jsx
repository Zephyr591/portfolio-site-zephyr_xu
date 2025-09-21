// src/components/ui/CustomCursor.jsx
import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // 添加事件监听器
    window.addEventListener('mousemove', handleMouseMove);
    
    // 监听可悬停元素
    const hoverElements = document.querySelectorAll('button, a, [role="button"]');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div 
      className="fixed w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-150 ease-out"
      style={{
        left: mousePosition.x - 8,
        top: mousePosition.y - 8,
        transform: isHovering ? 'scale(2)' : 'scale(1)',
      }}
    />
  );
};

export default CustomCursor;