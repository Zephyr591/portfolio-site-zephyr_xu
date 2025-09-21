// src/components/3d/IsometricDesk.jsx
import React from 'react';

const IsometricDesk = () => {
  return (
    <div 
      className="mx-auto relative transform-gpu transition-all duration-300 hover:scale-105"
      style={{
        transform: `perspective(1200px) rotateX(15deg) rotateY(-5deg)`,
        width: 'fit-content'
      }}
    >
      {/* Desk Container - Better proportions for all screens */}
      <div className="relative mx-auto" style={{ width: '320px', height: '240px' }}>
        {/* Desk Surface */}
        <div 
          className="absolute bg-gradient-to-r from-amber-600 to-amber-700 rounded-t-lg"
          style={{
            width: '320px',
            height: '16px',
            transform: 'rotateX(75deg) translateZ(20px)',
            left: '0px',
            top: '60px'
          }}
        ></div>
        
        {/* Desk Front */}
        <div 
          className="absolute bg-gradient-to-b from-amber-700 to-amber-800 rounded-b-lg"
          style={{
            width: '320px',
            height: '80px',
            left: '0px',
            top: '76px'
          }}
        ></div>

        {/* Monitor - Better positioning */}
        <div 
          className="absolute bg-slate-800 rounded-lg border-4 border-slate-700"
          style={{
            width: '140px',
            height: '100px',
            left: '90px',
            top: '20px',
            transform: 'rotateX(15deg)'
          }}
        >
          <div className="w-full bg-gradient-to-br from-blue-500 to-cyan-400 rounded m-1 flex items-center justify-center text-sm text-white font-bold" style={{ height: '70px' }}>
            {'<CODE/>'}
          </div>
          {/* Monitor Stand */}
          <div className="absolute bg-slate-700" style={{ width: '8px', height: '24px', left: '66px', top: '96px' }}></div>
          <div className="absolute bg-slate-600 rounded" style={{ width: '48px', height: '8px', left: '46px', top: '116px' }}></div>
        </div>

        {/* Laptop - Better positioning */}
        <div 
          className="absolute"
          style={{
            width: '80px',
            height: '64px',
            left: '30px',
            top: '35px',
            transform: 'rotateX(25deg) rotateY(-20deg)'
          }}
        >
          <div className="w-full bg-slate-700 rounded-t-lg" style={{ height: '48px' }}></div>
          <div className="w-full bg-slate-800 rounded-b-lg" style={{ height: '4px' }}></div>
          <div className="absolute inset-1 top-1 bg-gradient-to-br from-slate-600 to-slate-700 rounded flex items-center justify-center">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Coffee Cup */}
        <div 
          className="absolute"
          style={{
            width: '24px',
            height: '32px',
            right: '50px',
            top: '40px'
          }}
        >
          <div className="w-full bg-white rounded-b-full" style={{ height: '24px' }}></div>
          <div className="absolute bg-amber-700 rounded-b-full" style={{ width: '16px', height: '16px', top: '4px', left: '4px' }}></div>
          <div className="absolute border-2 border-white rounded-full" style={{ width: '8px', height: '12px', top: '8px', right: '-4px' }}></div>
        </div>

        {/* Books Stack */}
        <div 
          className="absolute"
          style={{
            width: '48px',
            height: '32px',
            right: '80px',
            top: '35px',
            transform: 'rotateY(10deg)'
          }}
        >
          <div className="w-full bg-red-600 mb-1" style={{ height: '8px' }}></div>
          <div className="w-full bg-blue-600 mb-1" style={{ height: '8px' }}></div>
          <div className="w-full bg-green-600" style={{ height: '8px' }}></div>
        </div>

        {/* Mouse */}
        <div 
          className="absolute bg-slate-600 rounded-lg"
          style={{
            width: '16px',
            height: '24px',
            right: '130px',
            top: '43px'
          }}
        ></div>
      </div>
    </div>
  );
};

export default IsometricDesk;