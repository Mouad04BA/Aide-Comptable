import React from 'react';

const PlanetIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        {...props}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <radialGradient id="planetOcean" cx="0.3" cy="0.3" r="1">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#2563eb" />
            </radialGradient>
            <filter id="planetGlow">
                <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#2563eb" floodOpacity="0.5" />
            </filter>
        </defs>
        <g filter="url(#planetGlow)">
            <circle cx="12" cy="12" r="10" fill="url(#planetOcean)" />
            <path
                d="M7.5,4 C4,7 5,14 7,16 C9,18 12,17 14,15 C17,12 18,7 15,5 C12.5,3.5 9,3 7.5,4 Z"
                fill="#22c55e"
                opacity="0.8"
            />
             <path
                d="M16.5,17 C15.5,19 17,21 18.5,20 C20,19 19,16 16.5,17 Z"
                fill="#16a34a"
                opacity="0.9"
            />
        </g>
    </svg>
);

export default PlanetIcon;
