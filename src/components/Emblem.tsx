import React from 'react';

interface EmblemProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  glow?: boolean;
}

export const Emblem: React.FC<EmblemProps> = ({ size = 'md', className = '', glow = true }) => {
  const sizeMap = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    '2xl': 'w-36 h-36'
  };

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${sizeMap[size]} ${className}`}>
      {glow && (
        <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-xl scale-125 animate-pulse-slow pointer-events-none" />
      )}
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]"
      >
        <defs>
          <linearGradient id="goldGrad" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fff2c2" />
            <stop offset="30%" stopColor="#d4af37" />
            <stop offset="70%" stopColor="#aa820a" />
            <stop offset="100%" stopColor="#f3e5ab" />
          </linearGradient>
          <linearGradient id="goldGradBright" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#fde047" />
            <stop offset="70%" stopColor="#ca8a04" />
            <stop offset="100%" stopColor="#854d0e" />
          </linearGradient>
          <radialGradient id="eyeGlow" cx="100" cy="88" r="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#eab308" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#854d0e" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer Radiant Star Points & Rays */}
        <g stroke="url(#goldGrad)" strokeWidth="1.2" opacity="0.65">
          <line x1="100" y1="6" x2="100" y2="26" />
          <line x1="100" y1="174" x2="100" y2="194" />
          <line x1="6" y1="100" x2="26" y2="100" />
          <line x1="174" y1="100" x2="194" y2="100" />
          <line x1="33" y1="33" x2="48" y2="48" />
          <line x1="152" y1="152" x2="167" y2="167" />
          <line x1="167" y1="33" x2="152" y2="48" />
          <line x1="48" y1="152" x2="33" y2="167" />
        </g>

        {/* Outer Circular Ring with Etched Points */}
        <circle cx="100" cy="100" r="88" stroke="url(#goldGrad)" strokeWidth="2.5" />
        <circle cx="100" cy="100" r="82" stroke="url(#goldGrad)" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />
        <circle cx="100" cy="100" r="76" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.4" />

        {/* Sacred Geometry: 8-Pointed Star Filigree */}
        <path
          d="M100 18 L116 70 L170 70 L126 102 L143 154 L100 122 L57 154 L74 102 L30 70 L84 70 Z"
          stroke="url(#goldGrad)"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />

        {/* Central Pyramid Structure */}
        <g>
          {/* Base and Tiers */}
          <polygon
            points="100,45 158,145 42,145"
            stroke="url(#goldGrad)"
            strokeWidth="2.5"
            fill="#0f1118"
            fillOpacity="0.85"
          />
          {/* Stepped horizontal tiers */}
          <line x1="56" y1="125" x2="144" y2="125" stroke="url(#goldGrad)" strokeWidth="1.2" />
          <line x1="70" y1="105" x2="130" y2="105" stroke="url(#goldGrad)" strokeWidth="1.2" />
          <line x1="84" y1="85" x2="116" y2="85" stroke="url(#goldGrad)" strokeWidth="1.2" />
          <line x1="93" y1="65" x2="107" y2="65" stroke="url(#goldGrad)" strokeWidth="1.2" />

          {/* Vertical masonry division lines */}
          <line x1="72" y1="125" x2="72" y2="145" stroke="url(#goldGrad)" strokeWidth="0.8" opacity="0.6" />
          <line x1="100" y1="125" x2="100" y2="145" stroke="url(#goldGrad)" strokeWidth="0.8" opacity="0.6" />
          <line x1="128" y1="125" x2="128" y2="145" stroke="url(#goldGrad)" strokeWidth="0.8" opacity="0.6" />
          <line x1="85" y1="105" x2="85" y2="125" stroke="url(#goldGrad)" strokeWidth="0.8" opacity="0.6" />
          <line x1="115" y1="105" x2="115" y2="125" stroke="url(#goldGrad)" strokeWidth="0.8" opacity="0.6" />
        </g>

        {/* Eye of Providence at Apex */}
        <circle cx="100" cy="85" r="16" fill="url(#eyeGlow)" />
        <path
          d="M86 85 C92 78, 108 78, 114 85 C108 92, 92 92, 86 85 Z"
          stroke="url(#goldGradBright)"
          strokeWidth="1.6"
          fill="#11131c"
        />
        <circle cx="100" cy="85" r="4.2" fill="url(#goldGradBright)" />
        <circle cx="98.5" cy="83.5" r="1.2" fill="#ffffff" />

        {/* Bottom Banner Scrollwork */}
        <path
          d="M62 162 C80 156, 120 156, 138 162 L132 168 C116 163, 84 163, 68 168 Z"
          fill="url(#goldGrad)"
          opacity="0.85"
        />
      </svg>
    </div>
  );
};
