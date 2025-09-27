
import React from 'react';

const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 100 85" xmlns="">
    <g>
      {/* Document */}
      <path d="M56 12 H 84 C 85 12, 86 13, 86 14 V 62 L 71 77 H 56 V 12 Z" fill="#0d9488" opacity="0.7" />
      <rect x="61" y="22" width="20" height="4" rx="1" fill="#ccfbf1" opacity="0.8"/>
      <rect x="61" y="32" width="20" height="4" rx="1" fill="#ccfbf1" opacity="0.8"/>
      <rect x="61" y="42" width="15" height="4" rx="1" fill="#ccfbf1" opacity="0.8"/>
      
      {/* Calculator */}
      <rect x="8" y="35" width="35" height="45" rx="4" fill="#083344" />
      <rect x="12" y="45" width="5" height="5" rx="1" fill="#14b8a6"/>
      <rect x="20" y="45" width="5" height="5" rx="1" fill="#14b8a6"/>
      <rect x="28" y="45" width="5" height="5" rx="1" fill="#14b8a6"/>
      <rect x="12" y="53" width="5" height="5" rx="1" fill="#14b8a6"/>
      <rect x="20" y="53" width="5" height="5" rx="1" fill="#14b8a6"/>
      <rect x="28" y="53" width="5" height="5" rx="1" fill="#14b8a6"/>
      <rect x="12" y="61" width="5" height="5" rx="1" fill="#14b8a6"/>
      <rect x="20" y="61" width="5" height="5" rx="1" fill="#14b8a6"/>
      <rect x="28" y="61" width="5" height="5" rx="1" fill="#14b8a6"/>
      <rect x="12" y="69" width="21" height="5" rx="1" fill="#14b8a6"/>

      {/* Person */}
      <g fill="#0f766e">
        <circle cx="50" cy="18" r="10" />
        <path d="M35 31 C 35 25, 65 25, 65 31 V 58 H 35 Z" />
      </g>
      {/* Person shirt details */}
      <path d="M43 31 L 50 45 L 57 31 Z" fill="#14b8a6" />
      
      {/* Coin */}
      <circle cx="70" cy="62" r="15" fill="#0d9488" />
      <text x="65" y="69" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#ccfbf1">$</text>
    </g>
  </svg>
);

export default LogoIcon;