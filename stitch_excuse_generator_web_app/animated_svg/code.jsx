import React from 'react';

/**
 * Animated SVG Seal Component: "Certified Plausible"
 * Converted directly from stitch_excuse_generator_web_app/animated_svg/code.html
 */
export default function CertifiedPlausibleSeal({ size = 200, className = "" }) {
  return (
    <div 
      className={`fixed inset-0 w-full h-full flex items-center justify-center ${className}`}
      id="animated-svg-ANIMATION_3"
    >
      <svg
        height={size}
        viewBox="0 0 200 200"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          <filter height="140%" id="shadow" width="140%" x="-20%" y="-20%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="2" dy="2" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA slope="0.3" type="linear" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#shadow)">
          <circle
            cx="100"
            cy="100"
            fill="#AFC7A3"
            r="80"
            stroke="#3D2B24"
            strokeWidth="4"
          />
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
              dur="0.5s"
              fill="freeze"
              from="0,100"
              to="100,0"
            />
          </path>
          <text
            fill="#3D2B24"
            fontFamily="'Bricolage Grotesque', cursive, sans-serif"
            fontSize="14"
            fontWeight="bold"
            textAnchor="middle"
            x="100"
            y="155"
          >
            Certified Plausible
            <animateTransform
              attributeName="transform"
              dur="2s"
              repeatCount="indefinite"
              type="rotate"
              values="-2 100 100; 2 100 100; -2 100 100"
            />
          </text>
        </g>
      </svg>
    </div>
  );
}
