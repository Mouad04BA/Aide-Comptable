import React from 'react';

const ProfessionalAccountantIllustration: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="An abstract illustration of a briefcase and a professional certificate, symbolizing career-ready resources.">
      <style>{`
        .float { animation: float-up-down 4s ease-in-out infinite; }
        @keyframes float-up-down { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      `}</style>
      <g className="float">
        <rect x="50" y="80" width="100" height="70" rx="10" className="fill-gray-700 dark:fill-gray-500" />
        <rect x="90" y="70" width="20" height="20" rx="3" className="fill-gray-600 dark:fill-gray-600" />
        <rect x="75" y="80" width="50" height="5" rx="2" className="fill-amber-400 dark:fill-amber-500" />
      </g>
      <path d="M 80 70 L 80 50 Q 100 30 120 50 L 120 70" className="stroke-gray-700 dark:stroke-gray-500" strokeWidth="5" fill="none"/>
      
      <path d="M150 120 L 170 100 L 190 120 V 150 H 150 Z" className="fill-blue-500 dark:fill-blue-600" />
      <circle cx="170" cy="95" r="5" className="fill-amber-400 dark:fill-amber-500" />
    </svg>
  );
};

export default ProfessionalAccountantIllustration;