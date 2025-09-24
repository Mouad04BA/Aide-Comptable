import React from 'react';

const GlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    {...props}
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M12 21a9 9 0 01-9-9 9 9 0 019-9 9 9 0 019 9 9 9 0 01-9 9z" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M12 21a15.3 15.3 0 01-6.1-1.05M12 3a15.3 15.3 0 016.1 1.05M4.2 9.5a15.3 15.3 0 0115.6 0M4.2 14.5a15.3 15.3 0 0115.6 0" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M2.25 12h19.5" 
    />
  </svg>
);

export default GlobeIcon;
