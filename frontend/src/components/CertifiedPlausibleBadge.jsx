import React from 'react';

export default function CertifiedPlausibleBadge({ className = "", size = 200, title = "Certified Plausible" }) {
  return (
    <div 
      className={`inline-block pointer-events-none select-none ${className}`} 
      id="animated-svg-ANIMATION_3"
    >
      <svg
        height={size}
        width={size}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <filter id="plausible-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="2" dy="2" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#plausible-shadow)">
          {/* Badge Background Circle */}
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="#AFC7A3"
            stroke="#3D2B24"
            strokeWidth="4"
          />
          {/* Checkmark Path */}
          <path
            d="M70 100 L90 120 L130 80"
            fill="none"
            stroke="#3D2B24"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          >
            <animate
              attributeName="stroke-dasharray"
              dur="0.6s"
              fill="freeze"
              from="0,100"
              to="100,0"
            />
          </path>
          {/* Rotating Plausible Seal Text */}
          <text
            fill="#3D2B24"
            fontFamily="'Bricolage Grotesque', cursive, sans-serif"
            fontSize="14"
            fontWeight="bold"
            textAnchor="middle"
            x="100"
            y="155"
          >
            {title}
            <animateTransform
              attributeName="transform"
              type="rotate"
              dur="2s"
              repeatCount="indefinite"
              values="-2 100 100; 2 100 100; -2 100 100"
            />
          </text>
        </g>
      </svg>
    </div>
  );
}
