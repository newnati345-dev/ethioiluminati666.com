import React from 'react';

interface DiamondLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const DiamondLogo: React.FC<DiamondLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeMap = {
    xs: 'w-5 h-5',
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  return (
    <div className={`relative flex items-center justify-center shrink-0 ${sizeMap[size]} ${className}`}>
      {/* Radiant Imperial Gold Aura */}
      <div className="absolute inset-0 rounded-full bg-amber-400/25 blur-md scale-125 pointer-events-none" />
      
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-[0_0_15px_rgba(245,158,11,0.55)]"
      >
        <defs>
          <linearGradient id="goldStroke" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="35%" stopColor="#fbbf24" />
            <stop offset="70%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#92400e" />
          </linearGradient>
          <linearGradient id="goldFacetFill" x1="50" y1="15" x2="50" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#b45309" stopOpacity="0.04" />
          </linearGradient>
          <radialGradient id="centerGemGlow" cx="50" cy="55" r="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#b45309" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Diamond Outer Contour */}
        <polygon
          points="25,26 75,26 92,48 50,90 8,48"
          stroke="url(#goldStroke)"
          strokeWidth="3.2"
          strokeLinejoin="round"
          fill="url(#goldFacetFill)"
        />

        {/* Upper Table Facets */}
        <line x1="25" y1="26" x2="35" y2="48" stroke="url(#goldStroke)" strokeWidth="2.4" />
        <line x1="75" y1="26" x2="65" y2="48" stroke="url(#goldStroke)" strokeWidth="2.4" />
        <line x1="8" y1="48" x2="92" y2="48" stroke="url(#goldStroke)" strokeWidth="2.6" />

        {/* Center Triangular Facet */}
        <polygon
          points="35,48 65,48 50,90"
          stroke="url(#goldStroke)"
          strokeWidth="2.4"
          fill="url(#centerGemGlow)"
        />

        {/* Top Pavilion Star Lines */}
        <line x1="35" y1="48" x2="50" y2="26" stroke="url(#goldStroke)" strokeWidth="1.8" />
        <line x1="65" y1="48" x2="50" y2="26" stroke="url(#goldStroke)" strokeWidth="1.8" />
      </svg>
    </div>
  );
};
